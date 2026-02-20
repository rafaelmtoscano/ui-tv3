import{r as d,j as e}from"./iframe-I70yyzBk.js";import{t as h}from"./typography-Bc-AkD-c.js";import{c as b}from"./colors-CdViKapj.js";import"./preload-helper-PPVm8Dsz.js";const a=d.memo(d.forwardRef(({variant:t="body",size:m="medium",as:c="p",children:p,className:u,style:x,...T},y)=>{const l=h[t],f=l[m]||l.medium||{},v=c;return e.jsxDEV(v,{ref:y,style:{color:b.text.primary,...f,...x},className:u,...T,children:p},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.tsx",lineNumber:24,columnNumber:9},void 0)}));a.displayName="Text";a.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof typography",elements:[{name:"literal",value:"display"},{name:"literal",value:"headline"},{name:"literal",value:"body"},{name:"literal",value:"label"}]},description:"",defaultValue:{value:"'body'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'p'",computed:!1}}}};const E={title:"Components/Text",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["display","headline","body","label"],description:"The typographic variant"},size:{control:"select",options:["large","medium","small"],description:"The size of the text within the variant"},as:{control:"text",description:"The HTML element to render"},children:{control:"text",description:"The content of the text component"}}},i={args:{children:"Display Text",variant:"display",size:"large"}},r={args:{children:"Headline Text",variant:"headline",size:"medium"}},o={args:{children:"Body Text Content",variant:"body",size:"medium"}},s={args:{children:"LABEL TEXT",variant:"label",size:"small"}},n={render:t=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{marginBottom:"10px",color:"#666"},children:"Display"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:66,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"display",size:"large",children:"Display Large"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:70,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"display",size:"medium",children:"Display Medium"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:71,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"display",size:"small",children:"Display Small"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:72,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{marginBottom:"10px",color:"#666"},children:"Headline"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:75,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"headline",size:"large",children:"Headline Large"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:79,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"headline",size:"medium",children:"Headline Medium"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:80,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"headline",size:"small",children:"Headline Small"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:81,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:74,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{marginBottom:"10px",color:"#666"},children:"Body"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:84,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"body",size:"large",children:"Body Large"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:88,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"body",size:"medium",children:"Body Medium"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:89,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"body",size:"small",children:"Body Small"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:90,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:83,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{marginBottom:"10px",color:"#666"},children:"Label"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:93,columnNumber:9},void 0),e.jsxDEV(a,{...t,variant:"label",size:"small",children:"Label Small"},void 0,!1,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:97,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:92,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Text/Text.stories.tsx",lineNumber:60,columnNumber:19},void 0)};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Display Text',
    variant: 'display',
    size: 'large'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Headline Text',
    variant: 'headline',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Body Text Content',
    variant: 'body',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'LABEL TEXT',
    variant: 'label',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '10px',
        color: '#666'
      }}>Display</h3>
        <Text {...args} variant="display" size="large">Display Large</Text>
        <Text {...args} variant="display" size="medium">Display Medium</Text>
        <Text {...args} variant="display" size="small">Display Small</Text>
      </div>
      <div>
        <h3 style={{
        marginBottom: '10px',
        color: '#666'
      }}>Headline</h3>
        <Text {...args} variant="headline" size="large">Headline Large</Text>
        <Text {...args} variant="headline" size="medium">Headline Medium</Text>
        <Text {...args} variant="headline" size="small">Headline Small</Text>
      </div>
      <div>
        <h3 style={{
        marginBottom: '10px',
        color: '#666'
      }}>Body</h3>
        <Text {...args} variant="body" size="large">Body Large</Text>
        <Text {...args} variant="body" size="medium">Body Medium</Text>
        <Text {...args} variant="body" size="small">Body Small</Text>
      </div>
      <div>
        <h3 style={{
        marginBottom: '10px',
        color: '#666'
      }}>Label</h3>
        <Text {...args} variant="label" size="small">Label Small</Text>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const V=["Display","Headline","Body","Label","AllVariants"];export{n as AllVariants,o as Body,i as Display,r as Headline,s as Label,V as __namedExportsOrder,E as default};
