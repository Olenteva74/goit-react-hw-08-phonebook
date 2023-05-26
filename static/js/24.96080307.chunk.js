"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[24],{3024:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,a,o,i,d,s,c,u,l,p,x,b=r(2791),f=r(9434),m=r(4296),h=r(2829),Z=r(1413),g=r(887),v=r(4695),j=r(6727),y=r(168),z=r(7686),k=z.Z.form(t||(t=(0,y.Z)(["\noutline: 2px solid #cbd6ee;\nwidth: 450px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\nborder-radius: 2px;\n"]))),w=z.Z.label(a||(a=(0,y.Z)(["\nfont-size: 16px;\n"]))),_=z.Z.input(o||(o=(0,y.Z)(["\npadding: 12px;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),A=z.Z.button(i||(i=(0,y.Z)(["\nappearance: none;\ncursor: pointer;\nborder: 0;\nborder-radius: 4px;\nbackground: #4676D7;\ncolor: #fff;\npadding: 15px;\nfont-size: 16px;\ntext-transform: capitalize;\n:hover,\n:focus {\n    background: #1d49aa;\n    outline: none;\n    box-shadow: 0 0 0 4px #cbd6ee;\n}\n"]))),C=z.Z.span(d||(d=(0,y.Z)(["\nmargin-bottom: 10px;\nbackground-color: #cbd6ee;\ncolor: #1d49aa;\nborder-radius: 2px;\n"]))),F=r(3329),I=j.Ry().shape({name:j.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:j.Z_().trim().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}).required(),D=function(){var n,e,r=(0,f.v9)(h.Af),t=(0,f.I0)(),a=(0,g.cI)({resolver:(0,v.X)(I)}),o=a.register,i=a.handleSubmit,d=a.reset,s=a.formState.errors;return(0,F.jsxs)(k,{onSubmit:i((function(n){var e=n.name,a=n.number;if(r.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts."));else if(r.some((function(n){return n.number===a}))){var o=r.find((function(n){return n.number===a}));alert("".concat(a," is already in contacts as ").concat(o.name,"."))}else t((0,m.uK)({name:e,number:a})),d()})),children:[(0,F.jsx)(w,{htmlFor:"name",children:"Name"}),(0,F.jsx)(_,(0,Z.Z)({id:"name",type:"text"},o("name"))),(0,F.jsx)(C,{children:null===(n=s.name)||void 0===n?void 0:n.message}),(0,F.jsx)(w,{htmlFor:"number",children:"Number"}),(0,F.jsx)(_,(0,Z.Z)({id:"number",type:"tel"},o("number"))),(0,F.jsx)(C,{children:null===(e=s.number)||void 0===e?void 0:e.message}),(0,F.jsx)(A,{type:"submit",children:"Add contact"})]})},q=r(2155),N=z.Z.div(s||(s=(0,y.Z)([""]))),S=z.Z.input(c||(c=(0,y.Z)(["\ndisplay: block;\nwidth: 650px;\npadding: 12px;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),B=function(){var n=(0,f.I0)(),e=(0,f.v9)(h.AD);return(0,F.jsx)(N,{children:(0,F.jsx)(S,{id:"filter",type:"text",name:"filter",value:e,onInput:function(e){return n((0,q.B)(e.target.value))},placeholder:"Find contacts by name"})})},K=z.Z.li(u||(u=(0,y.Z)(["\nwidth: 650px;\npadding: 12px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: baseline;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),L=z.Z.span(l||(l=(0,y.Z)(["\nflex-basis: calc(100% / 3);\n"]))),V=z.Z.button(p||(p=(0,y.Z)(["\nappearance: none;\ncursor: pointer;\nborder: 0;\nborder-radius: 4px;\nbackground: #4676D7;\ncolor: #fff;\npadding: 8px;\nfont-size: 16px;\ntext-transform: capitalize;\n:hover,\n:focus {\n    background: #1d49aa;\n    outline: none;\n    box-shadow: 0 0 0 3px #cbd6ee;\n}\n"]))),E=function(n){var e=n.id,r=n.name,t=n.number,a=(0,f.I0)();return(0,F.jsxs)(K,{children:[(0,F.jsxs)(L,{children:[r,": "]}),(0,F.jsx)(L,{children:t}),(0,F.jsx)(V,{type:"button",onClick:function(){return a((0,m.GK)(e))},children:"Delete"})]})},G=z.Z.ul(x||(x=(0,y.Z)(["\nmargin: 0;\npadding: 0;\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nlist-style-type: none;"]))),J=function(){var n=(0,f.v9)(h.hF);return(0,F.jsx)(G,{children:n.map((function(n){return(0,F.jsx)(E,(0,Z.Z)({},n),n.id)}))})},M=r(2989),P=r(5558),R=function(){var n=(0,f.I0)(),e=(0,f.v9)(h.xU),r=(0,f.v9)(h.zh);return(0,b.useEffect)((function(){n((0,m.yF)())}),[n]),(0,F.jsxs)(P._,{children:[(0,F.jsx)(D,{}),(0,F.jsx)(P.V,{children:"Contacts"}),(0,F.jsx)(B,{}),e&&(0,F.jsx)(M.a,{}),r&&(0,F.jsx)("h2",{children:r}),(0,F.jsx)(J,{})]})}},5558:function(n,e,r){r.d(e,{V:function(){return s},_:function(){return d}});var t,a,o=r(168),i=r(7686),d=i.Z.div(t||(t=(0,o.Z)(["\nheight: 20vh;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 10px;\n"]))),s=i.Z.h1(a||(a=(0,o.Z)(["\nfont-size: 40px;\n"])))}}]);
//# sourceMappingURL=24.96080307.chunk.js.map