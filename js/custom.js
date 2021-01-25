jQuery(document).ready(function () {
	jQuery('.panel-main ol li h4').click(function() {
		if (jQuery(this).closest('li').find('.panel-desc').css('display') == 'none') {
			jQuery('li').find('.panel-desc').slideUp();
			jQuery('li').removeClass('open');
			jQuery(this).closest('li').find('.panel-desc').slideDown();
			jQuery(this).closest('li').addClass('open')
		}
		else{
			jQuery(this).closest('li').find('.panel-desc').slideUp();
			jQuery(this).closest('li').removeClass('open')
		}
	});
});