[jQuery官网](https://learn.jquery.com/)学习jQuery源码
[github上源码](https://github.com/jquery/jquery)
[艾伦博客-jQuery源码系列](https://github.com/JsAaron/jQuery)
   
About jQuery
1. Launching Code on Document Ready
    window.onload = function() {}
    $(document).ready(function() {});

    $('a').click(function(event){});
    event.preventDefault
2. Launching Code on Document Ready
    addClass
    removeClass
    hide

3. callbacks and functions
    不带参数的回调：
    $.get('index.html', fun);
    带参数的回调：
    $.get('index.html', function() {
        fun(param1, param2);
    });
