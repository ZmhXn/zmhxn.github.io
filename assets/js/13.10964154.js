(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{370:function(t,s,a){"use strict";a.r(s);var v=a(42),i=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dns解析原理及过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns解析原理及过程"}},[t._v("#")]),t._v(" DNS解析原理及过程")]),t._v(" "),a("h2",{attrs:{id:"为什么需要dns解析域名为ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要dns解析域名为ip地址"}},[t._v("#")]),t._v(" 为什么需要DNS解析域名为IP地址？")]),t._v(" "),a("p",[t._v("网络通讯大部分是基于TCP/IP的，而TCP/IP是基于IP地址的，所以计算机在网络上进行通讯时只能识别如“202.96.134.133”之类的IP地址，而不能认识域名。我们无法记住10个以上IP地址的网站，所以我们访问网站时，更多的是在浏览器地址栏中输入域名，就能看到所需要的页面，这是因为有一个叫“DNS服务器”的计算机自动把我们的域名“翻译”成了相应的IP地址，然后调出IP地址所对应的网页。")]),t._v(" "),a("h2",{attrs:{id:"什么是dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS？")]),t._v(" "),a("p",[t._v("DNS( Domain Name System)是“域名系统”的英文缩写，是一种组织成域层次结构的计算机和网络服务命名系统，它用于TCP/IP网络，它所提供的服务是用来将主机名和域名转换为IP地址的工作。DNS就是这样的一位“翻译官”，它的基本工作原理可用下图来表示。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/dns-img.png",alt:"img"}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"dns域名解析基本过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns域名解析基本过程"}},[t._v("#")]),t._v(" DNS域名解析基本过程")]),t._v(" "),a("p",[t._v("用一个图总结下就是：\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/dns-analysis.png",alt:"img"}})]),a("p"),t._v(" "),a("ul",[a("li",[t._v("第一步，浏览器会检查缓存中有没有这个域名的对应解析IP，如果存在，返回IP地址解析完成。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("浏览器的缓存也是有大小时间限制的，可以通过TTL属性来设置，当然这个时间也是要控制好，太长如果服务器IP变化将会导致用户无法访问页面，如果太短就失去了缓存的意义。")])]),t._v(" "),a("ul",[a("li",[t._v("第二步，如果缓存中没有对应的解析IP，浏览器会查找本机操作系统中是否存在该解析IP。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在windows系统中，可以通过C:\\Windows\\System32\\drivers\\etc下的host文件来修改。可以将任何的域名映射到对应的IP地址中。")])]),t._v(" "),a("ul",[a("li",[t._v("第三步，如果上面两步都不存在，我们的网络配置中会有“DNS服务器地址”这一项，操作系统会将请求的域名发送给这里设置的LDNS（本地区域名服务器）。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这个LDNS，一般都在你所在城市的某个角落，如果你是校内网，那么这个服务器就在你的学校内，如果是家用的，这个DNS就会提供给你互联网的服务接入商，即电信移动等。在windows下我们可以用ipconfig命令看到。LDNS 承担了80%的域名解析。")])]),t._v(" "),a("ul",[a("li",[t._v("第四步，如果第三步也没有查询到，就直接到Root Server 根域名服务器请求解析。")]),t._v(" "),a("li",[t._v("第五步，根域名服务器返回给本地域名服务器一个所查询的主域名服务器（gTLD Server）地址，gTLD Server：国际顶级域名服务器，共有13台左右包括（cn、com、org等）")]),t._v(" "),a("li",[t._v("第六步，本地域名服务器（Local DNS Server）再向上一步返回的gTLD Server（顶级域名服务器）发送请求。")]),t._v(" "),a("li",[t._v("第七步，gTLD Server（顶级域名服务器）返回查询的对应域名的Name Server域名服务器地址，这个就是我们平时注册域名的服务器（163.com域服务器）。")]),t._v(" "),a("li",[t._v("第八步，Name Server会查询存储的域名与IP地址的映射关系表，连同一个TTL值返回给DNS Server域名解析服务器。")]),t._v(" "),a("li",[t._v("第九步，返回该域名对应的IP和TTL值，由Local DNS Server来缓存，缓存时间由TTL值来控制。")]),t._v(" "),a("li",[t._v("第十步，把解析的地址返回给用户，TTL值由浏览器缓存在本地系统，域名解析完成。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("从客户端到本地DNS服务器是属于递归查询，而DNS服务器之间就是的交互查询就是迭代查询。")])]),t._v(" "),a("h3",{attrs:{id:"递归查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归查询"}},[t._v("#")]),t._v(" 递归查询")]),t._v(" "),a("p",[t._v("如果主机所询问的本地域名服务器不知道被查询的域名的IP地址，那么本地域名服务器就以DNS客户的身份，向其它根域名服务器继续发出查询请求报文(即替主机继续查询)，而不是让主机自己进行下一步查询。因此，递归查询返回的查询结果或者是所要查询的IP地址，或者是报错，表示无法查询到所需的IP地址。")]),t._v(" "),a("h3",{attrs:{id:"迭代查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代查询"}},[t._v("#")]),t._v(" 迭代查询")]),t._v(" "),a("p",[t._v("当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的IP地址，要么告诉本地服务器：“你下一步应当向哪一个域名服务器进行查询”。然后让本地服务器进行后续的查询。根域名服务器通常是把自己知道的顶级域名服务器的IP地址告诉本地域名服务器，让本地域名服务器再向顶级域名服务器查询。顶级域名服务器在收到本地域名服务器的查询请求后，要么给出所要查询的IP地址，要么告诉本地服务器下一步应当向哪一个权限域名服务器进行查询。最后，知道了所要解析的IP地址或报错，然后把这个结果返回给发起查询的主机。")]),t._v(" "),a("h2",{attrs:{id:"几种域名解析方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几种域名解析方式"}},[t._v("#")]),t._v(" 几种域名解析方式")]),t._v(" "),a("ul",[a("li",[t._v("A记录，a就是Address的简写，用来指定域名对应IP的地址，比如：items.taobao.com指定到115.238.23.241，switch.taobao.com指定到121.14.24.241。A记录可以将多个域名映射到一个IP地址，但是不能一个域名对应多个IP。")]),t._v(" "),a("li",[t._v("MX记录：MX代表的是Mail Exchage，就是可以将某个域名下的邮件服务器指向自己的Mail Server，如baidu.com域名的A记录IP地址是180.97.34.157，如果将MX记录设置为180.97.34.154，即xxx@baidu.com的邮件路由，那么DNS会将邮件发送到180.97.34.154所在的服务器，而正常web请求仍然会解析到A记录的IP地址180.97.34.157。")]),t._v(" "),a("li",[t._v("CNAME记录 ，全成Canonical Name（别名解析）。就是将一个域名设置成一个或多个别名，比如将baidu.com解析到itlemon.cn，将csdn.net解析到itlemon.cn，那么itlemon.cn就是baidu.com和CSDN.net的别名。")]),t._v(" "),a("li",[t._v("NS记录：就是为某个域名指定了特定的DNS服务器去解析。")]),t._v(" "),a("li",[t._v("TXT记录：为某个主机名或者域名设置特定的说明，比如为itlemon.cn设置的的TXT记录为“Lemon的技术笔记”，这个TXT记录为itlemon.cn的说明。")])]),t._v(" "),a("h2",{attrs:{id:"关于dns解析的ttl参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于dns解析的ttl参数"}},[t._v("#")]),t._v(" 关于DNS解析的TTL参数")]),t._v(" "),a("p",[t._v("我们在配置DNS解析的时候，有一个参数常常容易忽略，就是DNS解析的TTL参数，Time To Live。TTL这个参数告诉本地DNS服务器，域名缓存的最长时间。用阿里云解析来举例，阿里云解析默认的TTL是10分钟，10分钟的含义是，本地DNS服务器对于域名的缓存时间是10分钟，10分钟之后，本地DNS服务器就会删除这条记录，删除之后，如果有用户访问这个域名，就要重复一遍上述复杂的流程。")]),t._v(" "),a("p",[t._v("其实，如果网站已经进入稳定发展的状态，不会轻易更换IP地址，我们完全可以将TTL设置到协议最大值，即24小时。带来的好处是，让域名解析记录能够更长时间的存放在本地DNS服务器中，以加快所有用户的访问。设置成24小时，其实，还解决了Googlebot在全球部署的服务器抓取网站可能带来的问题。")]),t._v(" "),a("p",[t._v("阿里云之所以只将TTL设置成10分钟，是为了让域名解析更快生效而已。因为之前的解析会在最长10分钟之后失效（本地DNS服务器将对应的解析条目删除），然后新的解析生效。如果是24小时，这个生效的时间最长就是24小时，甚至更长（本地DNS服务器要有用户请求，才会发起查询）。")])])}),[],!1,null,null,null);s.default=i.exports}}]);