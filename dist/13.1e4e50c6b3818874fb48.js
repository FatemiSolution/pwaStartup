/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~11.3.0, @magento/upward-security-headers: ~1.0.14, @magento/pwa-theme-venia: ~2.4.0, @magento/pwa-buildpack: ~11.4.3, @magento/peregrine: ~14.2.1, @magento/pagebuilder: ~9.2.1, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.3, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Pbq8:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return R}),r.d(t,"BannerShimmer",function(){return E.a})
var o=r("pVnL"),a=r.n(o),n=r("lSNA"),i=r.n(n),l=r("q1tI"),s=r.n(l),g=r("LboF"),c=r.n(g),d=r("1h9V"),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(c()(d.a,b),d.a.locals||{}),v=r("y1Xp"),u=r("17x9"),y=r("ACyH"),O=r("5ogs"),m=r("Ty5D"),f=r("55Ip"),h=r("STEg"),j=r("YOuh"),k=r("OBO2"),w=r("6MNj")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var{matchMedia:S}=globalThis,L=e=>({__html:e}),T=e=>e.preventDefault(),C=e=>{var t=Object(l.useRef)(null),o=Object(l.useRef)(null),n=Object(v.a)(p,e.classes),[i,g]=Object(l.useState)(!1),[c,d]=Object(l.useState)(null),b=()=>g(!i),u=Object(j.a)(),{appearance:C="poster",minHeight:R,backgroundColor:E,desktopImage:P,mobileImage:H,backgroundSize:x,backgroundPosition:I,backgroundAttachment:N,backgroundRepeat:B="repeat",textAlign:D,border:A,borderColor:_,borderWidth:V,borderRadius:z,content:M,showButton:q,buttonType:F,buttonText:K,link:J,openInNewTab:Q=!1,showOverlay:W,overlayColor:$,marginTop:X,marginRight:Y,marginBottom:G,marginLeft:U,mediaQueries:Z,paddingTop:ee,paddingRight:te,paddingBottom:re,paddingLeft:oe,cssClasses:ae=[],backgroundType:ne,videoSrc:ie,videoFallbackSrc:le,videoLoop:se,videoPlayOnlyVisible:ge,videoLazyLoading:ce,videoOverlayColor:de,getParallax:be=(()=>{})}=e,{styles:pe}=Object(k.a)({mediaQueries:Z}),ve=P
H&&S&&S("(max-width: 768px)").matches&&(ve=H)
var ue={marginTop:X,marginRight:Y,marginBottom:G,marginLeft:U},ye={backgroundColor:E,border:A,borderColor:_,borderWidth:V,borderRadius:z,textAlign:D},Oe={backgroundColor:"never"!==W?$:null},me={},fe={backgroundColor:de}
Object(l.useEffect)(()=>{var e,a,n
if("video"===ne){var i={speed:1,imgSrc:le?Object(h.a)(le,{type:"image-wysiwyg",quality:85}):null,elementInViewport:o.current,videoSrc:ie,videoLoop:se,videoPlayOnlyVisible:ge,videoLazyLoading:ce}
e=t.current,({jarallax:a,jarallaxVideo:n}=r("JOgF")),n(),a(e,i),e.jarallax.video&&e.jarallax.video.on("started",()=>{var t=e.jarallax
t.$video&&(t.$video.style.visibility="visible")}),be(e,i)}return()=>{e&&"video"===ne&&a(e,"destroy")}},[ne,ie,le,se,ge,ce]),ve&&c&&(ye.backgroundImage="url(".concat(c,")"),ye.backgroundSize=x,ye.backgroundPosition=I,ye.backgroundAttachment=N,ye.backgroundRepeat=B)
var he=Object(l.useCallback)(()=>{var e=Object(h.a)(ve,{type:"image-wysiwyg",quality:85})
document.createElement("img").src=e,d(e)},[ve])
Object(l.useEffect)(()=>{if(ve&&t.current){if(void 0!==u){var e=t.current,r=new u(t=>{t.some(e=>e.isIntersecting)&&(r.unobserve(e),he())})
return r.observe(e),()=>{e&&r.unobserve(e)}}he()}},[t,ve,u,he]),"poster"===C?(Oe.minHeight=R,Oe.paddingTop=ee,Oe.paddingRight=te,Oe.paddingBottom=re,Oe.paddingLeft=oe,me.width="100%"):(ye.minHeight=R,ye.paddingTop=ee,ye.paddingRight=te,ye.paddingBottom=re,ye.paddingLeft=oe)
var je,ke={poster:n.posterOverlay,"collage-left":n.collageLeftOverlay,"collage-centered":n.collageCenteredOverlay,"collage-right":n.collageRightOverlay},we={poster:n.posterOverlayHover,"collage-left":n.collageLeftOverlayHover,"collage-centered":n.collageCenteredOverlayHover,"collage-right":n.collageRightOverlayHover}
if("never"!==q){var Se="hover"===q?n.buttonHover:n.button
je=s.a.createElement("div",{className:Se},s.a.createElement(y.a,{priority:{primary:"high",secondary:"normal",link:"low"}[F],type:"button",onClick:()=>{}},K))}var Le=de?s.a.createElement("div",{className:n.videoOverlay,style:fe}):null,Te="video"===ne?s.a.createElement("div",{ref:o,className:n.viewportElement}):null,Ce="hover"!==W||i?ke[C]:we[C],Re=Object(m.g)(),Ee=e=>{Object(w.a)(Re,e)},Pe=s.a.createElement("div",{className:n.wrapper,style:_objectSpread(_objectSpread({},ye),"poster"!==C&&pe),ref:t},Le,s.a.createElement("div",{className:Ce,style:_objectSpread(_objectSpread({},Oe),"poster"===C&&pe)},s.a.createElement("div",{className:n.content,style:me,dangerouslySetInnerHTML:L(M),onClick:Ee,onKeyDown:Ee,role:"presentation"}),je),Te)
if("string"==typeof J){var He=Object(O.a)(J),xe=He.to?f.b:"a"
Pe=s.a.createElement(xe,a()({className:n.link},He,Q?{target:"_blank"}:"",{onDragStart:T}),Pe)}return s.a.createElement("div",{"aria-live":"polite","aria-busy":"false",className:[n.root,...ae].join(" "),style:ue,onMouseEnter:b,onMouseLeave:b},Pe)}
C.propTypes={classes:Object(u.shape)({root:u.string,link:u.string,wrapper:u.string,overlay:u.string,content:u.string,button:u.string,buttonHover:u.string,posterOverlay:u.string,posterOverlayHover:u.string,collageLeftOverlay:u.string,collageLeftOverlayHover:u.string,collageCenteredOverlay:u.string,collageCenteredOverlayHover:u.string,collageRightOverlay:u.string,collageRightOverlayHover:u.string,videoOverlay:u.string,viewportElement:u.string}),appearance:Object(u.oneOf)(["poster","collage-left","collage-centered","collage-right"]),minHeight:u.string,backgroundColor:u.string,desktopImage:u.string,mobileImage:u.string,backgroundSize:u.string,backgroundPosition:u.string,backgroundAttachment:u.string,backgroundRepeat:u.string,content:u.string,link:u.string,linkType:Object(u.oneOf)(["default","product","category","page"]),openInNewTab:u.bool,showButton:Object(u.oneOf)(["always","hover","never"]),buttonText:u.string,buttonType:Object(u.oneOf)(["primary","secondary","link"]),showOverlay:Object(u.oneOf)(["always","hover","never"]),overlayColor:u.string,textAlign:u.string,border:u.string,borderColor:u.string,borderWidth:u.string,borderRadius:u.string,marginTop:u.string,marginRight:u.string,marginBottom:u.string,marginLeft:u.string,mediaQueries:Object(u.arrayOf)(Object(u.shape)({media:u.string,style:u.object})),paddingTop:u.string,paddingRight:u.string,paddingBottom:u.string,cssClasses:Object(u.arrayOf)(u.string),backgroundType:u.string,videoSrc:u.string,videoFallbackSrc:u.string,videoLoop:u.bool,videoPlayOnlyVisible:u.bool,videoLazyLoading:u.bool,videoOverlayColor:u.string,getParallax:u.func}
var R=C,E=r("pv4D")}}])
