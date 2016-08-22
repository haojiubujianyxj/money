
$(function() {
    // ���ĵ�������ɲŻ�ִ��
    /**
     * ������Ļ��ȵı仯�����ֲ�ͼƬӦ��չʾʲô
     * @return {[type]} [description]
     */
    function resize() {
        // ��ȡ��Ļ���
        var windowWidth = $(window).width();
        // �ж���Ļ���ڴ���С
        var isSmallScreen = windowWidth < 768;
        // ���ݴ�СΪ�����ϵ�ÿһ���ֲ�ͼ���ñ���
        // $('#main_ad > .carousel-inner > .item') // ��ȡ������һ��DOM���飨���Ԫ�أ�
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            // ��Ϊ�õ���DOM���� ��Ҫת��
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc =
                isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            // jQuery��ʽ
            // $element.data()
            // ��һ������ ��ר������ȡԪ���ϵ��Զ������ԣ�data-abc��
            // �����Ĳ���������Ҫȡ���������ƣ�abc��
            //
            // $element.attr('data-abc')
            //
            // JS�е�д��
            // element.dataset['abc']
            //
            // element.getAttribute('data-abc')
            // element.setAttribute('data-abc','')

            // ���ñ���ͼƬ
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            //
            // ��Ϊ������ҪСͼʱ �ߴ�ȱ����仯������Сͼʱ����ʹ��img��ʽ
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    // $(window).on('resize', resize);
    // // ��window������������һ��resize
    // $(window).trigger('resize');


    $(window).on('resize', resize).trigger('resize');
});
