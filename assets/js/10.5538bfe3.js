(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{272:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"template-模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-模板","aria-hidden":"true"}},[t._v("#")]),t._v(" Template 模板")]),t._v(" "),s("p",[t._v("Surgio 为了能够灵活地定义模板而引入了 "),s("a",{attrs:{href:"https://nunjucks.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nunjucks"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("需要注意的是文件名即为该 Template 的名称，后面在定义 Artifact 时会用到。")]),t._v(" "),s("p",[t._v("目录中默认已经包含针对 Surge，Quantumult 和 Clash 的模板和一些网友维护的规则片段 Snippet。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("欢迎大家参与到默认规则的修订中！")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/geekdada/create-surgio-store/tree/master/template/template",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目地址"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"模板变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板变量")]),t._v(" "),s("h3",{attrs:{id:"providername"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#providername","aria-hidden":"true"}},[t._v("#")]),t._v(" providerName")]),t._v(" "),s("p",[t._v("当前 Provider 的名称。")]),t._v(" "),s("h3",{attrs:{id:"downloadurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#downloadurl","aria-hidden":"true"}},[t._v("#")]),t._v(" downloadUrl")]),t._v(" "),s("p",[t._v("当前文件对应的订阅地址。")]),t._v(" "),s("h3",{attrs:{id:"nodelist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodelist","aria-hidden":"true"}},[t._v("#")]),t._v(" nodeList")]),t._v(" "),s("p",[t._v("过滤之后的节点列表。")]),t._v(" "),s("h3",{attrs:{id:"remotesnippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remotesnippets","aria-hidden":"true"}},[t._v("#")]),t._v(" remoteSnippets")]),t._v(" "),s("p",[t._v("远程模板片段。以 "),s("router-link",{attrs:{to:"/guide/custom-config.html#remotesnippets"}},[t._v("这个配置")]),t._v(" 为例：")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{ remoteSnippets.cn.main('DIRECT') }}\n")])])]),s("p",[t._v("生成的内容如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("# China Apps\nUSER-AGENT,MicroMessenger Client,DIRECT\nUSER-AGENT,WeChat*,DIRECT\nUSER-AGENT,MApi*,DIRECT // Dianping\n# Ali\nDOMAIN-KEYWORD,alipay,DIRECT\nDOMAIN-KEYWORD,taobao,DIRECT\nDOMAIN-KEYWORD,alicdn,DIRECT\nDOMAIN-KEYWORD,aliyun,DIRECT\nDOMAIN-KEYWORD,.tmall.,DIRECT\n# China\nDOMAIN-SUFFIX,CN,DIRECT\nDOMAIN-KEYWORD,baidu,DIRECT\n")])])]),s("h3",{attrs:{id:"hkfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hkfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" hkFilter")]),t._v(" "),s("p",[t._v("香港节点过滤器。")]),t._v(" "),s("h3",{attrs:{id:"usfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" usFilter")]),t._v(" "),s("p",[t._v("美国节点过滤器。")]),t._v(" "),s("h3",{attrs:{id:"netflixfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netflixfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" netflixFilter")]),t._v(" "),s("p",[t._v("Netflix 节点过滤器。Surgio 默认会将名称中包含 "),s("em",[t._v("netflix")]),t._v(", "),s("em",[t._v("hkbn")]),t._v(", "),s("em",[t._v("hkt")]),t._v(", "),s("em",[t._v("hgc")]),t._v("（不分大小写）的节点过滤出来。如果在 Provider 中进行了覆盖则会运行新的方法。")]),t._v(" "),s("p",[s("em",[t._v("内置方法定义")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" netflixFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("NodeNameFilterType")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'netflix'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hkbn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hkt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hgc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"youtubepremiumfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#youtubepremiumfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" youtubePremiumFilter")]),t._v(" "),s("p",[t._v("Youtube Premium 节点过滤器。Surgio 默认会将名称中包含 "),s("em",[t._v("日")]),t._v(", "),s("em",[t._v("美")]),t._v(", "),s("em",[t._v("韩")]),t._v(", 🇯🇵, 🇺🇸, 🇰🇷 的节点过滤出来。如果在 Provider 中进行了覆盖则会运行新的方法。")]),t._v(" "),s("p",[s("em",[t._v("内置方法定义")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("youtubePremiumFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nodeConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'日'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'美'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'韩'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇯🇵'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇺🇸'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'🇰🇷'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://support.google.com/youtube/answer/6307365?hl=zh-Hans",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看所有支持 Youtube Premium 的国家和地区"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"clashproxyconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clashproxyconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" clashProxyConfig")]),t._v(" "),s("p",[t._v("Clash 的 "),s("code",[t._v("Proxy")]),t._v(" 和 "),s("code",[t._v("Proxy Group")]),t._v(" 配置对象。"),s("code",[t._v("clashProxyConfig")]),t._v(" 的内容依赖 Artifact 的 "),s("router-link",{attrs:{to:"/guide/custom-artifact.html#proxygroupmodifier-nodelist-filters"}},[s("code",[t._v("proxyGroupModifier")]),t._v(" 函数")]),t._v("。")],1),t._v(" "),s("p",[t._v("由于很难在模板中直接书写 Yaml 格式的文本，所以引入了一个特殊的变量用来存储 Clash 的节点配置，然后利用 Nunjucks 的 "),s("a",{attrs:{href:"https://nunjucks.bootcss.com/templating.html#part-cda1d805a3577fa5",target:"_blank",rel:"noopener noreferrer"}},[t._v("filter"),s("OutboundLink")],1),t._v(" 来输出 Yaml 格式文本。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{ clashProxyConfig | yaml }}\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("你当然可以在模板中使用 Nunjucks 内置的 filter。")])]),t._v(" "),s("h2",{attrs:{id:"模板方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板方法")]),t._v(" "),s("h3",{attrs:{id:"getsurgenodes-nodelist-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getsurgenodes-nodelist-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("getSurgeNodes(nodeList, filter?)")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[s("code",[t._v("filter")]),t._v(" 为可选参数")]),t._v(" "),s("li",[t._v("支持输出 Shadowsocks, Shadowsocksr, HTTPS, Snell, Vmess 节点")])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("请参考 "),s("router-link",{attrs:{to:"/guide/surge-advance.html"}},[t._v("「Surge 进阶使用」")]),t._v(" 生成针对 Surge 的 V2Ray 或 SSR 订阅")],1)]),t._v(" "),s("p",[t._v("生成 Surge 规范的节点列表，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("🇺🇸US = custom, us.example.com, 10000, chacha20-ietf-poly1305, password, https://raw.githubusercontent.com/ConnersHua/SSEncrypt/master/SSEncrypt.module, udp-relay=true, obfs=tls, obfs-host=gateway-carry.icloud.com\n🇭🇰HK(Netflix) = custom, hk.example.com, 10000, chacha20-ietf-poly1305, password, https://raw.githubusercontent.com/ConnersHua/SSEncrypt/master/SSEncrypt.module, udp-relay=true\n")])])]),s("h3",{attrs:{id:"getshadowsocksnodes-nodelist-providername"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getshadowsocksnodes-nodelist-providername","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("getShadowsocksNodes(nodeList, providerName)")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[t._v("第二个入参为 Group 名称")])])]),t._v(" "),s("p",[t._v("生成 Shadowsocks Scheme 列表，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ss://cmM0LW1kNTpwYXNzd29yZA@us.com:1234/?group=subscribe_demo#%F0%9F%87%BA%F0%9F%87%B8%20US\nss://cmM0LW1kNTpwYXNzd29yZA@hk.com:1234/?group=subscribe_demo#%F0%9F%87%AD%F0%9F%87%B0%20HK\n")])])]),s("p",[t._v("你可以使用 "),s("code",[t._v("base64")]),t._v(" filter 来将上面的文本转换成 Quantumult 能够识别的订阅内容。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{ getShadowsocksNodes(nodeList, providerName) | base64 }}\n")])])]),s("h3",{attrs:{id:"getquantumultnodes-nodelist-providername"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getquantumultnodes-nodelist-providername","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("getQuantumultNodes(nodeList, providerName)")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[t._v("第二个入参为 Group 名称")]),t._v(" "),s("li",[t._v("支持输出 Shadowsocks, Shadowsocksr, Vmess, HTTPS 节点")])])]),t._v(" "),s("p",[t._v("生成 Quantumult 订阅 Scheme 列表，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vmess://5rWL6K+VIDEgPSB2bWVzcywxLjEuMS4xLDgwODAsY2hhY2hhMjAtaWV0Zi1wb2x5MTMwNSwiMTM4NmY4NWUtNjU3Yi00ZDZlLTlkNTYtNzhiYWRiNzVlMWZkIiw2NCxncm91cD1TdXJnaW8sb3Zlci10bHM9ZmFsc2UsY2VydGlmaWNhdGU9MSxvYmZzPXdzLG9iZnMtcGF0aD0iLyIsb2Jmcy1oZWFkZXI9Ikhvc3Q6ZXhhbXBsZS5jb21bUnJdW05uXVVzZXItQWdlbnQ6TW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMl8zXzEgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUvMTVFMTQ4Ig==\nvmess://5rWL6K+VIDIgPSB2bWVzcywxLjEuMS4xLDgwODAsY2hhY2hhMjAtaWV0Zi1wb2x5MTMwNSwiMTM4NmY4NWUtNjU3Yi00ZDZlLTlkNTYtNzhiYWRiNzVlMWZkIiw2NCxncm91cD1TdXJnaW8sb3Zlci10bHM9ZmFsc2UsY2VydGlmaWNhdGU9MSxvYmZzPXRjcCxvYmZzLXBhdGg9Ii8iLG9iZnMtaGVhZGVyPSJIb3N0OjEuMS4xLjFbUnJdW05uXVVzZXItQWdlbnQ6TW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMl8zXzEgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUvMTVFMTQ4Ig==\n")])])]),s("p",[t._v("你可以使用 "),s("code",[t._v("base64")]),t._v(" filter 来将上面的文本转换成 Quantumult 能够识别的订阅内容。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{ getQuantumultNodes(nodeList, providerName) | base64 }}\n")])])]),s("h3",{attrs:{id:"getnodenames-nodelist-nodetypelist-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getnodenames-nodelist-nodetypelist-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("getNodeNames(nodeList, nodeTypeList?, filter?)")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[s("code",[t._v("nodeTypeList")]),t._v(", "),s("code",[t._v("filter")]),t._v(" 为可选参数")])])]),t._v(" "),s("p",[t._v("生成一段逗号分隔的名称字符串，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("🇺🇸US, 🇭🇰HK(Netflix)\n")])])]),s("p",[t._v("若不传 "),s("code",[t._v("nodeTypeList")]),t._v(" 则默认输出 Shadowsocks 节点。若需要同时输出其它类型节点则传入：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNodeNames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("若需要过滤 Netflix 节点则传入：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNodeNames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowsocks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" netflixFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"getdownloadurl-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getdownloadurl-name","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("getDownloadUrl(name)")])]),t._v(" "),s("p",[t._v("获得另一个文件的下载地址（链接前面部分取决于 "),s("code",[t._v("surgio.conf.js")]),t._v(" 中 "),s("code",[t._v("urlBase")]),t._v(" 的值），则可以这样写：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDownloadUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example.conf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://example.com/example.conf")]),t._v("\n")])])]),s("h2",{attrs:{id:"片段-snippet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#片段-snippet","aria-hidden":"true"}},[t._v("#")]),t._v(" 片段 (Snippet)")]),t._v(" "),s("p",[t._v("片段是一种特殊的模板，它依赖 Nunjucks 的 "),s("a",{attrs:{href:"https://mozilla.github.io/nunjucks/cn/templating.html#macro",target:"_blank",rel:"noopener noreferrer"}},[t._v("宏（macro）"),s("OutboundLink")],1),t._v(" 来实现。什么是宏不重要，你只要依葫芦画瓢就可以写出自己的「片段」。")]),t._v(" "),s("p",[t._v("我们以 "),s("code",[t._v("snippet")]),t._v(" 目录内的 "),s("code",[t._v("blocked_rules.tpl")]),t._v(" 为例（内容有省略）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{% macro main(rule) %}\nDOMAIN-KEYWORD,bitly,{{ rule }}\nDOMAIN-KEYWORD,blogspot,{{ rule }}\nDOMAIN-KEYWORD,dropbox,{{ rule }}\nDOMAIN-SUFFIX,twitpic.com,{{ rule }}\nDOMAIN-SUFFIX,youtu.be,{{ rule }}\nDOMAIN-SUFFIX,ytimg.com,{{ rule }}\n{% endmacro %}\n")])])]),s("div",{staticClass:"tip custom-block"},[s("ul",[s("li",[t._v("宏暴露了一个 "),s("code",[t._v("main")]),t._v(" 方法，传入一个字符串变量")]),t._v(" "),s("li",[t._v("你可以使用宏的其它特性")])])]),t._v(" "),s("p",[t._v("使用的时候只需要 "),s("code",[t._v("import")]),t._v(" 这个模板：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{% import './snippet/blocked_rules.tpl' as blocked_rules %}\n\n{{ blocked_rules.main('🚀 Proxy') }}\n")])])]),s("p",[t._v("最终得到的规则是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("DOMAIN-KEYWORD,bitly,🚀 Proxy\nDOMAIN-KEYWORD,blogspot,🚀 Proxy\nDOMAIN-KEYWORD,dropbox,🚀 Proxy\nDOMAIN-SUFFIX,twitpic.com,🚀 Proxy\nDOMAIN-SUFFIX,youtu.be,🚀 Proxy\nDOMAIN-SUFFIX,ytimg.com,🚀 Proxy\n")])])]),s("h3",{attrs:{id:"clash-规则格式处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clash-规则格式处理","aria-hidden":"true"}},[t._v("#")]),t._v(" Clash 规则格式处理")]),t._v(" "),s("p",[t._v("由于 Yaml 的数组类型必须在每一条数据前加 "),s("code",[t._v("-")]),t._v("，所以提供了一个处理函数将规则转换成 Clash 能够识别的数组。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{% import './snippet/blocked_rules.tpl' as blocked_rules %}\n\n{{ blocked_rules.main('🚀 Proxy') | patchYamlArray }}\n")])])]),s("p",[t._v("最终得到的规则是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- DOMAIN-KEYWORD,bitly,🚀 Proxy\n- DOMAIN-KEYWORD,blogspot,🚀 Proxy\n- DOMAIN-KEYWORD,dropbox,🚀 Proxy\n- DOMAIN-SUFFIX,twitpic.com,🚀 Proxy\n- DOMAIN-SUFFIX,youtu.be,🚀 Proxy\n- DOMAIN-SUFFIX,ytimg.com,🚀 Proxy\n")])])]),s("p",[t._v("需要注意的是，"),s("code",[t._v("patchYamlArray")]),t._v(" 除了更改格式，还会将 Clash 不支持的规则类型省略，例如：")]),t._v(" "),s("ul",[s("li",[t._v("USER-AGENT")]),t._v(" "),s("li",[t._v("PROCESS-NAME")]),t._v(" "),s("li",[t._v("no-resolve（仅除去该字段，其它部分保留）")])]),t._v(" "),s("h3",{attrs:{id:"quantumultx-规则处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quantumultx-规则处理","aria-hidden":"true"}},[t._v("#")]),t._v(" QuantumultX 规则处理")]),t._v(" "),s("p",[t._v("由于 QuantumultX 目前暂时还不支持 "),s("code",[t._v("URL-REGEX")]),t._v(" 和 "),s("code",[t._v("PROCESS-NAME")]),t._v("，所以需要把这些规则从配置中除去。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{% import './snippet/blocked_rules.tpl' as blocked_rules %}\n\n{{ blocked_rules.main('🚀 Proxy') | quantumultx }}\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);