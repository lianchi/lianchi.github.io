webpackJsonp([10],{"9JPR":function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),i=o(a),r=n("5LfB"),l=n("9E5R"),s=(n("RUjS"),n("0nCa")),c=n("/4KT"),p=o(c),u=n("fhCn"),d=o(u);n("E4LH");n("Zono"),e.default={components:{CommonTable:p.default,ButtonGroup:d.default},data:function(){var t=this;return{filters:{hostId:null,userId:null,datetimerange:null,eventType:null,orgId:null},importForm:{},importFormVisible:!1,notUploaded:!0,uploadFileList:[],uploadDone:"<span style='color: #13ce66'>"+this.$t("ofa.audit.uploadSuccess")+"</span>",uploadFail:"<span style='color: #ff4949'>"+this.$t("ofa.audit.uploadTip")+"</span>",eventTypeOptions:[],orgOptions:[],datePickerOptions:{shortcuts:(0,s.dateShortcuts)(this)},tableProps:{type:"",sels:[],showSels:!1,data:[],showPage:!0,maxHeight:"680",pageSize:10,pageSizes:[10,25,50],currentPage:1,totalElements:0,columns:[{label:this.$t("ofa.table.subject"),prop:"subject",minWidth:"60",sortable:!0,sortMethod:function(t,e){return t.subject<e.subject}},{label:this.$t("ofa.table.hostId"),prop:"sourceIp",minWidth:"100"},{label:this.$t("ofa.table.eventTime"),prop:"generateTime",minWidth:"100",sortable:!0,sortMethod:function(t,e){return t.generateTime<e.generateTime},formatter:s.formatStamp},{label:this.$t("ofa.table.eventName"),prop:"event",minWidth:"80",sortable:!0,sortMethod:function(t,e){return t.event<e.event}},{label:this.$t("ofa.table.object"),prop:"object",minWidth:"80",sortable:!0,sortMethod:function(t,e){return t.object<e.object}},{label:this.$t("ofa.table.sourceLog"),prop:"sourceLog",minWidth:"300"}],loading:!1,selsChange:function(e){t.tableProps.sels=e},currentChange:function(e){t.tableProps.currentPage=e,t.getData()},sizeChange:function(e){t.tableProps.pageSize=e,t.getData()}}}},methods:{getEventTypes:function(){var t=this;l.ofaRequest.eventType.get().then(function(e){t.eventTypeOptions=e.data.content})},getOrgs:function(){var t=this;r.rtaRequest.getOrgs().then(function(e){t.orgOptions=e.data})},importClick:function(){this.importFormVisible=!0},handleUploadChange:function(t,e){this.uploadFileList=e.slice(-1)},handleUploadSuccess:function(t,e,n){this.$message({message:"上传成功",type:"success"}),this.notUploaded=!1},handleUploadError:function(t,e,n){this.$message({message:"上传失败",type:"warning"}),this.notUploaded=!0},importSubmit:function(){this.$refs.uploadFile.submit()},importCancel:function(){this.$refs.uploadFile.abort(),this.$refs.uploadFile.clearFiles(),this.$refs.importForm.resetFields(),this.notUploaded=!0,this.importFormVisible=!1},exportClick:function(){var t=this.tableProps.data;t=t.map(function(t){return(0,i.default)(t)+"\n"}),t[t.length-1]=t[t.length-1].replace(/\n$/g,"");var e=new Blob(t,{type:"text/plain"}),n=new Date,o="审计日志-Page"+this.tableProps.currentPage+"-"+s.formatDatetime.format(n,"yyyyMMddhhmm")+".txt";saveAs(e,o)},getData:function(){var t=this;this.tableProps.loading=!0;var e={event:this.filters.eventType,orgId:this.filters.orgId,pageSize:this.tableProps.pageSize,pageNum:this.tableProps.currentPage-1};l.ofaRequest.getLogs(e).then(function(e){t.tableProps.data=e.data.content,t.tableProps.totalElements=e.data.totalElements,t.tableProps.loading=!1}).catch(function(){t.tableProps.loading=!1})}},mounted:function(){this.getOrgs(),this.getEventTypes(),this.getData()}}},KXE3:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"toolbar"},[n("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:this.$tc("ofa.audit.userId",1)},model:{value:t.filters.userId,callback:function(e){t.$set(t.filters,"userId",e)},expression:"filters.userId"}}),t._v(" "),n("el-input",{staticStyle:{"margin-left":"10px",width:"140px"},attrs:{placeholder:this.$tc("ofa.audit.hostId",1)},model:{value:t.filters.hostId,callback:function(e){t.$set(t.filters,"hostId",e)},expression:"filters.hostId"}}),t._v(" "),n("el-date-picker",{staticStyle:{"margin-left":"10px",width:"350px"},attrs:{editable:!1,type:"datetimerange","start-placeholder":this.$t("date.startDate"),"end-placeholder":this.$t("date.endDate"),align:"left","unlink-panels":"","picker-options":t.datePickerOptions},model:{value:t.filters.datetimerange,callback:function(e){t.$set(t.filters,"datetimerange",e)},expression:"filters.datetimerange"}}),t._v(" "),n("el-select",{staticStyle:{"margin-left":"10px",width:"180px"},attrs:{filterable:"",clearable:"",placeholder:this.$tc("ofa.audit.eventType",1)},model:{value:t.filters.eventType,callback:function(e){t.$set(t.filters,"eventType",e)},expression:"filters.eventType"}},t._l(t.eventTypeOptions,function(t){return n("el-option",{key:t.event,attrs:{label:t.event,value:t.event}})})),t._v(" "),n("el-select",{staticStyle:{"margin-left":"10px",width:"180px"},attrs:{filterable:"",clearable:"",placeholder:this.$tc("ofa.audit.orgId",0)},model:{value:t.filters.orgId,callback:function(e){t.$set(t.filters,"orgId",e)},expression:"filters.orgId"}},t._l(t.orgOptions,function(t){return n("el-option",{key:t.id,attrs:{label:t.displayName,value:t.id}})})),t._v(" "),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getData}},[t._v(t._s(t.$t("button.search")))]),t._v(" "),n("el-button-group",{staticStyle:{"margin-left":"20px"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-upload"},on:{click:t.importClick}},[t._v(t._s(t.$t("button.import")))]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-download",disabled:0===this.tableProps.data.length},on:{click:t.exportClick}},[t._v(t._s(t.$t("button.export")))])],1)],1),t._v(" "),n("CommonTable",t._b({},"CommonTable",t.tableProps,!1)),t._v(" "),n("el-dialog",{attrs:{title:this.$t("ofa.audit.logImport"),width:"30%",visible:t.importFormVisible,"close-on-click-modal":!1,"before-close":t.importCancel},on:{"update:visible":function(e){t.importFormVisible=e}}},[n("el-form",{ref:"importForm",attrs:{model:t.importForm,"label-width":"80px"}},[n("el-form-item",{attrs:{label:this.$t("ofa.audit.logFile")+": ",prop:"file"}},[n("el-upload",{ref:"uploadFile",staticClass:"upload-demo",attrs:{action:"http://21.122.110.94:7083/audit/auditLogImport/","on-change":t.handleUploadChange,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,"auto-upload":!0,accept:".txt","file-list":t.uploadFileList}},[n("el-button",{attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[t._v(t._s(t.$t("ofa.audit.chooseUpload")))]),t._v(" "),n("span",{staticClass:"el-upload__tip",staticStyle:{"margin-left":"40px"},attrs:{slot:"tip"},domProps:{innerHTML:t._s(t.notUploaded?t.uploadFail:t.uploadDone)},slot:"tip"})],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.importCancel}},[t._v(t._s(t.$t("button.cancel")))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.importCancel}},[t._v(t._s(t.$t("button.confirm")))])],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},M802:function(t,e){t.exports='/* FileSaver.js\n * A saveAs() FileSaver implementation.\n * 1.3.2\n * 2016-06-16 18:25:19\n *\n * By Eli Grey, http://eligrey.com\n * License: MIT\n *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md\n */\n\n/*global self */\n/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */\n\n/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */\n\nvar saveAs = saveAs || (function(view) {\n\t"use strict";\n\t// IE <10 is explicitly unsupported\n\tif (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\\./.test(navigator.userAgent)) {\n\t\treturn;\n\t}\n\tvar\n\t\t  doc = view.document\n\t\t  // only get URL when necessary in case Blob.js hasn\'t overridden it yet\n\t\t, get_URL = function() {\n\t\t\treturn view.URL || view.webkitURL || view;\n\t\t}\n\t\t, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")\n\t\t, can_use_save_link = "download" in save_link\n\t\t, click = function(node) {\n\t\t\tvar event = new MouseEvent("click");\n\t\t\tnode.dispatchEvent(event);\n\t\t}\n\t\t, is_safari = /constructor/i.test(view.HTMLElement) || view.safari\n\t\t, is_chrome_ios =/CriOS\\/[\\d]+/.test(navigator.userAgent)\n\t\t, throw_outside = function(ex) {\n\t\t\t(view.setImmediate || view.setTimeout)(function() {\n\t\t\t\tthrow ex;\n\t\t\t}, 0);\n\t\t}\n\t\t, force_saveable_type = "application/octet-stream"\n\t\t// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to\n\t\t, arbitrary_revoke_timeout = 1000 * 40 // in ms\n\t\t, revoke = function(file) {\n\t\t\tvar revoker = function() {\n\t\t\t\tif (typeof file === "string") { // file is an object URL\n\t\t\t\t\tget_URL().revokeObjectURL(file);\n\t\t\t\t} else { // file is a File\n\t\t\t\t\tfile.remove();\n\t\t\t\t}\n\t\t\t};\n\t\t\tsetTimeout(revoker, arbitrary_revoke_timeout);\n\t\t}\n\t\t, dispatch = function(filesaver, event_types, event) {\n\t\t\tevent_types = [].concat(event_types);\n\t\t\tvar i = event_types.length;\n\t\t\twhile (i--) {\n\t\t\t\tvar listener = filesaver["on" + event_types[i]];\n\t\t\t\tif (typeof listener === "function") {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlistener.call(filesaver, event || filesaver);\n\t\t\t\t\t} catch (ex) {\n\t\t\t\t\t\tthrow_outside(ex);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t, auto_bom = function(blob) {\n\t\t\t// prepend BOM for UTF-8 XML and text/* types (including HTML)\n\t\t\t// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF\n\t\t\tif (/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(blob.type)) {\n\t\t\t\treturn new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});\n\t\t\t}\n\t\t\treturn blob;\n\t\t}\n\t\t, FileSaver = function(blob, name, no_auto_bom) {\n\t\t\tif (!no_auto_bom) {\n\t\t\t\tblob = auto_bom(blob);\n\t\t\t}\n\t\t\t// First try a.download, then web filesystem, then object URLs\n\t\t\tvar\n\t\t\t\t  filesaver = this\n\t\t\t\t, type = blob.type\n\t\t\t\t, force = type === force_saveable_type\n\t\t\t\t, object_url\n\t\t\t\t, dispatch_all = function() {\n\t\t\t\t\tdispatch(filesaver, "writestart progress write writeend".split(" "));\n\t\t\t\t}\n\t\t\t\t// on any filesys errors revert to saving with object URLs\n\t\t\t\t, fs_error = function() {\n\t\t\t\t\tif ((is_chrome_ios || (force && is_safari)) && view.FileReader) {\n\t\t\t\t\t\t// Safari doesn\'t allow downloading of blob urls\n\t\t\t\t\t\tvar reader = new FileReader();\n\t\t\t\t\t\treader.onloadend = function() {\n\t\t\t\t\t\t\tvar url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, \'data:attachment/file;\');\n\t\t\t\t\t\t\tvar popup = view.open(url, \'_blank\');\n\t\t\t\t\t\t\tif(!popup) view.location.href = url;\n\t\t\t\t\t\t\turl=undefined; // release reference before dispatching\n\t\t\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t\t\t\tdispatch_all();\n\t\t\t\t\t\t};\n\t\t\t\t\t\treader.readAsDataURL(blob);\n\t\t\t\t\t\tfilesaver.readyState = filesaver.INIT;\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t// don\'t create more object URLs than needed\n\t\t\t\t\tif (!object_url) {\n\t\t\t\t\t\tobject_url = get_URL().createObjectURL(blob);\n\t\t\t\t\t}\n\t\t\t\t\tif (force) {\n\t\t\t\t\t\tview.location.href = object_url;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar opened = view.open(object_url, "_blank");\n\t\t\t\t\t\tif (!opened) {\n\t\t\t\t\t\t\t// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html\n\t\t\t\t\t\t\tview.location.href = object_url;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t\tdispatch_all();\n\t\t\t\t\trevoke(object_url);\n\t\t\t\t}\n\t\t\t;\n\t\t\tfilesaver.readyState = filesaver.INIT;\n\n\t\t\tif (can_use_save_link) {\n\t\t\t\tobject_url = get_URL().createObjectURL(blob);\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tsave_link.href = object_url;\n\t\t\t\t\tsave_link.download = name;\n\t\t\t\t\tclick(save_link);\n\t\t\t\t\tdispatch_all();\n\t\t\t\t\trevoke(object_url);\n\t\t\t\t\tfilesaver.readyState = filesaver.DONE;\n\t\t\t\t});\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tfs_error();\n\t\t}\n\t\t, FS_proto = FileSaver.prototype\n\t\t, saveAs = function(blob, name, no_auto_bom) {\n\t\t\treturn new FileSaver(blob, name || blob.name || "download", no_auto_bom);\n\t\t}\n\t;\n\t// IE 10+ (native saveAs)\n\tif (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {\n\t\treturn function(blob, name, no_auto_bom) {\n\t\t\tname = name || blob.name || "download";\n\n\t\t\tif (!no_auto_bom) {\n\t\t\t\tblob = auto_bom(blob);\n\t\t\t}\n\t\t\treturn navigator.msSaveOrOpenBlob(blob, name);\n\t\t};\n\t}\n\n\tFS_proto.abort = function(){};\n\tFS_proto.readyState = FS_proto.INIT = 0;\n\tFS_proto.WRITING = 1;\n\tFS_proto.DONE = 2;\n\n\tFS_proto.error =\n\tFS_proto.onwritestart =\n\tFS_proto.onprogress =\n\tFS_proto.onwrite =\n\tFS_proto.onabort =\n\tFS_proto.onerror =\n\tFS_proto.onwriteend =\n\t\tnull;\n\n\treturn saveAs;\n}(\n\t   typeof self !== "undefined" && self\n\t|| typeof window !== "undefined" && window\n\t|| this.content\n));\n// `self` is undefined in Firefox for Android content script context\n// while `this` is nsIContentFrameMessageManager\n// with an attribute `content` that corresponds to the window\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports.saveAs = saveAs;\n} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {\n  define("FileSaver.js", function() {\n    return saveAs;\n  });\n}\n'},"P+fo":function(t,e){t.exports=function(t){function e(t){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",t)}try{"undefined"!=typeof execScript&&function(){return"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener}()?execScript(t):"undefined"!=typeof eval?eval.call(null,t):e("EvalError: No eval function available")}catch(t){e(t)}}},XaSv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("9JPR"),a=n.n(o),i=n("KXE3"),r=n("VU/8"),l=r(a.a,i.a,!1,null,null,null);e.default=l.exports},Zono:function(t,e,n){n("P+fo")(n("M802"))}});