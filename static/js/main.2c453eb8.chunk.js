(this.webpackJsonpapiweatherapp=this.webpackJsonpapiweatherapp||[]).push([[0],{115:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var i=n(15),r=n(1),c=n.n(r),a=n(33),s=n.n(a),o=(n(115),n(13)),l=n(179),d=n(170),j=n(181),p=n(183),m=n(184),h=n(185),x=n(171),u=n(172),b=n(187),g=n(188),O=n.p+"static/media/brandImg.7eb91340.svg",y=n(186),w=n(87),f=n.n(w),S=n(88),k=n.n(S),T=n(0),C=function(e,t){switch(t.type){case"setSelectedOption":return Object(i.a)(Object(i.a)({},e),{},{selectedOption:t.data});case"setInputValue":return Object(i.a)(Object(i.a)({},e),{},{inputValue:t.data});default:return Object(i.a)({},e)}};var v=function(e){var t=e.appState,n=e.appDispatcher,c={selectedOption:null,inputValue:"",options:[],timeout:Object(r.useRef)(null)},a=Object(r.useReducer)(C,c),s=Object(o.a)(a,2),w=s[0],S=s[1];return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(j.a,{sx:{position:"static",backgroundColor:"black"},children:Object(T.jsx)(p.a,{sx:{p:"6px"},children:Object(T.jsxs)(l.a,{container:!0,sx:{alignItems:"center",direction:{xs:"column",md:"row"}},children:[Object(T.jsxs)(l.a,{container:!0,item:!0,sx:{alignItems:"center",width:{xs:"1",md:"auto"}},children:[Object(T.jsx)(l.a,{item:!0,children:Object(T.jsx)(m.a,{display:"block",component:"img",src:O,sx:{width:"2.5rem",height:"2.5rem"}})}),Object(T.jsx)(l.a,{item:!0,children:Object(T.jsx)(h.a,{variant:"h6",sx:{fontWeight:"400"},children:"API Weather App"})}),Object(T.jsx)(l.a,{item:!0,sx:{ml:"auto"},children:Object(T.jsx)(y.a,{onClick:function(){return n({type:"toggleCollapseButton"})},children:Object(T.jsx)(f.a,{sx:{color:"white",display:{md:"none",xs:"block"}}})})})]}),Object(T.jsxs)(l.a,{item:!0,container:!0,direction:{xs:"column-reverse",sm:"row"},spacing:"10",justifyContent:"center",alignItems:"center",flex:"1",py:"10px",display:{md:"flex",xs:"".concat(t.collapseButton?"none":"flex")},children:[Object(T.jsx)(l.a,{item:!0,flexGrow:{sm:"1",md:"0.8",lg:"0.5"},width:{xs:"100%",sm:"auto"},children:Object(T.jsx)(x.a,{sx:{backgroundColor:"white",borderRadius:"0.7rem"},getOptionLabel:function(e){return e.address},options:w.options,value:w.selectedOption,onChange:function(e,t){S({type:"setSelectedOption",data:t}),S({type:"setInputValue",data:t})},onInputChange:function(e,t){S({type:"setInputValue",data:t})},renderInput:function(e){return Object(T.jsx)(u.a,Object(i.a)(Object(i.a)({},e),{},{InputProps:Object(i.a)(Object(i.a)({},e.InputProps),{},{size:"small",placeholder:"Enter the Name of a Location",margin:"dense",startAdornment:Object(T.jsx)(b.a,{position:"start",children:Object(T.jsx)(k.a,{})})})}))}})}),Object(T.jsx)(l.a,{item:!0,children:Object(T.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(T.jsx)(g.a,{variant:"outlined",size:"small",sx:{color:"primary.light"},children:"Get Forecast"}),Object(T.jsx)(g.a,{variant:"outlined",size:"small",color:"error",sx:{color:"error.light"},onClick:function(){return n({type:"openSettings"})},children:"Options"})]})})]})]})})})})},F=n(189),I=n(190),W=n(191),D=n(192),U=n(177),z=n(175),L=n(193),M=n(194),A=[n.p+"static/media/wallpaper.dac49862.jpg",n.p+"static/media/wallpaper2.a6e0b2eb.jpg",n.p+"static/media/wallpaper3.6c954cbe.jpg",n.p+"static/media/wallpaper4.fb7fb6d1.jpg",n.p+"static/media/wallpaper5.44dc4f33.jpg",n.p+"static/media/wallpaper6.3f11ff0a.jpg",n.p+"static/media/wallpaper7.17617cbc.jpg",n.p+"static/media/wallpaper8.cbb78813.jpg",n.p+"static/media/wallpaper9.002c2ae5.jpg",n.p+"static/media/wallpaper10.77df1d32.jpg",n.p+"static/media/wallpaper11.f87bb7ee.jpg",n.p+"static/media/wallpaper12.062de8f0.jpg"],B=n(89),G=n.n(B),J=n(90),N=n.n(J);var P=function(e){var t=e.appState,n=e.appDispatcher;return Object(T.jsxs)(F.a,{open:t.settings,onClose:function(){return n({type:"closeSettings"})},fullWidth:!0,children:[Object(T.jsxs)(I.a,{sx:{display:"flex",alignItems:"center"},children:[Object(T.jsx)(h.a,{variant:"h5",sx:{fontWeight:"500"},children:"Options"}),Object(T.jsx)(y.a,{sx:{ml:"auto"},onClick:function(){return n({type:"closeSettings"})},children:Object(T.jsx)(G.a,{})})]}),Object(T.jsx)(W.a,{sx:{pb:"0px"},children:Object(T.jsxs)(l.a,{container:!0,spacing:1,direction:"column",children:[Object(T.jsx)(l.a,{item:!0,children:Object(T.jsx)(g.a,{variant:"contained",size:"small",color:"error",sx:{mx:"auto",display:"block",borderRadius:"0.5rem"},children:"Delete local Storage"})}),Object(T.jsx)(l.a,{item:!0,children:Object(T.jsxs)(D.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(T.jsx)(h.a,{variant:"h5",sx:{fontWeight:"500"},children:"\xb0C"}),Object(T.jsx)(U.a,{checked:"F"===t.degUnit,onChange:function(){return n({type:"toggleDegUnit"})}}),Object(T.jsx)(h.a,{variant:"h5",sx:{fontWeight:"500"},children:"\xb0F"})]})}),Object(T.jsxs)(l.a,{item:!0,children:[Object(T.jsx)(z.a,{sx:{mx:"auto",width:"40%",display:"flex",alignItems:"center"},children:Object(T.jsx)(h.a,{sx:{fontSize:"1.2rem",fontWeight:"500"},children:"Choose a Wallpaper"})}),Object(T.jsx)(L.a,{cols:3,rowHeight:110,children:A.map((function(e,i){return Object(T.jsx)(M.a,{onClick:function(){return n({type:"setWallpaper",data:e})},sx:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",height:"8rem",cursor:"pointer",borderRadius:"0.6rem"},children:Object(T.jsx)(m.a,{sx:{display:"".concat(t.wallpaper===e?"flex":"none"),justifyContent:"center",alignItems:"center",height:"100%"},children:Object(T.jsx)(N.a,{sx:{color:"error.main",fontSize:"4rem"}})})},i)}))})]})]})})]})},R=n(182),V=n(93),Y=n(176),E=n(63),H=n.n(E),X=n.p+"static/media/pressure.2ad36da1.svg",q=n.p+"static/media/humidity.5da6ae3c.svg",Z=n(73),K=function(e){var t=e.data,n=e.appState,i=e.appDispatcher,c=Object(r.useState)(null),a=Object(o.a)(c,2),s=a[0],j=a[1];return Object(T.jsx)(l.a,{item:!0,sx:{width:"fit-content",mb:"1rem"},children:Object(T.jsxs)(R.a,{elevation:3,sx:{p:"0.6rem",background:"black",color:"white",border:"0.13rem solid white",borderRadius:"0.7rem"},children:[Object(T.jsxs)(l.a,{container:!0,columnSpacing:2,children:[Object(T.jsx)(l.a,{item:!0,width:"fit-content",flexGrow:"1",xs:!0,children:Object(T.jsxs)(d.a,{children:[Object(T.jsx)(h.a,{sx:{color:"error.light"},children:t.current.date}),Object(T.jsx)(h.a,{variant:"h6",sx:{},children:t.city})]})}),Object(T.jsx)(l.a,{item:!0,width:"fit-content",alignSelf:"center",flexGrow:"0",xs:!0,children:Object(T.jsxs)(d.a,{direction:"row",spacing:.5,justifyContent:"between",children:[Object(T.jsxs)(h.a,{sx:{color:"warning.light",fontWeight:"500",fontSize:"2.5rem"},children:["C"===n.degUnit?ne(t.current.temp):ie(t.current.temp),"\xb0",n.degUnit]}),Object(T.jsx)(y.a,{id:"long-button",onClick:function(e){return j(e.currentTarget)},sx:{color:"white",alignSelf:"start"},children:Object(T.jsx)(H.a,{className:"text-white hover:text-green-600"})}),Object(T.jsxs)(V.a,{anchorEl:s,open:Boolean(s),onClose:function(){return j(null)},children:[Object(T.jsx)(Y.a,{onClick:function(){i({type:"setSelectedForecast",key:t.key}),j(null)},children:"Select Location"}),Object(T.jsx)(Y.a,{onClick:function(){j(null),console.log(t.key)},children:"Update Location"}),Object(T.jsx)(Y.a,{onClick:function(){return e=i,n=t.key,j(null),void Z.Confirm.show("\u274c Confirm Deletion","Are you Sure you want to delete this location?","Yes","Cancel",(function(){return e({type:"onDeleteForecast",key:n})}),(function(){}),{titleColor:"#e66146",fontFamily:"quicksand",useGoogleFont:!1});var e,n},children:"Delete location"})]})]})})]}),Object(T.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"between",width:"100%",sx:{backgroundColor:"warning.mai"},children:[Object(T.jsx)(l.a,{item:!0,flexGrow:"0.1",sx:{mt:"-1.5rem"},children:Object(T.jsxs)(d.a,{spacing:-2,alignItems:"center",children:[Object(T.jsx)(m.a,{component:"img",width:"6rem",src:"http://openweathermap.org/img/wn/10d@2x.png"}),Object(T.jsx)(h.a,{sx:{fontWeight:"500",color:"warning.light",width:"8rem",textAlign:"center"},children:t.current.shortDescription})]})}),Object(T.jsxs)(l.a,{item:!0,flexGrow:"1",alignSelf:"center",xs:!0,children:[Object(T.jsxs)(d.a,{alignItems:"center",children:[Object(T.jsx)(h.a,{sx:{fontWeight:"500",color:"primary.light"},children:"TimeZone"}),Object(T.jsx)(h.a,{sx:{fontWeight:"400"},children:t.current.timezone})]}),Object(T.jsxs)(d.a,{direction:"row",spacing:5,justifyContent:"center",children:[Object(T.jsxs)(d.a,{children:[Object(T.jsx)(h.a,{sx:{color:"primary.light",fontWeight:"500"},children:"Sunrise"}),Object(T.jsx)(h.a,{sx:{fontWeight:"400"},children:t.current.sunrise})]}),Object(T.jsxs)(d.a,{sx:{},children:[Object(T.jsx)(h.a,{sx:{color:"primary.light",fontWeight:"500"},children:"Sunrise"}),Object(T.jsx)(h.a,{sx:{fontWeight:"400"},children:t.current.sunrise})]})]})]})]}),Object(T.jsx)(l.a,{item:!0,xs:!0,sx:{backgroundColor:"re",mt:"0.5rem"},children:Object(T.jsxs)(d.a,{direction:"row",width:"20rem",spacing:2,sx:{flexWrap:"wrap",justifyContent:"center"},children:[Object(T.jsxs)(d.a,{spacing:"0.3rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"img",width:"1.4rem",src:X,alt:""}),Object(T.jsxs)(h.a,{children:["Pressure: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[t.current.pressure," hPa"]})]})]}),Object(T.jsxs)(d.a,{spacing:"0.2rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"img",width:"1.6rem",src:q,alt:""}),Object(T.jsxs)(h.a,{children:["Humidity: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[t.current.humidity,"%"]})]})]}),Object(T.jsxs)(d.a,{spacing:"-0.2rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"i",width:"1.6rem",className:"fas fa-wind"}),Object(T.jsxs)(h.a,{children:["WindSpeed: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[t.current.windSpeed," m/s"]})]})]}),Object(T.jsxs)(d.a,{spacing:"-0.2rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"i",width:"1.6rem",className:"fas fa-smog"}),Object(T.jsxs)(h.a,{children:["Visibility: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[t.current.visibility," m"]})]})]})]})})]})})};var Q=function(e){var t=e.appState,n=e.appDispatcher;return Object(T.jsxs)(d.a,{spacing:1,sx:{backgroundColor:"blu",px:"0.5rem"},children:[Object(T.jsx)(z.a,{severity:"info",sx:{width:"fit-content",alignSelf:"center",mt:"0.5rem",textAlign:"center"},children:"Dashboard cards are horizontally scrollable on smaller screens"}),Object(T.jsx)(h.a,{variant:"h5",alignSelf:{xs:"center",md:"flex-start"},sx:{backgroundColor:"black",fontWeight:"bold",color:"primary.light",width:"fit-content",p:"0.3rem",borderRadius:"0.5rem",border:"0.2rem solid",borderColor:"warning.light"},children:"Dashboard"}),Object(T.jsx)(l.a,{container:!0,spacing:1,flexWrap:"nowrap",sx:{overflowX:"auto"},children:t.locationList.map((function(e){return Object(T.jsx)(K,{data:e,appState:t,appDispatcher:n},e.key)}))})]})},$=function(e){var t=e.appState,n=e.data;return Object(T.jsx)(l.a,{item:!0,sx:{width:"fit-content",mb:"1rem"},children:Object(T.jsxs)(R.a,{elevation:3,sx:{p:"0.6rem",background:"black",color:"white",border:"0.13rem solid white",borderRadius:"0.7rem"},children:[Object(T.jsxs)(l.a,{container:!0,columnSpacing:2,children:[Object(T.jsx)(l.a,{item:!0,width:"fit-content",flexGrow:"1",mb:"1rem",xs:!0,children:Object(T.jsxs)(d.a,{children:[Object(T.jsx)(h.a,{sx:{color:"error.light"},children:n.date}),Object(T.jsx)(h.a,{variant:"h5",sx:{ml:"1rem",fontWeight:"500"},children:n.day})]})}),Object(T.jsx)(l.a,{item:!0,width:"fit-content",alignSelf:"center",flexGrow:"0",xs:!0,children:Object(T.jsxs)(d.a,{direction:"row",spacing:.5,justifyContent:"between",children:[Object(T.jsxs)(h.a,{sx:{color:"warning.light",fontWeight:"500",fontSize:"2.5rem"},children:["C"===t.degUnit?ne(n.dayTemp):ie(n.dayTemp),"\xb0",t.degUnit]}),Object(T.jsx)(y.a,{id:"long-button",sx:{color:"white",alignSelf:"start",visibility:"hidden"},children:Object(T.jsx)(H.a,{className:"text-white hover:text-green-600"})})]})})]}),Object(T.jsxs)(l.a,{container:!0,direction:"row",justifyContent:"between",width:"100%",sx:{backgroundColor:"warning.mai"},children:[Object(T.jsx)(l.a,{item:!0,flexGrow:"0.1",sx:{mt:"-1.9rem"},children:Object(T.jsxs)(d.a,{alignItems:"center",spacing:-2,children:[Object(T.jsx)(m.a,{component:"img",width:"6rem",src:n.icon,sx:{mt:"0"}}),Object(T.jsx)(h.a,{sx:{fontWeight:"500",color:"warning.light",width:"8rem",textAlign:"center"},children:n.shortDescription})]})}),Object(T.jsxs)(l.a,{item:!0,flexGrow:"1",alignSelf:"center",xs:!0,children:[Object(T.jsxs)(d.a,{item:!0,direction:"row",justifyContent:"space-around",children:[Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Min: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]}),Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Min: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]})]}),Object(T.jsxs)(d.a,{item:!0,direction:"row",justifyContent:"space-around",children:[Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Day: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]}),Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Night: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]})]}),Object(T.jsxs)(d.a,{item:!0,direction:"row",justifyContent:"space-around",children:[Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Morn: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]}),Object(T.jsxs)(h.a,{children:[Object(T.jsx)(m.a,{component:"span",sx:{color:"primary.light"},children:"Eve: "}),Object(T.jsxs)(m.a,{component:"span",sx:{color:"yellow"},children:["C"===t.degUnit?ne(n.minTemp):ie(n.minTemp),"\xb0",t.degUnit]})]})]})]})]}),Object(T.jsx)(l.a,{item:!0,xs:!0,sx:{backgroundColor:"re",mt:"0.5rem"},children:Object(T.jsxs)(d.a,{direction:"row",width:"20rem",spacing:2,sx:{flexWrap:"wrap",justifyContent:"center"},children:[Object(T.jsxs)(d.a,{spacing:"0.3rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"img",width:"1.4rem",src:X,alt:""}),Object(T.jsxs)(h.a,{children:["Pressure: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[n.pressure," hPa"]})]})]}),Object(T.jsxs)(d.a,{spacing:"0.2rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"img",width:"1.6rem",src:q,alt:""}),Object(T.jsxs)(h.a,{children:["Humidity: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[n.humidity,"%"]})]})]}),Object(T.jsxs)(d.a,{spacing:"-0.2rem",direction:"row",alignItems:"center",children:[Object(T.jsx)(m.a,{component:"i",width:"1.6rem",className:"fas fa-wind"}),Object(T.jsxs)(h.a,{children:["WindSpeed: ",Object(T.jsxs)("span",{style:{color:"yellow"},children:[n.windSpeed," m/s"]})]})]})]})})]})})};var _=function(e){var t=e.appState;return Object(T.jsxs)(d.a,{spacing:1,sx:{backgroundColor:"blu",px:"0.5rem"},children:[Object(T.jsxs)(h.a,{variant:"h5",alignSelf:{xs:"center",md:"flex-start"},sx:{backgroundColor:"black",fontWeight:"bold",color:"primary.light",width:"fit-content",p:"0.3rem",borderRadius:"0.5rem",border:"0.2rem solid",borderColor:"warning.light",textAlign:"center"},children:["8-Day Forecast For ",t.selectedForecast.city]}),Object(T.jsx)(l.a,{container:!0,flexWrap:"wrap",spacing:1,sx:{justifyContent:{xs:"center",md:"flex-start"}},children:t.selectedForecast.daily.map((function(e){return Object(T.jsx)($,{data:e,appState:t},e.key)}))})]})},ee=n.p+"static/media/sunny.213f9a41.svg",te=n(91),ne=function(e){return(5/9*(e-32)).toFixed(0)},ie=function(e){return(1.8*e+32).toFixed(0)},re=function(){return[{city:"8417 Spruce Hill Dr",lat:"0",lon:"0",key:"00",current:{day:"Monday",date:"July, 6th, 08:37am",timezone:"America/NewYork",sunrise:"08:00am",sunset:"07:00pm",temp:"0",icon:ee,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",pressure:"100",windSpeed:"200",visibility:"300"},daily:[{date:"July, 6th, 08:37am",day:"Monday",key:"Monday 00",description:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"},{date:"July, 6th, 08:37am",day:"Tuesday",key:"Tuesday 00",description:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"}]},{city:"chicago",lat:"0",lon:"1",key:"01",current:{day:"Monday",date:"July, 6th, 08:37am",timezone:"America/NewYork",sunrise:"08:00am",sunset:"07:00pm",temp:"0",icon:ee,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",pressure:"100",windSpeed:"200",visibility:"300"},daily:[{date:"July, 6th, 08:37am",day:"Monday",key:"Monday 01",shortDescription:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"},{date:"July, 6th, 08:37am",day:"Tuesday",key:"Tuesday 01",description:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"}]},{city:"new york",lat:"1",lon:"1",key:"11",current:{day:"Monday",date:"July, 6th, 08:37am",timezone:"America/NewYork",sunrise:"08:00am",sunset:"07:00pm",temp:"0",icon:ee,weatherStatus:"Sunny",shortDescription:"Light rain, gentle breeze.",humidity:"100",pressure:"100",windSpeed:"200",visibility:"300"},daily:[{date:"July, 6th, 08:37am",day:"Monday",key:"Monday 11",description:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"},{date:"July, 6th, 08:37am",day:"Tuesday",key:"Tuesday 11",description:"light rain",icon:ee,weatherStatus:"Sunny",humidity:"100",windSpeed:"200",pressure:"100",dayTemp:"0",nightTemp:"0",mornTemp:"0",eveTemp:"0",minTemp:"0",maxTemp:"0"}]}]},ce={locationList:re(),selectedForecast:re().find((function(e){return e})),settings:!1,degUnit:"F",collapseButton:!1,wallpaper:A[2]},ae=function(e,t){switch(t.type){case"setSelectedForecast":return Object(i.a)(Object(i.a)({},e),{},{selectedForecast:e.locationList.find((function(e){return e.key===t.key}))});case"onDeleteForecast":return Object(i.a)(Object(i.a)({},e),{},{locationList:e.locationList.filter((function(e){return e.key!==t.key})),selectedForecast:+Boolean(e.selectedForecast)&&e.selectedForecast.key===t.key?e.locationList.find((function(e){return e.key!==t.key})):e.selectedForecast});case"toggleCollapseButton":return Object(i.a)(Object(i.a)({},e),{},{collapseButton:!e.collapseButton});case"setWallpaper":return Object(i.a)(Object(i.a)({},e),{},{wallpaper:t.data});case"toggleDegUnit":return Object(i.a)(Object(i.a)({},e),{},{degUnit:"F"===e.degUnit?"C":"F"});case"openSettings":return Object(i.a)(Object(i.a)({},e),{},{settings:!0});case"closeSettings":return Object(i.a)(Object(i.a)({},e),{},{settings:!1});default:return e}};var se=function(){var e=Object(r.useReducer)(ae,ce),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(te.a)();return Object(T.jsxs)(l.a,{container:!0,direction:"column",height:c,children:[Object(T.jsx)(l.a,{item:!0,children:Object(T.jsx)(v,{appState:n,appDispatcher:i})}),Object(T.jsx)(l.a,{item:!0,width:"100vw",sx:{backgroundImage:"url(".concat(n.wallpaper,")"),backgroundSize:"cover",backgroundPosition:"center",overflowY:"auto",flex:"1",overflowX:"hidden"},children:Object(T.jsxs)(d.a,{spacing:3,mt:"2rem",children:[Object(T.jsx)(Q,{appState:n,appDispatcher:i}),+Boolean(n.selectedForecast)&&Object(T.jsx)(_,{appState:n})]})}),Object(T.jsx)(P,{appState:n,appDispatcher:i})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};window.console=Object(i.a)(Object(i.a)({},window.console),{},{error:function(){},warn:function(){}}),s.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(se,{})}),document.getElementById("root")),oe(console.log)}},[[123,1,2]]]);
//# sourceMappingURL=main.2c453eb8.chunk.js.map