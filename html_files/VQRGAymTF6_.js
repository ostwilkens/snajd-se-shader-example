if (self.CavalryLogger) { CavalryLogger.start_js(["Bkrcl"]); }

__d("CometInteractionSourceContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(10);e.exports=c}),null);
__d("CometPressableChildrenWithOverlay.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=a.children;a=a.overlay;return g.jsxs("div",{className:"iyyx5f41 l9j0dhe7 cebpdrjk bipmatt0 k5wvi7nf a8s20v7p k77z8yql qs9ysxi8 arfg74bv n00je7tq a6sixzi8 tojvnm2t",children:[b,a]})}}),null);
__d("CometVCTracker",["requireCond","cr:1642790"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1642790")}),null);
__d("CometTrackingNodeAbstractViewHierarchyWrapperContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(void 0);d=c;e.exports=d}),null);
__d("TrackingNodeConstants",[],(function(a,b,c,d,e,f){"use strict";a=58;f.BASE_CODE_START=a;b=126;f.BASE_CODE_END=b;c=69;f.BASE_CODE_SIZE=c;d=42;f.PREFIX_CODE_START=d;e=47;f.PREFIX_CODE_END=e;a=6;f.PREFIX_CODE_SIZE=a;b=100;f.ENCODE_NUMBER_MAX=b;c="__tn__";f.TN_URL_PARAM=c}),null);
__d("encodeTrackingNode",["TrackingNodeConstants"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c){var d=(a-1)%b("TrackingNodeConstants").BASE_CODE_SIZE,e=parseInt((a-1)/b("TrackingNodeConstants").BASE_CODE_SIZE,10);if(a<1||e>b("TrackingNodeConstants").PREFIX_CODE_SIZE)throw Error("Invalid tracking node: "+a);a="";e>0&&(a+=String.fromCharCode(e-1+b("TrackingNodeConstants").PREFIX_CODE_START));a+=String.fromCharCode(d+b("TrackingNodeConstants").BASE_CODE_START);c!==void 0&&c>0&&(c>10&&(a+="#"),a+=parseInt(Math.min(c,b("TrackingNodeConstants").ENCODE_NUMBER_MAX)-1,10));return a.replace("\\","\\\\")}}),null);
__d("useCometTrackingNodes",["CometTrackingNodesContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.useContext(b("CometTrackingNodesContext"))}}),null);
__d("CometTrackingNodeProvider.react",["CometTrackingNodeAbstractViewHierarchyWrapperContext","CometTrackingNodesContext","React","encodeTrackingNode","useCometTrackingNodes"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.children,d=a.index,e=a.trackingNode,f=b("useCometTrackingNodes")();a=g.useMemo(function(){if(e==null)return f;var a=b("encodeTrackingNode")(e,d);return[a].concat(f)},[f,e,d]);var h=c,i=g.useContext(b("CometTrackingNodeAbstractViewHierarchyWrapperContext"));i!=null&&(h=i(a,c));return g.jsx(b("CometTrackingNodesContext").Provider,{value:a,children:h})}}),null);
__d("MWChatActivePill.react",["CometPressableChildrenWithOverlay.react","CometPressableOverlay.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={badge:{backgroundColor:"cd5y7b5h",borderTopStartRadius:"cmek9o9a",borderTopEndRadius:"p7f4f6cj",borderBottomEndRadius:"c8oo3d72",borderBottomStartRadius:"r15kkdkt",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"qxh1up0x",borderEndWidth:"qtyiw8t4",borderBottomWidth:"tpcyxxvw",borderStartWidth:"k0bpgpbk",boxSizing:"rq0escxv",display:"j83agx80",fontWeight:"n3ffmt46",justifyContent:"taijpn5t",marginTop:"hop8lmos",marginEnd:"nkwizq5d",marginBottom:"scwd0bx6",marginStart:"roh60bw9",paddingEnd:"n8tt0mok",paddingStart:"hyh9befq"},badgeContainer:{display:"j83agx80",justifyContent:"taijpn5t",maxWidth:"d2edcug0"},inner:{color:"g5o1ygfq",fontSize:"j1meafb1",lineHeight:"fo6rh5oj",whiteSpace:"g0qnabr5"}},j={"card-background":{borderTopColor:"np69z8it",borderEndColor:"et4y5ytx",borderBottomColor:"j7g94pet",borderStartColor:"b74d5cxt"},"secondary-button-background-floating":{borderTopColor:"diozkwgx",borderEndColor:"n34zm3ds",borderBottomColor:"d38e0j3f",borderStartColor:"cbtyyezq"},"web-wash":{borderTopColor:"q1ukiesw",borderEndColor:"t4l69r22",borderBottomColor:"o0nnyf8r",borderStartColor:"lf9sc7ai"}};function a(a){var c=a.border;c=c===void 0?"card-background":c;var d=a.children;a=a.pressed;return h.jsx("div",{className:(g||(g=b("stylex")))(i.badgeContainer),children:h.jsx(b("CometPressableChildrenWithOverlay.react"),{overlay:h.jsx(b("CometPressableOverlay.react"),{pressed:a,radius:7}),children:h.jsx("div",{className:g(i.badge,j[c]),children:h.jsx("span",{className:g(i.inner),children:d})})})})}}),null);
__d("PinnedCommentEventsConnectionHandler",["expectationViolation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";f.update=a;f.getEvents=i;f.deleteEvent=c;function a(a,b){a=a.get(b.dataID);if(!a)return;var c=a.getLinkedRecords(b.fieldKey);if(!c){a.setValue(null,b.handleKey);return}var d=a.getLinkedRecords(b.handleKey);if(!d){a.setLinkedRecords(c,b.handleKey);return}var e;d==null?e=c:c==null?e=d:e=g(d,c);a.setLinkedRecords((d=e)!=null?d:[],b.handleKey)}function g(a,c){var d=0,e=0,f=new Set(),g=[],h=function(a){var c=a==null?void 0:a.getValue("id");if(c==null){b("expectationViolation")("Pinned Comment Event should have id");return}if(f.has(c))return;f.add(c);g.push(a)};while(d<a.length&&e<c.length){var i,j;i=(i=a[d])==null?void 0:i.getValue("vod_time_offset");j=(j=c[e])==null?void 0:j.getValue("vod_time_offset");if(typeof i!="number"){d++;continue}if(typeof j!="number"){e++;continue}if(i>j){h(a[d]);d++;continue}if(i<j){h(c[e]);e++;continue}h(a[d]);h(c[e]);d++;e++}for(var i=d;i<a.length;i++)h(a[i]);for(var j=e;j<c.length;j++)h(c[j]);return g}function h(a){return b("relay-runtime").getRelayHandleKey("pinned_comment_events",a,null)}function i(a,b,c){return(a=a.getLinkedRecords(h(b),c))!=null?a:[]}function c(a,b,c,d){a.setLinkedRecords(i(a,b,d).filter(function(a){return(a==null?void 0:a.getValue("id"))!==c}),h(b));return}}),null);
__d("mergeCommentEdgesSortedByTimestampInVideo",["expectationViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=function(a){a=a==null?void 0:(a=a.getLinkedRecord("node"))==null?void 0:a.getValue("timestamp_in_video");return typeof a!=="number"?null:a};function a(a,c){var d=0,e=0,f=new Set(),h=[],i=function(a){var c;c=a==null?void 0:(c=a.getLinkedRecord("node"))==null?void 0:c.getValue("id");if(c==null){b("expectationViolation")("Node should have id");return}if(f.has(c))return;f.add(c);h.push(a)};while(d<a.length&&e<c.length){var j=g(a[d]),k=g(c[e]);if(j==null){d++;continue}if(k==null){e++;continue}if(j<k){i(a[d]);d++;continue}if(j>k){i(c[e]);e++;continue}i(a[d]);i(c[e]);d++;e++}for(var j=d;j<a.length;j++)i(a[j]);for(var k=e;k<c.length;k++)i(c[k]);return h}}),null);
__d("VideoTimestampedCommentsConnectionHandler",["mergeCommentEdgesSortedByTimestampInVideo","relay-runtime"],(function(a,b,c,d,e,f){"use strict";f.update=a;f.getConnection=c;f.insertEdge=d;function a(a,c){var d=a.get(c.dataID);if(!d)return;var e=d.getLinkedRecord(c.fieldKey);if(!e){d.setValue(null,c.handleKey);return}var f=d.getLinkedRecord(c.handleKey);if(!f){a=a.create(b("relay-runtime").generateClientID(d.getDataID(),c.handleKey),e.getType());a.copyFieldsFrom(e);d.setLinkedRecord(a,c.handleKey);return}d=e.getLinkedRecords("edges");a=f.getLinkedRecords("edges");a==null?c=d:d==null?c=a:c=b("mergeCommentEdgesSortedByTimestampInVideo")(a,d);f.setLinkedRecords((e=c)!=null?e:[],"edges")}function c(a,c,d){c=b("relay-runtime").getRelayHandleKey("video_timestamped_comments",c,null);return a.getLinkedRecord(c,d)}function d(a,c){var d=a.getLinkedRecords("edges");if(!d){a.setLinkedRecords([c],"edges");return}d=b("mergeCommentEdgesSortedByTimestampInVideo")(d,[c]);a.setLinkedRecords((c=d)!=null?c:[],"edges");return}}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("FocusInertRegion.react",["React","react","setElementCanTab","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){e.exports=a;var g,h=b("React"),i=g||(g=b("react")),j=i.unstable_Scope;function a(a){var c=a.children,d=a.disabled,e=d===void 0?!1:d,f=a.focusQuery,g=h.useRef(null);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=g.current;if(f&&a!=null){a=a.DO_NOT_USE_queryAllNodes(f);if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];b("setElementCanTab")(d,e)}}},[e,f]);return i.jsx(j,{ref:g,children:c})}}),null);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f){f.isSupported=a;f.copy=g;f.copyAsync=c;function a(){return window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(b("UserAgent").isBrowser("Firefox < 41")||b("UserAgent").isPlatform("iOS < 10.3"))||b("UserAgent").isBrowser("Chrome >= 43")}function g(a,c){c=c||document.body;if(!c)return!1;var d=!0,e=document.createElement("textarea");c.appendChild(e);e.value=a;if(b("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(e);var f=window.getSelection();f.removeAllRanges();f.addRange(a);e.setSelectionRange(0,999999)}else e.select();try{d=document.execCommand("copy")}catch(a){d=!1}c.removeChild(e);return d}function c(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return g(a)?b("Promise").resolve():b("Promise").reject()}}),null);
__d("cssURL",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return"url('"+a.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g,function(a){return"\\"+a.codePointAt(0).toString(16)+" "})+"')"}}),null);
__d("getJSEnumSafe",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){if(b==null)return null;if(!Object.prototype.hasOwnProperty.call(a,b))return null;b=b;return a[b]}}),null);
__d("usePrevious",["React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=g.useRef(null);g.useEffect(function(){b.current=a});return b.current}}),null);
__d("resolveImmediate",["Promise"],(function(a,b,c,d,e,f){e.exports=a;var g=b("Promise").resolve();function a(a){g.then(a)["catch"](h)}function h(a){setTimeout(function(){throw a},0)}}),null);
__d("FlexLayout.react",["cx","React","gkx","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React"),i=b("gkx")("1261344");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,b=a.align,d=a.children,e=a.className,f=a.containerRef,g=a.direction,i=a.justify,j=a.style;a=a.wrap;return h.jsx("div",babelHelpers["extends"]({},c.flexLayout({align:b,direction:g,justify:i,wrap:a},e),{"data-testid":void 0,ref:f,style:j,children:d}))};c.flexLayout=function(a,d){a=a!==void 0?a:{};var e=a.align,f=a.direction,g=a.justify;a=a.wrap;e===void 0&&(e=c.defaultProps.align);f===void 0&&(f=c.defaultProps.direction);g===void 0&&(g=c.defaultProps.justify);a===void 0&&(a=c.defaultProps.wrap);return{className:b("joinClasses")(d,"_3qn7"+(i?" _8xlz":"")+(g==="start"?" _61-0":"")+(g==="center"?" _61-1":"")+(g==="end"?" _61-2":"")+(g==="all"?" _61-3":"")+(g==="around"?" _6twk":"")+(g==="evenly"?" _6twl":"")+(f==="vertical"?" _2fyh":"")+(f==="horizontal"?" _2fyi":"")+(f==="vertical-reverse"?" _6xqp":"")+(f==="horizontal-reverse"?" _6xqq":"")+(e==="start"?" _3qnf":"")+(e==="center"?" _3qng":"")+(e==="end"?" _3qnu":"")+(e==="stretch"?" _1a9e":"")+(e==="baseline"?" _7is_":"")+(a==="wrap"?" _4tau":"")+(a==="wrap-reverse"?" _4tav":""))}};return c}(h.Component);e.exports=a;a.defaultProps={align:"start",direction:"horizontal",justify:"start",wrap:"nowrap"}}),null);
__d("EncryptedImg",["EncryptedImgUtils","URI","XHRRequest","getCrossOriginTransport"],(function(a,b,c,d,e,f){var g,h=babelHelpers["extends"]({insertIntoStyleBackgroundImage:function(a,b){b=function(a,b){a&&(a.style.backgroundImage="url('"+b+"')")}.bind(void 0,b);h.load(a,b)},insertIntoDOM:function(a,b){b=function(a,b){a&&a.setAttribute("src",b)}.bind(void 0,b);h.load(a,b)},load:function(a,c,d){d===void 0&&(d=!0);a=new(g||(g=b("URI")))(a);var e=b("EncryptedImgUtils").extractKey(a);e=i.bind(void 0,e,c,d);e.includeHeaders=!0;new(b("XHRRequest"))(a.toString()).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseType("arraybuffer").setResponseHandler(e).send()},dataUrlPrefix:function(a,b){b===void 0&&(b=32);if(!a.startsWith("data:"))return a;var c=a.indexOf(",");(c<0||c>b)&&(c=b);return a.slice(0,c)}},b("EncryptedImgUtils"));a=h;e.exports=a;function i(a,b,c,d,e){if(!a){b(l(d,k(e)));return}a=j(a);var f=new Uint8Array(d);d=f.subarray(2,14);f=f.subarray(14,f.length);var g={name:"AES-GCM",iv:d,tagLength:128};window.crypto.subtle.importKey("raw",a,g,!1,["encrypt","decrypt"]).then(function(a){return window.crypto.subtle.decrypt(g,a,f)}).then(function(a){c?b(l(a,k(e))):b(a)})["catch"](function(){})}function j(a){if(typeof a==="string"){var b=new Uint8Array(Math.floor(a.length/2)),c=0;a.replace(/(..)/g,function(a){b[c++]=parseInt(a,16)});return b}return null}function k(a){var b="image/jpeg";a=a.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);a&&a.length>1&&(b=a[1]);return b}function l(a,b){a=new Uint8Array(a);var c="";for(var d=0,e=a.byteLength;d<e;++d)c+=String.fromCharCode(a[d]);return"data:"+b+";base64,"+window.btoa(c)}}),null);
__d("CssBackgroundImage.react",["EncryptedImg","React","createCancelableFunction","cssURL"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={image:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$2=function(a){var c=this;this.$1&&this.$1.cancel();this.$1=b("createCancelableFunction")(function(b){a===c.props.imageURI&&c.setState({image:b})});b("EncryptedImg").load(a,this.$1)};c.getDerivedStateFromProps=function(a){a=a.imageURI;return a!=null&&!b("EncryptedImg").isEncrypted(a)?{image:a}:null};d.componentDidMount=function(){var a=this.props.imageURI;a!=null&&b("EncryptedImg").isEncrypted(a)&&this.$2(a)};d.componentDidUpdate=function(a){var c=this.props.imageURI;c!==a.imageURI&&c!=null&&b("EncryptedImg").isEncrypted(c)&&this.$2(c)};d.componentWillUnmount=function(){this.$1&&this.$1.cancel()};d.render=function(){var a=this.props;a.imageURI;var c=a.backgroundPosition,d=a.height,e=a.width,f=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["imageURI","backgroundPosition","height","width","style"]);return g.jsx("div",babelHelpers["extends"]({style:babelHelpers["extends"]({},f,{backgroundImage:b("cssURL")(this.state.image),backgroundPosition:c||f.backgroundPosition,height:d||f.height,width:e||f.width})},a))};return c}(g.Component);e.exports=a;a.defaultProps={backgroundPosition:"0% 0%",style:{}}}),null);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}}),null);
__d("VideoHomeTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:VideoHomeLoggerConfig")}),null);
__d("ServerHTML.react",["React"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=this.props,b=a.blob;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob"]);return typeof b==="string"?g.jsx("div",babelHelpers["extends"]({},a,{children:b})):g.jsx("div",babelHelpers["extends"]({},a,{dangerouslySetInnerHTML:b}))};return b}(g.Component);e.exports=a}),null);
__d("relay-experimental/preloadQuery_DEPRECATED",["invariant","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h=(c=b("relay-runtime")).createOperationDescriptor,i=c.Environment,j=c.getRequest,k=c.getRequestIdentifier,l=c.Observable,m=c.PreloadableQueryRegistry,n=c.ReplaySubject,o=30*1e3;d=typeof WeakMap==="function";var p="store-or-network",q=d?new WeakMap():new Map();function a(a,b,c,d,e){a instanceof i||g(0,17071);var f=q.get(a);f==null&&(f=new Map(),q.set(a,f));var h=f,j=r(a,h,b,c,d);f=j.kind==="network"?l.create(function(a){var b=j.subject.subscribe(a);return function(){b.unsubscribe(),s(h,j)}}):null;return{kind:"PreloadedQuery_DEPRECATED",environment:a,environmentProviderOptions:e,fetchKey:j.fetchKey,fetchPolicy:j.fetchPolicy,networkCacheConfig:d==null?void 0:d.networkCacheConfig,id:j.id,name:j.name,source:f,variables:c,status:j.status}}function r(a,b,c,d,e){var f,g;if(c.kind==="PreloadableConcreteRequest"){var i=c;i=i.params;g=i.id!=null?m.get(i.id):null}else g=j(c),i=g.params;c=a.getNetwork();f=(f=e==null?void 0:e.fetchPolicy)!=null?f:p;var l=e==null?void 0:e.fetchKey;e=babelHelpers["extends"]({force:!0},e==null?void 0:e.networkCacheConfig);var q=""+k(i,d)+(l!=null?"-"+l:""),r=b.get(q),t=f===p&&g!=null&&g!=null?a.check(h(g,d)):{status:"missing"},u;if(t.status==="available"&&g!=null){u=r&&r.kind==="cache"?r:{cacheKey:q,fetchKey:l,fetchPolicy:f,kind:"cache",id:i.id,name:i.name,status:{cacheConfig:e,source:"cache",fetchTime:(g=t==null?void 0:t.fetchTime)!=null?g:null}};!a.isServer()&&r==null&&setTimeout(function(){u!=null&&s(b,u)},o)}else if(r==null||r.kind!=="network"){t=a.__createLogObserver(i,d);g=t[0];t=t[1];c=c.execute(i,d,e,null,t);var v=new n();u={cacheKey:q,fetchKey:l,fetchPolicy:f,kind:"network",id:i.id,name:i.name,status:{cacheConfig:e,source:"network",fetchTime:null},subject:v,subscription:c["finally"](function(){if(a.isServer())return;setTimeout(function(){u!=null&&s(b,u)},o)})["do"](g).subscribe({complete:function(){v.complete()},error:function(a){v.error(a)},next:function(a){v.next(a)}})}}else u=r;b.set(q,u);return u}function s(a,b){var c=a.get(b.cacheKey);c!=null&&c===b&&(c.kind==="network"&&c.subscription.unsubscribe(),a["delete"](c.cacheKey))}e.exports=a}),null);
__d("relay-experimental/prepareEntryPoint_DEPRECATED",["relay-experimental/preloadQuery_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";function g(a,c,d){c.root.getModuleIfRequired()==null&&c.root.load();c=c.getPreloadProps(d);var e=c.queries,f=c.entryPoints,h={},i={};if(e!=null){d=Object.keys(e);d.forEach(function(c){var d=e[c],f=d.environmentProviderOptions,g=d.options,i=d.parameters;d=d.variables;var j=a.getEnvironment(f);h[c]=b("relay-experimental/preloadQuery_DEPRECATED")(j,i,d,g,f)})}if(f!=null){c=Object.keys(f);c.forEach(function(b){var c=f[b];if(c==null)return;var d=c.entryPoint;c=c.entryPointParams;i[b]=g(a,d,c)})}}e.exports=g}),null);
__d("RelayHooks",["RelayFBEnvironmentActorID","relay-experimental/EntryPointContainer.react","relay-experimental/fetchQuery","relay-experimental/loadEntryPoint","relay-experimental/loadQuery","relay-experimental/preloadQuery_DEPRECATED","relay-experimental/prepareEntryPoint_DEPRECATED","relay-experimental/RelayEnvironmentProvider","relay-experimental/useEntryPointLoader","relay-experimental/useFragment","relay-experimental/useLazyLoadQuery","relay-experimental/usePaginationFragment","relay-experimental/usePreloadedQuery","relay-experimental/useQueryLoader","relay-experimental/useRefetchableFragment","relay-experimental/useRelayEnvironment","relay-experimental/useSubscribeToInvalidationState","relay-runtime","relay-runtime/query/PreloadableQueryRegistry","useFBMutation","useFBSubscription","configureRelayForWWW"],(function(a,b,c,d,e,f){"use strict";a=b("RelayFBEnvironmentActorID").useActorID;c=b("relay-experimental/loadQuery").loadQuery;d=b("relay-runtime").graphql;f=b("relay-runtime").readInlineData;b("configureRelayForWWW")();e.exports={EntryPointContainer:b("relay-experimental/EntryPointContainer.react"),PreloadableQueryRegistry:b("relay-runtime/query/PreloadableQueryRegistry"),RelayEnvironmentProvider:b("relay-experimental/RelayEnvironmentProvider"),fetchQuery:b("relay-experimental/fetchQuery"),graphql:d,loadQuery:c,loadEntryPoint:b("relay-experimental/loadEntryPoint"),preloadQuery_DEPRECATED:b("relay-experimental/preloadQuery_DEPRECATED"),prepareEntryPoint_DEPRECATED:b("relay-experimental/prepareEntryPoint_DEPRECATED"),readInlineData:f,useActorID:a,useFragment:b("relay-experimental/useFragment"),useLazyLoadQuery:b("relay-experimental/useLazyLoadQuery"),useEntryPointLoader:b("relay-experimental/useEntryPointLoader"),useQueryLoader:b("relay-experimental/useQueryLoader"),usePaginationFragment:b("relay-experimental/usePaginationFragment"),useMutation:b("useFBMutation"),usePreloadedQuery:b("relay-experimental/usePreloadedQuery"),useRefetchableFragment:b("relay-experimental/useRefetchableFragment"),useRelayEnvironment:b("relay-experimental/useRelayEnvironment"),useSubscribeToInvalidationState:b("relay-experimental/useSubscribeToInvalidationState"),useSubscription:b("useFBSubscription")}}),null);