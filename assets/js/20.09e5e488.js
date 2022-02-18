(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{422:function(s,t,a){"use strict";a.r(t);var n=a(56),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-note"}},[s._v("#")]),s._v(" VUE NOTE")]),s._v(" "),a("h2",{attrs:{id:"vue项目中使用可选链-和双问号-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目中使用可选链-和双问号-配置"}},[s._v("#")]),s._v(" vue项目中使用可选链 ( ?. )和双问号 ( ?? )配置")]),s._v(" "),a("h4",{attrs:{id:"_1、npm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、npm安装"}},[s._v("#")]),s._v(" 1、npm安装")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proposal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("optional"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("chaining "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可选链运算符 ?.")]),s._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @babel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proposal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nullish"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("coalescing"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("operator "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空值合并运算符 ??")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2、配置label-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置label-config-js"}},[s._v("#")]),s._v(" 2、配置label.config.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/plugin-proposal-optional-chaining'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可选链运算符 ?.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/plugin-proposal-nullish-coalescing-operator'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空值合并运算符 ??")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"_3、应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、应用"}},[s._v("#")]),s._v(" 3、应用")]),s._v(" "),a("blockquote",[a("p",[s._v("3.1  可选链  ?.")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取连接对象链的深处的属性值。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数引用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" myFn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parent若存在myFn方法则调用     ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表达式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("item-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问数组项")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 访问parent属性list中的下标为2的值")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置默认值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v(" sex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取parent的sex属性值，若不存在（undefined）则默认值为'男'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[s._v("3.2  空值合并  ??")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左侧为 null / undefined 返回右侧值；否则返回左侧值。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'name'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" v6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HAHA'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ''")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);