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

    //获取图片容器
    var bannerImg = banner.querySelector('ul:first-child');
    // console.log(bannerImg);
    //获取所有的图片
    var imgObj = bannerImg.querySelector('li');
    //点容器
    var bannerPoint = banner.querySelector('ul:last-child');

    //所有的点
    var point = bannerPoint.querySelectorAll('li');

    var bannerWidth = banner.offsetWidth;

    var index = 1;
    //添加过度
    var addTransition = function () {
        bannerImg.style.transition = 'all 0.2s';
        bannerImg.style.webkittransition = 'all 0.2s';

    }

    //清除过度
    var removeTransition = function () {
        bannerImg.style.transition = 'none';
        bannerImg.style.webkittransition = 'none';
    }

    //设置位移
    var setTranslateX = function (translateX) {
        bannerImg.style.transform = 'translateX(' + translateX + 'px)';
        bannerImg.style.webkittransform = 'translateX(' + translateX + 'px)';
    }
    //点样式改变
    var pointStyle = function () {
        //清除所有的样式
        for (var i = 0; i < point.length; i++) {
            point[i].classList.remove('now');
        }
        //相应的添加样式
        point[index - 1].classList.add('now');
    }


    //自动播放
    var timeId = setInterval(function () {
        index++;
        var translateX = -index * bannerWidth;

        setTranslateX(translateX);
        addTransition();

    }, 1500);
//最后一张结束时，做过度
    bannerImg.addEventListener('transitionend', function () {

        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * bannerWidth);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * bannerWidth);
        }
        // console.log(index);
        pointStyle();
    })


    //手动移动
    bannerImg.addEventListener('touchstart',function () {
        console.log('xx');
        clearInterval(timeId);
    });
}

