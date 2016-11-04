webpackJsonp([7],{35:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){var n=Math.min(Math.max(t,e),r);return n/(r-t)}function s(e,t){return e*Math.PI*(t.size-t.thickness)}function i(e,t){var r=e.max,n=e.min,i=e.size,o=e.value,l=t.muiTheme.baseTheme.palette,u={root:{position:"relative",display:"inline-block",width:i,height:i},wrapper:{width:i,height:i,display:"inline-block",transition:M.default.create("transform","20s",null,"linear"),transitionTimingFunction:"linear"},svg:{width:i,height:i,position:"relative"},path:{stroke:e.color||l.primary1Color,strokeLinecap:"round",transition:M.default.create("all","1.5s",null,"ease-in-out")}};if("determinate"===e.mode){var p=a(o,n,r);u.path.transition=M.default.create("all","0.3s",null,"linear"),u.path.strokeDasharray=s(p,e)+", "+s(1,e)}return u}Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),l=n(o),u=r(9),p=n(u),f=r(5),c=n(f),d=r(2),h=n(d),m=r(3),y=n(m),_=r(7),v=n(_),k=r(6),T=n(k),j=r(4),P=n(j),x=r(1),g=n(x),b=r(48),D=n(b),w=r(10),M=n(w),C=function(e){function t(){return(0,h.default)(this,t),(0,v.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){this.scalePath(this.refs.path),this.rotateWrapper(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer)}},{key:"scalePath",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;"indeterminate"===this.props.mode&&(r%=3,0===r?(e.style.strokeDasharray=s(0,this.props)+", "+s(1,this.props),e.style.strokeDashoffset=0,e.style.transitionDuration="0ms"):1===r?(e.style.strokeDasharray=s(.7,this.props)+", "+s(1,this.props),e.style.strokeDashoffset=s(-.3,this.props),e.style.transitionDuration="750ms"):(e.style.strokeDasharray=s(.7,this.props)+", "+s(1,this.props),e.style.strokeDashoffset=s(-1,this.props),e.style.transitionDuration="850ms"),this.scalePathTimer=setTimeout(function(){return t.scalePath(e,r+1)},r?750:250))}},{key:"rotateWrapper",value:function(e){var t=this;"indeterminate"===this.props.mode&&(D.default.set(e.style,"transform","rotate(0deg)"),D.default.set(e.style,"transitionDuration","0ms"),setTimeout(function(){D.default.set(e.style,"transform","rotate(1800deg)"),D.default.set(e.style,"transitionDuration","10s"),D.default.set(e.style,"transitionTimingFunction","linear")},50),this.rotateWrapperTimer=setTimeout(function(){return t.rotateWrapper(e)},10050))}},{key:"render",value:function(){var e=this.props,t=e.style,r=e.innerStyle,n=e.size,a=e.thickness,s=(0,p.default)(e,["style","innerStyle","size","thickness"]),o=this.context.muiTheme.prepareStyles,u=i(this.props,this.context);return g.default.createElement("div",(0,l.default)({},s,{style:o((0,P.default)(u.root,t))}),g.default.createElement("div",{ref:"wrapper",style:o((0,P.default)(u.wrapper,r))},g.default.createElement("svg",{viewBox:"0 0 "+n+" "+n,style:o(u.svg)},g.default.createElement("circle",{ref:"path",style:o(u.path),cx:n/2,cy:n/2,r:(n-a)/2,fill:"none",strokeWidth:a,strokeMiterlimit:"20"}))))}}]),t}(x.Component);C.defaultProps={mode:"indeterminate",value:0,min:0,max:100,size:40,thickness:3.5},C.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=C},36:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(35),s=n(a);t.default=s.default},345:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,i,o,l,u=r(354),p=n(u),f=r(5),c=n(f),d=r(2),h=n(d),m=r(3),y=n(m),_=r(7),v=n(_),k=r(6),T=n(k),j=r(1),P=n(j),x=r(423),g=n(x),b=r(36),D=n(b),w=r(21),M=r(38),C=M.helpers.isLoaded,E=M.helpers.dataToJS,W=(a=(0,M.firebase)(function(e){var t=e.params;return["projects/"+t.projectname]}),s=(0,w.connect)(function(e,t){var r=e.firebase,n=t.params;return{project:E(r,"projects/"+n.projectname)}}),a(i=s((l=o=function(e){function t(){return(0,h.default)(this,t),(0,v.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,T.default)(t,e),(0,y.default)(t,[{key:"render",value:function(){var e=this.props.project;return C(e)?P.default.createElement("div",{className:g.default.container},P.default.createElement("h2",null,"Project Container"),P.default.createElement("pre",null,(0,p.default)(e))):P.default.createElement("div",{className:g.default.progress},P.default.createElement(D.default,null))}}]),t}(j.Component),o.contextTypes={router:P.default.PropTypes.object.isRequired},o.propTypes={project:j.PropTypes.object,params:j.PropTypes.object.isRequired,children:j.PropTypes.object},i=l))||i)||i);t.default=W},354:function(e,t,r){e.exports={default:r(363),__esModule:!0}},363:function(e,t,r){var n=r(22),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},423:function(e,t){e.exports={flex:"ProjectContainer__flex___2KpL-","flex-column":"ProjectContainer__flex-column___1WU2p","flex-column-center":"ProjectContainer__flex-column-center___1jrPD","flex-row":"ProjectContainer__flex-row___IllzX","flex-row-center":"ProjectContainer__flex-row-center___39yNf",progress:"ProjectContainer__progress___2VQ9C"}}});