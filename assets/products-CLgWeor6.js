import{r as a,j as s,F as d,h as n,al as o,K as x}from"./index-D3t3w1dt.js";import{C as F}from"./config-global-C10nrx66.js";import{P as i}from"./product-item-8sqVNLxS.js";import{G as r}from"./Grid2-aBC-ONpj.js";import"./label-DWey8qq5.js";import"./format-number-DWNBwNMe.js";import"./Card-DdIi7cA1.js";import"./Stack-BfKE1Uaw.js";const h=[{value:"men",label:"Men"},{value:"women",label:"Women"},{value:"kids",label:"Kids"}],f=[{value:"all",label:"All"},{value:"shose",label:"Shose"},{value:"apparel",label:"Apparel"},{value:"accessories",label:"Accessories"}],j=["up4Star","up3Star","up2Star","up1Star"],O=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],c={price:"",gender:[h[0].value],colors:[O[4]],rating:j[0],category:f[0].value};function b(){const[S,m]=a.useState("featured"),[C,t]=a.useState(!1),[l,u]=a.useState(c);return a.useCallback(()=>{t(!0)},[]),a.useCallback(()=>{t(!1)},[]),a.useCallback(e=>{m(e)},[]),a.useCallback(e=>{u(p=>({...p,...e}))},[]),Object.keys(l).some(e=>l[e]!==c[e]),s.jsxs(d,{children:[s.jsx(n,{variant:"h4",sx:{mb:5},children:"Terrenos"}),s.jsx(r,{container:!0,spacing:3,children:o.filter(e=>e.name.indexOf("erreno")>-1).map(e=>s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(i,{product:e})},e.id))}),s.jsx(n,{variant:"h4",sx:{mb:5,mt:15},children:"Departamentos"}),s.jsx(r,{container:!0,spacing:3,children:o.filter(e=>e.name.indexOf("erreno")===-1).map(e=>s.jsx(r,{xs:12,sm:6,md:3,children:s.jsx(i,{product:e})},e.id))})]})}function G(){return s.jsxs(s.Fragment,{children:[s.jsx(x,{children:s.jsxs("title",{children:[" ",`Proyectos - ${F.appName}`]})}),s.jsx(b,{})]})}export{G as default};