(this.webpackJsonpapiweatherapp=this.webpackJsonpapiweatherapp||[]).push([[0],{111:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),s=(n(111),n(13)),o=n(16),l=n(175),j=n(174),p=n(172),d=n(170),x=n(176),b=n(163),h=n(164),u=n(178),m=n(162),g=n(179),O=n.p+"static/media/brandImg.7eb91340.svg",f=n(177),w=n(84),y=n.n(w),S=n(85),v=n.n(S),C=n(1),k=function(e,t){switch(t.type){case"setSelectedOption":return Object(o.a)(Object(o.a)({},e),{},{selectedOption:t.data});case"setInputValue":return Object(o.a)(Object(o.a)({},e),{},{inputValue:t.data});default:return Object(o.a)({},e)}};var I=function(e){var t=e.appState,n=e.appDispatcher,r={selectedOption:null,inputValue:"",options:[],timeout:Object(a.useRef)(null)},c=Object(a.useReducer)(k,r),i=Object(s.a)(c,2),w=i[0],S=i[1];return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.a,{sx:{position:"fixed",backgroundColor:"black"},children:Object(C.jsx)(j.a,{sx:{p:"6px"},children:Object(C.jsxs)(d.a,{container:!0,sx:{alignItems:"center",direction:{xs:"column",md:"row"}},children:[Object(C.jsxs)(d.a,{container:!0,item:!0,sx:{alignItems:"center",width:{xs:"1",md:"auto"}},children:[Object(C.jsx)(d.a,{item:!0,children:Object(C.jsx)(l.a,{display:"block",component:"img",src:O,sx:{width:"2.5rem",height:"2.5rem"}})}),Object(C.jsx)(d.a,{item:!0,children:Object(C.jsx)(x.a,{variant:"h6",sx:{fontWeight:"400"},children:"API Weather App"})}),Object(C.jsx)(d.a,{item:!0,sx:{ml:"auto"},children:Object(C.jsx)(f.a,{onClick:function(){return n({type:"toggleCollapseButton"})},children:Object(C.jsx)(y.a,{sx:{color:"white",display:{md:"none",xs:"block"}}})})})]}),Object(C.jsxs)(d.a,{item:!0,container:!0,direction:{xs:"column-reverse",sm:"row"},spacing:"10",justifyContent:"center",alignItems:"center",flex:"1",py:"10px",display:{md:"flex",xs:"".concat(t.collapseButton?"none":"flex")},children:[Object(C.jsx)(d.a,{item:!0,flexGrow:{sm:"1",md:"0.8",lg:"0.5"},width:{xs:"100%",sm:"auto"},children:Object(C.jsx)(b.a,{sx:{backgroundColor:"white",borderRadius:"0.7rem"},getOptionLabel:function(e){return e.address},options:w.options,value:w.selectedOption,onChange:function(e,t){S({type:"setSelectedOption",data:t}),S({type:"setInputValue",data:t})},onInputChange:function(e,t){S({type:"setInputValue",data:t})},renderInput:function(e){return Object(C.jsx)(h.a,Object(o.a)(Object(o.a)({},e),{},{InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{size:"small",placeholder:"Enter the Name of a Location",margin:"dense",startAdornment:Object(C.jsx)(u.a,{position:"start",children:Object(C.jsx)(v.a,{})})})}))}})}),Object(C.jsx)(d.a,{item:!0,children:Object(C.jsxs)(m.a,{direction:"row",spacing:1,children:[Object(C.jsx)(g.a,{variant:"outlined",size:"small",sx:{color:"primary.light"},children:"Get Forecast"}),Object(C.jsx)(g.a,{variant:"outlined",size:"small",color:"error",sx:{color:"error.light"},onClick:function(){return n({type:"openSettings"})},children:"Options"})]})})]})]})})})})},W=n(180),F=n(181),z=n(182),D=n(183),T=n(168),B=n(167),R=n(184),U=n(185),L=[n.p+"static/media/wallpaper.dac49862.jpg",n.p+"static/media/wallpaper2.a6e0b2eb.jpg",n.p+"static/media/wallpaper3.6c954cbe.jpg",n.p+"static/media/wallpaper4.fb7fb6d1.jpg",n.p+"static/media/wallpaper5.44dc4f33.jpg",n.p+"static/media/wallpaper6.3f11ff0a.jpg",n.p+"static/media/wallpaper7.17617cbc.jpg",n.p+"static/media/wallpaper8.cbb78813.jpg",n.p+"static/media/wallpaper9.002c2ae5.jpg",n.p+"static/media/wallpaper10.77df1d32.jpg",n.p+"static/media/wallpaper11.f87bb7ee.jpg",n.p+"static/media/wallpaper12.062de8f0.jpg"],G=n(86),P=n.n(G),M=n(87),V=n.n(M);var A=function(e){var t=e.appState,n=e.appDispatcher;return Object(C.jsxs)(W.a,{open:t.settings,onClose:function(){return n({type:"closeSettings"})},fullWidth:!0,children:[Object(C.jsxs)(F.a,{sx:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(x.a,{variant:"h5",sx:{fontWeight:"500"},children:"Options"}),Object(C.jsx)(f.a,{sx:{ml:"auto"},onClick:function(){return n({type:"closeSettings"})},children:Object(C.jsx)(P.a,{})})]}),Object(C.jsx)(z.a,{sx:{pb:"0px"},children:Object(C.jsxs)(d.a,{container:!0,spacing:1,direction:"column",children:[Object(C.jsx)(d.a,{item:!0,children:Object(C.jsx)(g.a,{variant:"contained",size:"small",color:"error",sx:{mx:"auto",display:"block",borderRadius:"0.5rem"},children:"Delete local Storage"})}),Object(C.jsx)(d.a,{item:!0,children:Object(C.jsxs)(D.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(C.jsx)(x.a,{variant:"h5",sx:{fontWeight:"500"},children:"\xb0C"}),Object(C.jsx)(T.a,{checked:"F"===t.degUnit,onChange:function(){return n({type:"toggleDegUnit"})}}),Object(C.jsx)(x.a,{variant:"h5",sx:{fontWeight:"500"},children:"\xb0F"})]})}),Object(C.jsxs)(d.a,{item:!0,children:[Object(C.jsx)(B.a,{sx:{mx:"auto",width:"40%",display:"flex",alignItems:"center"},children:Object(C.jsx)(x.a,{sx:{fontSize:"1.2rem",fontWeight:"500"},children:"Choose a Wallpaper"})}),Object(C.jsx)(R.a,{cols:3,rowHeight:110,children:L.map((function(e,a){return Object(C.jsx)(U.a,{onClick:function(){return n({type:"setWallpaper",data:e})},sx:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",height:"8rem",cursor:"pointer",borderRadius:"0.6rem"},children:Object(C.jsx)(l.a,{sx:{display:"".concat(t.wallpaper===e?"flex":"none"),justifyContent:"center",alignItems:"center",height:"100%"},children:Object(C.jsx)(V.a,{sx:{color:"error.main",fontSize:"4rem"}})})},a)}))})]})]})})]})},J=n(173),H=n(88),N=n.n(H);var E,Y=function(e){var t=e.appState,n=(e.appDispatcher,Object(a.useState)(null)),r=Object(s.a)(n,2),c=(r[0],r[1]);return Object(C.jsxs)(m.a,{spacing:2,sx:{backgroundColor:"blu",px:"0.5rem",mt:"4rem"},children:[Object(C.jsx)(x.a,{variant:"h5",sx:{backgroundColor:"black",fontWeight:"bold",color:"primary.light",width:"fit-content",p:"0.3rem",borderRadius:"0.5rem",border:"0.2rem solid",borderColor:"warning.light"},children:"Dashboard"}),Object(C.jsx)(d.a,{container:!0,sx:{overflowX:"auto"},children:t.locationList.map((function(e,n){return Object(C.jsx)(d.a,{item:!0,sx:{width:"fit-content",mb:"1rem"},children:Object(C.jsxs)(J.a,{elevation:3,sx:{p:"0.6rem",background:"black",color:"white",border:"0.13rem solid white",borderRadius:"0.7rem"},children:[Object(C.jsxs)(d.a,{container:!0,columnSpacing:2,children:[Object(C.jsx)(d.a,{item:!0,flexGrow:"1",xs:!0,children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(x.a,{sx:{color:"error.light"},children:e.current.date}),Object(C.jsx)(x.a,{variant:"h6",sx:{},children:e.city})]})}),Object(C.jsx)(d.a,{item:!0,alignSelf:"center",flexGrow:"0",xs:!0,children:Object(C.jsxs)(m.a,{direction:"row",spacing:.5,justifyContent:"between",children:[Object(C.jsxs)(x.a,{sx:{color:"warning.light",fontWeight:"500",fontSize:"2.5rem"},children:["C"===t.degUnit?Z(e.current.temp):q(e.current.temp),"\xb0",t.degUnit]}),Object(C.jsx)(f.a,{id:"long-button",onClick:function(e){return c(e.currentTarget)},sx:{color:"white",alignSelf:"start"},children:Object(C.jsx)(N.a,{className:"text-white hover:text-green-600"})})]})})]}),Object(C.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"between",width:"100%",sx:{backgroundColor:"warning.mai"},children:[Object(C.jsx)(d.a,{item:!0,flexGrow:"0.7",xs:!0,children:Object(C.jsxs)(m.a,{alignItems:"center",children:[Object(C.jsx)(l.a,{component:"img",width:"6rem",src:e.current.icon,sx:{mt:"-0.8rem"}}),Object(C.jsx)(x.a,{sx:{mt:"-1.5rem",fontSize:"1.3rem",fontWeight:"500",color:"warning.light"},children:e.current.weatherStatus})]})}),Object(C.jsxs)(d.a,{item:!0,flexGrow:"1",xs:!0,children:[Object(C.jsxs)(m.a,{alignItems:"center",children:[Object(C.jsx)(x.a,{sx:{fontWeight:"500",color:"primary.light"},children:"TimeZone"}),Object(C.jsx)(x.a,{sx:{fontWeight:"400"},children:e.current.timezone})]}),Object(C.jsxs)(m.a,{direction:"row",spacing:5,justifyContent:"center",children:[Object(C.jsxs)(m.a,{children:[Object(C.jsx)(x.a,{sx:{color:"primary.light",fontWeight:"500"},children:"Sunrise"}),Object(C.jsx)(x.a,{sx:{fontWeight:"400"},children:e.current.sunrise})]}),Object(C.jsxs)(m.a,{sx:{},children:[Object(C.jsx)(x.a,{sx:{color:"primary.light",fontWeight:"500"},children:"Sunrise"}),Object(C.jsx)(x.a,{sx:{fontWeight:"400"},children:e.current.sunrise})]})]})]})]})]})})}))})]})},X=n.p+"static/media/sunny.213f9a41.svg",Z=function(e){return(5/9*(e-32)).toFixed(0)},q=function(e){return(1.8*e+32).toFixed(0)},K={locationList:[{city:"8417 Spruce Hill Dr",lat:"",lon:"",key:"".concat(1234,5678),current:{day:"Monday",date:"July, 6th, 08:37am",timezone:"America/NewYork",sunrise:"08:00am",sunset:"07:00pm",temp:"0",icon:X,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",pressure:"100",windSpeed:"200",visibility:"300"},daily:[{date:"July, 6th, 08:37am",day:"Monday",description:"light rain",icon:X,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"}]}],settings:!1,degUnit:"F",collapseButton:!1,wallpaper:L[(E=12,Math.floor(Math.random()*E))]},Q=function(e,t){switch(t.type){case"toggleCollapseButton":return Object(o.a)(Object(o.a)({},e),{},{collapseButton:!e.collapseButton});case"setWallpaper":return Object(o.a)(Object(o.a)({},e),{},{wallpaper:t.data});case"toggleDegUnit":return Object(o.a)(Object(o.a)({},e),{},{degUnit:"F"===e.degUnit?"C":"F"});case"openSettings":return Object(o.a)(Object(o.a)({},e),{},{settings:!0});case"closeSettings":return Object(o.a)(Object(o.a)({},e),{},{settings:!1});default:return e}};var $=function(){var e=Object(a.useReducer)(Q,K),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I,{appState:n,appDispatcher:r}),Object(C.jsxs)(l.a,{sx:{minHeight:"fit-content",height:"100vh",backgroundImage:"url(".concat(n.wallpaper,")"),backgroundSize:"cover",backgroundPosition:"center",overflowY:"auto"},children:[Object(C.jsx)(j.a,{}),!n.collapseButton&&Object(C.jsx)(j.a,{sx:{display:{xs:"block",sm:"none"}}}),Object(C.jsx)(Y,{appState:n,appDispatcher:r})]}),Object(C.jsx)(A,{appState:n,appDispatcher:r})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)($,{})}),document.getElementById("root")),_()}},[[118,1,2]]]);
//# sourceMappingURL=main.6f6a16c7.chunk.js.map