(()=>{"use strict";var e={262:(e,r)=>{r.A=(e,r)=>{const o=e.__vccOpts||e;for(const[e,t]of r)o[e]=t;return o}}},r={};const o=Vue;const t={methods:{backgroundColor:function(){var e=this.field.colorMap[this.field.value];return e.hasOwnProperty("background")?e.background:e},textColor:function(){var e=this.field.colorMap[this.field.value];if(e.hasOwnProperty("color"))return e.color;var r=e;return r.length<5&&(r+=r.slice(1)),r=r.replace("#","0x")>8388607.5?"#333":"#fff"}}};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function l(e,r,o){return(r=function(e){var r=function(e,r){if("object"!=n(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var t=o.call(e,r||"default");if("object"!=n(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==n(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}const i={computed:{badgeExtraClasses:function(){return this.field.extraClasses?l({},this.field.extraClasses,!0):{foo:!1}}},methods:{displayValue:function(){if(this.field.useLabel){var e=_.find(this.field.options,{value:this.field.value});if(void 0!==e.label)return e.label}return this.field.value}}},a={props:["resourceName","field"],mixins:[t,i]};var s=function o(t){var n=r[t];if(void 0!==n)return n.exports;var l=r[t]={exports:{}};return e[t](l,l.exports,o),l.exports}(262);const u=(0,s.A)(a,[["render",function(e,r,t,n,l,i){return(0,o.openBlock)(),(0,o.createElementBlock)("span",{class:(0,o.normalizeClass)(["rounded-full uppercase px-2 py-1 text-xs font-bold whitespace-no-wrap",e.badgeExtraClasses]),style:(0,o.normalizeStyle)({backgroundColor:e.backgroundColor(),color:e.textColor()})},(0,o.toDisplayString)(e.__(e.displayValue())),7)}]]);const c={props:["index","resource","resourceName","resourceId","field"],mixins:[t,i]},f=(0,s.A)(c,[["render",function(e,r,t,n,l,i){var a=(0,o.resolveComponent)("PanelItem");return(0,o.openBlock)(),(0,o.createBlock)(a,{index:t.index,field:t.field,"field-name":t.field.name},{value:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["rounded-full uppercase px-2 py-1 text-xs font-bold whitespace-no-wrap",e.badgeExtraClasses]),style:(0,o.normalizeStyle)({backgroundColor:e.backgroundColor(),color:e.textColor()})},(0,o.toDisplayString)(e.__(e.displayValue())),7)]})),_:1},8,["index","field","field-name"])}]]);Nova.booting((function(e,r,o){e.component("index-badge",u),e.component("detail-badge",f)}))})();