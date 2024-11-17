import{h}from"@stencil/core";export class ScTabGroup{constructor(){this.tabs=[],this.panels=[],this.activeTab=void 0}componentDidLoad(){this.syncTabsAndPanels(),this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),this.mutationObserver=new MutationObserver((()=>{this.syncTabsAndPanels()})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver.disconnect()}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()}setAriaLabels(){this.tabs.map((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))}))}handleClick(t){const e=t.target.closest("sc-tab");(null==e?void 0:e.closest("sc-tab-group"))===this.el&&e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sc-tab");if((null==e?void 0:e.closest("sc-tab-group"))!==this.el)return!0;if(["Enter"," "].includes(t.key)&&e&&this.setActiveTab(e,{scrollBehavior:"smooth"}),["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=document.activeElement;if(e&&"sc-tab"===e.tagName.toLowerCase()){let s=this.tabs.indexOf(e);"Home"===t.key?s=0:"End"===t.key?s=this.tabs.length-1:"ArrowUp"===t.key?s=Math.max(0,s-1):"ArrowDown"===t.key&&(s=Math.min(this.tabs.length-1,s+1)),this.tabs[s].triggerFocus({preventScroll:!0}),t.preventDefault()}}}setActiveTab(t,e){if(e=Object.assign({emitEvents:!0,scrollBehavior:"auto"},e),t&&t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.map((t=>t.active=t===this.activeTab)),this.panels.map((t=>t.active=t.name===this.activeTab.panel)),e.emitEvents&&(s&&this.scTabHide.emit(s.panel),this.scTabShow.emit(this.activeTab.panel))}}getActiveTab(){return this.getAllTabs().find((t=>t.active))}getAllChildren(){const t=this.el.shadowRoot.querySelectorAll("slot"),e=["sc-tab","sc-tab-panel"];return Array.from(t).map((t=>{var e;return null===(e=null==t?void 0:t.assignedElements)||void 0===e?void 0:e.call(t,{flatten:!0})})).flat().reduce(((t,e)=>{var s;return t.concat(e,[...(null===(s=null==e?void 0:e.querySelectorAll)||void 0===s?void 0:s.call(e,"*"))||[]])}),[]).filter((t=>{var s,a;return e.includes(null===(a=null===(s=null==t?void 0:t.tagName)||void 0===s?void 0:s.toLowerCase)||void 0===a?void 0:a.call(s))}))}getAllTabs(t=!1){return this.getAllChildren().filter((e=>t?"sc-tab"===e.tagName.toLowerCase():"sc-tab"===e.tagName.toLowerCase()&&!e.disabled))}getAllPanels(){return this.getAllChildren().filter((t=>"sc-tab-panel"===t.tagName.toLowerCase()))}render(){return h("div",{part:"base",class:{"tab-group":!0},onClick:t=>this.handleClick(t),onKeyDown:t=>this.handleKeyDown(t)},h("div",{class:"tab-group__nav-container",part:"nav"},h("div",{class:"tab-group__nav"},h("div",{part:"tabs",class:"tab-group__tabs",role:"tablist"},h("slot",{onSlotchange:()=>this.syncTabsAndPanels(),name:"nav"})))),h("div",{part:"body",class:"tab-group__body"},h("slot",{onSlotchange:()=>this.syncTabsAndPanels()})))}static get is(){return"sc-tab-group"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-tab-group.scss"]}}static get styleUrls(){return{$:["sc-tab-group.css"]}}static get states(){return{activeTab:{}}}static get events(){return[{method:"scTabHide",name:"scTabHide",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}},{method:"scTabShow",name:"scTabShow",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}}]}static get elementRef(){return"el"}}