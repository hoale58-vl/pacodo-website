/*
 Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){function d(b,a){CKEDITOR.tools.array.forEach(a,function(a){b.on(a,e,null,{editor:b})})}function e(b){var a=b.listenerData.editor;b=a.focusManager.hasFocus;var f=a.editable(),d=a.config.editorplaceholder,e=/<body.*?>((?:.|[\n\r])*?)<\/body>/i,g=a.config.fullPage,a=a.getData();g&&(a=a.match(e)[1]);if(0!==a.length||b)return f.removeAttribute(c);f.setAttribute(c,d)}CKEDITOR.plugins.add("editorplaceholder",{isSupportedEnvironment:function(){return!CKEDITOR.env.ie||9<=CKEDITOR.env.version},
onLoad:function(){CKEDITOR.addCss(CKEDITOR.plugins.editorplaceholder.styles)},init:function(b){this.isSupportedEnvironment()&&b.config.editorplaceholder&&d(b,["contentDom","focus","blur","change"])}});var c="data-cke-editorplaceholder";CKEDITOR.plugins.editorplaceholder={styles:"["+c+"]::before {position: absolute;opacity: .8;color: #aaa;content: attr( "+c+" );}.cke_wysiwyg_div["+c+"]::before {margin-top: 1em;}"};CKEDITOR.config.editorplaceholder=""})();