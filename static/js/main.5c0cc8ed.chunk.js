(this.webpackJsonpapiweatherapp=this.webpackJsonpapiweatherapp||[]).push([[0],{113:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),l=a(33),n=a.n(l),i=(a(113),a(12)),r=a(51),d=a(170),j=a(175),o=a(167),x=a(178),b=a(180),h=a(181),p=a(182),u=a(179),m=a(84),O=a.n(m),f=a(85),g=a.n(f),w=a.p+"static/media/brandImg.7eb91340.svg",y=a(166),v=a(1),k=[],C=function(e){var t=e.collapseButton,a=e.handleOpen,s=e.size,l=e.only,n=Object(c.useState)(""),h=Object(i.a)(n,2),p=h[0],u=h[1],m=function(e){u(e.target.value),k.push({item:e.target.value})};return Object(v.jsx)(d.a,{mediaQuery:!0,only:l,children:Object(v.jsxs)(j.a,{class:"space-x-2  ".concat(t?"hidden":"contents"),children:[Object(v.jsx)(y.a,{className:s,freeSolo:!0,options:k.map((function(e){return e.item})),renderInput:function(e){return Object(v.jsx)(o.a,Object(r.a)(Object(r.a)({},e),{},{InputProps:Object(r.a)(Object(r.a)({},e.InputProps),{},{size:"small",placeholder:"Enter the Name of a City",value:p,onInput:m,margin:"dense",startAdornment:Object(v.jsx)(x.a,{position:"start",children:Object(v.jsx)(O.a,{})})}),class:"w-full bg-white text-black rounded-xl "}))}}),Object(v.jsxs)(j.a,{className:"flex space-x-2 ",children:[Object(v.jsx)(b.a,{size:"small",variant:"outlined",className:"h-10 lg:self-center",children:"Search"}),Object(v.jsx)(b.a,{onClick:a,size:"small",variant:"outlined",color:"error",className:"h-10 lg:self-center",children:"Options"})]})]})})};var N=function(e){var t=e.handleOpen,a=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return[a,function(){return s(!a)}]}(),s=Object(i.a)(a,2),l=s[0],n=s[1];return Object(v.jsxs)(h.a,{class:"bg-black text-white p-2 sticky w-full",children:[Object(v.jsxs)(j.a,{id:"nav-row",class:"flex",children:[Object(v.jsxs)(j.a,{class:"flex space-x-1 items-center",children:[Object(v.jsx)(p.a,{fontSize:"large",children:Object(v.jsx)("img",{alt:"brand visual",src:w})}),Object(v.jsx)(u.a,{variant:"h6",children:"API Weather App"})]}),Object(v.jsx)(j.a,{class:"flex justify-center items-center flex-grow",children:Object(v.jsx)(C,{handleOpen:t,size:"w-5/12 mx-2",only:["xs","sm"]})}),Object(v.jsx)(d.a,{mdUp:!0,children:Object(v.jsx)(j.a,{class:"ml-auto self-center",component:"button",onClick:n,children:Object(v.jsx)(g.a,{color:"white",fontSize:"large"})})})]}),Object(v.jsx)(j.a,{class:"flex justify-center items-center flex-grow",children:Object(v.jsx)(C,{handleOpen:t,collapseButton:l,size:"w-5/12",only:["xs","lg","md","xl"]})}),Object(v.jsx)(j.a,{class:"flex flex-col-reverse justify-center items-center flex-grow",children:Object(v.jsx)(C,{handleOpen:t,collapseButton:l,size:"w-11/12",only:["sm","lg","md","xl"]})})]})},S=a.p+"static/media/wallpaper.dac49862.jpg",F=a(171),z=a(176),U=a(174),D=a(61),I=a.n(D),W=a.p+"static/media/humidity.5da6ae3c.svg",P=function(e){var t=e.data,a=e.key,c=e.degUnit;return Object(v.jsxs)(j.a,{class:"bg-black text-white flex rounded-lg p-3 border-2 flex flex-col",style:{minWidth:"20rem"},children:[Object(v.jsxs)(j.a,{id:"header",class:"flex flex-grow justify-between",children:[Object(v.jsxs)(j.a,{id:"location-date",class:"w-6/12",children:[Object(v.jsx)(u.a,{variant:"p",className:"font-medium",sx:{color:"error.main"},children:t.date}),Object(v.jsx)(u.a,{variant:"p",className:"block text-3xl font-medium",children:t.city})]}),Object(v.jsx)(j.a,{id:"temp",class:"w-5/12 text-center self-center",children:Object(v.jsxs)(u.a,{variant:"p",className:"block text-4xl font-medium",sx:{color:"warning.light"},children:["C"===c?t.degC:t.degF,"\xb0",c]})}),Object(v.jsx)(j.a,{id:"delete-button",className:"w-1/12",children:Object(v.jsx)(z.a,{id:"long-button",onClick:"",children:Object(v.jsx)(I.a,{className:"text-white hover:text-green-600"})})})]}),Object(v.jsxs)(j.a,{id:"content",class:"flex",children:[Object(v.jsxs)(j.a,{id:"weather-status",class:"w-5/12 bg-red-90 flex flex-col items-center mt-3",children:[Object(v.jsx)("img",{width:"80",src:t.icon,alt:"weather"}),Object(v.jsx)(u.a,{variant:"p",className:"text-2xl",sx:{marginTop:"-15px"},children:t.weatherStatus})]}),Object(v.jsxs)(j.a,{className:"w-7/12 flex flex-col space-y-2 mt-1",children:[Object(v.jsxs)(u.a,{variant:"p",className:" mb-5 text-center ",children:["Feels like ","C"===c?t.degC:t.degF,"\xb0",c,". ",t.shortDescription]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)("img",{width:"25",className:"inline-block",alt:"",src:W}),"Humidity : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.humidity})]}),Object(v.jsxs)(u.a,{children:[" ",Object(v.jsx)("i",{class:"fas fa-wind"})," WindSpeed : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.windSpeed})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)("i",{class:"fas fa-smog"})," Visibility  : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.visibility})]})]})]})]},a)};var L=function(e){var t=e.degUnit,a=e.data;return Object(v.jsxs)(j.a,{class:"p-4 bg-red-90",children:[Object(v.jsxs)(j.a,{class:"flex items-center flex-col  sm:flex-row  space-y-2 sm:space-y-0 mb-2 gap-x-2",children:[Object(v.jsx)(u.a,{variant:"p",className:"self-start text-2xl border-2  border-yellow-200\r font-medium  bg-black p-2 rounded-lg text-blue-400",children:"Dashboard"}),Object(v.jsx)(F.a,{severity:"info",className:"mx-auto",children:Object(v.jsx)(u.a,{class:"text-blue-900 font-medium",children:"Weather cards are slidable. Click on a  card to View its Forecast!"})})]}),Object(v.jsx)(U.a,{class:"flex justify-start overflow-x-auto space-x-3 mt-4",children:a.map((function(e){return Object(v.jsx)(P,{data:e,degUnit:t})}))})]})},B=function(e){var t=e.data,a=e.key,c=e.degUnit;return Object(v.jsxs)(j.a,{class:"bg-green-800 text-white flex rounded-lg p-3 border-2 flex flex-col",style:{minWidth:"20rem"},children:[Object(v.jsxs)(j.a,{id:"header",class:"flex flex-grow justify-between",children:[Object(v.jsxs)(j.a,{id:"location-date",class:"w-6/12",children:[Object(v.jsx)(u.a,{variant:"p",className:"font-medium",sx:{color:"error.light"},children:t.date}),Object(v.jsx)(u.a,{variant:"p",className:"block text-3xl font-medium",children:t.day})]}),Object(v.jsx)(j.a,{id:"temp",class:"w-5/12 text-center self-center",children:Object(v.jsxs)(u.a,{variant:"p",className:"block text-4xl font-medium",sx:{color:"warning.light"},children:["C"===c?t.degC:t.degF,"\xb0",c]})}),Object(v.jsx)(j.a,{id:"delete-button",className:"w-1/12",children:Object(v.jsx)(z.a,{id:"long-button",onClick:"",children:Object(v.jsx)(I.a,{className:"text-white hover:text-green-600"})})})]}),Object(v.jsxs)(j.a,{id:"content",class:"flex",children:[Object(v.jsxs)(j.a,{id:"weather-status",class:"w-5/12 bg-red-90 flex flex-col items-center mt-3",children:[Object(v.jsx)("img",{width:"80",src:t.icon,alt:"weather"}),Object(v.jsx)(u.a,{variant:"p",className:"text-2xl",sx:{marginTop:"-15px"},children:t.weatherStatus})]}),Object(v.jsxs)(j.a,{className:"w-7/12 flex flex-col space-y-2 mt-1",children:[Object(v.jsxs)(u.a,{variant:"p",className:" mb-5 text-center ",children:["Feels like ","C"===c?t.degC:t.degF,"\xb0",c,". ",t.shortDescription]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)("img",{width:"25",className:"inline-block",src:W,alt:""}),"Humidity : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.humidity})]}),Object(v.jsxs)(u.a,{children:[" ",Object(v.jsx)("i",{class:"fas fa-wind"})," WindSpeed : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.windSpeed})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)("i",{class:"fas fa-smog"})," Visibility  : ",Object(v.jsx)("span",{style:{color:"yellow"},children:t.visibility})]})]})]})]},a)};var J=function(e){var t=e.degUnit,a=e.data;return Object(v.jsxs)(j.a,{className:"mt-8 p-4 text-white",children:[Object(v.jsxs)(u.a,{variant:"p",className:"self-center text-2xl border-2  border-yellow-200\r font-medium  bg-black p-2 rounded-lg text-blue-400",children:["Forecast For ",a[0].city]}),Object(v.jsx)(j.a,{className:"flex justify-start overflow-x-auto space-x-3 mt-6",children:a.map((function(e,a){return Object(v.jsx)(B,{data:e,degUnit:t},a)}))})]})},T=a(185),A=a(172),H=a(186),M=a(187),V=a(183),E=a(184),Q=a(86),q=a.n(Q),G=a.p+"static/media/wallpaper2.a6e0b2eb.jpg",K=a.p+"static/media/wallpaper3.6c954cbe.jpg",R=a.p+"static/media/wallpaper4.fb7fb6d1.jpg",X=a.p+"static/media/wallpaper5.44dc4f33.jpg",Y=a.p+"static/media/wallpaper6.3f11ff0a.jpg",Z=a.p+"static/media/wallpaper7.17617cbc.jpg",$=a.p+"static/media/wallpaper8.cbb78813.jpg",_=a.p+"static/media/wallpaper9.002c2ae5.jpg",ee=a.p+"static/media/wallpaper10.77df1d32.jpg",te=a.p+"static/media/wallpaper11.f87bb7ee.jpg",ae=a.p+"static/media/wallpaper12.062de8f0.jpg",ce=a(87),se=a.n(ce),le=[S,G,K,R,X,Y,Z,$,_,ee,te,ae];var ne=function(e){var t=e.setWallPaper,a=e.wallpaper,s=e.open,l=e.handleClose,n=e.handleDegC,r=e.handleDegF,d=Object(c.useState)(!0),o=Object(i.a)(d,2),x=o[0],b=o[1];return Object(v.jsx)(V.a,{onClose:l,open:s,fullWidth:!0,children:Object(v.jsxs)(j.a,{class:"p-2",children:[Object(v.jsxs)(E.a,{class:"w-100 flex",children:[Object(v.jsx)(u.a,{class:"font-medium",children:"Options"}),Object(v.jsx)(z.a,{class:"ml-auto",onClick:l,children:Object(v.jsx)(q.a,{})})]}),Object(v.jsxs)(T.a,{class:"p-2",children:[Object(v.jsxs)(j.a,{class:"flex items-center justify-center",children:[Object(v.jsx)(u.a,{class:"font-medium text-2xl",children:"\xb0C"}),Object(v.jsx)(A.a,{checked:x,onChange:function(){x?n():r(),b(!x)}}),Object(v.jsx)(u.a,{class:"font-medium text-2xl",children:"\xb0F"})]}),Object(v.jsx)(F.a,{component:"div",className:"mx-auto mb-2 w-52",children:"Choose a Wallpaper"}),Object(v.jsx)(H.a,{cols:3,rowHeight:156,children:le.map((function(e,c){return Object(v.jsx)(M.a,{onClick:function(){return t(e)},class:"rounded-lg flex items-center justify-center",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",height:"8rem"},children:Object(v.jsx)(j.a,{className:"".concat(a===e?"inline-block":"invisible"),children:Object(v.jsx)(se.a,{sx:{color:"error.main",fontSize:"4rem"}})})})}))})]})]})})},ie=a.p+"static/media/sunny.213f9a41.svg",re=[{day:"Monday",city:"Laurel, US",date:"July, 6th, 08:37am",degC:"41",degF:"30",icon:ie,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",windSpeed:"200",visibility:"300"},{day:"Monday",city:"Laurel, US",date:"July, 6th, 08:37am",degC:"41",degF:"30",icon:ie,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",windSpeed:"200",visibility:"300"}];var de=function(){var e=function(){var e=Object(c.useState)("F"),t=Object(i.a)(e,2),a=t[0],s=t[1];return[a,function(){return s("C")},function(){return s("F")}]}(),t=Object(i.a)(e,3),a=t[0],s=t[1],l=t[2],n=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(S),n=Object(i.a)(l,2);return[a,function(){return s(!0)},function(){return s(!1)},n[0],n[1]]}(),r=Object(i.a)(n,5),d=r[0],o=r[1],x=r[2],b=r[3],h=r[4];return Object(v.jsxs)(j.a,{class:"h-screen  w-full break-words flex flex-col",children:[Object(v.jsx)(N,{handleOpen:o}),Object(v.jsxs)(j.a,{class:"h-full w-full overflow-y-auto pb-28 pt-5",style:{backgroundImage:"url(".concat(b,")"),backgroundSize:"cover"},children:[Object(v.jsx)(L,{degUnit:a,data:re}),Object(v.jsx)(J,{degUnit:a,data:re}),Object(v.jsx)(ne,{open:d,wallpaper:b,setWallPaper:h,handleClose:x,handleDegC:s,handleDegF:l})]})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),l(e),n(e)}))};n.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(de,{})}),document.getElementById("root")),je()}},[[120,1,2]]]);
//# sourceMappingURL=main.5c0cc8ed.chunk.js.map