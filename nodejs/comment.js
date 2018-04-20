// 找不到post请求，随便找了个get请求模拟

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    ids: 348
});

var options = {
    'hostname': 'www.imooc.com',
    'port': 80,
    'method': 'GET',
    'path': '/course/AjaxCourseMembers?ids=348',
    'headers': {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7',
        'Connection': 'keep-alive',
        'Cookie': 'PHPSESSID=bcm15fe7d0tcnibuvlmguml5p1; imooc_uuid=909da959-a07f-45ec-8d69-50cfa0a87256; imooc_isnew=1; imooc_isnew_ct=1524096146; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1524096148; loginstate=1; apsid=ZkYmEyMDhhOGRlMTZhYTE2NTNlMzExNzU3YjY4YTMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjUxMTM5NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU2Y2E4ZGMyMTI0OTQxMWM3ZGEyZDAyOGQ3MTAyNjAz8OfXWtzn11o%3DYj; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1524143156; cvde=5ad7dc925b04c-110',
        'Host': 'www.imooc.com',
        'Referer': 'https://www.imooc.com/coursescore/348',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req = http.request(options, function(res) {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  
// write data to request body
req.write(postData);
req.end();