(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{165:function(s,t,a){s.exports=a(75)},75:function(s,t,a){"use strict";a.r(t);var e=a(0),l=Object(e.a)(null,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",[a("h2",[s._v("Usage")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("raised")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"open=!open"')]),s._v(">")]),s._v("Show dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("accept-raised")]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Title"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("accept")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Accept"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Decline"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@accept")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onAccept"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@cancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onDecline"')]),s._v(">")]),s._v("\n  {{ dialogText }}\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" vm = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("dialogText")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Lorem ipsum dolor sit amet, ...'")]),s._v(",\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("open")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onAccept() {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'accepted'")]),s._v(");\n    },\n    onDecline() {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'declined'")]),s._v(");\n    },\n  },\n});\n")])]),s._v(" "),a("h3",[s._v("props")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("props")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("open")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("optional v-model when true opens dialog")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("title")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("the dialog title")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("accept")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'Ok'")])]),s._v(" "),a("td",[s._v("the dialog accept button text")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("accept-disabled")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("disable the accept button")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("accept-raised")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("display accept button as raised")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("cancel")])]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("the dialog cancel button text")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("cancel-raised")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("display cancel button as raised")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("scrollable")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("whether the dialog is scrollable")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("accent")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")]),s._v(" "),a("td",[s._v("set accented style to the footer buttons")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("In order to hide the Dialog Footer, force the accept property to "),a("code",{pre:!0},[s._v('""')])])]),s._v(" "),a("h3",[s._v("events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("props")]),s._v(" "),a("th",[s._v("args")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",{pre:!0},[s._v("@change")])]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("notify v-model/listeners that drawer state has changed.")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("@accept")])]),s._v(" "),a("td",[s._v("none")]),s._v(" "),a("td",[s._v("emitted when dialog is accepted")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("@cancel")])]),s._v(" "),a("td",[s._v("none")]),s._v(" "),a("td",[s._v("emitted when dialog is cancelled")])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("@validate")])]),s._v(" "),a("td",[s._v("accept")]),s._v(" "),a("td",[s._v("emitted before the dialog is accepted "),a("em",[s._v("(*)")])])]),s._v(" "),a("tr",[a("td",[a("code",{pre:!0},[s._v("@validateCancel")])]),s._v(" "),a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("emitted before the dialog is cancelled "),a("em",[s._v("(*)")])])])])]),s._v(" "),a("blockquote",[a("p",[s._v("Note that if you listen to the @validate or @validateCancel events, then You must call\nthe accept or cancel argument to finally close the box. Use "),a("code",{pre:!0},[s._v("accept(false)")]),s._v(" to\nprevent emitting the "),a("code",{pre:!0},[s._v("accept")]),s._v(" event and just close, and "),a("code",{pre:!0},[s._v("cancel(false)")]),s._v(" to prevent emitting\nthe "),a("code",{pre:!0},[s._v("cancel")]),s._v(" event.")])]),s._v(" "),a("h3",[s._v("Custom validation logic")]),s._v(" "),a("p",[s._v("You can use the "),a("code",{pre:!0},[s._v("accept-disabled")]),s._v(" property to prevent the dialog to close\nwhen the accept button is clicked.")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("accept")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Accept"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Decline"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":accept-disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"isThisNotAcceptable"')]),s._v("\n>")]),s._v("Lorem ipsum dolor sit amet"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Or use the "),a("code",{pre:!0},[s._v("@validate")]),s._v(" event to trigger your own validation logic as follow:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("accept")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Accept"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Decline"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@validate")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onValidate"')]),s._v("\n>")]),s._v("Lorem ipsum dolor sit amet"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onValidate({ accept }) {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" isValid = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// custom validation logic here")]),s._v("\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// ..")]),s._v("\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (isValid) {\n        accept();\n      }\n    },\n  },\n};\n")])]),s._v(" "),a("p",[s._v("You can use "),a("code",{pre:!0},[s._v("@validateCancel")]),s._v(" to trigger validation logic for the cancel event, as follows:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("accept")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Accept"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("cancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Decline"')]),s._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@validateCancel")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onValidateCancel"')]),s._v("\n>")]),s._v("Lorem ipsum dolor sit amet"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mdc-dialog")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onValidateCancel({ cancel }) {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" isValid = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// custom validation logic here")]),s._v("\n      "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// ..")]),s._v("\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (isValid) {\n        cancel();\n      }\n    },\n  },\n};\n")])]),s._v(" "),a("h3",[s._v("Reference")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://material.io/components/web/catalog/dialogs"}},[s._v("https://material.io/components/web/catalog/dialogs")])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=50.e7f7310de2a92cc34e44.js.map