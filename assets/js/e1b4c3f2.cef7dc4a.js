"use strict";(self.webpackChunksummary=self.webpackChunksummary||[]).push([[1229],{3618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(1527),r=t(73);const s={},c="Basic React",i={id:"Frontend/react",title:"Basic React",description:"Updating a nested object",source:"@site/docs/02-Frontend/react.mdx",sourceDirName:"02-Frontend",slug:"/Frontend/react",permalink:"/Frontend/react",draft:!1,unlisted:!1,editUrl:"https://github.com/Halcyon666/summary/edit/main/docs/02-Frontend/react.mdx",tags:[],version:"current",lastUpdatedAt:1712504809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docusaurus DocSearch TroubleShooting",permalink:"/Frontend/doc-search-docusaurus"},next:{title:"\u57fa\u6570\u6392\u5e8f",permalink:"/Algorithm/Base-Sort"}},o={},d=[{value:"Updating a nested object",id:"updating-a-nested-object",level:2},{value:"Dynamic call a function or update a value",id:"dynamic-call-a-function-or-update-a-value",level:2},{value:"Updating Arrays in State",id:"updating-arrays-in-state",level:2},{value:"Change the value in array",id:"change-the-value-in-array",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"basic-react",children:"Basic React"}),"\n",(0,a.jsx)(n.h2,{id:"updating-a-nested-object",children:"Updating a nested object"}),"\n",(0,a.jsx)(n.p,{children:"consider the object construct like this,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"const [person, setPerson] = useState({\n  name: 'Niki de Saint Phalle',\n  artwork: {\n    title: 'Blue Nana',\n    city: 'Hamburg',\n    image: 'https://i.imgur.com/Sd1AgUOm.jpg',\n  }\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"you can update immutable object like this way,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const nextArtwork = { ...person.artwork, city: 'New Delhi' };\nconst nextPerson = { ...person, artwork: nextArtwork };\nsetPerson(nextPerson);\n"})}),"\n",(0,a.jsx)(n.p,{children:"or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"setPerson({\n  ...person, // Copy other fields\n  artwork: { // but replace the artwork\n    ...person.artwork, // with the same one\n    city: 'New Delhi' // but in New Delhi!\n  }\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["or use ",(0,a.jsx)(n.code,{children:"useImmer"})," instead of ",(0,a.jsx)(n.code,{children:"useState"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["another way you can use ",(0,a.jsx)(n.code,{children:"use-immer"})," library, handle deeper nested object."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"  const [person, updatePerson] = useImmer({\n    name: 'Niki de Saint Phalle',\n    artwork: {\n      title: 'Blue Nana',\n      city: 'Hamburg',\n      image: 'https://i.imgur.com/Sd1AgUOm.jpg',\n    }\n  });\n\n  function handleNameChange(e) {\n    updatePerson(draft => {\n      draft.name = e.target.value;\n    });\n  }\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://react.dev/learn/updating-objects-in-state",children:"usage from official website"})}),"\n",(0,a.jsx)(n.h2,{id:"dynamic-call-a-function-or-update-a-value",children:"Dynamic call a function or update a value"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"  for (let update of queue) {\n    if (typeof update === 'function') {\n      // Apply the updater function.\n      finalState = update(finalState);\n    } else {\n      // Replace the next state.\n      finalState = update;\n    }\n  }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-arrays-in-state",children:"Updating Arrays in State"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"setArtists( // Replace the state\n  [ // with a new array\n    ...artists, // that contains all the old items\n    { id: nextId++, name: name } // and one new item at the end\n  ]\n);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"change-the-value-in-array",children:"Change the value in array"}),"\n",(0,a.jsx)(n.p,{children:"data construct"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"const initialProducts = [{\n  id: 0,\n  name: 'Baklava',\n  count: 1,\n}, {\n  id: 1,\n  name: 'Cheese',\n  count: 5,\n}, {\n  id: 2,\n  name: 'Spaghetti',\n  count: 2,\n}];\n"})}),"\n",(0,a.jsx)(n.p,{children:"how"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"   setProducts(products.map(product => {\n      if (product.id === productId) {\n        return {\n          ...product,\n          count: product.count + 1\n        };\n      } else {\n        return product;\n      }\n    }))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},73:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var a=t(959);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);