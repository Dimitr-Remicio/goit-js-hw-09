function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},o.parcelRequired7c6=n);var i=n("7Y9D8");const u=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function s(e,o){return new Promise(((t,r)=>{const n=Math.random()>.3;setTimeout((()=>{n&&t({position:e,delay:o}),r({position:e,delay:o})}),o)}))}u.addEventListener("submit",(()=>{event.preventDefault();let o=Number(a.value),t=Number(l.value),r=Number(d.value),n=0;(o<0||t<0||r<=0)&&e(i).Notify.failure("porfavor escriba el valor correcto");for(let u=1;u<=r;u+=1)n=u,s(n,o).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Promesa cumplida ${o} en ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Promesa rechazada ${o} en ${t}ms`)})),o+=t;u.reset()}));
//# sourceMappingURL=03-promises.67f7de65.js.map
