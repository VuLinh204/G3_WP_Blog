import{Fragment,h}from"@stencil/core";import{loadStripe}from"@stripe/stripe-js/pure";import{__}from"@wordpress/i18n";import{openWormhole}from"stencil-wormhole";import{state as selectedProcessor}from"@store/selected-processor";import{availableProcessors}from"@store/processors/getters";import{createErrorNotice}from"@store/notices/mutations";import{updateFormState}from"@store/form/mutations";export class ScStripeElement{constructor(){this.disabled=void 0,this.order=void 0,this.mode="live",this.size="medium",this.label=void 0,this.secureText="",this.showLabel=!0,this.hasFocus=void 0,this.selectedProcessorId=void 0,this.formState=void 0,this.error=void 0,this.confirming=void 0}async componentWillLoad(){const e=(availableProcessors()||[]).find((e=>"stripe"===e.processor_type));if(!e)return;const{account_id:t,publishable_key:r}=(null==e?void 0:e.processor_data)||{};try{this.stripe=await loadStripe(r,{stripeAccount:t}),this.elements=this.stripe.elements()}catch(e){this.error=(null==e?void 0:e.message)||__("Stripe could not be loaded","surecart")}}async maybeConfirmOrder(e){var t,r,o,i,s,l,a,n,d,c,m,p,u,h,v,y,f,g,b,x,P,_x,S;if("paying"===e&&"stripe"===(null==selectedProcessor?void 0:selectedProcessor.id)&&"stripe"===(null===(r=null===(t=this.order)||void 0===t?void 0:t.payment_intent)||void 0===r?void 0:r.processor_type)&&(null===(i=null===(o=this.order)||void 0===o?void 0:o.payment_intent)||void 0===i?void 0:i.external_intent_id)&&(null===(n=null===(a=null===(l=null===(s=this.order)||void 0===s?void 0:s.payment_intent)||void 0===l?void 0:l.processor_data)||void 0===a?void 0:a.stripe)||void 0===n?void 0:n.client_secret)&&(null===(p=null===(m=null===(c=null===(d=this.order)||void 0===d?void 0:d.payment_intent)||void 0===c?void 0:c.processor_data)||void 0===m?void 0:m.stripe)||void 0===p?void 0:p.type)&&!this.confirming){this.confirming=!0;try{let e;if(e="setup"==(null===(y=null===(v=null===(h=null===(u=this.order)||void 0===u?void 0:u.payment_intent)||void 0===h?void 0:h.processor_data)||void 0===v?void 0:v.stripe)||void 0===y?void 0:y.type)?await this.confirmCardSetup(null===(b=null===(g=null===(f=this.order)||void 0===f?void 0:f.payment_intent)||void 0===g?void 0:g.processor_data)||void 0===b?void 0:b.stripe.client_secret):await this.confirmCardPayment(null===(S=null===(_x=null===(P=null===(x=this.order)||void 0===x?void 0:x.payment_intent)||void 0===P?void 0:P.processor_data)||void 0===_x?void 0:_x.stripe)||void 0===S?void 0:S.client_secret),null==e?void 0:e.error)throw this.error=e.error.message,e.error;this.scSetState.emit("PAID"),this.scPaid.emit()}catch(e){updateFormState("REJECT"),createErrorNotice(e),e.message&&(this.error=e.message),this.confirming=!1,this.scSetState.emit("REJECT")}}}async confirmCardPayment(e){var t,r;return this.stripe.confirmCardPayment(e,{payment_method:{card:this.element,billing_details:{...(null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.name)?{name:this.order.name}:{},...(null===(r=null==this?void 0:this.order)||void 0===r?void 0:r.email)?{email:this.order.email}:{}}}})}async confirmCardSetup(e){var t,r;return this.stripe.confirmCardSetup(e,{payment_method:{card:this.element,billing_details:{...(null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.name)?{name:this.order.name}:{},...(null===(r=null==this?void 0:this.order)||void 0===r?void 0:r.email)?{email:this.order.email}:{}}}})}componentDidLoad(){if(!this.elements)return;const e=getComputedStyle(document.body);this.elements.create("card",{style:{base:{color:e.getPropertyValue("--sc-input-label-color"),fontSize:"16px",iconColor:e.getPropertyValue("--sc-stripe-icon-color"),fontSmoothing:"antialiased","::placeholder":{color:e.getPropertyValue("--sc-input-placeholder-color")}},invalid:{color:e.getPropertyValue("--sc-color-error-500"),":focus":{color:e.getPropertyValue("--sc-input-label-color")}}}}).mount(this.container),this.element=this.elements.getElement("card"),this.element.on("change",(e=>{var t,r,o;e.complete&&this.scPaymentInfoAdded.emit({processor_type:"stripe",checkout_id:this.order.id,currency:this.order.currency,total_amount:this.order.total_amount,line_items:this.order.line_items,payment_method:{billing_details:{name:(null===(t=null==this?void 0:this.order)||void 0===t?void 0:t.name)?this.order.name:"",email:(null===(r=null==this?void 0:this.order)||void 0===r?void 0:r.email)?this.order.email:""}}}),this.error=(null===(o=null==e?void 0:e.error)||void 0===o?void 0:o.message)?e.error.message:""})),this.element.on("focus",(()=>this.hasFocus=!0)),this.element.on("blur",(()=>this.hasFocus=!1))}render(){return h(Fragment,null,h("sc-form-control",{class:"sc-stripe",size:this.size,label:this.label},h("div",{class:"sc-stripe-element",ref:e=>this.container=e})),this.error&&h("sc-text",{style:{color:"var(--sc-color-danger-500)","--font-size":"var(--sc-font-size-small)",marginTop:"0.5em"}},this.error))}static get is(){return"sc-stripe-element"}static get originalStyleUrls(){return{$:["sc-stripe-element.scss"]}}static get styleUrls(){return{$:["sc-stripe-element.css"]}}static get properties(){return{disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether this field is disabled"},attribute:"disabled",reflect:!1},order:{type:"unknown",mutable:!1,complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The checkout session object for finalizing intents"}},mode:{type:"string",mutable:!1,complexType:{original:"'live' | 'test'",resolved:'"live" | "test"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Mode for the payment"},attribute:"mode",reflect:!1,defaultValue:"'live'"},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's label. Alternatively, you can use the label slot."},attribute:"label",reflect:!1},secureText:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's help text. Alternatively, you can use the help-text slot."},attribute:"secure-text",reflect:!1,defaultValue:"''"},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},hasFocus:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Inputs focus"},attribute:"has-focus",reflect:!0},selectedProcessorId:{type:"string",mutable:!1,complexType:{original:"ProcessorName",resolved:'"paypal" | "paypal-card" | "stripe"',references:{ProcessorName:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The selected processor id"},attribute:"selected-processor-id",reflect:!1},formState:{type:"string",mutable:!1,complexType:{original:"FormState",resolved:'"confirmed" | "confirming" | "draft" | "expired" | "failure" | "finalizing" | "idle" | "loading" | "paid" | "paying" | "redirecting" | "updating"',references:{FormState:{location:"import",path:"../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:"The form state"},attribute:"form-state",reflect:!1}}}static get states(){return{error:{},confirming:{}}}static get events(){return[{method:"scPaid",name:"scPaid",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"The order/invoice was paid for"},complexType:{original:"void",resolved:"void",references:{}}},{method:"scSetState",name:"scSetState",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Set the state"},complexType:{original:"FormStateSetter",resolved:'"EXPIRE" | "FETCH" | "FINALIZE" | "PAID" | "PAYING" | "REJECT" | "RESOLVE"',references:{FormStateSetter:{location:"import",path:"../../../types"}}}},{method:"scPaymentInfoAdded",name:"scPaymentInfoAdded",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Payment information was added"},complexType:{original:"PaymentInfoAddedParams",resolved:"PaymentInfoAddedParams",references:{PaymentInfoAddedParams:{location:"import",path:"../../../types"}}}}]}static get methods(){return{confirmCardPayment:{complexType:{signature:"(secret: any) => Promise<any>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"}},return:"Promise<any>"},docs:{text:"Confirm card payment",tags:[]}},confirmCardSetup:{complexType:{signature:"(secret: any) => Promise<any>",parameters:[{tags:[],text:""}],references:{Promise:{location:"global"}},return:"Promise<any>"},docs:{text:"Confirm card setup.",tags:[]}}}}static get elementRef(){return"el"}static get watchers(){return[{propName:"formState",methodName:"maybeConfirmOrder"}]}}openWormhole(ScStripeElement,["order","mode","selectedProcessorId","formState"],!1);