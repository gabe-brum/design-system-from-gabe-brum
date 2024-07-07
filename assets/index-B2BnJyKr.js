import{r as s}from"./index-CleY8y_P.js";import{r as C}from"./index-C2jgcCTd.js";var P={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=s,w=Symbol.for("react.element"),j=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,T=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,r){var t,o={},i=null,c=null;r!==void 0&&(i=""+r),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(c=n.ref);for(t in n)M.call(n,t)&&!U.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:w,type:e,key:i,ref:c,props:o,_owner:T.current}}S.Fragment=j;S.jsx=E;S.jsxs=E;P.exports=S;var v=P.exports;function K(e,n){const r=s.createContext(n);function t(i){const{children:c,...u}=i,f=s.useMemo(()=>u,Object.values(u));return v.jsx(r.Provider,{value:f,children:c})}function o(i){const c=s.useContext(r);if(c)return c;if(n!==void 0)return n;throw new Error(`\`${i}\` must be used within \`${e}\``)}return t.displayName=e+"Provider",[t,o]}function Q(e,n=[]){let r=[];function t(i,c){const u=s.createContext(c),f=r.length;r=[...r,c];function a(l){const{scope:d,children:p,...h}=l,_=(d==null?void 0:d[e][f])||u,A=s.useMemo(()=>h,Object.values(h));return v.jsx(_.Provider,{value:A,children:p})}function m(l,d){const p=(d==null?void 0:d[e][f])||u,h=s.useContext(p);if(h)return h;if(c!==void 0)return c;throw new Error(`\`${l}\` must be used within \`${i}\``)}return a.displayName=i+"Provider",[a,m]}const o=()=>{const i=r.map(c=>s.createContext(c));return function(u){const f=(u==null?void 0:u[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...u,[e]:f}}),[u,f])}};return o.scopeName=e,[t,I(o,...n)]}function I(...e){const n=e[0];if(e.length===1)return n;const r=()=>{const t=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const c=t.reduce((u,{useScope:f,scopeName:a})=>{const l=f(i)[`__scope${a}`];return{...u,...l}},{});return s.useMemo(()=>({[`__scope${n.scopeName}`]:c}),[c])}};return r.scopeName=n.scopeName,r}function R(e){const n=s.useRef(e);return s.useEffect(()=>{n.current=e}),s.useMemo(()=>(...r)=>{var t;return(t=n.current)==null?void 0:t.call(n,...r)},[])}var x=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function D(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function g(...e){return n=>e.forEach(r=>D(r,n))}function L(...e){return s.useCallback(g(...e),e)}var O=s.forwardRef((e,n)=>{const{children:r,...t}=e,o=s.Children.toArray(r),i=o.find($);if(i){const c=i.props.children,u=o.map(f=>f===i?s.Children.count(c)>1?s.Children.only(null):s.isValidElement(c)?c.props.children:null:f);return v.jsx(y,{...t,ref:n,children:s.isValidElement(c)?s.cloneElement(c,void 0,u):null})}return v.jsx(y,{...t,ref:n,children:r})});O.displayName="Slot";var y=s.forwardRef((e,n)=>{const{children:r,...t}=e;if(s.isValidElement(r)){const o=V(r);return s.cloneElement(r,{...k(t,r.props),ref:n?g(n,o):o})}return s.Children.count(r)>1?s.Children.only(null):null});y.displayName="SlotClone";var W=({children:e})=>v.jsx(v.Fragment,{children:e});function $(e){return s.isValidElement(e)&&e.type===W}function k(e,n){const r={...n};for(const t in n){const o=e[t],i=n[t];/^on[A-Z]/.test(t)?o&&i?r[t]=(...u)=>{i(...u),o(...u)}:o&&(r[t]=o):t==="style"?r[t]={...o,...i}:t==="className"&&(r[t]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}function V(e){var t,o;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var B=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],X=B.reduce((e,n)=>{const r=s.forwardRef((t,o)=>{const{asChild:i,...c}=t,u=i?O:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(u,{...c,ref:o})});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function H(e,n){e&&C.flushSync(()=>e.dispatchEvent(n))}function ee(e,n,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return n==null?void 0:n(o)}}function ne({prop:e,defaultProp:n,onChange:r=()=>{}}){const[t,o]=F({defaultProp:n,onChange:r}),i=e!==void 0,c=i?e:t,u=R(r),f=s.useCallback(a=>{if(i){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else o(a)},[i,e,o,u]);return[c,f]}function F({defaultProp:e,onChange:n}){const r=s.useState(e),[t]=r,o=s.useRef(t),i=R(n);return s.useEffect(()=>{o.current!==t&&(i(t),o.current=t)},[t,o,i]),r}function q(e,n){return s.useReducer((r,t)=>n[r][t]??r,e)}var J=e=>{const{present:n,children:r}=e,t=Y(n),o=typeof r=="function"?r({present:t.isPresent}):s.Children.only(r),i=L(t.ref,Z(o));return typeof r=="function"||t.isPresent?s.cloneElement(o,{ref:i}):null};J.displayName="Presence";function Y(e){const[n,r]=s.useState(),t=s.useRef({}),o=s.useRef(e),i=s.useRef("none"),c=e?"mounted":"unmounted",[u,f]=q(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const a=N(t.current);i.current=u==="mounted"?a:"none"},[u]),x(()=>{const a=t.current,m=o.current;if(m!==e){const d=i.current,p=N(a);e?f("MOUNT"):p==="none"||(a==null?void 0:a.display)==="none"?f("UNMOUNT"):f(m&&d!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),x(()=>{if(n){const a=l=>{const p=N(t.current).includes(l.animationName);l.target===n&&p&&C.flushSync(()=>f("ANIMATION_END"))},m=l=>{l.target===n&&(i.current=N(t.current))};return n.addEventListener("animationstart",m),n.addEventListener("animationcancel",a),n.addEventListener("animationend",a),()=>{n.removeEventListener("animationstart",m),n.removeEventListener("animationcancel",a),n.removeEventListener("animationend",a)}}else f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(a=>{a&&(t.current=getComputedStyle(a)),r(a)},[])}}function N(e){return(e==null?void 0:e.animationName)||"none"}function Z(e){var t,o;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}export{X as P,O as S,x as a,L as b,Q as c,ne as d,ee as e,J as f,H as g,K as h,v as j,R as u};
