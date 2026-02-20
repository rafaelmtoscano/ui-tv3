import{r as s,j as e}from"./iframe-I70yyzBk.js";import{c as j}from"./colors-CdViKapj.js";import{t as V}from"./typography-Bc-AkD-c.js";import"./preload-helper-PPVm8Dsz.js";const t=s.memo(s.forwardRef(({image:m,alt:c,label:l,onClick:p,onFocus:f,onBlur:b,className:g,"aria-label":x,tabIndex:N,isFocused:u},y)=>{const[B,d]=s.useState(!1),a=u!==void 0?u:B,v=I=>{d(!0),f?.()},C=I=>{d(!1),b?.()},h=x||l||c,E={border:"none",background:"transparent",padding:0,cursor:"pointer",outline:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",overflow:"visible"},F={width:a?"312px":"248px",height:a?"312px":"248px",borderRadius:"1000px",overflow:"hidden",boxShadow:a?"0 8px 32px rgba(0, 0, 0, 0.4)":"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transformOrigin:"center center",backgroundColor:"rgba(255, 255, 255, 0.08)"},S={width:"100%",height:"100%",objectFit:"cover",display:"block"},D={...V.body.large,color:j.text.primaryInverse,height:"30px",textAlign:"center",display:"flex",alignItems:"flex-start",justifyContent:"center",margin:0};return e.jsxDEV("button",{ref:y,className:g,onClick:p,onFocus:v,onBlur:C,"aria-label":h,tabIndex:N,style:E,children:[e.jsxDEV("div",{style:F,children:e.jsxDEV("img",{src:m,alt:c||"",style:S},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.tsx",lineNumber:122,columnNumber:13},void 0)},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.tsx",lineNumber:121,columnNumber:11},void 0),l&&e.jsxDEV("p",{style:D,children:l},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.tsx",lineNumber:124,columnNumber:21},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.tsx",lineNumber:111,columnNumber:9},void 0)}));t.displayName="CircleButton";t.__docgenInfo={description:`CircleButton component for TV/10-foot UI navigation.
No hover states — only idle and focus states driven by keyboard/remote control.`,methods:[],displayName:"CircleButton",props:{image:{required:!0,tsType:{name:"string"},description:"The source URL for the image."},alt:{required:!1,tsType:{name:"string"},description:"Accessibility text for the image."},label:{required:!1,tsType:{name:"string"},description:"Optional text label to display below the circle."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the button."},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Focus handler for the button."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Blur handler for the button."},className:{required:!1,tsType:{name:"string"},description:"Optional class name for external overrides."},"aria-label":{required:!1,tsType:{name:"string"},description:"Optional accessibility label (falls back to label or alt)."},tabIndex:{required:!1,tsType:{name:"number"},description:"Tab index for keyboard navigation."},isFocused:{required:!1,tsType:{name:"boolean"},description:"Manual override for the focused state (useful for Storybook)."}}};const L={title:"Components/CircleButton",component:t,tags:["autodocs"],parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#11172B"},{name:"light",value:"#FFFFFF"}]},layout:"centered"},argTypes:{image:{control:"text"},label:{control:"text"},alt:{control:"text"},onClick:{action:"clicked"},onFocus:{action:"focused"},onBlur:{action:"blurred"}}},o="https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624",r={args:{image:o,alt:"Sample Image"}},n={args:{image:o,label:"Circle Button",alt:"Sample Image"}},i={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"80px",padding:"100px"},children:[e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{color:"#FFF",marginBottom:"40px",fontFamily:"Plus Jakarta Sans"},children:"Image Only"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:65,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"100px",alignItems:"center"},children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{color:"rgba(255, 255, 255, 0.5)",marginBottom:"16px"},children:"Idle"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:76,columnNumber:13},void 0),e.jsxDEV(t,{image:o,alt:"Sample"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:80,columnNumber:13},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:75,columnNumber:11},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{color:"rgba(255, 255, 255, 0.5)",marginBottom:"16px"},children:"Focused"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:83,columnNumber:13},void 0),e.jsxDEV(t,{image:o,alt:"Sample",isFocused:!0},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:87,columnNumber:13},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:82,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:70,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:64,columnNumber:7},void 0),e.jsxDEV("div",{children:[e.jsxDEV("h3",{style:{color:"#FFF",marginBottom:"40px",fontFamily:"Plus Jakarta Sans"},children:"With Label"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:93,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"100px",alignItems:"center"},children:[e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{color:"rgba(255, 255, 255, 0.5)",marginBottom:"16px"},children:"Idle"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:104,columnNumber:13},void 0),e.jsxDEV(t,{image:o,label:"Category Name",alt:"Sample"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:103,columnNumber:11},void 0),e.jsxDEV("div",{children:[e.jsxDEV("p",{style:{color:"rgba(255, 255, 255, 0.5)",marginBottom:"16px"},children:"Focused"},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:111,columnNumber:13},void 0),e.jsxDEV(t,{image:o,label:"Category Name",alt:"Sample",isFocused:!0},void 0,!1,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:115,columnNumber:13},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:110,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:98,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:92,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/CircleButton/CircleButton.stories.tsx",lineNumber:58,columnNumber:17},void 0)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    image: SAMPLE_IMAGE,
    alt: 'Sample Image'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    image: SAMPLE_IMAGE,
    label: 'Circle Button',
    alt: 'Sample Image'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '80px',
    padding: '100px'
  }}>
      <div>
        <h3 style={{
        color: '#FFF',
        marginBottom: '40px',
        fontFamily: 'Plus Jakarta Sans'
      }}>Image Only</h3>
        <div style={{
        display: 'flex',
        gap: '100px',
        alignItems: 'center'
      }}>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '16px'
          }}>Idle</p>
            <CircleButton image={SAMPLE_IMAGE} alt="Sample" />
          </div>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '16px'
          }}>Focused</p>
            <CircleButton image={SAMPLE_IMAGE} alt="Sample" isFocused />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        color: '#FFF',
        marginBottom: '40px',
        fontFamily: 'Plus Jakarta Sans'
      }}>With Label</h3>
        <div style={{
        display: 'flex',
        gap: '100px',
        alignItems: 'center'
      }}>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '16px'
          }}>Idle</p>
            <CircleButton image={SAMPLE_IMAGE} label="Category Name" alt="Sample" />
          </div>
          <div>
            <p style={{
            color: 'rgba(255, 255, 255, 0.5)',
            marginBottom: '16px'
          }}>Focused</p>
            <CircleButton image={SAMPLE_IMAGE} label="Category Name" alt="Sample" isFocused />
          </div>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const w=["Default","WithLabel","AllVariants"];export{i as AllVariants,r as Default,n as WithLabel,w as __namedExportsOrder,L as default};
