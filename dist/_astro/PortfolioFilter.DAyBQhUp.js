import{j as l}from"./jsx-runtime.CRkqtJS5.js";import{r as p}from"./index.B52nOzfP.js";import{c as s}from"./clsx.B-dksMZM.js";import{m as a}from"./proxy.DJqDyx_a.js";function b({categories:i,category:n}){const[o,c]=p.useState(n),r=e=>{c(e),document.querySelectorAll("[data-categories]").forEach(t=>{const d=JSON.parse(t.getAttribute("data-categories")||"[]");e==="all"||d.includes(e)?t.style.display="block":t.style.display="none"})};return l.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[l.jsx(a.button,{onClick:()=>r("all"),className:s("px-4 py-2 rounded-full transition-colors",o==="all"?"bg-primary text-dark":"bg-dark/50 text-light hover:bg-dark/70"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"All"}),i.map(e=>l.jsx(a.button,{onClick:()=>r(e),className:s("px-4 py-2 rounded-full transition-colors",o===e?"bg-primary text-dark":"bg-dark/50 text-light hover:bg-dark/70"),whileHover:{scale:1.05},whileTap:{scale:.95},children:e},e))]})}export{b as default};