import{I as t,s as c,az as Q,J as a,_ as n,ah as U,ai as X,d as Y,t as Z,v as x,O as ee,y as u,A as oe,p as l,a0 as i,C as re,aA as te,T as h,aB as ne,aC as de}from"./index-356ebbb4.js";const ae=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),X(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),le={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},se=Object.assign(Object.assign({},x.props),le),ce=Y({name:"Card",props:se,setup(r){const f=()=>{const{onClose:o}=r;o&&re(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:m}=Z(r),s=x("Card","-card",ae,te,r,e),p=ee("Card",m,e),g=u(()=>{const{size:o}=r,{self:{color:v,colorModal:z,colorTarget:C,textColor:y,titleTextColor:S,titleFontWeight:k,borderColor:$,actionColor:w,borderRadius:T,lineHeight:_,closeIconColor:B,closeIconColorHover:R,closeIconColorPressed:P,closeColorHover:E,closeColorPressed:O,closeBorderRadius:j,closeIconSize:I,closeSize:M,boxShadow:F,colorPopover:H,colorEmbedded:A,colorEmbeddedModal:N,colorEmbeddedPopover:V,[h("padding",o)]:L,[h("fontSize",o)]:W,[h("titleFontSize",o)]:D},common:{cubicBezierEaseInOut:J}}=s.value,{top:K,left:q,bottom:G}=ne(L);return{"--n-bezier":J,"--n-border-radius":T,"--n-color":v,"--n-color-modal":z,"--n-color-popover":H,"--n-color-embedded":A,"--n-color-embedded-modal":N,"--n-color-embedded-popover":V,"--n-color-target":C,"--n-text-color":y,"--n-line-height":_,"--n-action-color":w,"--n-title-text-color":S,"--n-title-font-weight":k,"--n-close-icon-color":B,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":P,"--n-close-color-hover":E,"--n-close-color-pressed":O,"--n-border-color":$,"--n-box-shadow":F,"--n-padding-top":K,"--n-padding-bottom":G,"--n-padding-left":q,"--n-font-size":W,"--n-title-font-size":D,"--n-close-size":M,"--n-close-icon-size":I,"--n-close-border-radius":j}}),d=b?oe("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:s,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:r,bordered:f,hoverable:b,mergedClsPrefix:e,rtlEnabled:m,onRender:s,embedded:p,tag:g,$slots:d}=this;return s==null||s(),l(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:m,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:f,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,o=>o&&l("div",{class:`${e}-card-cover`,role:"none"},o)),i(d.header,o=>o||this.title||this.closable?l("div",{class:`${e}-card-header`,style:this.headerStyle},l("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(d["header-extra"],v=>v&&l("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?l(de,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,o=>o&&l("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},o)),i(d.footer,o=>o&&[l("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},o)]),i(d.action,o=>o&&l("div",{class:`${e}-card__action`,role:"none"},o)))}});export{ce as N};
