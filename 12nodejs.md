    nodejs适用于高并发、IO密集型操作

[进击Node.js基础（一）](https://www.imooc.com/learn/348)
[参考官方文档](https://nodejs.org/dist/latest-v8.x/docs/api/)
1. url
    - url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
        url.parse('https://wwww.baidu.com?param1=1&param2=2')
        解析完成后生成一个Url对象，其中query属性值为query: 'param1=1&param2=2'
        url.parse('https://wwww.baidu.com?param1=1&param2=2', true)
        解析完成后生成一个Url对象，其中query属性值为query: { param1: '1', param2: '2' }
        url.parse('//wwww.baidu.com/goods/book?param1=1&param2=2', true, true)
        第三个参数为true时，即使不传协议名也会解析出主机、端口号等信息，默认为false，不会解析主机名、端口号等信息
    - url.format(urlObject)
        将对象格式化为Url
        url.format({})
    - url.resolve(from, to)
        url.resolve('https://www.baidu.com', '/good')

2. querystring
    - querystring.stringify(obj[, sep[, eq[, options]]])
        querystring.stringify({name:'', course:['node','jade'], from:''})
            结果为'name=&course=node&course=jade&from='
        querystring.stringify({name:'', course:['node','jade'], from:''}, ',')
            结果为'name=,course=node,course=jade,from='
        querystring.stringify({name:'', course:['node','jade'], from:''}, ',', ':')
            结果为'name:,course:node,course:jade,from:'
    - querystring.parse(str[, sep[, eq[, options]]])
        同上面的三种传参方式对应，分隔符

    - querystring.escape(str)
        querystring.escape('<哈哈>') 结果为 '%3C%E5%93%88%E5%93%88%3E'
    - querystring.unescape(str)
        querystring.unescape('%3C%E5%93%88%E5%93%88%3E') 结果为 <哈哈>'

3. http
    - http请求的流程
        1. chrome搜索自身的DNS缓存
        在chrome浏览器中输入：chrome://net-internals/#dns
        1. 搜索操作系统自身的DNS缓存（浏览器没有找到自身缓存或缓存失效）
        1. 读取本地的HOST文件
        1. 浏览器发起一个DNS的系统调用
            1. 宽带运营商服务器查看本身缓存
            1. 运营商服务器发起一个迭代DNS解析的请求
                运营商服务器把结果返回给操作系统内核同事缓存起来
                操作系统内核把结果返回给浏览器
                最终浏览器拿到了www.imooc.com对应的IP地址
        1. 浏览器获得域名对应的IP地址后，发起HTTP“三次握手”
        1. TCP/IP连接建立起来后，浏览器就可以向服务器发送HTTP请求了。使用了比如说，用HTTP的GET方法请求一个根域里的域名，协议可以采用HTTP 1.0的一个协议。
        1. 服务器端接受到了这个请求，根据路径参数，经过后端的一些处理之后，把处理后的一个结果返回给浏览器，如果是慕课网的页面就会把完整的HTML页面代码返回给浏览器。
        1. 浏览器拿到了慕课网的完整的HTML页面代码，里面的JS、CSS、图片静态资源，他们同样也是一个个HTTP请求，都需要经过上面主要的七个步骤。
        1. 浏览器根据拿到的资源对页面进行渲染，最终把一个完整的页面呈现给了用户。
    - http请求分为request和response
        都需要发送http头和正文信息
        - HTTP头发送的是一些附加的信息：内容内省、服务器发送相应的日期、HTTP状态码
        - 文3就是用户提交的表单数据或者是返回的数据
        在network中查看相关信息
        timing中查看时间，进行慢的瓶颈进行优化
    - 状态码
        1XX 2XX 3XX 4XX 5XX
        200 400（客户端请求语法错误） 401（客户端请求未授权） 403（服务器拒绝服务，可能没有权限） 404（没找到） 500（服务器发生了无法预知的错误） 503（服务器当前不能处理该请求，过段时间可能会恢复正常）

4. node中的HTTP模块
    支持更多特性
    不缓冲请求和相应
    处理流相关 

5. HTTP概念进阶
    什么是回调？
    什么是同步/异步？
    什么是I/O？
    什么是单线程/多线程？
    什么是阻塞/非阻塞？
    什么是事件？
    什么是事件驱动？
    什么是基于事件驱动的回调？
    什么是事件循环？

6. 作用域和上下文

7. 查看源码的方法，在github中搜索nodejs，然后选择版本，然后按t可以搜索

8. 压力测试工具 apache ab
    ab -n 800 -c 800  http://192.168.0.10/ 
    （-n发出800个请求，-c模拟800并发，相当800人同时访问，后面是测试url）

9. HTTP小爬虫（借助HTTP API）
    抓取html然后通过cheerio解析内容
    代码参考imooc-crawler.js

10. 事件模块
    添加、移除监听，设置添加监听的数量，查看数量（两种方法）
    代码参考events.js

11. 模拟提交评论
    获取请求的headers和相关信息，模拟提交信息
    代码参考comment.js

[进击Node.js基础（二）](https://www.imooc.com/learn/637)