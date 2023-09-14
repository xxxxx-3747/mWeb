window.onload = function () {
    // 1.顶部搜索
    search();
    // 2.轮播图
    banner();
    // 3.倒计时
    time();


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

    //记录起始位置
    var startX = 0;
    //记录结束位置
    var endX = 0;

    //记录移动的位置
    var distinct = 0;

    //手动移动
    bannerImg.addEventListener('touchstart', function (e) {
        clearInterval(timeId);
        //获取起始的位置
        startX = e.touches[0].clientX;
        // console.log(startX);
    });
    bannerImg.addEventListener('touchmove', function (e) {
        //console.log(e);
        endX = e.touches[0].clientX;

        //获取移动的位置
        distinct = endX - startX;

        setTranslateX(-index * bannerWidth + distinct);
        addTransition();
    });
    bannerImg.addEventListener('touchend', function () {

        if (Math.abs(distinct) > bannerWidth / 3) {
            //切换
            if (distinct > 0) {
                //上一张
                index--;
                var translateX = -index * bannerWidth;
                setTranslateX(translateX);
                addTransition();
            } else {
                //下一张
                index++;
                var translateX = -index * bannerWidth;
                setTranslateX(translateX);
                addTransition();
            }
        } else {
            //吸附回去
            var translateX = -index * bannerWidth;
            setTranslateX(translateX);
            addTransition();

        }
        timeId = setInterval(function () {
            index++;
            var translateX = -index * bannerWidth;

            setTranslateX(translateX);
            addTransition();

        }, 1500);

    })
}

//倒计时
var time = function () {



}



update rt_config_new set ext_station='五团输气站' where ext_station='阿克苏末站';
update rt_config_new set ext_station='英喀3#阀室' where ext_station='RTU3#阀室';
update rt_config_new set ext_station='阿克苏输气站' where ext_station='阿克苏清管站';
update rt_config_new set ext_station='阿瓦提门站' where ext_station='阿瓦提末站';
update rt_config_new set ext_station='乌什门站' where ext_station='乌什分输站';
update rt_config_new set ext_station='3团门站' where ext_station='团3末站';
update rt_config_new set ext_station='英喀11#阀室' where ext_station='RTU11#阀室';
update rt_config_new set ext_station='柯坪门站' where ext_station='柯坪末站';
update rt_config_new set ext_station='英喀13#阀室' where ext_station='RTU13#阀室';
update rt_config_new set ext_station='图木舒克输气站' where ext_station='图木舒克末站';
update rt_config_new set ext_station='三岔压气站' where ext_station='三岔分输清管站';
update rt_config_new set ext_station='巴楚门站' where ext_station='巴楚末站';
update rt_config_new set ext_station='伽师总场门站' where ext_station='伽师总场末站';
update rt_config_new set ext_station='英喀18#阀室' where ext_station='RTU18#阀室';
update rt_config_new set ext_station='伽师输气站' where ext_station='伽师分输站';
update rt_config_new set ext_station='岳普湖输气站' where ext_station='岳普湖分输站';
update rt_config_new set ext_station='麦盖提输气站' where ext_station='麦盖提末站';
update rt_config_new set ext_station='喀什压气站' where ext_station='喀什分输清管站';
update rt_config_new set ext_station='阿喀输气管道1#阀室' where ext_station='RTU1#阀室';
update rt_config_new set ext_station='乌恰门站' where ext_station='乌恰末站';
update rt_config_new set ext_station='喀泽24#阀室' where ext_station='RTU24#阀室';
update rt_config_new set ext_station='英吉沙输气站' where ext_station='英吉沙分输清管站';
update rt_config_new set ext_station='东风农场门站' where ext_station='东风农场末站';
update rt_config_new set ext_station='喀泽29#阀室' where ext_station='RTU29#阀室';
update rt_config_new set ext_station='喀泽31#阀室' where ext_station='RTU31#阀室';
update rt_config_new set ext_station='泽普压气站' where ext_station='泽普输气站';
update rt_config_new set ext_station='皮山输气站' where ext_station='皮山分输站';
update rt_config_new set ext_station='昆玉输气站' where ext_station='224团分输站';
update rt_config_new set ext_station='和田压气站' where ext_station='和田输气站';
update rt_config_new set ext_station='和民43#阀室' where ext_station='43#阀室';
update rt_config_new set ext_station='策勒输气站' where ext_station='策勒分输站';
update rt_config_new set ext_station='于田输气站' where ext_station='于田分输清管站';
update rt_config_new set ext_station='民丰输气站' where ext_station='民丰分输清管站';
update rt_config_new set ext_station='英喀输气管道' where ext_station='英喀干线';
update rt_config_new set ext_station='阿瓦提输气管道' where ext_station='阿瓦提支线';
update rt_config_new set ext_station='柯坪输气管道' where ext_station='柯坪支线';
update rt_config_new set ext_station='伽师总场输气管道' where ext_station='伽师总场支线';
update rt_config_new set ext_station='麦盖提输气管道' where ext_station='伽岳麦支线';
update rt_config_new set ext_station='乌康输气管道' where ext_station='阿克至乌恰输气管线';
update rt_config_new set ext_station='喀泽输气管道' where ext_station='喀泽干线';
update rt_config_new set ext_station='阿克陶输气管道' where ext_station='阿克陶支线';
update rt_config_new set ext_station='41团输气管道' where ext_station='41团支线';
update rt_config_new set ext_station='东风农场输气管道' where ext_station='东风农场支线';
update rt_config_new set ext_station='莎车输气管道' where ext_station='莎车支线';
update rt_config_new set ext_station='皮山农场输气管道' where ext_station='皮山农场支线';
update rt_config_new set ext_station='和泽输气管道' where ext_station='和泽干线';
update rt_config_new set ext_station='和和输气管道（508）' where ext_station='和田河气田外输管线';
update rt_config_new set ext_station='和民输气管道' where ext_station='和田至民丰净化气管线';





