(this["webpackJsonpcuentas-app"]=this["webpackJsonpcuentas-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(13),s=c.n(a),o=c(4),r=c(15),i=c(6),u=c(2),l={loading:!1,data_send:!1,error:null,current_account:{Fecha:"",Usuario:"","Tipo de gasto":"Sin datos, actualiza la tabla",Costo:0,Comentario:""},shopping:{data_send:!1,loading:!1,product_edit:{},shopping_list:[]},accounts:[{Fecha:"",Usuario:"","Tipo de gasto":"Sin datos, actualiza la tabla",Costo:"",Comentario:""}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_DATA_SEND":return Object(u.a)(Object(u.a)({},e),{},{data_send:!1});case"SET_CURRENT_ACCOUNT":return Object(u.a)(Object(u.a)({},e),{},{current_account:t.payload});case"POST_ACCOUNT_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"POST_ACCOUNT_DONE":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,data_send:!0});case"GET_ACCOUNTS_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"GET_ACCOUNTS_DONE":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,accounts:t.payload});case"POST_NEW_ITEM_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{loading:!0})});case"POST_NEW_ITEM_DONE":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{shopping_list:e.shopping.shopping_list.concat(t.payload),loading:!1,data_send:!0,product_edit:{}})});case"RESET_DATA_NEW_ITEM_SEND":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{data_send:!1})});case"GET_PRODUCT_LIST_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{loading:!0})});case"GET_PRODUCT_LIST_DONE":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{shopping_list:t.payload,loading:!1})});case"DELETE_ITEM_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{loading:!0})});case"DELETE_ITEM_DONE":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{shopping_list:Object(i.a)(e.shopping.shopping_list),loading:!1})});case"PATCH_ITEM_BUY_REQUESTED":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{loading:!0})});case"PATCH_ITEM_BUY_DONE":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{loading:!1,data_send:!0,product_edit:{}})});case"EDIT_PRODUCT":return console.log("reducerEdit",t.payload),Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{product_edit:t.payload})});case"RESET_EDIT_PRODUCT":return Object(u.a)(Object(u.a)({},e),{},{shopping:Object(u.a)(Object(u.a)({},e.shopping),{},{product_edit:{}})});default:return e}},p=c(27),b=(c(36),c(7)),d=(c(37),c(38),c.p+"static/media/gastos-comunes-icon.6578e9ee.svg"),O=c(0),h=function(){return Object(O.jsx)("header",{className:"header-gastos-comunes",children:Object(O.jsx)("a",{href:"/",className:"header-gastos-comunes__logo",children:Object(O.jsx)("img",{src:d,alt:"Cuentas comunes logo"})})})},g=c(14),m=c(3),x=c.n(m),f=c(5),_=c(10),E=c.n(_),T=function(){return function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PRODUCT_LIST_REQUESTED"}),e.next=3,E.a.get("https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122");case 3:c=e.sent,t({type:"GET_PRODUCT_LIST_DONE",payload:c.data.length?c.data:[]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e,t){return function(){var c=Object(f.a)(x.a.mark((function c(n){var a,s;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("itemPatch",t),a=t.Producto,n({type:"PATCH_ITEM_BUY_REQUESTED"}),c.next=5,E.a.patch("https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122/Producto/*".concat(a,"*"),e);case 5:s=c.sent,console.log(s),n({type:"PATCH_ITEM_BUY_DONE"});case 8:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},C=(c(59),c.p+"static/media/calendar-icon.2219f59f.svg"),v=c.p+"static/media/comment-icon.e2811a2f.svg",S=c.p+"static/media/price-icon.e822666f.svg",y=c.p+"static/media/type-icon.d8f40693.svg",D=c.p+"static/media/user-icon.83c6af46.svg",I=function(e){var t=e.togglePopup,c=Object(n.useState)(""),a=Object(b.a)(c,2),s=a[0],r=a[1],i=Object(g.a)(),l=i.register,j=i.handleSubmit,p=Object(o.b)();return Object(O.jsxs)("form",{className:"new-account-form",onSubmit:j((function(e){p(function(e){return{type:"SET_CURRENT_ACCOUNT",payload:e}}(e)),t()})),children:[Object(O.jsx)("h2",{className:"new-account-form__title",children:"Adicionar Gastos"}),Object(O.jsxs)("label",{children:["Fecha:",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(C,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},l("Fecha",{required:!0})),{},{type:"date"}))]}),Object(O.jsxs)("label",{children:["Usuario:",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(D,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},l("Usuario",{required:!0})),{},{type:"text"}))]}),Object(O.jsxs)("label",{children:["Tipo de gasto:",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(y,")")}}),Object(O.jsxs)("select",Object(u.a)(Object(u.a)({},l("Tipo de gasto",{required:!0})),{},{children:[Object(O.jsx)("option",{value:"Arriendo",children:"Arriendo"}),Object(O.jsx)("option",{value:"Mercado",children:"Mercado"}),Object(O.jsx)("option",{value:"Luz",children:"Luz"}),Object(O.jsx)("option",{value:"Agua",children:"Agua"}),Object(O.jsx)("option",{value:"Gas",children:"G\xe1s"}),Object(O.jsx)("option",{value:"Internet",children:"Internet"}),Object(O.jsx)("option",{value:"Domicilios",children:"Domicilios"}),Object(O.jsx)("option",{value:"Restaurantes",children:"Restaurantes"}),Object(O.jsx)("option",{value:"Gasto casa",children:"Gasto casa"}),Object(O.jsx)("option",{value:"Otros",children:"Otros"})]}))]}),Object(O.jsxs)("label",{children:["Costo:",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(S,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},l("Costo",{required:!0})),{},{type:"text",value:s,onInput:function(e){r(function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}(e.target.value.toString().replace(/[^0-9]/g,"")))}}))]}),Object(O.jsxs)("label",{children:["Comentario (opcional):",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(v,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},l("Comentario")),{},{type:"text"}))]}),Object(O.jsx)("input",{className:"new-account-form__button",type:"submit",value:"Aceptar"})]})},U=(c(60),c.p+"static/media/loading-icon.7f79218f.gif"),P=function(e){var t=e.popupState,c=e.togglePopup,n=Object(o.b)(),a=Object(o.c)((function(e){return e.current_account})),s=Object(o.c)((function(e){return e.loading})),r=Object(o.c)((function(e){return e.data_send})),i=function(){n(function(){var e=Object(f.a)(x.a.mark((function e(t,c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c().current_account,t({type:"POST_ACCOUNT_REQUESTED"}),e.next=4,E.a.post("https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508",n);case 4:e.sent,t({type:"POST_ACCOUNT_DONE"});case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())};return r&&(setTimeout((function(){n({type:"RESET_DATA_SEND"})}),2e3),setTimeout((function(){c()}),2050)),Object(O.jsxs)(O.Fragment,{children:["         ",t?Object(O.jsxs)("div",{className:"popup-outer-container",children:[Object(O.jsx)("span",{className:"close-popup",onClick:c,children:"X"}),Object(O.jsxs)("div",{className:"popup-container",children:[Object(O.jsx)("h2",{className:"popup-title",children:"Verifica la informaci\xf3n"}),Object(O.jsxs)("article",{className:"popup-description",children:[Object(O.jsxs)("p",{children:["Fecha del gasto: ",Object(O.jsx)("span",{children:a.Fecha})]}),Object(O.jsxs)("p",{children:["Usuario: ",Object(O.jsx)("span",{children:a.Usuario})]}),Object(O.jsxs)("p",{children:["Tipo de gasto: ",Object(O.jsx)("span",{children:a["Tipo de gasto"]})]}),Object(O.jsxs)("p",{children:["Costo: ",Object(O.jsxs)("span",{children:["$ ",a.Costo]})]}),Object(O.jsxs)("p",{children:["Comentario: ",Object(O.jsx)("span",{children:a.Comentario})]}),r?Object(O.jsx)("p",{className:"message-confirmation",children:" La informaci\xf3n fue envida! :)"}):null]}),r||s?Object(O.jsxs)("button",{className:"confirmation-button",children:[" ",s?Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(U,")")}}):Object(O.jsx)(O.Fragment,{children:"Confirmar"})]}):Object(O.jsxs)("button",{className:"confirmation-button",onClick:function(){return i()},children:[" ",s?Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(U,")")}}):Object(O.jsx)(O.Fragment,{children:"Confirmar"})]}),Object(O.jsx)("button",{className:"cancelation-button",onClick:c,children:"Cancelar"})]})]}):null," "]})},k=(c(61),c.p+"static/media/product-icon.9733a079.svg"),w=function(e){var t=e.popupNewItemState,c=e.togglePopupNewItem,a=Object(o.b)(),s=Object(g.a)(),r=s.register,i=s.handleSubmit,l=s.reset,j=Object(o.c)((function(e){return e.shopping.loading})),p=Object(o.c)((function(e){return e.shopping.data_send})),b=Object(o.c)((function(e){return e.shopping.product_edit}));Object(n.useEffect)((function(){l()}),[b]);var d=function(e){var t;a((t=e,function(){var e=Object(f.a)(x.a.mark((function e(c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"POST_NEW_ITEM_REQUESTED"}),e.next=3,E.a.post("https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122",t);case 3:e.sent,c({type:"POST_NEW_ITEM_DONE",payload:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},h=function(e,t){a(N(e,t))},m=function(){a({type:"RESET_EDIT_PRODUCT"}),c()};return p&&t&&(setTimeout((function(){a({type:"RESET_DATA_NEW_ITEM_SEND"})}),2e3),setTimeout((function(){a({type:"RESET_EDIT_PRODUCT"}),a(T())}),2050),c()),Object(O.jsxs)(O.Fragment,{children:["         ",t?Object(O.jsxs)("div",{className:"popup-new-item-outer-container",children:[Object(O.jsx)("span",{className:"close-popup-new-item",onClick:function(){return m()},children:"X"}),Object(O.jsxs)("div",{className:"popup-new-item-container",children:[Object(O.jsx)("h2",{className:"popup-new-item__title",children:"Adicionar producto"}),Object(O.jsxs)("form",{className:"popup-new-item__form",onSubmit:i((function(e){b.Producto?h(e,b):(e.Comprado="No",d(e))})),children:[Object(O.jsxs)("label",{children:["Producto:",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(k,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},r("Producto",{required:!0})),{},{type:"text",defaultValue:b.Producto?b.Producto:""}))]}),Object(O.jsxs)("label",{children:["Comentario (Opcional):",Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(v,")")}}),Object(O.jsx)("input",Object(u.a)(Object(u.a)({},r("Comentario")),{},{type:"text",defaultValue:b.Producto?b.Comentario:""}))]}),Object(O.jsxs)("button",{className:"confirmation-button",children:[" ",j?Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(U,")")}}):Object(O.jsx)(O.Fragment,{children:"Confirmar"})]})]}),p?Object(O.jsx)("p",{className:"message-confirmation",children:" La informaci\xf3n fue envida! :)"}):null,Object(O.jsx)("button",{className:"cancelation-button",onClick:function(){return m()},children:"Cancelar"})]})]}):null," "]})},R=(c(62),c.p+"static/media/refresh-icon.8429e74d.svg"),A=function(e){var t=e.dateHourFormater,c=Object(n.useState)("Nunca"),a=Object(b.a)(c,2),s=a[0],r=a[1],i=Object(o.c)((function(e){return e.loading})),u=Object(o.c)((function(e){return e.accounts})),l=Object(o.b)();return Object(O.jsxs)("div",{className:"table-outer-container",children:[Object(O.jsx)("h2",{className:"table-accounts-title",children:"Tabla de Gastos"}),Object(O.jsxs)("p",{className:"table-last-update",children:["\xdaltima actualizaci\xf3n: ",Object(O.jsxs)("span",{children:[" ",s," "]})," "]}),i?Object(O.jsx)("button",{className:"get-table-button",children:Object(O.jsx)("span",{className:"get-table-button--loading-icon",style:{backgroundImage:"url(".concat(U,")")}})}):Object(O.jsxs)("button",{className:"get-table-button",onClick:function(){l(function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ACCOUNTS_REQUESTED"}),e.next=3,E.a.get("https://sheet.best/api/sheets/985f20ae-8841-4340-bbdb-491b3c707508");case 3:c=e.sent,t({type:"GET_ACCOUNTS_DONE",payload:c.data.length?c.data:[{Fecha:"",Usuario:"","Tipo de gasto":"No se obtuvieron datos",Costo:"",Comentario:""}]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(t())},children:[Object(O.jsx)("span",{className:"get-table-button--refresh-icon",style:{backgroundImage:"url(".concat(R,")")}}),"Actualizar Tabla"]}),Object(O.jsx)("div",{className:"table-inner-container",children:Object(O.jsxs)("table",{className:"table-accounts",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Fecha"}),Object(O.jsx)("th",{children:"Usuario"}),Object(O.jsx)("th",{children:"Tipo de gasto"}),Object(O.jsx)("th",{children:"Costo"}),Object(O.jsx)("th",{children:"Comentario"})]})}),Object(O.jsx)("tbody",{children:i?Object(O.jsx)("tr",{className:"table-accounts--row-loading-icon",children:Object(O.jsx)("span",{className:"table-accounts__loading-icon",style:{backgroundImage:"url(".concat(U,")")}})}):u.slice(0).reverse().map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:e.Fecha}),Object(O.jsx)("th",{children:e.Usuario}),Object(O.jsx)("th",{children:e["Tipo de gasto"]}),Object(O.jsx)("th",{children:e.Costo}),Object(O.jsx)("th",{children:e.Comentario})]},t)}))})]})}),Object(O.jsx)("a",{className:"table-accounts__link",target:"_blank",href:"https://docs.google.com/spreadsheets/d/175BoIJSFiQmeLXf3goVCcUeWnYjEt9QdIzUYcFyLnRQ/edit?usp=sharing",rel:"noreferrer",children:"Ir a tabla en Excel"})]})},F=(c(63),c.p+"static/media/delete-icon.d4895997.svg"),M=c.p+"static/media/new-item-icon.85b83752.svg",L=function(e){var t=e.togglePopupNewItem,c=e.dateHourFormater,a=Object(n.useState)("Nunca"),s=Object(b.a)(a,2),r=s[0],i=s[1],u=Object(o.b)(),l=Object(o.c)((function(e){return e.shopping.shopping_list})),j=Object(o.c)((function(e){return e.shopping.loading}));Object(n.useEffect)((function(){u(T()),i(c())}),[]);var p=function(e){u(function(e){return function(){var t=Object(f.a)(x.a.mark((function t(c,n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().shopping.shopping_list.findIndex((function(t){return t.Producto===e})),c({type:"DELETE_ITEM_REQUESTED"}),t.next=4,E.a.delete("https://sheet.best/api/sheets/a282074d-7798-43e8-ba31-f09d94819122/Producto/*".concat(e,"*"));case 4:t.sent,c({type:"DELETE_ITEM_DONE",payload:a});case 6:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(e))};return Object(O.jsxs)("div",{className:"shopping-list-outer-container",children:[Object(O.jsx)("h2",{className:"shopping-list-title",children:"Lista de Compras"}),Object(O.jsxs)("p",{className:"shopping-list-last-update",children:["\xdaltima actualizaci\xf3n: ",Object(O.jsxs)("span",{children:[" ",r," "]})," "]}),Object(O.jsxs)("button",{className:"new-item-button",onClick:function(){return t()},children:[Object(O.jsx)("span",{className:"new-item-button--add-icon",style:{backgroundImage:"url(".concat(M,")")}}),"Adicionar Producto"]}),Object(O.jsxs)("div",{className:"shopping-list-inner-container",children:[Object(O.jsx)("ul",{className:"shopping-list",children:l.length?l.slice(0).reverse().map((function(e,c){return Object(O.jsxs)("li",{className:"shopping-list__item",children:[Object(O.jsx)("input",{type:"checkbox",onChange:function(t){return function(e,t){var c=t,n=e.target.checked;c.Comprado=n?"Si":"No",u(N(c,t))}(t,e)},defaultChecked:"Si"===e.Comprado}),Object(O.jsxs)("p",{onClick:function(){return function(e){u(function(e){return{type:"EDIT_PRODUCT",payload:e}}(e)),t()}(e)},children:[e.Producto,Object(O.jsx)("span",{className:"item__comment",children:e.Comentario?"(".concat(e.Comentario,")"):""})]}),Object(O.jsx)("button",{className:"item__delete-button",onClick:function(){return p(e.Producto)},children:j?Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(U,")")}}):Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(F,")")}})})]},c)})):Object(O.jsx)("div",{className:"shopping-list-loading",children:Object(O.jsx)("span",{children:"Sin productos."})})}),j?Object(O.jsx)("div",{className:"shopping-list-loading",children:Object(O.jsx)("span",{style:{backgroundImage:"url(".concat(U,")")}})}):null]})]})},Q=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),o=Object(b.a)(s,2),r=o[0],i=o[1],u=function(){var e=new Date;return"".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear(),", ").concat(e.getHours(),":").concat(e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),":").concat(e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds())},l=function(){a((function(e){return!e}))},j=function(){i((function(e){return!e}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)(I,{togglePopup:l}),Object(O.jsxs)("div",{className:"home-container__tables",children:[Object(O.jsx)(A,{dateHourFormater:u}),Object(O.jsx)(L,{dateHourFormater:u,togglePopupNewItem:j})]})]}),Object(O.jsx)(P,{popupState:c,togglePopup:l}),Object(O.jsx)(w,{popupNewItemState:r,togglePopupNewItem:j})]})},G=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(Q,{})})},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.b,z=Object(r.c)(j,H(Object(r.a)(p.a)));s.a.render(Object(O.jsx)(o.a,{store:z,children:Object(O.jsx)(G,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.86c7dbb4.chunk.js.map