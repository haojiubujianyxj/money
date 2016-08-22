/**
 * Created by acer on 2016/8/21.
 */
// ��������index���������jq��������Ҳ������
$(function () {
    function changeImage() {
        // �ֲ�ͼ��Сͼ��������
        var windowwidth = $(window).width();
        // ���Ȼ�ȡ��Ļ�ĳߴ� / ����ͨ��jq�ķ��������Ļ�ߴ�/ ����ʲô����?????
        var isSmallScreen = windowwidth < 768;
        // ��ҳ�ɼ������ http://www.cnblogs.com/xiaopin/archive/2012/03/26/2418152.html
        //var isSmallScreen = document.body.offsetWidth < 768;
        // ������Ļ�ߴ�����������ı���ͼ
        $('#main_ad > .carousel-inner > .item').each(function (index, ele) {
            // ÿһ�����ÿһ������ ѭ����������һ��dom������Ҫת��
            //var $src = isSmallScreen ? $(ele).data('image-xs'):$(ele).data('image-lg');
            // jquery�����ȡdata���� ��ȡ����data�����ֵ��html5����
            var $src = $(ele).data(isSmallScreen ? 'image-xs' : 'image-lg');
            $(ele).css('backgroundImage', 'url("' + $src + '")');
            if (isSmallScreen) {
                $(ele).html('<img src="' + $src + '"/>');
            } else {
                $(ele).empty();
            }
        })
        // tabs �����ж�
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
    //resize(); ͨ��trigger�ķ�ʽ���ú��� ?????Ϊʲô����ֱ�ӵ���resize����;��������źͲ������ŵ�������ʲô ����CNM�����ﺯ����Ȼ����ֻ����resize������������������������������������������������
    // �Ҳ� ����trigger��������resize�¼��� ��������������˸���
    $(window).on('resize', changeImage).trigger('resize');
});
