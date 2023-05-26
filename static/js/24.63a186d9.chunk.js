"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[24],{3024:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,o,i,a,s,d,c,u,l,p,x,m=r(2791),f=r(9434),b=r(4296),h=r(2829),Z=r(1413),g=r(1134),v=r(4695),j=r(6727),y=r(9085),z=r(168),_=r(7686),k=_.Z.form(t||(t=(0,z.Z)(["\noutline: 2px solid #cbd6ee;\nwidth: 450px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 5px;\nborder-radius: 2px;\n"]))),w=_.Z.label(o||(o=(0,z.Z)(["\nfont-size: 16px;\n"]))),A=_.Z.input(i||(i=(0,z.Z)(["\npadding: 12px;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),I=_.Z.button(a||(a=(0,z.Z)(["\nappearance: none;\ncursor: pointer;\nborder: 0;\nborder-radius: 4px;\nbackground: #4676D7;\ncolor: #fff;\npadding: 15px;\nfont-size: 16px;\ntext-transform: capitalize;\n:hover,\n:focus {\n    background: #1d49aa;\n    outline: none;\n    box-shadow: 0 0 0 4px #cbd6ee;\n}\n"]))),C=_.Z.span(s||(s=(0,z.Z)(["\nmargin-bottom: 10px;\nbackground-color: #cbd6ee;\ncolor: #1d49aa;\nborder-radius: 2px;\n"]))),F=r(3329),O=j.Ry().shape({name:j.Z_().trim().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:j.Z_().trim().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}).required(),T=function(){var n,e,r=(0,f.v9)(h.Af),t=(0,f.I0)(),o=(0,g.cI)({resolver:(0,v.X)(O)}),i=o.register,a=o.handleSubmit,s=o.reset,d=o.formState.errors;return(0,F.jsxs)(k,{onSubmit:a((function(n){var e=n.name,o=n.number;if(r.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))y.Am.info("".concat(e," is already in contacts."),{position:y.Am.POSITION.TOP_RIGHT});else if(r.some((function(n){return n.number===o}))){var i=r.find((function(n){return n.number===o}));y.Am.info("".concat(o," is already in contacts as ").concat(i.name,"."),{position:y.Am.POSITION.TOP_RIGHT})}else t((0,b.uK)({name:e,number:o})),s()})),children:[(0,F.jsx)(w,{htmlFor:"name",children:"Name"}),(0,F.jsx)(A,(0,Z.Z)({id:"name",type:"text"},i("name"))),(0,F.jsx)(C,{children:null===(n=d.name)||void 0===n?void 0:n.message}),(0,F.jsx)(w,{htmlFor:"number",children:"Number"}),(0,F.jsx)(A,(0,Z.Z)({id:"number",type:"tel"},i("number"))),(0,F.jsx)(C,{children:null===(e=d.number)||void 0===e?void 0:e.message}),(0,F.jsx)(I,{type:"submit",children:"Add contact"})]})},N=r(2155),P=_.Z.div(d||(d=(0,z.Z)([""]))),S=_.Z.input(c||(c=(0,z.Z)(["\ndisplay: block;\nwidth: 650px;\npadding: 12px;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),D=function(){var n=(0,f.I0)(),e=(0,f.v9)(h.AD);return(0,F.jsx)(P,{children:(0,F.jsx)(S,{id:"filter",type:"text",name:"filter",value:e,onInput:function(e){return n((0,N.B)(e.target.value))},placeholder:"Find contacts by name"})})},q=_.Z.li(u||(u=(0,z.Z)(["\nwidth: 650px;\npadding: 12px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: baseline;\nfont-size: 16px;\noutline: 2px solid #cbd6ee;\nborder: none;\nborder-radius: 2px;\n"]))),G=_.Z.span(l||(l=(0,z.Z)(["\nflex-basis: calc(100% / 3);\n"]))),R=_.Z.button(p||(p=(0,z.Z)(["\nappearance: none;\ncursor: pointer;\nborder: 0;\nborder-radius: 4px;\nbackground: #4676D7;\ncolor: #fff;\npadding: 8px;\nfont-size: 16px;\ntext-transform: capitalize;\n:hover,\n:focus {\n    background: #1d49aa;\n    outline: none;\n    box-shadow: 0 0 0 3px #cbd6ee;\n}\n"]))),B=function(n){var e=n.id,r=n.name,t=n.number,o=(0,f.I0)();return(0,F.jsxs)(q,{children:[(0,F.jsxs)(G,{children:[r,": "]}),(0,F.jsx)(G,{children:t}),(0,F.jsx)(R,{type:"button",onClick:function(){return o((0,b.GK)(e))},children:"Delete"})]})},H=_.Z.ul(x||(x=(0,z.Z)(["\nmargin: 0;\npadding: 0;\ndisplay: flex;\nflex-direction: column;\ngap: 12px;\nlist-style-type: none;"]))),K=function(){var n=(0,f.v9)(h.hF);return(0,F.jsx)(H,{children:n.map((function(n){return(0,F.jsx)(B,(0,Z.Z)({},n),n.id)}))})},L=r(2989),V=r(5558),E=function(){var n=(0,f.I0)(),e=(0,f.v9)(h.xU),r=(0,f.v9)(h.zh);return(0,m.useEffect)((function(){n((0,b.yF)())}),[n]),(0,F.jsxs)(V._,{children:[(0,F.jsx)(T,{}),(0,F.jsx)(V.V,{children:"Contacts"}),(0,F.jsx)(D,{}),e&&(0,F.jsx)(L.a,{}),r&&(0,F.jsx)("h2",{children:r}),(0,F.jsx)(K,{})]})}},5558:function(n,e,r){r.d(e,{V:function(){return d},_:function(){return s}});var t,o,i=r(168),a=r(7686),s=a.Z.div(t||(t=(0,i.Z)(["\nheight: 20vh;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 10px;\n"]))),d=a.Z.h1(o||(o=(0,i.Z)(["\nfont-size: 40px;\n"])))}}]);
//# sourceMappingURL=24.63a186d9.chunk.js.map