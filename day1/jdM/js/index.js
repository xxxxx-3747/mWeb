window.onload = function () {
    // 1.顶部搜索
    search();
    // 2.轮播图
    banner();
    // 3.倒计时


};

//顶部搜索
var search = function () {

    //获取需要用到的元素
    var jd_banner = document.querySelector('.jd_banner');
    var jd_search_box = document.querySelector('.jd_search_box');

    //获取元素的高
    var bannerHeight = jd_banner.offsetHeight;

    var opacity = 0;

    //滚动事件
    window.onscroll = function () {
        //获取向上卷曲出去的距离
        // var scrollTop=document.body.offsetHeight;
        var scrollTop = document.documentElement.scrollTop;

        var per = scrollTop / bannerHeight;
        if (scrollTop < bannerHeight) {
            opacity = per * 0.85;
        } else {
            opacity = 0.85;
        }
        jd_search_box.style.background = 'rgba(201, 21, 35, ' + opacity + ' )';
    }

}

//轮播图
var banner = function () {
    //获取轮播图的宽度
    var banner = document.querySelector('.jd_banner');
    var bannerWidth = banner.offsetWidth;
    //获取图片容器
    var bannerImg=banner.querySelector('ul:first-child');
    //获取所有的图片
    var imgObj=bannerImg.querySelector('li');
    //点容器
    var bannerImg=banner.querySelector('ul:last-child');
    // console.log(bannerWidth);
    var index = 1;
    
    var addTransition=function () {
        bannerImg.style.transition='all 0.2s';
        bannerImg.style.webkittransition='all 0.2s';

    }
    var removeTransition=function () {
        bannerImg.style.transition='none';
        bannerImg.style.webkittransition='none';

    }
    var setTranslateX=function (translateX) {
        bannerImg.style.transform='translateX('+translateX+')px';
        bannerImg.style.webkittransform='translateX('+translateX+')px';

    }
    bannerImg.style.transform='translateX(-2056)px';
    // console.log(bannerImg.clientWidth);
    var timeId=setInterval(function () {
        index++;
        var translateX=-index*bannerWidth;
        // console.log(translateX);
        addTransition();
        setTranslateX(-index*bannerWidth);


    },1000);


}

