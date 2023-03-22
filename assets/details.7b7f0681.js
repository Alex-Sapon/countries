import{G as y,s as i,j as t,a as e,u as l,b as C,c as k,d as B,S as D,n as L,l as S,e as T,C as j}from"./index.3319419e.js";function z(a){return y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(a)}const N=i.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: var(--color-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  font-family: var(--family);
  font-weight: var(--fw-bold);
  color: var(--color-text);
  padding: 8px 20px;
  cursor: pointer;
  width: fit-content;
`,I=i(z)`
  margin-right: 6px;
  font-size: var(--fs-md);
`,P=i.span`
  font-size: var(--fs-sm);
`,R=({text:a,handleClick:o})=>t(N,{onClick:o,children:[e(I,{}),e(P,{children:a})]}),W=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,A=i.img`
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  object-position: center;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 450px) {
    height: 250px;
  }
`,G=i.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  gap: 40px;
  align-items: center;
`,H=i.article`
  display: grid;
  gap: 10px 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  font-weight: var(--fw-light);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
  }
`,M=i.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`,r=i.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-sm);

  b {
    min-width: fit-content;
    margin-right: 8px;
  }
`,d=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`,$=i.li`
  list-style-type: none;
  margin: 0;
  padding: 5px 15px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: pointer;
  background-color: var(--color-ui-base);
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: none;
  }
`,q=()=>{const{img:a,name:o,nativeName:c,population:p,region:h,subregion:g,capital:m,topLevelDomain:u,currencies:x,languages:f,borders:s}=l(C),b=l(k),v=B(),w=n=>{v(S(n.currentTarget.innerText))};return b?e(D,{}):t(W,{children:[e(A,{src:a.svg,alt:a.alt}),t(G,{children:[e(M,{children:o}),t(H,{children:[t(r,{children:[e("b",{children:"Native Name:"}),c]}),t(r,{children:[e("b",{children:"Population:"}),L(p)]}),t(r,{children:[e("b",{children:"Region:"}),h]}),t(r,{children:[e("b",{children:"Sub Region:"}),g]}),t(r,{children:[e("b",{children:"Capital:"}),m]}),t(r,{children:[e("b",{children:"Top Level Domain:"}),u]}),t(r,{children:[e("b",{children:"Currencies:"}),x]}),t(r,{children:[e("b",{children:"Languages:"}),e(d,{children:f.map(n=>e("span",{children:n},n))})]})]}),t(r,{children:[e("b",{children:"Border Countries:"}),e(d,{children:s.length?s.map(n=>e($,{onClick:w,children:n},n)):"No have borders"})]})]})]})},E=i.div`
  padding-top: 130px;
  display: grid;
  gap: 45px;
`,F=()=>{const a=T();return e(j,{children:t(E,{children:[e(R,{text:"Back",handleClick:()=>a(-1)}),e(q,{})]})})},K=()=>e(F,{});export{K as default};
