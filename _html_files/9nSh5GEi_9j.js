if (self.CavalryLogger) { CavalryLogger.start_js(["WwaSf"]); }

__d("CometOnBlueHeroTracingBootstrap",["performanceNow","uuid"],(function(a,b,c,d,e,f){"use strict";f.startInteraction=a;f.inject=c;var g,h=[],i=null;function a(a){var c,d=b("uuid")();c=(c=a.startTime)!=null?c:(g||(g=b("performanceNow")))();c={interactionID:d,startTime:c,tracePolicy:(c=a.tracePolicy)!=null?c:a.moduleID!=null?"comet_on_blue."+a.moduleID:null,traceType:a.traceType};if(i)return i(c);h.push(c);return d}function c(a){if(i)return;i=a;h.forEach(function(b){return a(b)})}}),null);
__d("LoadingMarker.react",["requireCond","LoadingMarkerGated","React","cr:1609270"],(function(a,b,c,d,e,f){"use strict";b("React");function a(a){return a.children}c=b("LoadingMarkerGated").component||a;b("cr:1609270")!=null&&(c=b("cr:1609270")(c));e.exports=c}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("prop-types/prop-types",["prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret","fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["prop-types/prop-types","ReactFbPropTypes"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);
__d("XUISpinner.react",["cx","fbt","BrowserSupport","LoadingMarker.react","React","UserAgent","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React"),j=b("BrowserSupport").hasCSSAnimations()&&!(b("UserAgent").isEngine("Trident < 6")||b("UserAgent").isEngine("Gecko < 39")||b("UserAgent").isBrowser("Safari < 6"));a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.showOnAsync,d=a.background,e=a.paused;a=babelHelpers.objectWithoutPropertiesLoose(a,["showOnAsync","background","paused"]);d="img _55ym"+(this.props.size=="small"?" _55yn":"")+(this.props.size=="large"?" _55yq":"")+(d=="light"?" _55yo":"")+(d=="dark"?" _55yp":"")+(c?" _5tqs":"")+(j?"":" _5d9-")+(j&&e?" _2y32":"");return i.jsx(b("LoadingMarker.react"),{children:i.jsx("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,d),role:"progressbar","aria-valuetext":h._("Laddar ..."),"aria-busy":"true","aria-valuemin":"0","aria-valuemax":"100"}))})};return c}(i.Component);a.propTypes={paused:b("prop-types").bool,showOnAsync:b("prop-types").bool,size:b("prop-types").oneOf(["small","large"]),background:b("prop-types").oneOf(["light","dark"])};a.defaultProps={showOnAsync:!1,size:"small",background:"light"};e.exports=a}),null);
__d("EventListenerImplForBlue",["Event","TimeSlice","emptyFunction","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f){function g(a,c,d,e){var f=b("TimeSlice").guard(d,"EventListener capture "+c);if(a.addEventListener){a.addEventListener(c,f,e);return{remove:function(){a.removeEventListener(c,f,e)}}}else return{remove:b("emptyFunction")}}a={listen:function(a,c,d){return b("Event").listen(a,c,d)},capture:function(a,b,c){return g(a,b,c,!0)},captureWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{passive:d,capture:!0})},bubbleWithPassiveFlag:function(a,b,c,d){return g(a,b,c,{passive:d,capture:!1})},registerDefault:function(a,c){var d,e=b("Event").listen(document.documentElement,a,f,b("Event").Priority._BUBBLE);function f(){g(),d=b("Event").listen(document,a,c),b("setImmediateAcrossTransitions")(g)}function g(){d&&d.remove(),d=null}return{remove:function(){g(),e&&e.remove(),e=null}}},suppress:function(a){b("Event").kill(a)}};c=a;e.exports=c}),null);
__d("WarningFilter",["CoreWarningGK"],(function(a,b,c,d,e,f){var g=21;b=a;c=function(){return{}};function a(a){return{finalFormat:a,forceDialogImmediately:!1,monitorEvent:null,monitorListVersion:g,monitorSampleRate:1,suppressCompletely:!1,suppressDialog_LEGACY:!0}}e.exports={prepareWarning:b,getReactWarnings:c}}),null);
__d("warningBlue",["requireCond","Bootloader","SiteData","WarningFilter","cr:983844"],(function(a,b,c,d,e,f){c=b("WarningFilter").prepareWarning;function a(a,b){}d=a;e.exports=d}),null);
__d("ProfilePhotoPresenceGreenDot.react",["cx","React","SubscriptionsHandler","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("requireDeferred")("PresenceStatus");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={status:0},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(i.onReady(function(b){var c=function(){a.setState({status:b.get(a.props.profileID)})};a.$1.addSubscriptions(b.subscribe("change",c));c()}))};d.componentWillUnmount=function(){this.$1.release()};d.render=function(){return this.state.status===2?h.jsx("div",{className:"_354z"}):null};return c}(h.Component);e.exports=a}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","PageEvents","ReactDOM","emptyFunction","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey(2966,"core.www.react_component_register_unmount",a+"."+c)}function a(a,c){function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;e?k("contextual_component","not_found_fallback"):k("arbiter","default");var f=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();f.unsubscribe()})}}),null);
__d("unmountConcurrentComponentOnTransition",["Arbiter","PageEvents"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c){var d=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(b,e){b=e.canvasID;if(b!=="content"&&b!=="content_container")return;a.unmount(c);d.unsubscribe()})}}),null);
__d("ReactFiberErrorDialog",["requireCond","ErrorNormalizeUtils","ErrorPubSub","LogHistory","getErrorSafe"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){var c=a.componentStack,d=a.errorBoundary,e=b("getErrorSafe")(a.error);e.componentStack=a.componentStack;if(d!=null&&d.suppressReactDefaultErrorLogging)return!1;a=b("LogHistory").getInstance("react_fiber_error_logger");a.error("capturedError",JSON.stringify({componentStack:c,error:{name:e.name,message:e.message,stack:e.stack}}));d=b("ErrorNormalizeUtils").normalizeError(e);d.loggingSource="REACT_FIBER";(g||(g=b("ErrorPubSub"))).reportNormalizedError(d);return!1}e.exports={showErrorDialog:a}}),null);
__d("EventListener",["requireCond","cr:1353359"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1353359");e.exports=a}),null);
__d("isKeyActivation",["Keys"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=0,d=a.charCode;a=a.keyCode;d!=null&&d!==0?c=d:a!=null&&a!==0&&(c=a);return[b("Keys").RETURN,b("Keys").SPACE].includes(c)}}),null);
__d("KeyActivationToClickHOC.react",["React","isKeyActivation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c,d;return d=c=function(c){babelHelpers.inheritsLoose(d,c);function d(){var a;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];a=c.call.apply(c,[this].concat(e))||this;a.$2=function(c){b("isKeyActivation")(c)&&(c.preventDefault(),c.stopPropagation(),a.$1&&a.$1.click())};a.$3=function(b){a.$1=b};a.$1=null;return a}var e=d.prototype;e.render=function(){return g.jsx(a,babelHelpers["extends"]({},this.props,{keyActivationToClickEvent:this.$2,keyActivationToClickRef:this.$3}))};return d}(g.Component),c.displayName="KeyActivationToClickHOC",d}}),null);
__d("getOwnObjectValues",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return Object.keys(a).map(function(b){return a[b]})}}),null);
__d("ShimButton.react",["KeyActivationToClickHOC.react","React","emptyFunction","killswitch","prop-types"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.keyActivationToClickRef(a),c.props.onRef(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.form,e=a.inline,f=a.keyActivationToClickEvent;a.keyActivationToClickRef;a.onRef;var h=a.pressed;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","form","inline","keyActivationToClickEvent","keyActivationToClickRef","onRef","pressed"]);e=e?"span":"div";d==="link"&&(e="a");f=(d={},d[b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS")?"onKeyPress":"onKeyDown"]=f,d);return g.jsx(e,babelHelpers["extends"]({},a,{"aria-pressed":h,ref:this.$1,role:"button"},f,{children:c}))};return c}(g.Component);a.defaultProps={form:"none",inline:!1,keyActivationToClickEvent:c=b("emptyFunction"),keyActivationToClickRef:c,onClick:c,onRef:c,tabIndex:"0"};a.propTypes={children:(d=b("prop-types")).any,form:d.oneOf(["none","link"]),inline:d.bool,tabIndex:d.oneOf(["-1","0",-1,0]),onClick:d.func,onRef:d.func};e.exports=b("KeyActivationToClickHOC.react")(a)}),null);
__d("objectValues",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return Object.values(a)}}),null);
__d("ImmutableValue",["invariant","isNode"],(function(a,b,c,d,e,f,g){"use strict";var h="_DONT_EVER_TYPE_THIS_SECRET_KEY";a=function(){function a(b){b===a[h]||g(0,5608)}a.mergeAllPropertiesInto=function(a,b){var c=b.length;for(var d=0;d<c;d++)Object.assign(a,b[d])};a.deepFreezeRootNode=function(c){if(b("isNode")(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.recurseDeepFreeze=function(c){if(b("isNode")(c)||!a.shouldRecurseFreeze(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.shouldRecurseFreeze=function(b){return typeof b==="object"&&!(b instanceof a)&&b!==null};return a}();e.exports=a;a._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random()}),null);
__d("mergeHelpers",["invariant","FbtResultBase"],(function(a,b,c,d,e,f,g){"use strict";var h=36,i=function(a){return typeof a!=="object"||a instanceof Date||a===null||a instanceof b("FbtResultBase")},j={MAX_MERGE_DEPTH:h,isTerminal:i,normalizeMergeArg:function(a){return a==null?{}:a},checkMergeArrayArgs:function(a,b){Array.isArray(a)&&Array.isArray(b)||g(0,3714,a,b)},checkMergeObjectArgs:function(a,b){j.checkMergeObjectArg(a),j.checkMergeObjectArg(b)},checkMergeObjectArg:function(a){!i(a)&&!Array.isArray(a)||g(0,3715,a)},checkMergeIntoObjectArg:function(a){(!i(a)||typeof a==="function")&&!Array.isArray(a)||g(0,3716,a)},checkMergeLevel:function(a){a<h||g(0,3717)},checkArrayStrategy:function(a){a==null||a in j.ArrayStrategies||g(0,3718)},ArrayStrategies:{Clobber:"Clobber",Concat:"Concat",IndexByIndex:"IndexByIndex"}};a=j;e.exports=a}),null);
__d("ImmutableObject",["invariant","ImmutableValue","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";var h=b("mergeHelpers").checkMergeObjectArgs,i=b("mergeHelpers").isTerminal,j="_DONT_EVER_TYPE_THIS_SECRET_KEY";function k(a){a instanceof b("ImmutableValue")||g(0,3884)}var l=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a;a=c.call(this,b("ImmutableValue")[j])||this;b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a),arguments);return a}a.set=function(b,c){k(b);typeof c==="object"&&c!==void 0&&!Array.isArray(c)||g(0,3885);return new a(b,c)};a.setProperty=function(b,c,d){var e={};e[c]=d;return a.set(b,e)};a.deleteProperty=function(b,c){var d={};for(var e in b)e!==c&&Object.prototype.hasOwnProperty.call(b,e)&&(d[e]=b[e]);return new a(d)};a.setDeep=function(a,b){k(a);return m(a,b)};a.values=function(a){return Object.keys(a).map(function(b){return a[b]})};return a}(b("ImmutableValue"));function m(a,c){h(a,c);var d={},e=Object.keys(a);for(var f=0;f<e.length;f++){var g=e[f];!Object.prototype.hasOwnProperty.call(c,g)?d[g]=a[g]:i(a[g])||i(c[g])?d[g]=c[g]:d[g]=m(a[g],c[g])}g=Object.keys(c);for(f=0;f<g.length;f++){e=g[f];if(Object.prototype.hasOwnProperty.call(a,e))continue;d[e]=c[e]}return a instanceof b("ImmutableValue")?new l(d):c instanceof b("ImmutableValue")?new l(d):d}e.exports=l}),null);
__d("ReactXHPContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);d=c;e.exports=d}),null);
__d("ReactRenderer",["invariant","CometOnBlueHeroTracingBootstrap","React","ReactDOM","ReactXHPContext","$","gkx","nullthrows","unmountComponentOnTransition","unmountConcurrentComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=8;function j(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function k(a,c,d){c=b("ReactDOM").createRoot(c);a=c.render(a,d);b("unmountConcurrentComponentOnTransition")(c);return a}function l(a,c,d){c=b("ReactDOM").createRoot(c);return c.render(a,d)}function m(a,b,c,d){a=h.createElement(a,b);return j(a,c,d)}function n(a,b,c,d){a=h.createElement(a,b);return o(a,c,d)}function o(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return m(a,c,b("$")(d),e)}function c(a,c,d,e){return n(a,c,b("$")(d),e)}function p(a,c,d,e,f,g,i,m,n,p){i=f?f.getContextProvider():null;var r=null;(b("gkx")("1223330")||p!=null)&&(r=b("CometOnBlueHeroTracingBootstrap").startInteraction({moduleID:n,tracePolicy:p,traceType:"INITIAL_LOAD"}));n=h.jsx(b("ReactXHPContext").Provider,{value:{interactionID:r,bigPipeContext:g},children:a});i&&(n=h.jsx(i,{value:f,children:n}));p=m===!0?d?l:k:d?o:j;if(e){r=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return p(n,r)}g=document.createComment(" react-mount-point-unstable ");q(c,g);return p(n,g)}function d(a){var b=a.concurrent_UNSTABLE,c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings,i=a.preloader,j=a.bigPipeContext,k=a.lid,l=a.moduleID;a=a.tracePolicy;return p(h.createElement(c,d),e,f,g,i,j,k,b,l,a)}function q(a,c){a.tagName==="NOSCRIPT"||g(0,3540);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===i&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===i&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:j,constructAndRenderComponent:m,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:n,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:d,constructAndRenderElementIntoComment_DO_NOT_USE:p,constructAndRenderComponent_DEPRECATED:n,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("object-assign",[],(function(a,b,c,d,e,f){e.exports=Object.assign}),null);
__d("scheduler",["SchedulerFb-Internals_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerFb-Internals_DO_NOT_USE")}),null);
__d("ReactFeatureFlags",["TrustedTypesConfig","gkx"],(function(a,b,c,d,e,f){"use strict";c={enableFilterEmptyStringAttributesDOM:(a=b("gkx"))("1399218"),debugRenderPhaseSideEffectsForStrictMode:a("729630"),disableModulePatternComponents:a("1381768"),disableInputAttributeSyncing:a("729631"),disableOnScrollBubbling:a("1620803"),enableTrustedTypesIntegration:b("TrustedTypesConfig").useTrustedTypes,warnAboutShorthandPropertyCollision:a("1281505"),disableSchedulerTimeoutBasedOnReactExpirationTime:a("1291023"),warnAboutSpreadingKeyToJSX:a("1294182"),enableLegacyFBSupport:a("1401060"),enableComponentStackLocations:!0,disableHiddenPropDeprioritization:a("1485055"),decoupleUpdatePriorityFromScheduler:a("1584797"),enableSchedulingProfilerComponentStacks:a("1647260"),enableFormEventDelegation:a("1597642"),enableEagerRootListeners:a("1694494"),enablePassiveEventIntervention:a("1694494"),disableSchedulerTimeoutInWorkLoop:a("1695831")};e.exports=c}),null);
__d("SchedulerTracing-dev.classic",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("SchedulerTracing",["requireCond","SchedulerTracing-dev.classic","cr:1292369"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1292369");e.exports=a}),null);
__d("scheduler/tracing",["SchedulerTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerTracing")}),null);
__d("ReactCurrentOwner",[],(function(a,b,c,d,e,f){"use strict";a={current:null};e.exports=a}),null);
__d("ReactDOM.classic",["requireCond","cr:1344485"],(function(a,b,c,d,e,f){e.exports=b("cr:1344485")}),null);
__d("ReactDOM.classic.prod-or-profiling",["requireCond","cr:1344486"],(function(a,b,c,d,e,f){e.exports=b("cr:1344486")}),null);
__d("ReactFbErrorUtils",["ErrorGuard","TimeSlice"],(function(a,b,c,d,e,f){f.invokeGuardedCallback=a;f.wrapEventListener=c;var g;function a(a,c,d,e,f,h,i,j,k){var l=Array.prototype.slice.call(arguments,3),m=this.onError;try{(g||(g=b("ErrorGuard"))).applyWithGuard(c,d,l,{onError:m,name:a})}catch(a){m(a)}}function c(a,c){return b("TimeSlice").guard(c,a)}}),null);