let R=null,Z=`boolean`,W=1,X=`function`,P=`utf-8`,O=`undefined`,_=`string`,a0=`Object`,a3=4,Y=`number`,S=0,a2=16,a7=33,U=Array,$=Array.isArray,Q=Error,a1=FinalizationRegistry,a4=Object,a6=Promise,a5=Reflect,T=Uint8Array,V=undefined;var M=(b=>{if(a!==V)return a;const c=J();K(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return L(d,b)});var K=((a,b)=>{});var j=(a=>{if(a<132)return;f[a]=g;g=a});var k=(a=>{const b=i(a);j(a);return b});var p=(a=>a===V||a===R);var o=((a,b,c)=>{if(c===V){const c=m.encode(a);const e=b(c.length,W)>>>S;d().subarray(e,e+ c.length).set(c);l=c.length;return e};let e=a.length;let f=b(e,W)>>>S;const g=d();let h=S;for(;h<e;h++){const b=a.charCodeAt(h);if(b>127)break;g[f+ h]=b};if(h!==e){if(h!==S){a=a.slice(h)};f=c(f,e,e=h+ a.length*3,W)>>>S;const b=d().subarray(f+ h,f+ e);const g=n(a,b);h+=g.written;f=c(f,e,h,W)>>>S};l=h;return f});var J=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_string_new=((a,b)=>{const c=e(a,b);return h(c)});b.wbg.__wbg_error_8e3928cfb8a43e2b=(a=>{console.error(i(a))});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=i(a).body;return p(b)?S:h(b)});b.wbg.__wbg_value_47fe6384562f52ab=((b,c)=>{const d=i(c).value;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbindgen_object_drop_ref=(a=>{k(a)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Q();return h(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,c)=>{const d=i(c).stack;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=z(b,c);if(b!==S){a.__wbindgen_free(b,c,W)};console.error(d)});b.wbg.__wbindgen_cb_drop=(a=>{const b=k(a).original;if(b.cnt--==W){b.a=S;return !0};const c=!1;return c});b.wbg.__wbindgen_is_string=(a=>{const b=typeof i(a)===_;return b});b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new a4();return h(a)});b.wbg.__wbg_new_ab6fd82b10560829=function(){return A((()=>{const a=new Headers();return h(a)}),arguments)};b.wbg.__wbg_new_4c501d7c115d20a6=function(){return A((()=>{const a=new URLSearchParams();return h(a)}),arguments)};b.wbg.__wbg_instanceof_Error_e20bb56fd5591a93=(a=>{let b;try{b=i(a) instanceof Q}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_name_e7429f0dda6079e2=(a=>{const b=i(a).name;return h(b)});b.wbg.__wbg_message_5bf28016c2b49cfb=(a=>{const b=i(a).message;return h(b)});b.wbg.__wbg_toString_ffe4c9ea3b3532e9=(a=>{const b=i(a).toString();return h(b)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=i(a);return h(b)});b.wbg.__wbg_call_27c0f87801dedf93=function(){return A(((a,b)=>{const c=i(a).call(i(b));return h(c)}),arguments)};b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return A((()=>{const a=self.self;return h(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return A((()=>{const a=window.window;return h(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return A((()=>{const a=globalThis.globalThis;return h(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return A((()=>{const a=global.global;return h(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=i(a)===V;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{var c=z(a,b);const d=new Function(c);return h(d)});b.wbg.__wbg_decodeURI_34e1afc7326c927c=function(){return A(((a,b)=>{var c=z(a,b);const d=decodeURI(c);return h(d)}),arguments)};b.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return A(((a,b,c)=>{const d=i(a).call(i(b),i(c));return h(d)}),arguments)};b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const c=a4.is(i(a),i(b));return c});b.wbg.__wbg_toString_c816a20ab859d0c1=(a=>{const b=i(a).toString();return h(b)});b.wbg.__wbg_exec_b9996525463e30df=((a,b,c)=>{var d=z(b,c);const e=i(a).exec(d);return p(e)?S:h(e)});b.wbg.__wbg_new_3c970fa9da0c5794=((a,b,c,d)=>{var e=z(a,b);var f=z(c,d);const g=new RegExp(e,f);return h(g)});b.wbg.__wbindgen_string_get=((b,c)=>{const d=i(c);const e=typeof d===_?d:V;var f=p(e)?S:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/a3+ W]=g;r()[b/a3+ S]=f});b.wbg.__wbg_get_e3c254076557e348=function(){return A(((a,b)=>{const c=a5.get(i(a),i(b));return h(c)}),arguments)};b.wbg.__wbg_set_1f9b04f170055d33=function(){return A(((a,b,c)=>{const d=a5.set(i(a),i(b),i(c));return d}),arguments)};b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=i(a).composedPath();return h(b)});b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const c=i(a)[b>>>S];return h(c)});b.wbg.__wbindgen_is_falsy=(a=>{const b=!i(a);return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=i(a).cancelBubble;return b});b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=i(a).parentNode;return p(b)?S:h(b)});b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=i(a) instanceof ShadowRoot}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=i(a).host;return h(b)});b.wbg.__wbindgen_is_null=(a=>{const b=i(a)===R;return b});b.wbg.__wbg_createComment_354ccab4fdc521ee=((a,b,c)=>{var d=z(b,c);const e=i(a).createComment(d);return h(e)});b.wbg.__wbg_createDocumentFragment_8c86903bbb0a3c3c=(a=>{const b=i(a).createDocumentFragment();return h(b)});b.wbg.__wbg_setdata_8c2b43af041cc1b3=((a,b,c)=>{var d=z(b,c);i(a).data=d});b.wbg.__wbg_previousSibling_9708a091a3e6e03b=(a=>{const b=i(a).previousSibling;return p(b)?S:h(b)});b.wbg.__wbg_remove_49b0a5925a04b955=(a=>{i(a).remove()});b.wbg.__wbg_location_2951b5ee34f19221=(a=>{const b=i(a).location;return h(b)});b.wbg.__wbg_requestAnimationFrame_549258cfa66011f0=function(){return A(((a,b)=>{const c=i(a).requestAnimationFrame(i(b));return c}),arguments)};b.wbg.__wbg_removeEventListener_92cb9b3943463338=function(){return A(((a,b,c,d)=>{var e=z(b,c);i(a).removeEventListener(e,i(d))}),arguments)};b.wbg.__wbg_before_210596e44d88649f=function(){return A(((a,b)=>{i(a).before(i(b))}),arguments)};b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=i(a).childNodes;return h(b)});b.wbg.__wbg_length_d0a802565d17eec4=(a=>{const b=i(a).length;return b});b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,c)=>{var d=z(b,c);const e=i(a).createTextNode(d);return h(e)});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=i(a).document;return p(b)?S:h(b)});b.wbg.__wbg_warn_63bbae1730aead09=(a=>{console.warn(i(a))});b.wbg.__wbg_pathname_c5fe403ef9525ec6=((b,c)=>{const d=i(c).pathname;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_searchParams_bc5845fe67587f77=(a=>{const b=i(a).searchParams;return h(b)});b.wbg.__wbg_iterator_2cee6dadfd956dfa=(()=>{const a=Symbol.iterator;return h(a)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof i(a)===X;return b});b.wbg.__wbindgen_is_object=(a=>{const b=i(a);const c=typeof b===`object`&&b!==R;return c});b.wbg.__wbg_next_40fc327bfc8770e6=(a=>{const b=i(a).next;return h(b)});b.wbg.__wbg_next_196c84450b364254=function(){return A((a=>{const b=i(a).next();return h(b)}),arguments)};b.wbg.__wbg_done_298b57d23c0fc80c=(a=>{const b=i(a).done;return b});b.wbg.__wbg_value_d93c65011f51a456=(a=>{const b=i(a).value;return h(b)});b.wbg.__wbg_isArray_2ab64d95e09ea0ae=(a=>{const b=$(i(a));return b});b.wbg.__wbg_hash_cdea7a9b7e684a42=((b,c)=>{const d=i(c).hash;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbindgen_number_get=((a,b)=>{const c=i(b);const d=typeof c===Y?c:V;t()[a/8+ W]=p(d)?S:d;r()[a/a3+ S]=!p(d)});b.wbg.__wbg_state_9cc3f933b7d50acb=function(){return A((a=>{const b=i(a).state;return h(b)}),arguments)};b.wbg.__wbg_pathname_5449afe3829f96a1=function(){return A(((b,c)=>{const d=i(c).pathname;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e}),arguments)};b.wbg.__wbg_search_489f12953342ec1f=function(){return A(((b,c)=>{const d=i(c).search;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e}),arguments)};b.wbg.__wbg_pushState_b8e8d346f8bb33fd=function(){return A(((a,b,c,d,e,f)=>{var g=z(c,d);var h=z(e,f);i(a).pushState(i(b),g,h)}),arguments)};b.wbg.__wbg_replaceState_ec9431bea5108a50=function(){return A(((a,b,c,d,e,f)=>{var g=z(c,d);var h=z(e,f);i(a).replaceState(i(b),g,h)}),arguments)};b.wbg.__wbg_getElementById_c369ff43f0db99cf=((a,b,c)=>{var d=z(b,c);const e=i(a).getElementById(d);return p(e)?S:h(e)});b.wbg.__wbg_scrollIntoView_0c1a31f3d0dce6ae=(a=>{i(a).scrollIntoView()});b.wbg.__wbg_scrollTo_4d970c5e1c4b340b=((a,b,c)=>{i(a).scrollTo(b,c)});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const c=i(a)===i(b);return c});b.wbg.__wbg_sethref_b94692d1a9f05b53=function(){return A(((a,b,c)=>{var d=z(b,c);i(a).href=d}),arguments)};b.wbg.__wbg_defaultPrevented_cc14a1dd3dd69c38=(a=>{const b=i(a).defaultPrevented;return b});b.wbg.__wbg_button_367cdc7303e3cf9b=(a=>{const b=i(a).button;return b});b.wbg.__wbg_metaKey_86bfd3b0d3a8083f=(a=>{const b=i(a).metaKey;return b});b.wbg.__wbg_altKey_07da841b54bd3ed6=(a=>{const b=i(a).altKey;return b});b.wbg.__wbg_ctrlKey_008695ce60a588f5=(a=>{const b=i(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_1e76dbfcdd36a4b4=(a=>{const b=i(a).shiftKey;return b});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=i(a).length;return b});b.wbg.__wbg_href_40fd5bca11c13133=((b,c)=>{const d=i(c).href;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_target_f0876f510847bc60=((b,c)=>{const d=i(c).target;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_getAttribute_99bddb29274b29b9=((b,c,d,e)=>{var f=z(d,e);const g=i(c).getAttribute(f);var h=p(g)?S:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/a3+ W]=j;r()[b/a3+ S]=h});b.wbg.__wbg_instanceof_HtmlAnchorElement_5fc0eb2fbc8672d8=(a=>{let b;try{b=i(a) instanceof HTMLAnchorElement}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{i(a).preventDefault()});b.wbg.__wbindgen_boolean_get=(a=>{const b=i(a);const c=typeof b===Z?(b?W:S):2;return c});b.wbg.__wbg_newwithstr_36b0b3f97efe096f=function(){return A(((a,b)=>{var c=z(a,b);const d=new Request(c);return h(d)}),arguments)};b.wbg.__wbg_url_7807f6a1fddc3e23=((b,c)=>{const d=i(c).url;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_new_67853c351755d2cf=function(){return A(((a,b)=>{var c=z(a,b);const d=new URL(c);return h(d)}),arguments)};b.wbg.__wbg_setsearch_fd62f4de409a2bb3=((a,b,c)=>{var d=z(b,c);i(a).search=d});b.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0=function(){return A(((a,b,c)=>{var d=z(a,b);const e=new Request(d,i(c));return h(e)}),arguments)};b.wbg.__wbg_fetch_c4b6afebdb1f918e=((a,b)=>{const c=i(a).fetch(i(b));return h(c)});b.wbg.__wbg_instanceof_WorkerGlobalScope_46b577f151fad960=(a=>{let b;try{b=i(a) instanceof WorkerGlobalScope}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_fetch_921fad6ef9e883dd=((a,b)=>{const c=i(a).fetch(i(b));return h(c)});b.wbg.__wbg_instanceof_Response_849eb93e75734b6e=(a=>{let b;try{b=i(a) instanceof Response}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_text_450a059667fd91fd=function(){return A((a=>{const b=i(a).text();return h(b)}),arguments)};b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return A(((a,b,c,d,e)=>{var f=z(b,c);i(a).addEventListener(f,i(d),i(e))}),arguments)};b.wbg.__wbindgen_debug_string=((b,c)=>{const d=u(i(c));const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(e(a,b))});b.wbg.__wbindgen_rethrow=(a=>{throw k(a)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const c=i(a).then(i(b));return h(c)});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(i(a))});b.wbg.__wbg_then_a73caa9a87991566=((a,b,c)=>{const d=i(a).then(i(b),i(c));return h(d)});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=i(a).queueMicrotask;return h(b)});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=a6.resolve(i(a));return h(b)});b.wbg.__wbg_new_81740750da40724f=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=S;try{return B(d,c.b,a,b)}finally{c.a=d}};const e=new a6(d);return h(e)}finally{c.a=c.b=S}});b.wbg.__wbg_close_a994f9425dab445c=function(){return A((a=>{i(a).close()}),arguments)};b.wbg.__wbg_enqueue_ea194723156c0cc2=function(){return A(((a,b)=>{i(a).enqueue(i(b))}),arguments)};b.wbg.__wbg_byobRequest_72fca99f9c32c193=(a=>{const b=i(a).byobRequest;return p(b)?S:h(b)});b.wbg.__wbg_view_7f0ce470793a340f=(a=>{const b=i(a).view;return p(b)?S:h(b)});b.wbg.__wbg_byteLength_58f7b4fab1919d44=(a=>{const b=i(a).byteLength;return b});b.wbg.__wbg_close_184931724d961ccc=function(){return A((a=>{i(a).close()}),arguments)};b.wbg.__wbg_new_28c511d9baebfa89=((a,b)=>{var c=z(a,b);const d=new Q(c);return h(d)});b.wbg.__wbg_buffer_dd7f74bc60f1faab=(a=>{const b=i(a).buffer;return h(b)});b.wbg.__wbg_byteOffset_81d60f7392524f62=(a=>{const b=i(a).byteOffset;return b});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,c)=>{const d=new T(i(a),b>>>S,c>>>S);return h(d)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=i(a).length;return b});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return h(b)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=i(a).buffer;return h(b)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,c)=>{i(a).set(i(b),c>>>S)});b.wbg.__wbg_history_bc4057de66a2015f=function(){return A((a=>{const b=i(a).history;return h(b)}),arguments)};b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return A(((a,b,c)=>{var d=z(b,c);const e=i(a).createElement(d);return h(e)}),arguments)};b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,c)=>{var d=z(b,c);i(a).innerHTML=d});b.wbg.__wbg_hasAttribute_8340e1a2a46f10f3=((a,b,c)=>{var d=z(b,c);const e=i(a).hasAttribute(d);return e});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return A(((a,b,c)=>{var d=z(b,c);i(a).removeAttribute(d)}),arguments)};b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return A(((a,b,c,d,e)=>{var f=z(b,c);var g=z(d,e);i(a).setAttribute(f,g)}),arguments)};b.wbg.__wbg_append_7ba9d5c2eb183eea=function(){return A(((a,b)=>{i(a).append(i(b))}),arguments)};b.wbg.__wbg_href_7bfb3b2fdc0a6c3f=((b,c)=>{const d=i(c).href;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_origin_ea68ac578fa8517a=((b,c)=>{const d=i(c).origin;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_search_c68f506c44be6d1e=((b,c)=>{const d=i(c).search;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e});b.wbg.__wbg_newwithbase_6aabbfb1b2e6a1cb=function(){return A(((a,b,c,d)=>{var e=z(a,b);var f=z(c,d);const g=new URL(e,f);return h(g)}),arguments)};b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=i(a) instanceof Window}catch(a){b=!1}const c=b;return c});b.wbg.__wbg_origin_ee93e29ace71f568=function(){return A(((b,c)=>{const d=i(c).origin;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e}),arguments)};b.wbg.__wbg_hash_553098e838e06c1d=function(){return A(((b,c)=>{const d=i(c).hash;const e=o(d,a.__wbindgen_malloc,a.__wbindgen_realloc);const f=l;r()[b/a3+ W]=f;r()[b/a3+ S]=e}),arguments)};b.wbg.__wbg_target_2fc177e386c8b7b0=(a=>{const b=i(a).target;return p(b)?S:h(b)});b.wbg.__wbg_addEventListener_53b787075bd5e003=function(){return A(((a,b,c,d)=>{var e=z(b,c);i(a).addEventListener(e,i(d))}),arguments)};b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=i(a).nextSibling;return p(b)?S:h(b)});b.wbg.__wbg_appendChild_580ccb11a660db68=function(){return A(((a,b)=>{const c=i(a).appendChild(i(b));return h(c)}),arguments)};b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return A((a=>{const b=i(a).cloneNode();return h(b)}),arguments)};b.wbg.__wbg_respond_b1a43b2e3a06d525=function(){return A(((a,b)=>{i(a).respond(b>>>S)}),arguments)};b.wbg.__wbindgen_closure_wrapper503=((a,b,c)=>{const d=w(a,b,a7,x);return h(d)});b.wbg.__wbindgen_closure_wrapper508=((a,b,c)=>{const d=w(a,b,37,y);return h(d)});b.wbg.__wbindgen_closure_wrapper1459=((a,b,c)=>{const d=w(a,b,a7,x);return h(d)});b.wbg.__wbindgen_closure_wrapper2181=((a,b,c)=>{const d=w(a,b,a7,y);return h(d)});return b});var B=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h7fc8f23bf8a82de4(b,c,h(d),h(e))});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:W,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var z=((a,b)=>{if(a===S){return i(b)}else{return e(a,b)}});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h156943406b08115d(b,c,h(d))});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(h(b))}}var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==R){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==R){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>S){return `Function(${b})`}else{return `Function`}};if($(a)){const b=a.length;let c=`[`;if(b>S){c+=u(a[S])};for(let d=W;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>W){d=c[W]}else{return toString.call(a)};if(d==a0){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a0}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var h=(a=>{if(g===f.length)f.push(f.length+ W);const b=g;g=f[b];f[b]=a;return b});var x=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3f1a80de0b1aa563(b,c)});var t=(()=>{if(s===R||s.byteLength===S){s=new Float64Array(a.memory.buffer)};return s});var L=((b,d)=>{a=b.exports;N.__wbindgen_wasm_module=d;s=R;q=R;c=R;a.__wbindgen_start();return a});var I=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var r=(()=>{if(q===R||q.byteLength===S){q=new Int32Array(a.memory.buffer)};return q});var i=(a=>f[a]);var d=(()=>{if(c===R||c.byteLength===S){c=new T(a.memory.buffer)};return c});var e=((a,c)=>{a=a>>>S;return b.decode(d().subarray(a,a+ c))});var N=(async(b)=>{if(a!==V)return a;if(typeof b===O){b=new URL(`merezhka_bg.wasm`,import.meta.url)};const c=J();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};K(c);const {instance:d,module:e}=await I(await b,c);return L(d,e)});let a;const b=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){b.decode()};let c=R;const f=new U(128).fill(V);f.push(V,R,!0,!1);let g=f.length;let l=S;const m=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=R;let s=R;const v=typeof a1===O?{register:()=>{},unregister:()=>{}}:new a1(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const C=typeof a1===O?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingbytesource_free(b>>>S));class D{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;C.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a2);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/a3+ S];var c=r()[e/a3+ W];var d=z(b,c);if(b!==S){a.__wbindgen_free(b,c,W)};return d}finally{a.__wbindgen_add_to_stack_pointer(a2)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>S}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,h(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,h(b));return k(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const E=typeof a1===O?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsink_free(b>>>S));class F{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;E.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,h(b));return k(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return k(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,h(b));return k(d)}}const G=typeof a1===O?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsource_free(b>>>S));class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=S;G.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,h(b));return k(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default N;export{D as IntoUnderlyingByteSource,F as IntoUnderlyingSink,H as IntoUnderlyingSource,M as initSync}