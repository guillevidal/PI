(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(14),a=c.n(r),o=(c(37),c(38),c(3)),i=c(9),j=c(1),s=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:"Soy Landingpage"}),Object(j.jsx)(i.b,{exact:!0,to:"/home",children:"ENTER"})]})},d=c(11),b=function(){var e=Object(d.c)((function(e){return e.breeds}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Hola"}),null===e||void 0===e?void 0:e.map((function(e){return Object(j.jsx)("p",{children:e.name})}))]})},l=function(){return Object(j.jsx)("section",{children:Object(j.jsx)("h2",{children:"Soy BreedDetail"})})},h=function(){return Object(j.jsx)("section",{children:Object(j.jsx)("h2",{children:"Soy CreateBreed"})})},u=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h2",{children:"Soy el "}),Object(j.jsx)(i.b,{exact:!0,to:"/home",children:"Home"}),Object(j.jsx)(i.b,{exact:!0,to:"/breedDetail",children:"Breed Detail"}),Object(j.jsx)(i.b,{exact:!0,to:"/createBreed",children:"Create Breed"})]})},O=c(20),x=c.n(O),p="GET_BREEDS",f="GET_BREEDS_ID";var m=function(){var e=Object(d.b)();return Object(n.useEffect)((function(){e((function(e){return x.a.get("http://localhost:3001/dogs").then((function(t){e({type:p,payload:t.data})}))}))})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:s}),Object(j.jsx)(o.a,{path:"/",component:u}),Object(j.jsx)(o.a,{exact:!0,path:"/home",render:b}),Object(j.jsx)(o.a,{exact:!0,path:"/breedDetail",component:l}),Object(j.jsx)(o.a,{exact:!0,path:"/createBreed",component:h})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))},g=c(15),y=c(31),D=c(13),B={breeds:[],breedsDetail:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(D.a)(Object(D.a)({},e),{},{breeds:t.payload});case f:return Object(D.a)(Object(D.a)({},e),{},{breedsDetail:t.payload});default:return e}},S=c(32),T=Object(g.createStore)(E,Object(S.composeWithDevTools)(Object(g.applyMiddleware)(y.a)));a.a.render(Object(j.jsx)(d.a,{store:T,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(m,{})})}),document.getElementById("root")),v()}},[[68,1,2]]]);
//# sourceMappingURL=main.b14c87f7.chunk.js.map