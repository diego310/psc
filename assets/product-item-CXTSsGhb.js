import{j as r,B as s,h as t,au as a,V as l}from"./index-QjJifY0J.js";import{c as i}from"./format-number-DWNBwNMe.js";import{L as c}from"./label-LkhD_zME.js";import{C as x}from"./Card-BzFN9juv.js";import{S as m}from"./Stack-rlQM0_md.js";function f({product:e}){const n=r.jsx(c,{variant:"inverted",color:e.status==="Ultimos"&&"error"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:e.status}),o=r.jsx(s,{component:"img",alt:e.name,src:e.coverUrl,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}});return t,t,e.priceSale&&i(e.priceSale),i(e.price),r.jsxs(x,{children:[r.jsx(a,{href:`/products/${e.id}`,children:r.jsxs(s,{sx:{pt:"100%",position:"relative"},children:[e.status&&n,o]})}),r.jsx(m,{spacing:2,sx:{p:3},children:r.jsx(l,{color:"inherit",underline:"hover",variant:"subtitle2",noWrap:!0,children:e.name})})]})}export{f as P};
