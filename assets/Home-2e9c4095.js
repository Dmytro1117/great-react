import{s as e,L as i,b as a,j as t}from"./index-9096ca65.js";const d=e.p`
  color: #2e2d2dbc;
  padding: 10px;
  font-size: 34px;
  margin: 0;
`,n=e.img`
  width: 450px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,x=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 140px);
`,s=e.h2`
  margin-top: 26px;
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`,o=e(i)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 2px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 2px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 18px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
`,l="/react-course/assets/contacts-fddd785f.png",h="/react-course/assets/auth-af93bf47.png",g=()=>{const{isLoaggedIn:r}=a(c=>c.auth);return t.jsx(x,{children:r?t.jsxs(t.Fragment,{children:[t.jsx(n,{src:h,alt:"Mr.auth"}),t.jsxs(s,{children:["Перейдіть на вкладку",t.jsx(o,{to:"/contacts",children:"Контакти"}),"та керуйте телефонною книгою"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(d,{children:"Ласкаво просимо до телефонної книги"}),t.jsx(n,{src:l,alt:"Mr.hero"}),t.jsxs(s,{children:[t.jsx(o,{to:"/register",children:"Зареєструйтеся "}),"або",t.jsx(o,{to:"/login",children:"Увійдіть"}),",щоб користуватися додатком"]})]})})};export{g as default};
