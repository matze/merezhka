use anyhow::Result;
use futures_concurrency::future::TryJoin;
use gloo_net::http;
use leptos::*;
use leptos_router::*;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
struct Account {
    id: String,
    username: String,
    display_name: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
struct Status {
    id: String,
    in_reply_to_id: Option<String>,
    account: Account,
    content: String,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
struct Context {
    descendants: Vec<Status>,
}

#[derive(Params, PartialEq)]
struct IdParams {
    id: Option<String>,
}

async fn fetch_status_and_context(id: &str) -> Result<(Status, Context)> {
    let status =
        http::Request::get(&format!("https://mastodon.social/api/v1/statuses/{id}")).send();

    let context = http::Request::get(&format!(
        "https://mastodon.social/api/v1/statuses/{id}/context"
    ))
    .send();

    let (status, context) = (status, context).try_join().await?;
    let (status, context) = (status.json::<Status>(), context.json::<Context>())
        .try_join()
        .await?;

    Ok((status, context))
}

async fn fetch_thread(id: &str) -> Result<Vec<Status>> {
    let (status, context) = fetch_status_and_context(id).await?;
    let account_id = status.account.id.clone();
    let mut thread = vec![status];
    let mut descendants = context.descendants;

    loop {
        // SAFETY: we initialized `thread` with `status`, so we have at least one element.
        let last = thread.last().unwrap();

        let (matched, remaining): (Vec<_>, Vec<_>) = descendants.into_iter().partition(|s| {
            s.account.id == *account_id && s.in_reply_to_id.as_ref().unwrap() == &last.id
        });

        if matched.is_empty() {
            break;
        } else {
            thread.extend(matched.into_iter());
        }

        descendants = remaining;
    }

    Ok(thread)
}

#[component]
fn Threads() -> impl IntoView {
    let params = use_params::<IdParams>();

    let id = move || {
        params.with(|params| {
            params
                .as_ref()
                .map(|params| params.id.clone())
                .unwrap_or_else(|_| Some(String::from("1")))
        })
    };

    let thread = create_resource(
        || (),
        move |_| async move {
            let id = id().unwrap();
            fetch_thread(&id).await.unwrap()
        },
    );

    view! {
      <main class="container">
        <div class="grid">
          <div/>
          <div>
          {
              move || match thread.get() {
                  None => view! { <p>"loading..."</p> }.into_view(),
                  Some(thread) => {
                      thread.into_iter().map(|status| view! {
                          <div inner_html=status.content/><hr/>
                      }).collect_view()
                  }
              }
          }
          </div>
          <div/>
        </div>
      </main>
    }
}

#[component]
fn App() -> impl IntoView {
    view! {
      <Router>
        <Routes>
          <Route path="/:id" view=Threads/>
        </Routes>
      </Router>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    console_error_panic_hook::set_once();
    mount_to_body(|| view! { <App/> })
}
