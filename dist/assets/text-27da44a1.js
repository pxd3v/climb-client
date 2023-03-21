import{y as z,B as Fe,bc as un,d as k,p as o,bq as cn,s as w,I as M,_ as v,ag as hn,br as Re,z as ge,aa as fn,P as X,R as ae,ab as vn,q as mn,r as C,h as pe,bs as gn,J as P,K as U,t as ke,v as oe,bt as pn,L as bn,Y as yn,Z as Pe,o as wn,aq as xn,M as Se,H as Cn,O as Pn,A as _e,a0 as te,a2 as Sn,Q as Mn,ad as zn,bu as Tn,D as Me,n as ze,T as re,aB as An,C as S,l as Te,bv as Fn}from"./index-356ebbb4.js";function Rn(t,a){return z(()=>{for(const r of a)if(t[r]!==void 0)return t[r];return t[a[a.length-1]]})}const kn={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},_n=kn;function me(t){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.width?String(a.width):t.defaultWidth,s=t.formats[r]||t.formats[t.defaultWidth];return s}}function q(t){return function(a,r){var s=r!=null&&r.context?String(r.context):"standalone",m;if(s==="formatting"&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):i;m=t.formattingValues[u]||t.formattingValues[i]}else{var d=t.defaultWidth,f=r!=null&&r.width?String(r.width):t.defaultWidth;m=t.values[f]||t.values[d]}var c=t.argumentCallback?t.argumentCallback(a):a;return m[c]}}function K(t){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.width,m=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],i=a.match(m);if(!i)return null;var u=i[0],d=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(d)?$n(d,function(g){return g.test(u)}):Dn(d,function(g){return g.test(u)}),c;c=t.valueCallback?t.valueCallback(f):f,c=r.valueCallback?r.valueCallback(c):c;var h=a.slice(u.length);return{value:c,rest:h}}}function Dn(t,a){for(var r in t)if(t.hasOwnProperty(r)&&a(t[r]))return r}function $n(t,a){for(var r=0;r<t.length;r++)if(a(t[r]))return r}function Bn(t){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.match(t.matchPattern);if(!s)return null;var m=s[0],i=a.match(t.parsePattern);if(!i)return null;var u=t.valueCallback?t.valueCallback(i[0]):i[0];u=r.valueCallback?r.valueCallback(u):u;var d=a.slice(m.length);return{value:u,rest:d}}}var Wn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},En=function(a,r,s){var m,i=Wn[a];return typeof i=="string"?m=i:r===1?m=i.one:m=i.other.replace("{{count}}",r.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+m:m+" ago":m};const In=En;var Vn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ln={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Nn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},On={date:me({formats:Vn,defaultWidth:"full"}),time:me({formats:Ln,defaultWidth:"full"}),dateTime:me({formats:Nn,defaultWidth:"full"})};const jn=On;var Hn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Un=function(a,r,s,m){return Hn[a]};const qn=Un;var Kn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Xn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Yn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Jn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Zn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Qn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Gn=function(a,r){var s=Number(a),m=s%100;if(m>20||m<10)switch(m%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},er={ordinalNumber:Gn,era:q({values:Kn,defaultWidth:"wide"}),quarter:q({values:Xn,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:q({values:Yn,defaultWidth:"wide"}),day:q({values:Jn,defaultWidth:"wide"}),dayPeriod:q({values:Zn,defaultWidth:"wide",formattingValues:Qn,defaultFormattingWidth:"wide"})};const tr=er;var nr=/^(\d+)(th|st|nd|rd)?/i,rr=/\d+/i,ar={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},or={any:[/^b/i,/^(a|c)/i]},ir={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},lr={any:[/1/i,/2/i,/3/i,/4/i]},sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},dr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ur={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},cr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},fr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vr={ordinalNumber:Bn({matchPattern:nr,parsePattern:rr,valueCallback:function(a){return parseInt(a,10)}}),era:K({matchPatterns:ar,defaultMatchWidth:"wide",parsePatterns:or,defaultParseWidth:"any"}),quarter:K({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:K({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:dr,defaultParseWidth:"any"}),day:K({matchPatterns:ur,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:hr,defaultMatchWidth:"any",parsePatterns:fr,defaultParseWidth:"any"})};const mr=vr;var gr={code:"en-US",formatDistance:In,formatLong:jn,formatRelative:qn,localize:tr,match:mr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const pr=gr,br={name:"en-US",locale:pr},yr=br;function wr(t){const{mergedLocaleRef:a,mergedDateLocaleRef:r}=Fe(un,null)||{},s=z(()=>{var i,u;return(u=(i=a==null?void 0:a.value)===null||i===void 0?void 0:i[t])!==null&&u!==void 0?u:_n[t]});return{dateLocaleRef:z(()=>{var i;return(i=r==null?void 0:r.value)!==null&&i!==void 0?i:yr}),localeRef:s}}const xr=k({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Cr=k({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Pr=k({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Sr=cn("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Mr=w("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[M(">",[v("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[M("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),M("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),v("placeholder",`
 display: flex;
 `),v("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[hn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),be=k({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Re("-base-clear",Mr,ge(t,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:t}=this;return o("div",{class:`${t}-base-clear`},o(fn,null,{default:()=>{var a,r;return this.show?o("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},X(this.$slots.icon,()=>[o(ae,{clsPrefix:t},{default:()=>o(Sr,null)})])):o("div",{key:"icon",class:`${t}-base-clear__placeholder`},(r=(a=this.$slots).placeholder)===null||r===void 0?void 0:r.call(a))}}))}}),zr=k({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:a}){return()=>{const{clsPrefix:r}=t;return o(vn,{clsPrefix:r,class:`${r}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?o(be,{clsPrefix:r,show:t.showClear,onClear:t.onClear},{placeholder:()=>o(ae,{clsPrefix:r,class:`${r}-base-suffix__arrow`},{default:()=>X(a.default,()=>[o(Pr,null)])})}):null})}}}),De=mn("n-input");function Tr(t){let a=0;for(const r of t)a++;return a}function ne(t){return t===""||t==null}function Ar(t){const a=C(null);function r(){const{value:i}=t;if(!(i!=null&&i.focus)){m();return}const{selectionStart:u,selectionEnd:d,value:f}=i;if(u==null||d==null){m();return}a.value={start:u,end:d,beforeText:f.slice(0,u),afterText:f.slice(d)}}function s(){var i;const{value:u}=a,{value:d}=t;if(!u||!d)return;const{value:f}=d,{start:c,beforeText:h,afterText:g}=u;let x=f.length;if(f.endsWith(g))x=f.length-g.length;else if(f.startsWith(h))x=h.length;else{const F=h[c-1],T=f.indexOf(F,c-1);T!==-1&&(x=T+1)}(i=d.setSelectionRange)===null||i===void 0||i.call(d,x,x)}function m(){a.value=null}return pe(t,m),{recordCursor:r,restoreCursor:s}}const Ae=k({name:"InputWordCount",setup(t,{slots:a}){const{mergedValueRef:r,maxlengthRef:s,mergedClsPrefixRef:m,countGraphemesRef:i}=Fe(De),u=z(()=>{const{value:d}=r;return d===null||Array.isArray(d)?0:(i.value||Tr)(d)});return()=>{const{value:d}=s,{value:f}=r;return o("span",{class:`${m.value}-input-word-count`},gn(a.default,{value:f===null||Array.isArray(f)?"":f},()=>[d===void 0?u.value:`${u.value} / ${d}`]))}}}),Fr=w("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[v("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),v("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),v("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),M("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),M("&:-webkit-autofill ~",[v("placeholder","display: none;")])]),P("round",[U("textarea","border-radius: calc(var(--n-height) / 2);")]),v("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[M("span",`
 width: 100%;
 display: inline-block;
 `)]),P("textarea",[v("placeholder","overflow: visible;")]),U("autosize","width: 100%;"),P("autosize",[v("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),w("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),v("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),v("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[M("+",[v("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),U("textarea",[v("placeholder","white-space: nowrap;")]),v("eye",`
 transition: color .3s var(--n-bezier);
 `),P("textarea","width: 100%;",[w("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),P("resizable",[w("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),v("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),v("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),P("pair",[v("input-el, placeholder","text-align: center;"),v("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[w("icon",`
 color: var(--n-icon-color);
 `),w("base-icon",`
 color: var(--n-icon-color);
 `)])]),P("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[v("border","border: var(--n-border-disabled);"),v("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),v("placeholder","color: var(--n-placeholder-color-disabled);"),v("separator","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),w("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),v("suffix, prefix","color: var(--n-text-color-disabled);",[w("icon",`
 color: var(--n-icon-color-disabled);
 `),w("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),U("disabled",[v("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[M("&:hover",`
 color: var(--n-icon-color-hover);
 `),M("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),M("&:hover",[v("state-border","border: var(--n-border-hover);")]),P("focus","background-color: var(--n-color-focus);",[v("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),v("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),v("state-border",`
 border-color: #0000;
 z-index: 1;
 `),v("prefix","margin-right: 4px;"),v("suffix",`
 margin-left: 4px;
 `),v("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[w("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),w("base-clear",`
 font-size: var(--n-icon-size);
 `,[v("placeholder",[w("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),M(">",[w("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),w("base-icon",`
 font-size: var(--n-icon-size);
 `)]),w("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>P(`${t}-status`,[U("disabled",[w("base-loading",`
 color: var(--n-loading-color-${t})
 `),v("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),v("state-border",`
 border: var(--n-border-${t});
 `),M("&:hover",[v("state-border",`
 border: var(--n-border-hover-${t});
 `)]),M("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),P("focus",`
 background-color: var(--n-color-focus-${t});
 `,[v("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Rr=w("input",[P("disabled",[v("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),kr=Object.assign(Object.assign({},oe.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Br=k({name:"Input",props:kr,setup(t){const{mergedClsPrefixRef:a,mergedBorderedRef:r,inlineThemeDisabled:s,mergedRtlRef:m}=ke(t),i=oe("Input","-input",Fr,Tn,t,a);pn&&Re("-input-safari",Rr,a);const u=C(null),d=C(null),f=C(null),c=C(null),h=C(null),g=C(null),x=C(null),F=Ar(x),T=C(null),{localeRef:ie}=wr("Input"),B=C(t.defaultValue),$e=ge(t,"value"),A=bn($e,B),V=yn(t),{mergedSizeRef:le,mergedDisabledRef:W,mergedStatusRef:Be}=V,E=C(!1),L=C(!1),R=C(!1),N=C(!1);let se=null;const de=z(()=>{const{placeholder:e,pair:n}=t;return n?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[ie.value.placeholder]:[e]}),We=z(()=>{const{value:e}=R,{value:n}=A,{value:l}=de;return!e&&(ne(n)||Array.isArray(n)&&ne(n[0]))&&l[0]}),Ee=z(()=>{const{value:e}=R,{value:n}=A,{value:l}=de;return!e&&l[1]&&(ne(n)||Array.isArray(n)&&ne(n[1]))}),ue=Pe(()=>t.internalForceFocus||E.value),Ie=Pe(()=>{if(W.value||t.readonly||!t.clearable||!ue.value&&!L.value)return!1;const{value:e}=A,{value:n}=ue;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(L.value||n):!!e&&(L.value||n)}),ce=z(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),O=C(!1),Ve=z(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(n=>({textDecoration:n})):[{textDecoration:e}]:["",""]}),ye=C(void 0),Le=()=>{var e,n;if(t.type==="textarea"){const{autosize:l}=t;if(l&&(ye.value=(n=(e=T.value)===null||e===void 0?void 0:e.$el)===null||n===void 0?void 0:n.offsetWidth),!d.value||typeof l=="boolean")return;const{paddingTop:b,paddingBottom:y,lineHeight:p}=window.getComputedStyle(d.value),_=Number(b.slice(0,-2)),D=Number(y.slice(0,-2)),$=Number(p.slice(0,-2)),{value:j}=f;if(!j)return;if(l.minRows){const H=Math.max(l.minRows,1),ve=`${_+D+$*H}px`;j.style.minHeight=ve}if(l.maxRows){const H=`${_+D+$*l.maxRows}px`;j.style.maxHeight=H}}},Ne=z(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});wn(()=>{const{value:e}=A;Array.isArray(e)||fe(e)});const Oe=xn().proxy;function Y(e){const{onUpdateValue:n,"onUpdate:value":l,onInput:b}=t,{nTriggerFormInput:y}=V;n&&S(n,e),l&&S(l,e),b&&S(b,e),B.value=e,y()}function J(e){const{onChange:n}=t,{nTriggerFormChange:l}=V;n&&S(n,e),B.value=e,l()}function je(e){const{onBlur:n}=t,{nTriggerFormBlur:l}=V;n&&S(n,e),l()}function He(e){const{onFocus:n}=t,{nTriggerFormFocus:l}=V;n&&S(n,e),l()}function Ue(e){const{onClear:n}=t;n&&S(n,e)}function qe(e){const{onInputBlur:n}=t;n&&S(n,e)}function Ke(e){const{onInputFocus:n}=t;n&&S(n,e)}function Xe(){const{onDeactivate:e}=t;e&&S(e)}function Ye(){const{onActivate:e}=t;e&&S(e)}function Je(e){const{onClick:n}=t;n&&S(n,e)}function Ze(e){const{onWrapperFocus:n}=t;n&&S(n,e)}function Qe(e){const{onWrapperBlur:n}=t;n&&S(n,e)}function Ge(){R.value=!0}function et(e){R.value=!1,e.target===g.value?Z(e,1):Z(e,0)}function Z(e,n=0,l="input"){const b=e.target.value;if(fe(b),e instanceof InputEvent&&!e.isComposing&&(R.value=!1),t.type==="textarea"){const{value:p}=T;p&&p.syncUnifiedContainer()}if(se=b,R.value)return;F.recordCursor();const y=tt(b);if(y)if(!t.pair)l==="input"?Y(b):J(b);else{let{value:p}=A;Array.isArray(p)?p=[p[0],p[1]]:p=["",""],p[n]=b,l==="input"?Y(p):J(p)}Oe.$forceUpdate(),y||Me(F.restoreCursor)}function tt(e){const{countGraphemes:n,maxlength:l,minlength:b}=t;if(n){let p;if(l!==void 0&&(p===void 0&&(p=n(e)),p>Number(l))||b!==void 0&&(p===void 0&&(p=n(e)),p<Number(l)))return!1}const{allowInput:y}=t;return typeof y=="function"?y(e):!0}function nt(e){qe(e),e.relatedTarget===u.value&&Xe(),e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===g.value||e.relatedTarget===d.value)||(N.value=!1),Q(e,"blur"),x.value=null}function rt(e,n){Ke(e),E.value=!0,N.value=!0,Ye(),Q(e,"focus"),n===0?x.value=h.value:n===1?x.value=g.value:n===2&&(x.value=d.value)}function at(e){t.passivelyActivated&&(Qe(e),Q(e,"blur"))}function ot(e){t.passivelyActivated&&(E.value=!0,Ze(e),Q(e,"focus"))}function Q(e,n){e.relatedTarget!==null&&(e.relatedTarget===h.value||e.relatedTarget===g.value||e.relatedTarget===d.value||e.relatedTarget===u.value)||(n==="focus"?(He(e),E.value=!0):n==="blur"&&(je(e),E.value=!1))}function it(e,n){Z(e,n,"change")}function lt(e){Je(e)}function st(e){Ue(e),t.pair?(Y(["",""]),J(["",""])):(Y(""),J(""))}function dt(e){const{onMousedown:n}=t;n&&n(e);const{tagName:l}=e.target;if(l!=="INPUT"&&l!=="TEXTAREA"){if(t.resizable){const{value:b}=u;if(b){const{left:y,top:p,width:_,height:D}=b.getBoundingClientRect(),$=14;if(y+_-$<e.clientX&&e.clientX<y+_&&p+D-$<e.clientY&&e.clientY<p+D)return}}e.preventDefault(),E.value||we()}}function ut(){var e;L.value=!0,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ct(){var e;L.value=!1,t.type==="textarea"&&((e=T.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ht(){W.value||ce.value==="click"&&(O.value=!O.value)}function ft(e){if(W.value)return;e.preventDefault();const n=b=>{b.preventDefault(),Te("mouseup",document,n)};if(ze("mouseup",document,n),ce.value!=="mousedown")return;O.value=!0;const l=()=>{O.value=!1,Te("mouseup",document,l)};ze("mouseup",document,l)}function vt(e){var n;switch((n=t.onKeydown)===null||n===void 0||n.call(t,e),e.key){case"Escape":he();break;case"Enter":mt(e);break}}function mt(e){var n,l;if(t.passivelyActivated){const{value:b}=N;if(b){t.internalDeactivateOnEnter&&he();return}e.preventDefault(),t.type==="textarea"?(n=d.value)===null||n===void 0||n.focus():(l=h.value)===null||l===void 0||l.focus()}}function he(){t.passivelyActivated&&(N.value=!1,Me(()=>{var e;(e=u.value)===null||e===void 0||e.focus()}))}function we(){var e,n,l;W.value||(t.passivelyActivated?(e=u.value)===null||e===void 0||e.focus():((n=d.value)===null||n===void 0||n.focus(),(l=h.value)===null||l===void 0||l.focus()))}function gt(){var e;!((e=u.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function pt(){var e,n;(e=d.value)===null||e===void 0||e.select(),(n=h.value)===null||n===void 0||n.select()}function bt(){W.value||(d.value?d.value.focus():h.value&&h.value.focus())}function yt(){const{value:e}=u;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&he()}function wt(e){if(t.type==="textarea"){const{value:n}=d;n==null||n.scrollTo(e)}else{const{value:n}=h;n==null||n.scrollTo(e)}}function fe(e){const{type:n,pair:l,autosize:b}=t;if(!l&&b)if(n==="textarea"){const{value:y}=f;y&&(y.textContent=(e??"")+`\r
`)}else{const{value:y}=c;y&&(e?y.textContent=e:y.innerHTML="&nbsp;")}}function xt(){Le()}const xe=C({top:"0"});function Ct(e){var n;const{scrollTop:l}=e.target;xe.value.top=`${-l}px`,(n=T.value)===null||n===void 0||n.syncUnifiedContainer()}let G=null;Se(()=>{const{autosize:e,type:n}=t;e&&n==="textarea"?G=pe(A,l=>{!Array.isArray(l)&&l!==se&&fe(l)}):G==null||G()});let ee=null;Se(()=>{t.type==="textarea"?ee=pe(A,e=>{var n;!Array.isArray(e)&&e!==se&&((n=T.value)===null||n===void 0||n.syncUnifiedContainer())}):ee==null||ee()}),Cn(De,{mergedValueRef:A,maxlengthRef:Ne,mergedClsPrefixRef:a,countGraphemesRef:ge(t,"countGraphemes")});const Pt={wrapperElRef:u,inputElRef:h,textareaElRef:d,isCompositing:R,focus:we,blur:gt,select:pt,deactivate:yt,activate:bt,scrollTo:wt},St=Pn("Input",m,a),Ce=z(()=>{const{value:e}=le,{common:{cubicBezierEaseInOut:n},self:{color:l,borderRadius:b,textColor:y,caretColor:p,caretColorError:_,caretColorWarning:D,textDecorationColor:$,border:j,borderDisabled:H,borderHover:ve,borderFocus:Mt,placeholderColor:zt,placeholderColorDisabled:Tt,lineHeightTextarea:At,colorDisabled:Ft,colorFocus:Rt,textColorDisabled:kt,boxShadowFocus:_t,iconSize:Dt,colorFocusWarning:$t,boxShadowFocusWarning:Bt,borderWarning:Wt,borderFocusWarning:Et,borderHoverWarning:It,colorFocusError:Vt,boxShadowFocusError:Lt,borderError:Nt,borderFocusError:Ot,borderHoverError:jt,clearSize:Ht,clearColor:Ut,clearColorHover:qt,clearColorPressed:Kt,iconColor:Xt,iconColorDisabled:Yt,suffixTextColor:Jt,countTextColor:Zt,countTextColorDisabled:Qt,iconColorHover:Gt,iconColorPressed:en,loadingColor:tn,loadingColorError:nn,loadingColorWarning:rn,[re("padding",e)]:an,[re("fontSize",e)]:on,[re("height",e)]:ln}}=i.value,{left:sn,right:dn}=An(an);return{"--n-bezier":n,"--n-count-text-color":Zt,"--n-count-text-color-disabled":Qt,"--n-color":l,"--n-font-size":on,"--n-border-radius":b,"--n-height":ln,"--n-padding-left":sn,"--n-padding-right":dn,"--n-text-color":y,"--n-caret-color":p,"--n-text-decoration-color":$,"--n-border":j,"--n-border-disabled":H,"--n-border-hover":ve,"--n-border-focus":Mt,"--n-placeholder-color":zt,"--n-placeholder-color-disabled":Tt,"--n-icon-size":Dt,"--n-line-height-textarea":At,"--n-color-disabled":Ft,"--n-color-focus":Rt,"--n-text-color-disabled":kt,"--n-box-shadow-focus":_t,"--n-loading-color":tn,"--n-caret-color-warning":D,"--n-color-focus-warning":$t,"--n-box-shadow-focus-warning":Bt,"--n-border-warning":Wt,"--n-border-focus-warning":Et,"--n-border-hover-warning":It,"--n-loading-color-warning":rn,"--n-caret-color-error":_,"--n-color-focus-error":Vt,"--n-box-shadow-focus-error":Lt,"--n-border-error":Nt,"--n-border-focus-error":Ot,"--n-border-hover-error":jt,"--n-loading-color-error":nn,"--n-clear-color":Ut,"--n-clear-size":Ht,"--n-clear-color-hover":qt,"--n-clear-color-pressed":Kt,"--n-icon-color":Xt,"--n-icon-color-hover":Gt,"--n-icon-color-pressed":en,"--n-icon-color-disabled":Yt,"--n-suffix-text-color":Jt}}),I=s?_e("input",z(()=>{const{value:e}=le;return e[0]}),Ce,t):void 0;return Object.assign(Object.assign({},Pt),{wrapperElRef:u,inputElRef:h,inputMirrorElRef:c,inputEl2Ref:g,textareaElRef:d,textareaMirrorElRef:f,textareaScrollbarInstRef:T,rtlEnabled:St,uncontrolledValue:B,mergedValue:A,passwordVisible:O,mergedPlaceholder:de,showPlaceholder1:We,showPlaceholder2:Ee,mergedFocus:ue,isComposing:R,activated:N,showClearButton:Ie,mergedSize:le,mergedDisabled:W,textDecorationStyle:Ve,mergedClsPrefix:a,mergedBordered:r,mergedShowPasswordOn:ce,placeholderStyle:xe,mergedStatus:Be,textAreaScrollContainerWidth:ye,handleTextAreaScroll:Ct,handleCompositionStart:Ge,handleCompositionEnd:et,handleInput:Z,handleInputBlur:nt,handleInputFocus:rt,handleWrapperBlur:at,handleWrapperFocus:ot,handleMouseEnter:ut,handleMouseLeave:ct,handleMouseDown:dt,handleChange:it,handleClick:lt,handleClear:st,handlePasswordToggleClick:ht,handlePasswordToggleMousedown:ft,handleWrapperKeydown:vt,handleTextAreaMirrorResize:xt,getTextareaScrollContainer:()=>d.value,mergedTheme:i,cssVars:s?void 0:Ce,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var t,a;const{mergedClsPrefix:r,mergedStatus:s,themeClass:m,type:i,countGraphemes:u,onRender:d}=this,f=this.$slots;return d==null||d(),o("div",{ref:"wrapperElRef",class:[`${r}-input`,m,s&&`${r}-input--${s}-status`,{[`${r}-input--rtl`]:this.rtlEnabled,[`${r}-input--disabled`]:this.mergedDisabled,[`${r}-input--textarea`]:i==="textarea",[`${r}-input--resizable`]:this.resizable&&!this.autosize,[`${r}-input--autosize`]:this.autosize,[`${r}-input--round`]:this.round&&i!=="textarea",[`${r}-input--pair`]:this.pair,[`${r}-input--focus`]:this.mergedFocus,[`${r}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${r}-input-wrapper`},te(f.prefix,c=>c&&o("div",{class:`${r}-input__prefix`},c)),i==="textarea"?o(Sn,{ref:"textareaScrollbarInstRef",class:`${r}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,h;const{textAreaScrollContainerWidth:g}=this,x={width:this.autosize&&g&&`${g}px`};return o(Mn,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${r}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(h=this.inputProps)===null||h===void 0?void 0:h.style,x],onBlur:this.handleInputBlur,onFocus:F=>this.handleInputFocus(F,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(zn,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${r}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${r}-input__input`},o("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${r}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,0),onInput:c=>this.handleInput(c,0),onChange:c=>this.handleChange(c,0)})),this.showPlaceholder1?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${r}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&te(f.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${r}-input__suffix`},[te(f["clear-icon-placeholder"],h=>(this.clearable||h)&&o(be,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>h,icon:()=>{var g,x;return(x=(g=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(g)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?o(zr,{clsPrefix:r,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?o(Ae,null,{default:h=>{var g;return(g=f.count)===null||g===void 0?void 0:g.call(f,h)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${r}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?X(f["password-visible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(xr,null)})]):X(f["password-invisible-icon"],()=>[o(ae,{clsPrefix:r},{default:()=>o(Cr,null)})])):null]):null)),this.pair?o("span",{class:`${r}-input__separator`},X(f.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${r}-input-wrapper`},o("div",{class:`${r}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${r}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,1),onInput:c=>this.handleInput(c,1),onChange:c=>this.handleChange(c,1)}),this.showPlaceholder2?o("div",{class:`${r}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),te(f.suffix,c=>(this.clearable||c)&&o("div",{class:`${r}-input__suffix`},[this.clearable&&o(be,{clsPrefix:r,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var h;return(h=f["clear-icon"])===null||h===void 0?void 0:h.call(f)},placeholder:()=>{var h;return(h=f["clear-icon-placeholder"])===null||h===void 0?void 0:h.call(f)}}),c]))):null,this.mergedBordered?o("div",{class:`${r}-input__border`}):null,this.mergedBordered?o("div",{class:`${r}-input__state-border`}):null,this.showCount&&i==="textarea"?o(Ae,null,{default:c=>{var h;const{renderCount:g}=this;return g?g(c):(h=f.count)===null||h===void 0?void 0:h.call(f,c)}}):null)}}),_r=w("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[P("strong",`
 font-weight: var(--n-font-weight-strong);
 `),P("italic",{fontStyle:"italic"}),P("underline",{textDecoration:"underline"}),P("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),Dr=Object.assign(Object.assign({},oe.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Wr=k({name:"Text",props:Dr,setup(t){const{mergedClsPrefixRef:a,inlineThemeDisabled:r}=ke(t),s=oe("Typography","-text",_r,Fn,t,a),m=z(()=>{const{depth:u,type:d}=t,f=d==="default"?u===void 0?"textColor":`textColor${u}Depth`:re("textColor",d),{common:{fontWeightStrong:c,fontFamilyMono:h,cubicBezierEaseInOut:g},self:{codeTextColor:x,codeBorderRadius:F,codeColor:T,codeBorder:ie,[f]:B}}=s.value;return{"--n-bezier":g,"--n-text-color":B,"--n-font-weight-strong":c,"--n-font-famliy-mono":h,"--n-code-border-radius":F,"--n-code-text-color":x,"--n-code-color":T,"--n-code-border":ie}}),i=r?_e("text",z(()=>`${t.type[0]}${t.depth||""}`),m,t):void 0;return{mergedClsPrefix:a,compitableTag:Rn(t,["as","tag"]),cssVars:r?void 0:m,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var t,a,r;const{mergedClsPrefix:s}=this;(t=this.onRender)===null||t===void 0||t.call(this);const m=[`${s}-text`,this.themeClass,{[`${s}-text--code`]:this.code,[`${s}-text--delete`]:this.delete,[`${s}-text--strong`]:this.strong,[`${s}-text--italic`]:this.italic,[`${s}-text--underline`]:this.underline}],i=(r=(a=this.$slots).default)===null||r===void 0?void 0:r.call(a);return this.code?o("code",{class:m,style:this.cssVars},this.delete?o("del",null,i):i):this.delete?o("del",{class:m,style:this.cssVars},i):o(this.compitableTag||"span",{class:m,style:this.cssVars},i)}});export{Pr as C,Wr as N,Br as a,Rn as b,zr as c,wr as u};
