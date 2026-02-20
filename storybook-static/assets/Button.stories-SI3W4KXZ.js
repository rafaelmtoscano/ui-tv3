import{r as n,j as e}from"./iframe-I70yyzBk.js";import{c as o}from"./colors-CdViKapj.js";import"./preload-helper-PPVm8Dsz.js";const t=n.memo(n.forwardRef(({variant:r="primary",size:u="medium",label:f,children:b,style:p,className:g,...a},x)=>{const y=n.useMemo(()=>({fontFamily:"inherit",fontWeight:700,border:0,borderRadius:8,cursor:a.disabled?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1,transition:"all 0.2s ease-in-out",opacity:a.disabled?.6:1}),[a.disabled]),v={small:{fontSize:12,padding:"8px 16px"},medium:{fontSize:14,padding:"10px 20px"},large:{fontSize:16,padding:"12px 24px"}},B={primary:{color:o.text.primaryInverse,backgroundColor:o.background.brandPrimary},secondary:{color:o.text.primary,backgroundColor:"transparent",border:`1px solid ${o.text.primary}`}},N=n.useMemo(()=>({...y,...v[u],...B[r],...p}),[y,u,r,p]);return e.jsxDEV("button",{ref:x,type:"button",className:g,style:N,...a,children:b||f},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.tsx",lineNumber:57,columnNumber:9},void 0)}));t.displayName="Button";t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}},composes:["ButtonHTMLAttributes"]};const z={title:"Components/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary"],description:"The visual style of the button"},size:{control:"select",options:["small","medium","large"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is interactive"},onClick:{action:"clicked"}}},s={args:{variant:"primary",children:"Button"}},i={args:{variant:"secondary",children:"Button"}},l={args:{size:"large",children:"Button"}},d={args:{size:"small",children:"Button"}},m={args:{children:"Disabled Button",disabled:!0}},c={render:r=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxDEV(t,{...r,variant:"primary",size:"small",children:"Primary Small"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:74,columnNumber:9},void 0),e.jsxDEV(t,{...r,variant:"primary",size:"medium",children:"Primary Medium"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:75,columnNumber:9},void 0),e.jsxDEV(t,{...r,variant:"primary",size:"large",children:"Primary Large"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:76,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:69,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxDEV(t,{...r,variant:"secondary",size:"small",children:"Secondary Small"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:83,columnNumber:9},void 0),e.jsxDEV(t,{...r,variant:"secondary",size:"medium",children:"Secondary Medium"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:84,columnNumber:9},void 0),e.jsxDEV(t,{...r,variant:"secondary",size:"large",children:"Secondary Large"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:85,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:78,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[e.jsxDEV(t,{...r,variant:"primary",disabled:!0,children:"Disabled Primary"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:92,columnNumber:9},void 0),e.jsxDEV(t,{...r,variant:"secondary",disabled:!0,children:"Disabled Secondary"},void 0,!1,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:93,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:87,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Button/Button.stories.tsx",lineNumber:64,columnNumber:19},void 0)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Button'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Button'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button {...args} variant="primary" size="small">Primary Small</Button>
        <Button {...args} variant="primary" size="medium">Primary Medium</Button>
        <Button {...args} variant="primary" size="large">Primary Large</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button {...args} variant="secondary" size="small">Secondary Small</Button>
        <Button {...args} variant="secondary" size="medium">Secondary Medium</Button>
        <Button {...args} variant="secondary" size="large">Secondary Large</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }}>
        <Button {...args} variant="primary" disabled>Disabled Primary</Button>
        <Button {...args} variant="secondary" disabled>Disabled Secondary</Button>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const V=["Primary","Secondary","Large","Small","Disabled","AllVariants"];export{c as AllVariants,m as Disabled,l as Large,s as Primary,i as Secondary,d as Small,V as __namedExportsOrder,z as default};
