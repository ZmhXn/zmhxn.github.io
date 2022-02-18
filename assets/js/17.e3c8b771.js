(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{417:function(t,s,a){"use strict";a.r(s);var v=a(56),r=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),a("p",[t._v("传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议，由IETF的RFC 793 定义。在因特网协议族（Internet protocol suite）中，TCP层是位于IP层之上，应用层之下的中间层。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("TCP通信需要经过创建连接、数据传送、终止连接三个步骤。TCP将用户数据打包成报文段，它发送后启动一个定时器，另一端收到的数据进行确认、对失序的数据重新排序、丢弃重复数据。")])]),t._v(" "),a("h2",{attrs:{id:"tcp协议的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议的特点"}},[t._v("#")]),t._v(" TCP协议的特点")]),t._v(" "),a("p",[t._v("1、面向连接。"),a("br")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("通信双方必须先建立连接才能进行数据的传输，双方都必须为该连接分配必要的系统内核资源，以管理连接的状态和连接上的传输。\n双方间的数据传输都可以通过这一个连接进行。\n完成数据交换后，双方必须断开此连接，以释放系统资源。\n这种连接是一对一的，因此"),a("font",{attrs:{color:"red"}},[t._v("TCP不适用于广播的应用程序，基于广播的应用程序请使用UDP协议")])],1)]),t._v(" "),a("p",[t._v("2、每一条TCP连接只能有两个端点，每一条TCP连接只能是点对点的。"),a("br")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("要做到一对多，就要建立多条连接。这与UDP协议是有差别的。"),a("font",{attrs:{color:"red"}},[t._v("TCP连接的端点为套接字（IP地址+端口号）")]),t._v("。同一IP地址可以有多个不同的TCP连接。同一端口号也可以出现在多个不同的TCP连接中。"),a("font",{attrs:{color:"red"}},[t._v("但是每一条TCP连接唯一的被通信两端的套接字所确定")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("3、TCP提供可靠交付的服务。"),a("br")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("即保证数据可靠的送至接收方进程。当数据丢包时或出错时，进行重发等。\n通过TCP连接传送的数据，无差错、不丢失、不重复、并且按序到达。")])]),t._v(" "),a("p",[t._v("4、TCP提供全双工通信。数据在两个方向上独立的进行传输。因此，连接的每一端必须保持每个方向上的传输数据序号。"),a("br")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("因为在TCP连接的两端都分别有一接收缓冲区和发送缓冲区。可以同时将数据写入发送缓冲区和从接收缓冲区读取数据。发送进程将数据写入发送缓冲区后，再等合适的时机将数据发送出去；接收方将数据读入到接收缓冲区后，在等合适的时机将数据从接收缓冲区读出来交付给上层处理。")])]),t._v(" "),a("p",[t._v("5、面向字节流。面向字节流的含义：虽然应用程序和TCP交互是一次一个数据块，但TCP把应用程序交下来的数据仅仅是一连串的无结构的字节流。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("它一次发送多少字节的数据是根据接收方的接受能力以及网络的拥塞状况来控制的。与上层交付的数据块大小无关。当上层交付的数据块过大时，TCP就会将其划分的短一些在向下交付。如果上层交付的数据块过长，会先存放在缓冲区中待到有足够多的数据后在向下进行交付。即不是上层交付多少字节的数据块就必须将该数据块整个发送出去。因此，在接收端接受到的数据块的个数可能与发送端发送的数据块个数或大小都不对应。但是二者对应的字节流完全相同。")])]),t._v(" "),a("h2",{attrs:{id:"tcp与udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp"}},[t._v("#")]),t._v(" TCP与UDP")]),t._v(" "),a("p",[t._v("TCP/UDP 都是传输层协议，但是两者具有不同的特效，同时也具有不同的应用场景。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/tcp-udp.png",alt:"img"}})]),a("p"),t._v(" "),a("p",[t._v("面向报文")]),t._v(" "),a("blockquote",[a("p",[t._v("面向报文的传输方式是应用层交给UDP多长的报文，UDP发送多长的报文，即一次发送一个报文。因此，应用程序必须选择合适大小的报文。")])]),t._v(" "),a("p",[t._v("面向字节流")]),t._v(" "),a("blockquote",[a("p",[t._v("虽然应用程序和TCP的交互是一次一个数据块(大小不等)，但TCP把应用程序看成是一连串的无结构的字节流。TCP有一个缓冲，当应该程序传送的数据块太长，TCP就可以把它划分短一些再传送。")])]),t._v(" "),a("h2",{attrs:{id:"tcp协议段格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议段格式"}},[t._v("#")]),t._v(" TCP协议段格式")]),t._v(" "),a("p",[t._v("TCP协议端的格式如下图所示：\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/tcp-detail.png",alt:"img"}})]),t._v("\n其中的各字段表示如下："),a("p"),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("16位的源端口号：")]),t._v("表示发送方数据是由上层的某个应用进程交付下来的。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("16位的目的端口号：")]),t._v("表示数据要交付给接收方的某个应用进程。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("32位的序号和32位的确认序号：")]),t._v("可以保证请求和应答；按序到达；重传机制；批量的高效率发送。因为TCP进行的全双工通信，即双发都可以发送和接收数据，因此需要一个序号和确认序号对。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("4位的首部长度：")]),t._v("表示TCP的协议报头有多少个32位（或多少个4字节）。4个比特位表示的最大数字为2^4-1即15，单位为4字节，所以TCP协议的首部长度最长为15乘4即60字节。上图中的首部长度为20字节，所以该字段的数值为0101（即5乘4=20字节）。如果在申请更多的字节，可以使用选项占用的空间。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("保留6位：")]),t._v("现在还没有用处，以后可能会用到，所以先保留下来。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("6个标志位（各占一位）：")])]),t._v(" "),a("ul",[a("li",[a("strong",{attrs:{color:"black"}},[t._v("URG：(urgent)紧急标志位。")]),t._v("用于表示紧急指针是否有效，该值为1说明有效。")]),t._v(" "),a("li",[a("strong",{attrs:{color:"black"}},[t._v("ACK：(acknowledgement)确认标志位。")]),t._v("一般在数据进行通信的过程中一直有效，即一直为1。")]),t._v(" "),a("li",[a("strong",{attrs:{color:"black"}},[t._v(" PSH：(push)传送标志位。")]),t._v("当接收方的接受缓冲区满的时候，发送方会向接收方发送携带该标志位（将该标志位设置为1）的报文段，用于催促接收方赶紧将接受缓冲区中的数据读走。")]),t._v(" "),a("li",[a("strong",{attrs:{color:"black"}},[t._v("PST：(reset)复位标志位。")]),t._v("当一方需要重新建立连接时，会将携带该标志位（将该标志位设置为1）的报文段发送给对方。携带该标志位的报文段称为复位报文段。")]),t._v(" "),a("li",[a("strong",{attrs:{color:"black"}},[t._v("SYN：(synchronous)同步标志位。")]),t._v("当一方请求连接时，会将携带该标志位的同步报文段发送给对方。")]),t._v(" "),a("li",[a("strong",{attrs:{color:"black"}},[t._v("FIN：(finish)结束标志位。")]),t._v("当一方要断开连接时，会将携带该标志位的结束报文段发送给对方。")])]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("16位的窗口大小：")]),t._v("发送端发送报文时，将自己的接收缓冲区还有多大的内存填充在该位置。接收方接收到报文段时，就会根据该数据来确定发送多少字节的数据。"),a("big",[t._v("因为TCP是全双工通信，所以双方都可以作为接收方或发送方。因此，在发送数据时，都要将字节接受缓冲区还剩多大的内存填充在该位置。")])],1),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("16位的校验和：")]),t._v("发送端填充。接收端校验。校验不通过，认为数据有问题。此处对数据报头和有效数据部分都进行校验。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("16位的紧急指针：")]),t._v("表示哪部分数据是紧急数据，是需要被优先发送的。要配合标志位URG才有效。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("40字节的选项：")]),t._v("当20字节的头部大小不够用时，就在该处进行内存的申请。")]),t._v(" "),a("h2",{attrs:{id:"tcp连接的建立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接的建立"}},[t._v("#")]),t._v(" TCP连接的建立")]),t._v(" "),a("h3",{attrs:{id:"tcp建立连接的三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp建立连接的三次握手"}},[t._v("#")]),t._v(" TCP建立连接的三次握手")]),t._v(" "),a("p",[t._v("下面一图展示了三次握手的过程。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/tcp-three.png",alt:"img"}})]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Sequence number( seq 顺序号码) Acknowledge number( ack 确认号码)")])]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第一次握手：")]),t._v("初始时候，客户端和服务端都处于"),a("strong",{attrs:{color:"black"}},[t._v("CLOSED（关闭）")]),t._v("状态。当客户端需要给服务端发送数据包的时候，客户端主动打开连接。这个时候应该是通知了服务端，让服务端也打开连接，所以服务端是被动打开连接。打开连接之后，分别开始创建传输控制模块TCB，接着服务端进入"),a("strong",{attrs:{color:"black"}},[t._v("LISTEN（监听）")]),t._v("状态，等待客户端的连接请求。客户端也开始准备连接请求数据包，开始发送。客户端发送的第一个数据包是一个连接请求报文段，这个报文的内容如图，是一个同步位SYN=1，另一个是一个初始序号seq=x。TCP规定，SYN=1的报文段不能携带数据，但是消耗一个序列号。客户端发送了这个报文之后，进入"),a("strong",{attrs:{color:"black"}},[t._v("SYN-SENT（同步已发送）")]),t._v("状态。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第二次握手：")]),t._v("服务端己收到这个数据包之后，知道有客户端请求连接。如果当前有资源，可以同意连接，则给客户端发送确认报文。这个确认报文的内容有：SYN=1（没有变化），seq=y（变成了服务端的序列号），新增ACK=1，ack=x+1（客户端序列号+1）。这里SYN=1，所以报文不能携带数据，同样消耗了服务端的一个序列号。然后服务端进入了"),a("strong",{attrs:{color:"black"}},[t._v("SYN-RCVD（同步收到）")]),t._v("状态。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第三次握手：")]),t._v("客户端收到服务端的确认报文之后，还需要给客户端发送一个客户端的确认报文。这个报文的内容是ACK=1，seq=x+1，ack=y+1。这里没有了SYN这个字段，所以这个报文可以携带数据。这个客户端确认报文发送出去之后，客户端进入"),a("strong",{attrs:{color:"black"}},[t._v("ESTABLISHED（已建立连接）")]),t._v("状态。服务端接收到这个数据包之后，也进入了"),a("strong",{attrs:{color:"black"}},[t._v("ESTABLISHED（已建立连接）")]),t._v("状态。")]),t._v(" "),a("h3",{attrs:{id:"为什么建立连接是三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立连接是三次握手"}},[t._v("#")]),t._v(" 为什么建立连接是三次握手？")]),t._v(" "),a("p",[t._v("这是因为，首先建立连接，必须要有两次握手吧，客户端主动一次，告知服务端，我想和你建立连接，然后看服务端是否同意。然后如果服务端同意的话，得给一个回复，然后开始等待客户端的数据包，这就是两次握手。如果这个时候就建立连接，客户端开始给服务端发送数据包，在正常情况下没啥问题。但是由于网络并不是100%任何时候都稳定，一旦因为某些原因导致服务端发送给客户端的确认报文丢失，那这个时候客户端收不到确认数据包，会误以为服务端不同意连接，不会给服务端发送数据包，但是这时候服务端已经在等待了。这样的差错会导致服务端一直处于等待状态，浪费资源。")]),t._v(" "),a("p",[t._v("而三次握手的话，客户端在确认服务端同意之后再发一次数据包给服务端，告知服务端，不管怎么样我都会给你发送数据包的。因为TCP协议中，建立连接之后，每一次发送数据包客户端都会等待服务端的确认信息，如果收不到某一个数据包的确认信息，客户端就会重发这个数据包。这样就不会发生差错了。")]),t._v(" "),a("h2",{attrs:{id:"tcp的连接释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的连接释放"}},[t._v("#")]),t._v(" TCP的连接释放")]),t._v(" "),a("p",[t._v("前面讲了TCP的连接建立过程是三次握手，而这里讲的TCP连接释放过程却是四次握手，或者两个二次握手，因为一般告别的时候都是挥手，有时候也称为四次挥手。")]),t._v(" "),a("h3",{attrs:{id:"tcp连接释放的四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接释放的四次挥手"}},[t._v("#")]),t._v(" TCP连接释放的四次挥手")]),t._v(" "),a("p",[t._v("下面一图展示了四次挥手的过程。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/tcp-four.png",alt:"img"}})]),a("p"),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第一次挥手：")]),t._v("当TCP连接需要释放时，客户端和服务端都是处于"),a("strong",{attrs:{color:"black"}},[t._v("ESTABLISHED（已建立连接）")]),t._v("状态。此时，客户端数据发送完毕，想要结束连接了，主动发出连接释放请求数据包。这个数据包内容：Fin=1，seq=u（这个u是这个数据包之前一个数据包的序列号+1），客户端进入"),a("strong",{attrs:{color:"black"}},[t._v("FIN-WAIT-1（终止等待1）")]),t._v("状态，不在发送数据包，等待服务端的确认。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第二次挥手：")]),t._v("服务端接收到释放数据包之后发出确认，确认包中内容：确认号ack=u+1，序列号seq=v（这个v是服务端上一个发送的数据包的序列号+1），另一个是ACK=1。然后服务端进入"),a("strong",{attrs:{color:"black"}},[t._v("CLOSE-WAIT（关闭等待）")]),t._v("。这个时候客户端到服务端的连接已经结束了。但是TCP是全双工通信，因为这个时候是客户端主动发起的结束，在服务端这边可能还存在着数据没有完全发送给客户端，所以服务端到客户端仍然没有结束。客户端已经不能在发送数据了，如果服务端还有数据发送过来，客户端仍然要接收。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第三次挥手：")]),t._v("客户端收到服务端的确认之后，进入"),a("strong",{attrs:{color:"black"}},[t._v("FIN-2（终止等待2）")]),t._v("状态，等待服务端发送服务端发器的连接释放数据包。这时候服务端可能还有一些数据包要发送给客户端，客户端一一接收。最后，没有数据要发送了之后，服务端发送连接释放数据包，这个数据包内容：FIN=1，ACK=1，seq=w（因为在服务端回复客户端的连接请求（数据包的序列号是v）之后，可能仍然有其他数据包要发送，所以这里的w不一定是v+1），ack=u+1（确认号和上次回复客户端的请求释放连接的确认号一样）。接着服务端进入"),a("strong",{attrs:{color:"black"}},[t._v("LAST-ACK（最后确认状态）")]),t._v("，等待客户端的确认。")]),t._v(" "),a("p",[a("strong",{attrs:{color:"black"}},[t._v("第四次挥手：")]),t._v("客户端收到服务端的连接释放数据包之后，发出一个确认数据包，内容：ACK=1，seq=u+1，ack = w+1。然后客户端进入"),a("strong",{attrs:{color:"black"}},[t._v("TIME-WAIT（时间等待）")]),t._v("状态。这个时候TCP还没有释放。仍需要经过"),a("strong",{attrs:{color:"black"}},[t._v("时间等待计时器")]),t._v("设置的时间2MSL后，客户端才会进入"),a("strong",{attrs:{color:"black"}},[t._v("CLOSED")]),t._v("状态。MSL称为"),a("strong",{attrs:{color:"black"}},[t._v("最长报文段寿命")]),t._v("。RFC793建议把这个值设为2分钟，那这样的话，在客户端收到服务端的连接释放数据包之后，需要等待4分钟才能进入"),a("strong",{attrs:{color:"black"}},[t._v("CLOSED")]),t._v("状态。这显然时间太长了，不过这个值设为2分钟也只是建议，还是可以设置适合的时间的。最后服务端收到这个客户端的确认包之后就进入了"),a("strong",{attrs:{color:"black"}},[t._v("CLOSED")]),t._v("状态。显然，服务端一般先于客户端进入关闭状态。")]),t._v(" "),a("h3",{attrs:{id:"为什么要四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要四次挥手"}},[t._v("#")]),t._v(" 为什么要四次挥手？")]),t._v(" "),a("p",[t._v("TCP 协议是一种面向连接，可靠，基于字节流的传输层通信协议。TCP 是全双工模式(同一时刻可以同时发送和接收)，这就意味着，当主机1发出 FIN 报文段时，只是表示主机1已结没有数据要发送了，主机1告诉主机2，它的数据已经全部发送完毕；但是，这个时候主机1还是可以接受来自主机2的数据；当主机2返回 ACK报文段时，这个时候就表示主机2也没有数据要发送了，就会告诉主机1，我也没有数据要发送了，之后彼此就会中断这次TCP连接。")]),t._v(" "),a("h3",{attrs:{id:"为什么要等待-2msl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要等待-2msl"}},[t._v("#")]),t._v(" 为什么要等待 2MSL")]),t._v(" "),a("p",[t._v("MSL：报文段最大生存时间，它是任何报文段被丢弃前在网络内的最长时间")]),t._v(" "),a("p",[t._v("原因如下：")]),t._v(" "),a("ul",[a("li",[t._v("保证TCP协议的全双工连接能够可靠关闭")]),t._v(" "),a("li",[t._v("保证这次连接的重复数据从网络中消息")])]),t._v(" "),a("p",[t._v("第一点： 如果主机1直接 关闭，由于IP协议的不可靠性或者其他网络原因，导致主机2没有收到主机1最后回复的 ACK。那么主机2就会在超时之后继续发送 FIN，此时由于主机1已经关闭，就找不到与重发的 FIN 对应的连接。所以，主机1 不是直接进入 关闭，而是TIME_WAIT 状态。当再次收到 FIN 的时候，能够保证对方收到 ACK ，最后正确关闭连接。")]),t._v(" "),a("p",[t._v("第二点：如果主机1直接 关闭，然后又再向主机 2 发起一个新连接，我们不能保证这个新连接与刚才关闭的连接端口是不同的。也就是说有可能新连接和老连接的端口号是相同的。一般来说不会发生什么问题，但还是有特殊情况出现；假设新连接和已经关闭的老连接端口号是一样的，如果前一次连接的某些数据仍然滞留在网络中( Lost Duplicate )，那些延迟数据在建立新连接之后才到达主机2，由于新连接和老连接的端口号是一样的，TCP 协议就认为哪个延迟的数据时属于新连接的，这样就和真正的新连接的数据包发生混淆了。所以TCP连接要在 TIME_WAIT 状态等待两倍 MSL ，保证本次连接的所有数据都从网络中消失。")]),t._v(" "),a("h3",{attrs:{id:"附图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附图"}},[t._v("#")]),t._v(" 附图")]),t._v(" "),a("p",[t._v("一张图带你读懂TCP/IP协议\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/images/tcp-total.png",alt:"img"}})]),a("p")])}),[],!1,null,null,null);s.default=r.exports}}]);