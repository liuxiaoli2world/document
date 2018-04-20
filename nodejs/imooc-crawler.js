// 爬虫实践
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

http.get(url, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        var chaptersData = filterData(html);
        printData(chaptersData);
    });
}).on('error',function() {
    console.log('error');
});

function printData(chaptersData) {
    chaptersData.forEach(item => {
        console.log(item.chapterTitle + '-' + item.chapterDesc);
        item.videosData.forEach(item1 => {
            console.log('   【'+ item1.id + '】' + item1.name);
        })
    });
}

function filterData(html) {
    var chaptersData = [];
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    chapters.each(function(item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('h3').text().trim();
        var chapterDesc = chapter.find('.chapter-description').text().trim();
        var videos = chapter.find('.video').children();
      
        var videosData = [];
        videos.each(function(item1) {
            var video = $(this);
            var id = video.attr('data-media-id');
            var nameString = video.find('a').text().replace('开始学习', '').trim();
            var name = nameString.substr(0,nameString.length-7).trim();
            videosData.push({
                id: id,
                name: name
            });
        });
        
        var chapterData = {
            chapterTitle: chapterTitle,
            chapterDesc: chapterDesc,
            videosData: videosData
        };
        chaptersData.push(chapterData);
    });

    return chaptersData;
};