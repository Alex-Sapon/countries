import{s as t,L as e,a as o,C as n,j as r,P as s}from"./index.a0a0e34a.js";const i=t.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,a=t.h2`
  font-size: var(--fs-2xl);
  margin-bottom: 20px;
`,c=t(e)`
  font-size: var(--fs-xl);
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: indianred;
  }
`,l=()=>o(n,{children:r(i,{children:[o(a,{children:"Not found"}),o(c,{to:s.HOME,children:"Go home"})]})}),f=()=>o(l,{});export{f as default};
