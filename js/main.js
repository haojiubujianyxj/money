/**
 * Created by acer on 2016/8/21.
 */
// 这里面在index里面加载了jq所以这里也可以用
$(function () {
    function changeImage() {
        // 轮播图大小图背景设置
        var windowwidth = $(window).width();
        // 首先获取屏幕的尺寸 / 这里通过jq的方法获得屏幕尺寸/ 还有什么方法?????
        var isSmallScreen = windowwidth < 768;
        // 网页可见区域高 http://www.cnblogs.com/xiaopin/archive/2012/03/26/2418152.html
        //var isSmallScreen = document.body.offsetWidth < 768;
        // 根据屏幕尺寸来决定引入的背景图
        $('#main_ad > .carousel-inner > .item').each(function (index, ele) {
            // 每一项代表每一个盒子 循环回来的是一个dom对象需要转换
            //var $src = isSmallScreen ? $(ele).data('image-xs'):$(ele).data('image-lg');
            // jquery里面获取data属性 获取的是data后面的值；html5的是
            var $src = $(ele).data(isSmallScreen ? 'image-xs' : 'image-lg');
            $(ele).css('backgroundImage', 'url("' + $src + '")');
            if (isSmallScreen) {
                $(ele).html('<img src="' + $src + '"/>');
            } else {
                $(ele).empty();
            }
        })
        // tabs 卷轴判断
        var $touchScroll = $('.touch-scroll');
        var $touchUl =$('.touch-scroll ul')
        var screenXs = $(window).width() < 655;
        if(screenXs){
            $touchScroll.css('overflow-x','scroll');
            $touchUl.css('width','608px')
        }else {
            $touchScroll.css('overflow-x','hidden');
            $touchUl.css('width','auto');
        }
    }
    //resize(); 通过trigger的方式调用函数 ?????为什么可以直接调用resize函数;这里加括号和不加括号的区别是什么 可以CNM的这里函数居然名字只能是resize？？？？？？？？？？？？？？？？？？？？？？？？
    // 我草 这里trigger触发的是resize事件啊 不是这个函数我了个大潮
    $(window).on('resize', changeImage).trigger('resize');
});
