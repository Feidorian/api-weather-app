(this.webpackJsonpapiweatherapp=this.webpackJsonpapiweatherapp||[]).push([[0],{117:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(26),l=a.n(n),i=(a(117),a(12)),r=a(52),o=a(179),d=a(185),j=a(176),b=a(188),x=a(190),u=a(191),h=a(192),f=a(189),p=a(86),m=a.n(p),O=a(87),g=a.n(O),w=a.p+"static/media/brandImg.7eb91340.svg",y=a(175),v=a(59),C=(a(118),a(1)),S=function(e){var t=e.collapseButton,a=e.handleOpen,s=e.size,n=e.only,l=Object(c.useState)(null),u=Object(i.a)(l,2),h=u[0],f=u[1],p=Object(c.useState)(""),O=Object(i.a)(p,2),g=O[0],w=O[1],S=Object(c.useState)([]),k=Object(i.a)(S,2),N=k[0],F=k[1],z=Object(c.useRef)(null);Object(c.useEffect)((function(){if(g&&h!==g){var e=g;clearTimeout(z.current),z.current=setTimeout((function(){var t={method:"POST",body:JSON.stringify({target:"googlePlaces",query:e})};fetch("https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp",t).then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{address:e.formatted_address,location:e.geometry.location,name:e.name}})).slice(0,10)})).then((function(e){return console.log(e),e})).then((function(e){return F((function(t){return e||t}))}))}),200)}}),[g,h]);return Object(C.jsx)(o.a,{mediaQuery:!0,only:n,children:Object(C.jsxs)(d.a,{class:"space-x-2 ".concat(t?"hidden":"contents"),children:[Object(C.jsx)(y.a,{id:"search",className:s,getOptionLabel:function(e){return e.address},options:N,filterOptions:function(e){return e},value:h,onChange:function(e,t){f(t),w(t)},onInputChange:function(e,t){w(t)},renderInput:function(e){return Object(C.jsx)(j.a,Object(r.a)(Object(r.a)({},e),{},{InputProps:Object(r.a)(Object(r.a)({},e.InputProps),{},{size:"small",placeholder:"Enter the Name of a Location",margin:"dense",startAdornment:Object(C.jsx)(b.a,{position:"start",children:Object(C.jsx)(m.a,{})})}),class:"w-full bg-white text-black rounded-xl "}))}}),Object(C.jsxs)(d.a,{className:"flex space-x-2 mb-2 sm:mb-0",children:[Object(C.jsx)(x.a,{size:"small",variant:"outlined",className:"h-10 lg:self-center",onClick:function(){if(h&&g&&h===g){var e=h.location.lng,t=h.location.lat,a={method:"POST",body:JSON.stringify({target:"openWeather",lon:e,lat:t})};fetch("https://muterehm3f.execute-api.us-east-2.amazonaws.com/official/apiweatherapp",a).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}else v.b.dark("\u26d4\ufe0f Invalid location provided!")},children:"Get Forecast"}),Object(C.jsx)(x.a,{onClick:a,size:"small",variant:"outlined",color:"error",className:"h-10 lg:self-center",children:"Options"})]})]})})};var k=function(e){var t=e.handleOpen,a=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return[a,function(){return s(!a)}]}(),s=Object(i.a)(a,2),n=s[0],l=s[1];return Object(C.jsxs)(u.a,{class:"bg-black text-white p-2 py-3  w-full",children:[Object(C.jsxs)(d.a,{id:"nav-row",class:"flex",children:[Object(C.jsxs)(d.a,{class:"flex space-x-1 items-center",children:[Object(C.jsx)(h.a,{fontSize:"large",children:Object(C.jsx)("img",{alt:"brand visual",src:w})}),Object(C.jsx)(f.a,{variant:"h6",children:"API Weather App"})]}),Object(C.jsx)(d.a,{class:"flex justify-center items-center flex-grow",children:Object(C.jsx)(S,{handleOpen:t,size:"w-5/12 mx-2",only:["xs","sm"]})}),Object(C.jsx)(o.a,{mdUp:!0,children:Object(C.jsx)(d.a,{class:"ml-auto self-center",component:"button",onClick:l,children:Object(C.jsx)(g.a,{color:"white",fontSize:"large"})})})]}),Object(C.jsx)(d.a,{class:"flex justify-center items-center flex-grow",children:Object(C.jsx)(S,{handleOpen:t,collapseButton:n,size:"w-5/12",only:["xs","lg","md","xl"]})}),Object(C.jsx)(d.a,{class:"flex flex-col-reverse justify-center items-center flex-grow",children:Object(C.jsx)(S,{handleOpen:t,collapseButton:n,size:"w-11/12",only:["sm","lg","md","xl"]})}),Object(C.jsx)(v.a,{oastContainer:!0,position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0,className:"flex flex-col items-start mb-2"})]})},N=a.p+"static/media/wallpaper.dac49862.jpg",F=a(92),z=a(181),D=a(180),I=a(186),P=a(184),U=a(74),W=a.n(U),L=a.p+"static/media/humidity.5da6ae3c.svg",T=a(88),B=function(e){var t=e.data,a=(e.key,e.degUnit),s=Object(c.useState)(null),n=Object(i.a)(s,2),l=n[0],r=n[1];return Object(C.jsxs)(d.a,{class:"bg-black text-white flex rounded-lg p-3 border-2 flex flex-col",style:{minWidth:"20rem"},children:[Object(C.jsxs)(d.a,{id:"header",class:"flex flex-grow justify-between",children:[Object(C.jsxs)(d.a,{id:"location-date",class:"w-6/12",children:[Object(C.jsx)(f.a,{variant:"p",className:"font-medium",sx:{color:"error.main"},children:t.date}),Object(C.jsx)(f.a,{variant:"p",className:"block  font-medium ",style:{fontSize:"130%"},children:t.city})]}),Object(C.jsx)(d.a,{id:"temp",class:"w-5/12 text-center self-center",children:Object(C.jsxs)(f.a,{variant:"p",className:"block text-4xl font-medium",sx:{color:"warning.light"},children:["C"===a?t.degC:t.degF,"\xb0",a]})}),Object(C.jsxs)(d.a,{id:"delete-button",className:"w-1/12",children:[Object(C.jsx)(I.a,{id:"long-button",onClick:function(e){return r(e.currentTarget)},children:Object(C.jsx)(W.a,{className:"text-white hover:text-green-600"})}),Object(C.jsxs)(F.a,{anchorEl:l,open:Boolean(l),onClose:function(){return r(null)},children:[Object(C.jsx)(z.a,{children:"Select Location"}),Object(C.jsx)(z.a,{children:"Update Location"}),Object(C.jsx)(z.a,{onClick:function(){T.Confirm.show("\u274c Confirm Deletion","Are you Sure you want to delete this location?","Yes","Cancel",(function(){}),(function(){}),{titleColor:"#e66146",fontFamily:"quicksand",useGoogleFont:!1})},children:"Delete location"})]})]})]}),Object(C.jsxs)(d.a,{id:"content",class:"flex",children:[Object(C.jsxs)(d.a,{id:"weather-status",class:"w-5/12 bg-red-90 flex flex-col items-center mt-3",children:[Object(C.jsx)("img",{width:"80",src:t.icon,alt:"weather"}),Object(C.jsx)(f.a,{variant:"p",className:"text-2xl",sx:{marginTop:"-15px"},children:t.weatherStatus})]}),Object(C.jsxs)(d.a,{className:"w-7/12 flex flex-col space-y-2 mt-1",children:[Object(C.jsxs)(f.a,{variant:"p",className:" mb-5 text-center ",children:["Feels like ","C"===a?t.degC:t.degF,"\xb0",a,". ",t.shortDescription]}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)("img",{width:"25",className:"inline-block",alt:"",src:L}),"Humidity : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.humidity})]}),Object(C.jsxs)(f.a,{children:[" ",Object(C.jsx)("i",{class:"fas fa-wind"})," WindSpeed : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.windSpeed})]}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)("i",{class:"fas fa-smog"})," Visibility  : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.visibility})]})]})]})]})};var J=function(e){var t=e.degUnit,a=e.data;return Object(C.jsxs)(d.a,{id:"dashboard",class:"p-4 bg-red-90 flex flex-col",children:[Object(C.jsx)(D.a,{severity:"info",className:"mx-auto flex justify-center",children:Object(C.jsx)(f.a,{class:"text-blue-900 font-medium",children:"Weather cards are slidable. Click on a  dashboard card to View its Forecast!"})}),Object(C.jsx)(f.a,{class:"self-start mt-3 block  text-2xl border-2  border-yellow-200\r font-medium  bg-black p-2 rounded-lg text-blue-400",children:"Dashboard"}),Object(C.jsx)(P.a,{class:"flex justify-start overflow-x-auto space-x-3 mt-4",children:a.map((function(e,a){return Object(C.jsx)(B,{data:e,degUnit:t},a)}))})]})},H=function(e){var t=e.data,a=(e.key,e.degUnit);return Object(C.jsxs)(d.a,{class:"bg-green-800 text-white flex rounded-lg p-3 border-2 flex flex-col",style:{minWidth:"20rem"},children:[Object(C.jsxs)(d.a,{id:"header",class:"flex flex-grow justify-between",children:[Object(C.jsxs)(d.a,{id:"location-date",class:"w-6/12",children:[Object(C.jsx)(f.a,{variant:"p",className:"font-medium",sx:{color:"error.light"},children:t.date}),Object(C.jsx)(f.a,{variant:"p",className:"block text-3xl font-medium",children:t.day})]}),Object(C.jsx)(d.a,{id:"temp",class:"w-5/12 text-center self-center",children:Object(C.jsxs)(f.a,{variant:"p",className:"block text-4xl font-medium",sx:{color:"warning.light"},children:["C"===a?t.degC:t.degF,"\xb0",a]})}),Object(C.jsx)(d.a,{id:"delete-button",className:"w-1/12"})]}),Object(C.jsxs)(d.a,{id:"content",class:"flex",children:[Object(C.jsxs)(d.a,{id:"weather-status",class:"w-5/12 bg-red-90 flex flex-col items-center mt-3",children:[Object(C.jsx)("img",{width:"80",src:t.icon,alt:"weather"}),Object(C.jsx)(f.a,{variant:"p",className:"text-2xl",sx:{marginTop:"-15px"},children:t.weatherStatus})]}),Object(C.jsxs)(d.a,{className:"w-7/12 flex flex-col space-y-2 mt-1",children:[Object(C.jsxs)(f.a,{variant:"p",className:" mb-5 text-center ",children:["Feels like ","C"===a?t.degC:t.degF,"\xb0",a,". ",t.shortDescription]}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)("img",{width:"25",className:"inline-block",src:L,alt:""}),"Humidity : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.humidity})]}),Object(C.jsxs)(f.a,{children:[" ",Object(C.jsx)("i",{class:"fas fa-wind"})," WindSpeed : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.windSpeed})]}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)("i",{class:"fas fa-smog"})," Visibility  : ",Object(C.jsx)("span",{style:{color:"yellow"},children:t.visibility})]})]})]})]})};var A=function(e){var t=e.degUnit,a=e.data;return Object(C.jsxs)(d.a,{className:"mt-8 p-4 text-white flex flex-col",children:[Object(C.jsxs)(f.a,{variant:"p",className:"self-start text-2xl border-2  border-yellow-200\r font-medium  bg-black p-2 rounded-lg text-blue-400  ",children:["Forecast For ",a[0].city]}),Object(C.jsx)(d.a,{className:"flex justify-start overflow-x-auto space-x-3 mt-4",children:a.map((function(e,a){return Object(C.jsx)(H,{data:e,degUnit:t},a)}))})]})},E=a(195),M=a(182),V=a(196),q=a(197),G=a(193),Q=a(194),R=a(89),Y=a.n(R),_=a.p+"static/media/wallpaper2.a6e0b2eb.jpg",K=a.p+"static/media/wallpaper3.6c954cbe.jpg",X=a.p+"static/media/wallpaper4.fb7fb6d1.jpg",Z=a.p+"static/media/wallpaper5.44dc4f33.jpg",$=a.p+"static/media/wallpaper6.3f11ff0a.jpg",ee=a.p+"static/media/wallpaper7.17617cbc.jpg",te=a.p+"static/media/wallpaper8.cbb78813.jpg",ae=a.p+"static/media/wallpaper9.002c2ae5.jpg",ce=a.p+"static/media/wallpaper10.77df1d32.jpg",se=a.p+"static/media/wallpaper11.f87bb7ee.jpg",ne=a.p+"static/media/wallpaper12.062de8f0.jpg",le=a(90),ie=a.n(le),re=[N,_,K,X,Z,$,ee,te,ae,ce,se,ne];var oe=function(e){var t=e.setWallPaper,a=e.wallpaper,s=e.open,n=e.handleClose,l=e.handleDegC,r=e.handleDegF,o=Object(c.useState)(!0),j=Object(i.a)(o,2),b=j[0],x=j[1];return Object(C.jsx)(G.a,{onClose:n,open:s,fullWidth:!0,children:Object(C.jsxs)(d.a,{class:"p-2",children:[Object(C.jsxs)(Q.a,{class:"w-100 flex",children:[Object(C.jsx)(f.a,{class:"font-medium",children:"Options"}),Object(C.jsx)(I.a,{class:"ml-auto",onClick:n,children:Object(C.jsx)(Y.a,{})})]}),Object(C.jsxs)(E.a,{class:"p-2",children:[Object(C.jsxs)(d.a,{class:"flex items-center justify-center",children:[Object(C.jsx)(f.a,{class:"font-medium text-2xl",children:"\xb0C"}),Object(C.jsx)(M.a,{checked:b,onChange:function(){b?l():r(),x(!b)}}),Object(C.jsx)(f.a,{class:"font-medium text-2xl",children:"\xb0F"})]}),Object(C.jsx)(D.a,{component:"div",className:"mx-auto mb-2 w-52",children:"Choose a Wallpaper"}),Object(C.jsx)(V.a,{cols:3,rowHeight:156,children:re.map((function(e,c){return Object(C.jsx)(q.a,{onClick:function(){return t(e)},class:"rounded-lg flex items-center justify-center",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",height:"8rem"},children:Object(C.jsx)(d.a,{className:"".concat(a===e?"inline-block":"invisible"),children:Object(C.jsx)(ie.a,{sx:{color:"error.main",fontSize:"4rem"}})})})}))})]})]})})},de=a.p+"static/media/sunny.213f9a41.svg",je=[{day:"Monday",city:"8417 Spruce Hill Dr",date:"July, 6th, 08:37am",degC:"41",degF:"30",icon:de,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",windSpeed:"200",visibility:"300"},{day:"Monday",city:"Laurel, US",date:"July, 6th, 08:37am",degC:"41",degF:"30",icon:de,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",windSpeed:"200",visibility:"300"}];var be=function(){var e=function(){var e=Object(c.useState)("F"),t=Object(i.a)(e,2),a=t[0],s=t[1];return[a,function(){return s("C")},function(){return s("F")}]}(),t=Object(i.a)(e,3),a=t[0],s=t[1],n=t[2],l=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(N),l=Object(i.a)(n,2);return[a,function(){return s(!0)},function(){return s(!1)},l[0],l[1]]}(),r=Object(i.a)(l,5),o=r[0],j=r[1],b=r[2],x=r[3],u=r[4];return Object(C.jsxs)(d.a,{class:"flex flex-col h-screen",children:[Object(C.jsx)(k,{handleOpen:j}),Object(C.jsxs)(d.a,{class:"break-words flex-grow flex flex-col overflow-auto",style:{backgroundImage:"url(".concat(x,")"),backgroundSize:"cover"},children:[Object(C.jsx)(J,{degUnit:a,data:je}),Object(C.jsx)(A,{degUnit:a,data:je}),Object(C.jsx)(oe,{open:o,wallpaper:x,setWallPaper:u,handleClose:b,handleDegC:s,handleDegF:n})]})]})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,198)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(be,{})}),document.getElementById("root")),xe()}},[[126,1,2]]]);
//# sourceMappingURL=main.f6c48d0c.chunk.js.map