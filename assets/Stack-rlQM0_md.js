import{am as V,an as T,_ as h,ar as g,aq as p,av as D,aw as F,ax as B,r as d,ap as M,e as E,j as G,i as N,u as _,ay as k,k as O,a as U,s as $,b as A}from"./index-QjJifY0J.js";const L=["component","direction","spacing","divider","children","className","useFlexGap"],q=V(),I=T("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function W(e){return _({props:e,name:"MuiStack",defaultTheme:q})}function z(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const H=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],J=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},g({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=D(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=F(n,g({theme:s},m,(o,r)=>e.useFlexGap?{gap:k(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${H(r?t[r]:e.direction)}`]:k(a,o)}}))}return n=B(s.breakpoints,n),n};function K(e={}){const{createStyledComponent:s=I,useThemeProps:n=W,componentName:a="MuiStack"}=e,c=()=>O({root:["root"]},o=>U(a,o),{}),t=s(J);return d.forwardRef(function(o,r){const i=n(o),l=M(i),{component:u="div",direction:x="column",spacing:j=0,divider:y,children:v,className:P,useFlexGap:C=!1}=l,S=E(l,L),b={direction:x,spacing:j,useFlexGap:C},R=c();return G.jsx(t,h({as:u,ownerState:b,ref:r,className:N(R.root,P)},S,{children:y?z(v,y):v}))})}const X=K({createStyledComponent:$("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>A({props:e,name:"MuiStack"})});export{X as S};
