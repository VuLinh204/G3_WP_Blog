"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[5147],{8223:function(e,n,t){t.d(n,{a:function(){return a},c:function(){return c},g:function(){return o},h:function(){return l},i:function(){return d}});var i=t(4942);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=function(e){return((null==e?void 0:e.data)||[]).map((function(e){var n;return u(u({},(null==e?void 0:e.id)?{id:e.id}:{}),{},{price_id:e.price.id,quantity:e.quantity,variant_id:null===(n=e.variant)||void 0===n?void 0:n.id})}))},o=function(e,n){return((null==e?void 0:e.data)||[]).find((function(e){return e.price.id===n}))},d=function(e,n){var t;return!!((null==(t=null==n?void 0:n.line_items)?void 0:t.data)||[]).map((function(e){return e.price.id})).find((function(n){return(null==e?void 0:e.id)===n}))},a=function(e,n){var t;return!!((null==(t=null==n?void 0:n.line_items)?void 0:t.data)||[]).map((function(e){var n;return(null===(n=null==e?void 0:e.bump)||void 0===n?void 0:n.id)||(null==e?void 0:e.bump)})).find((function(n){return(null==e?void 0:e.id)===n}))},l=function(e){var n,t,i;return!!(null===(t=null===(n=null==e?void 0:e.line_items)||void 0===n?void 0:n.data)||void 0===t?void 0:t.length)&&(null===(i=null==e?void 0:e.line_items.data)||void 0===i?void 0:i.some((function(e){var n;return null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.recurring_interval_count})))}},5147:function(e,n,t){t.r(n),t.d(n,{sc_line_items_provider:function(){return s}});var i=t(9062),r=t(5861),u=t(5671),c=t(3144),o=t(1284),d=t.n(o),a=t(8860),l=t(8223),s=function(){function e(n){(0,u.Z)(this,e),(0,a.r)(this,n),this.scUpdateLineItems=(0,a.c)(this,"scUpdateLineItems",7),this.order=void 0,this.syncItems=[]}var n;return(0,c.Z)(e,[{key:"handleLineItemToggle",value:function(e){var n=e.detail;this.addSyncItem("toggle",n)}},{key:"handleLineItemRemove",value:function(e){var n=e.detail;this.addSyncItem("remove",n)}},{key:"handleLineItemAdd",value:function(e){var n=e.detail;this.addSyncItem("add",n)}},{key:"handleLineItemUpdate",value:function(e){var n=e.detail;this.addSyncItem("update",n)}},{key:"syncItemsHandler",value:(n=(0,r.Z)(d().mark((function e(n){var t=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n?void 0:n.length){e.next=2;break}return e.abrupt("return");case 2:setTimeout((function(){var e;if(null===(e=t.syncItems)||void 0===e?void 0:e.length){var n=t.processSyncItems();t.scUpdateLineItems.emit(n),t.syncItems=[]}}),100);case 3:case"end":return e.stop()}}),e)}))),function(_x){return n.apply(this,arguments)})},{key:"addSyncItem",value:function(e,n){this.syncItems=[].concat((0,i.Z)(this.syncItems),[{type:e,payload:n}])}},{key:"processSyncItems",value:function(){var e,n=(0,l.c)((null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.line_items)||[]),t={toggle:this.toggleItem,add:this.addItem,remove:this.removeItem,update:this.updateItem};return(this.syncItems||[]).forEach((function(e){n=t[e.type](e.payload,n)})),n}},{key:"addItem",value:function(e,n){return[].concat((0,i.Z)(n),[e])}},{key:"toggleItem",value:function(e,n){var t,r=null===(t=n.find((function(n){return n.price_id===e.price_id})))||void 0===t?void 0:t.price_id;return r?n.filter((function(e){return r!==e.price_id})):[].concat((0,i.Z)(n),[e])}},{key:"removeItem",value:function(e,n){return e.price_id?n.filter((function(n){return n.price_id!==e.price_id})):n}},{key:"updateItem",value:function(e,n){var t=n.findIndex((function(n){return n.price_id===e.price_id}));return-1===t?[].concat((0,i.Z)(n),[e]):(n[t]=e,n)}},{key:"render",value:function(){return(0,a.h)("slot",null)}}],[{key:"watchers",get:function(){return{syncItems:["syncItemsHandler"]}}}]),e}()}}]);