import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{o.preventDefault();const t=s.elements.delay.value,n=s.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{n==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):m(`❌ Rejected promise in ${t}ms`)},t)}).then(e=>{i.success({message:e,position:"topRight"})}).catch(e=>{i.error({message:e,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map