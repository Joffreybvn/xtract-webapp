(this.webpackJsonpextractor=this.webpackJsonpextractor||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"upload_box_wrapper__2IjXY",upload:"upload_box_upload__3fcXu",upload_button:"upload_box_upload_button__2wnDc"}},12:function(e,t,a){e.exports={file_upload:"app_file_upload__2hGc4"}},2:function(e,t,a){e.exports={uploaded:"uploaded_file_uploaded__1lCNI",image:"uploaded_file_image__2Wk_D",remove:"uploaded_file_remove__1arVv",file_name:"uploaded_file_file_name__2tdQt",progress:"uploaded_file_progress__1vfmk",progress_bar:"uploaded_file_progress_bar__155tD",progress_bar_stripes:"uploaded_file_progress_bar_stripes__srNKc",content:"uploaded_file_content__2zXkC",bin:"uploaded_file_bin__1sPZD",download:"uploaded_file_download__3j8n7"}},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var o=a(1),l=a.n(o),n=a(14),r=a.n(n),i=(a(20),a(21),a(3)),s=a(4),c=a(6),d=a(5),p=a(13),u=a(15),_=a(8),j=a(10),f=a.p+"static/media/close.734e2651.svg",b=a.p+"static/media/archive.4d5e04d3.svg",m=a(2),v=a(0),h=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).uploadFile=function(e){var t=new FormData;t.append("file",e,e.name);var a=new XMLHttpRequest;a.withCredentials=!0,a.responseType="blob",a.upload.addEventListener("progress",(function(e){o.setState({uploadPercent:e.loaded/e.total*100})})),a.addEventListener("load",(function(e){var t=document.createElement("a");t.href=window.URL.createObjectURL(a.response),t.download=o.props.file.name+".zip",t.click()})),a.open("POST","https://api.xtract.cx/extract/rar"),a.send(t)},o.removeFile=function(){o.props.removeFile(o.props.key)},o.state={uploadPercent:0},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.uploadFile(this.props.file)}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:m.uploaded,children:[Object(v.jsx)("div",{className:m.image,children:Object(v.jsx)("img",{src:b,alt:"File"})}),Object(v.jsx)("div",{className:m.file_name,children:this.props.file.name}),Object(v.jsx)("div",{className:m.remove,children:Object(v.jsx)("img",{src:f,alt:"Remove",title:"Remove",onClick:this.removeFile})}),Object(v.jsx)("div",{className:m.progress,children:Object(v.jsx)("div",{className:m.progress_bar,style:{width:"".concat(this.state.uploadPercent,"%")}})}),Object(v.jsx)("div",{className:m.content}),Object(v.jsx)("div",{className:m.bin}),Object(v.jsx)("div",{className:m.download})]})}}]),a}(l.a.Component),O=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(i.a)(this,a),(o=t.call(this,e)).triggerInputFile=function(){document.getElementById("file-selector").click()},o.uploadFiles=function(e){var t,a=Object(u.a)(e.target.files);try{for(a.s();!(t=a.n()).done;){var l=t.value,n=Math.floor(1e4*Math.random());o.setState({uploadedFiles:[].concat(Object(p.a)(o.state.uploadedFiles),[Object(v.jsx)(h,{file:l,removeFile:o.removeFile(Object(_.a)(o))},n)])})}}catch(r){a.e(r)}finally{a.f()}document.getElementById("file-selector").value=""},o.removeFile=function(e){var t=e;return function(e){var a=Object(p.a)(t.state.uploadedFiles);a.splice(e,1),t.setState((function(e){return{uploadedFiles:a}}))}},o.state={uploadedFiles:[]},o}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:j.wrapper,children:[Object(v.jsxs)("div",{className:j.upload,children:[Object(v.jsx)("input",{type:"file",id:"file-selector",accept:".rar",multiple:!0,onChange:this.uploadFiles}),Object(v.jsxs)("p",{children:["Drag files here or ",Object(v.jsx)("span",{className:j.upload_button,onClick:this.triggerInputFile,children:"Browse"})]})]}),this.state.uploadedFiles]})}}]),a}(l.a.Component),x=a(12),g=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:x.file_upload,children:Object(v.jsx)(O,{})})}}]),a}(l.a.Component);r.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.14866038.chunk.js.map