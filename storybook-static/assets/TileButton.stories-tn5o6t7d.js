import{R as m,r as o,j as e}from"./iframe-I70yyzBk.js";import{c as l}from"./colors-CdViKapj.js";import{t as q}from"./typography-Bc-AkD-c.js";import"./preload-helper-PPVm8Dsz.js";const n=m.memo(o.forwardRef(({variant:a="icon",icon:i,label:d,image:p,alt:f,onClick:B,onFocus:x,onBlur:b,className:T,"aria-label":F,tabIndex:h,isFocused:g},I)=>{const[S,v]=o.useState(!1),y=g!==void 0?g:S,D=o.useCallback(()=>{v(!0),x?.()},[x]),V=o.useCallback(()=>{v(!1),b?.()},[b]),E=o.useMemo(()=>{const P={border:"none",padding:0,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.63rem",borderRadius:"24px",transformOrigin:"center center",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",overflow:"hidden",position:"relative"},z=y?{width:"312px",height:"312px",background:l.background.primary,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.4)",color:l.text.primary,zIndex:10}:{width:"248px",height:"248px",background:l.line.dark,boxShadow:"none",color:l.text.primaryInverse,zIndex:1};return{...P,...z}},[y]),N=a==="icon"?"120px":"80px",j={width:N,height:N,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},w={...q.headline.medium,color:"inherit",margin:0,textAlign:"center"},k={width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0},C=F||d||f;return e.jsxDEV("button",{ref:I,type:"button",onClick:B,onFocus:D,onBlur:V,tabIndex:h,"aria-label":C,style:E,className:T,children:[a==="image"&&p&&e.jsxDEV("img",{src:p,alt:f||"",style:k},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.tsx",lineNumber:169,columnNumber:13},void 0),a!=="image"&&e.jsxDEV(e.Fragment,{children:[i&&e.jsxDEV("div",{style:j,children:m.isValidElement(i)?m.cloneElement(i,{style:{width:"100%",height:"100%",fill:"currentColor",...i.props.style}}):i},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.tsx",lineNumber:175,columnNumber:17},void 0),a==="icon-label"&&d&&e.jsxDEV("span",{style:w,children:d},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.tsx",lineNumber:190,columnNumber:17},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.tsx",lineNumber:173,columnNumber:13},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.tsx",lineNumber:157,columnNumber:9},void 0)}));n.displayName="TileButton";n.__docgenInfo={description:"",methods:[],displayName:"TileButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'icon' | 'icon-label' | 'image'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'icon-label'"},{name:"literal",value:"'image'"}]},description:`The variant of the tile button.
@default 'icon'`,defaultValue:{value:"'icon'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display (for 'icon' and 'icon-label' variants)."},label:{required:!1,tsType:{name:"string"},description:"Text label to display (for 'icon-label' variant)."},image:{required:!1,tsType:{name:"string"},description:"Image URL to display (for 'image' variant)."},alt:{required:!1,tsType:{name:"string"},description:"Accessibility label for the image."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler."},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Focus handler."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Blur handler."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name."},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label."},tabIndex:{required:!1,tsType:{name:"number"},description:"Keyboard tab index."},isFocused:{required:!1,tsType:{name:"boolean"},description:"Manual override for focus state (mostly for Storybook/demonstration)."}}};const R={title:"Components/TileButton",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["icon","icon-label","image"]},label:{control:"text"},image:{control:"text"},alt:{control:"text"},onClick:{action:"clicked"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#11172B"},{name:"light",value:"#FFFFFF"}]},layout:"centered"}},t=e.jsxDEV("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsxDEV("path",{d:"M26.6667 20C26.6667 16.3181 29.6514 13.3333 33.3333 13.3333H46.6667C50.3486 13.3333 53.3333 16.3181 53.3333 20V26.6667H60C63.6819 26.6667 66.6667 29.6514 66.6667 33.3333V43.3333H13.3333V33.3333C13.3333 29.6514 16.3181 26.6667 20 26.6667H26.6667V20ZM33.3333 20V26.6667H46.6667V20H33.3333ZM13.3333 50V60C13.3333 63.6819 16.3181 66.6667 20 66.6667H60C63.6819 66.6667 66.6667 63.6819 66.6667 60V50H46.6667V53.3333C46.6667 55.1743 45.1743 56.6667 43.3333 56.6667H36.6667C34.8257 56.6667 33.3333 55.1743 33.3333 53.3333V50H13.3333Z",fill:"currentColor"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:49,columnNumber:5},void 0)},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:48,columnNumber:23},void 0),s={args:{variant:"icon",icon:t,"aria-label":"Briefcase"}},r={args:{variant:"icon-label",icon:t,label:"Semana Gov"}},c={args:{variant:"image",image:"https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624",alt:"Semana Gov"}},u={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"60px",background:"#11172B",minHeight:"400px",width:"100%"},children:[e.jsxDEV("div",{style:{display:"flex",gap:"40px",alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Icon (Idle)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:94,columnNumber:11},void 0),e.jsxDEV(n,{variant:"icon",icon:t,"aria-label":"Briefcase",isFocused:!1},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:99,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:88,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Icon (Focus)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:107,columnNumber:11},void 0),e.jsxDEV(n,{variant:"icon",icon:t,"aria-label":"Briefcase",isFocused:!0},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:112,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:101,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:82,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"40px",alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Label (Idle)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:128,columnNumber:11},void 0),e.jsxDEV(n,{variant:"icon-label",icon:t,label:"Semana Gov",isFocused:!1},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:133,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:122,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Label (Focus)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:141,columnNumber:11},void 0),e.jsxDEV(n,{variant:"icon-label",icon:t,label:"Semana Gov",isFocused:!0},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:146,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:135,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:116,columnNumber:7},void 0),e.jsxDEV("div",{style:{display:"flex",gap:"40px",alignItems:"flex-end",flexWrap:"wrap"},children:[e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Image (Idle)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:162,columnNumber:11},void 0),e.jsxDEV(n,{variant:"image",image:"https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624",alt:"Semana Gov",isFocused:!1},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:167,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:156,columnNumber:9},void 0),e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsxDEV("span",{style:{color:"#FFF",fontSize:"14px",fontFamily:"Plus Jakarta Sans"},children:"Image (Focus)"},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:175,columnNumber:11},void 0),e.jsxDEV(n,{variant:"image",image:"https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624",alt:"Semana Gov",isFocused:!0},void 0,!1,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:180,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:169,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:150,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/TileButton/TileButton.stories.tsx",lineNumber:73,columnNumber:17},void 0)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    icon: BriefcaseIcon,
    'aria-label': 'Briefcase'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'icon-label',
    icon: BriefcaseIcon,
    label: 'Semana Gov'
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'image',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624',
    alt: 'Semana Gov'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '60px',
    background: '#11172B',
    minHeight: '400px',
    width: '100%'
  }}>
      <div style={{
      display: 'flex',
      gap: '40px',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Icon (Idle)</span>
          <TileButton variant="icon" icon={BriefcaseIcon} aria-label="Briefcase" isFocused={false} />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Icon (Focus)</span>
          <TileButton variant="icon" icon={BriefcaseIcon} aria-label="Briefcase" isFocused={true} />
        </div>
      </div>

      <div style={{
      display: 'flex',
      gap: '40px',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Label (Idle)</span>
          <TileButton variant="icon-label" icon={BriefcaseIcon} label="Semana Gov" isFocused={false} />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Label (Focus)</span>
          <TileButton variant="icon-label" icon={BriefcaseIcon} label="Semana Gov" isFocused={true} />
        </div>
      </div>

      <div style={{
      display: 'flex',
      gap: '40px',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Image (Idle)</span>
          <TileButton variant="image" image="https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624" alt="Semana Gov" isFocused={false} />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#FFF',
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans'
        }}>Image (Focus)</span>
          <TileButton variant="image" image="https://api.builder.io/api/v1/image/assets/TEMP/349beab2558e631de91afea4602c1a3285a63139?width=624" alt="Semana Gov" isFocused={true} />
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const L=["IconOnly","IconWithLabel","ImageOnly","AllVariants"];export{u as AllVariants,s as IconOnly,r as IconWithLabel,c as ImageOnly,L as __namedExportsOrder,R as default};
