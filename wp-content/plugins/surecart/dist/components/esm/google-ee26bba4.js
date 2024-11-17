import{m as maybeConvertAmount}from"./currency-728311ef.js";import{t as trackEvent}from"./google-357f4c4c.js";window.addEventListener("scSearched",(function(i){var n;if(!(null===window||void 0===window?void 0:window.fbq))return;const o=i.detail;window.fbq("track","Search",{search_string:o.searchString,content_ids:o.searchResultIds,...(null===(n=null==o?void 0:o.searchCollections)||void 0===n?void 0:n.length)?{content_category:o.searchCollections.join(",")}:{}})})),window.addEventListener("scProductViewed",(function(i){var n,o,l,t,d,e;if(!(null===window||void 0===window?void 0:window.fbq))return;const v=i.detail;window.fbq("track","ViewContent",{content_ids:[v.id],content_category:null===(o=null===(n=null==v?void 0:v.product_collections)||void 0===n?void 0:n.data)||void 0===o?void 0:o.map((i=>i.name)).join(", "),content_name:(null==v?void 0:v.name)+((null===(l=null==v?void 0:v.variant_options)||void 0===l?void 0:l.length)?` - ${null==v?void 0:v.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:v.id,quantity:1}],currency:null===(t=null==v?void 0:v.price)||void 0===t?void 0:t.currency,value:maybeConvertAmount((null===(d=v.price)||void 0===d?void 0:d.amount)||0,(null===(e=v.price)||void 0===e?void 0:e.currency)||"USD")})})),window.addEventListener("scSearched",(i=>{var n;trackEvent("search",{search_term:null===(n=i.detail)||void 0===n?void 0:n.searchString})})),window.addEventListener("scProductViewed",(i=>{var n,o,l,t,d,e,v,c,r,u,a,s;const m=i.detail;trackEvent("view_item",{value:maybeConvertAmount((null===(n=m.price)||void 0===n?void 0:n.amount)||0,(null===(o=m.price)||void 0===o?void 0:o.currency)||"USD"),currency:null===(l=m.price)||void 0===l?void 0:l.currency,items:[{item_id:null==m?void 0:m.id,item_name:null==m?void 0:m.name,currency:null===(t=null==m?void 0:m.price)||void 0===t?void 0:t.currency,discount:(null==m?void 0:m.discount_amount)?maybeConvertAmount(null==m?void 0:m.discount_amount,null===(d=null==m?void 0:m.price)||void 0===d?void 0:d.currency):0,price:maybeConvertAmount(null===(e=null==m?void 0:m.price)||void 0===e?void 0:e.amount,null===(v=null==m?void 0:m.price)||void 0===v?void 0:v.currency),quantity:(null==m?void 0:m.quantity)||1,...(null===(c=null==m?void 0:m.variant_options)||void 0===c?void 0:c.length)?{item_variant:null==m?void 0:m.variant_options.map((i=>i.name)).join(" / ")}:{},...(null===(u=null===(r=null==m?void 0:m.product_collections)||void 0===r?void 0:r.data)||void 0===u?void 0:u.length)?{item_category:null===(s=null===(a=null==m?void 0:m.product_collections)||void 0===a?void 0:a.data)||void 0===s?void 0:s.map((i=>i.name)).join(", ")}:{}}]})})),window.addEventListener("scProductsViewed",(i=>{var n;const o=i.detail;trackEvent("view_item_list",{...(null==o?void 0:o.collectionId)?{item_list_id:o.collectionId}:{},item_list_name:o.pageTitle,items:null===(n=null==o?void 0:o.products)||void 0===n?void 0:n.map((i=>{var n,l,t,d;return{item_id:null==i?void 0:i.id,item_name:null==i?void 0:i.name,...(null===(l=null===(n=null==i?void 0:i.product_collections)||void 0===n?void 0:n.data)||void 0===l?void 0:l.length)?{item_category:null===(d=null===(t=null==i?void 0:i.product_collections)||void 0===t?void 0:t.data)||void 0===d?void 0:d.map((i=>i.name)).join(", ")}:{},...(null==o?void 0:o.collectionId)?{item_list_id:o.collectionId}:{},item_list_name:o.pageTitle}}))})}));