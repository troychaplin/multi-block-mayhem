(()=>{"use strict";var e,i={190:()=>{const e=window.wp.blocks,i=window.wp.primitives,t=window.ReactJSXRuntime,l=(0,t.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(i.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})}),a=window.wp.i18n,n=window.wp.element,s=window.wp.blockEditor,r=window.wp.components,m=window.wp.data,o=({imageUrl:e,setAttributes:i,imageSize:l,minWidth:a,minHeight:o,attributes:d})=>{const[c,u]=(0,n.useState)(d?.mediaId||null),g=["large","medium","thumbnail"],h=e=>{if(!e)return null;if(l&&e.media_details?.sizes?.[l])return{url:e.media_details.sizes[l].source_url,width:e.media_details.sizes[l].width,height:e.media_details.sizes[l].height};for(const i of g)if(e.media_details?.sizes?.[i])return{url:e.media_details.sizes[i].source_url,width:e.media_details.sizes[i].width,height:e.media_details.sizes[i].height};return{url:e.source_url,width:e.media_details?.width,height:e.media_details?.height}},p=(0,m.useSelect)((e=>{if(!c)return null;const i=e("core").getMedia(c);if(!i)return null;const t=h(i);return t?{...t,id:i.id}:null}),[c,l]);(0,n.useEffect)((()=>{p&&(e&&p.url!==e||i({imageUrl:p.url,mediaId:p.id,imageWidth:p.width,imageHeight:p.height}))}),[p,i,e]);const w=!d?.imageWidth||(!a||d.imageWidth>=a)&&(!o||d.imageHeight>=o),v=()=>{u(null),i({imageUrl:"",mediaId:null,imageWidth:null,imageHeight:null})},x=Boolean(e&&d?.imageWidth&&!w);return(0,n.useEffect)((()=>{e&&d?.mediaId&&u(d.mediaId)}),[e,d?.mediaId]),(0,t.jsxs)("div",{className:"mbm-image-uploader",style:{display:"flex",gap:"16px",flexDirection:"column"},children:[(a||o)&&!e&&(0,t.jsxs)("p",{className:"mbm-size-notice",children:["Recommended image size:"," ",a&&`${a}px wide`,a&&o&&" × ",o&&`${o}px high`]}),x&&(0,t.jsxs)(r.Notice,{status:"warning",isDismissible:!1,className:"mbm-image-warning",children:["Current image size (",d.imageWidth,"px × ",d.imageHeight,"px) is smaller than recommended ",a&&o?`width of ${a}px and height of ${o}px`:a?`width of ${a}px`:o?`height of ${o}px`:""]}),(0,t.jsx)(s.MediaUpload,{onSelect:e=>{if(!e||!e.id)return u(null),void i({imageUrl:"",mediaId:null,imageWidth:null,imageHeight:null});const t=h(e);t&&(u(e.id),i({imageUrl:t.url,mediaId:e.id,imageWidth:t.width,imageHeight:t.height}))},allowedTypes:["image"],value:c,render:({open:i})=>(0,t.jsxs)(r.ButtonGroup,{className:"mbm-image-controls",children:[(0,t.jsx)(r.Button,{onClick:i,variant:"primary",children:e?"Replace Image":"Select Image"}),e&&(0,t.jsx)(r.Button,{onClick:v,variant:"secondary",style:{marginLeft:"8px"},children:"Remove"})]})})]})},d=JSON.parse('{"UU":"multi-block-mayhem/image-collage-item"}');(0,e.registerBlockType)(d.UU,{icon:l,edit:function({attributes:e,setAttributes:i,context:l,style:m}){const[d,c]=(0,n.useState)(e.focalPoint||{x:.5,y:.5}),{imageUrl:u,columnSpan:g,columns:h}=e,p=u?"mbm-editor":"mbm-placeholder",w=(0,s.useBlockProps)({className:p,style:{...m,"--mbm-image-collage-col-span":g}});i({columns:l["multi-block-mayhem/image-collage-columns"]});const v=(0,n.useCallback)((e=>{c(e),i({focalPoint:e})}),[i]),x={backgroundImage:`url(${u})`,backgroundPosition:`${100*d.x}% ${100*d.y}%`,backgroundSize:"cover"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.InspectorControls,{children:(0,t.jsxs)(r.PanelBody,{title:(0,a.__)("Image Settings","multi-block-mayhem"),children:[(0,t.jsx)(r.RangeControl,{label:(0,a.__)("Column Span","multi-block-mayhem"),min:1,max:h,value:g,onChange:e=>i({columnSpan:e})}),u&&(0,t.jsx)(r.FocalPointPicker,{url:u,value:d,onDragStart:c,onDrag:v,onChange:v}),(0,t.jsx)(o,{imageUrl:u,setAttributes:i,imageSize:1===g?"medium":"large",minWidth:1===g?600:1024,minHeight:1===g?450:768,attributes:e})]})}),u?(0,t.jsx)("div",{...w,style:{...w.style,...x}}):(0,t.jsx)("div",{...w,children:"Add Image"})]})},save:function({attributes:e}){const{columns:i,gap:l,radius:a}=e,n=s.useBlockProps.save({style:{"--mbm-image-collage-cols":String(i),"--mbm-image-collage-gap":`${l}px`,"--mbm-image-collage-radius":`${a}px`}});return(0,t.jsx)("div",{...n,children:(0,t.jsx)(s.InnerBlocks.Content,{})})}})}},t={};function l(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return i[e](n,n.exports,l),n.exports}l.m=i,e=[],l.O=(i,t,a,n)=>{if(!t){var s=1/0;for(d=0;d<e.length;d++){for(var[t,a,n]=e[d],r=!0,m=0;m<t.length;m++)(!1&n||s>=n)&&Object.keys(l.O).every((e=>l.O[e](t[m])))?t.splice(m--,1):(r=!1,n<s&&(s=n));if(r){e.splice(d--,1);var o=a();void 0!==o&&(i=o)}}return i}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,a,n]},l.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={634:0,46:0};l.O.j=i=>0===e[i];var i=(i,t)=>{var a,n,[s,r,m]=t,o=0;if(s.some((i=>0!==e[i]))){for(a in r)l.o(r,a)&&(l.m[a]=r[a]);if(m)var d=m(l)}for(i&&i(t);o<s.length;o++)n=s[o],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},t=globalThis.webpackChunkmulti_block_mayhem=globalThis.webpackChunkmulti_block_mayhem||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})();var a=l.O(void 0,[46],(()=>l(190)));a=l.O(a)})();