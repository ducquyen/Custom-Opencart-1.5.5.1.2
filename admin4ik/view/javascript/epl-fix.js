	$(function() {
		var fixblock_height = $('table.list thead').height();
		if ($('table.list thead').position()) {
		var fixblock_pos = $('table.list thead').position().top;
		}
		$(window).scroll(function(){
			if ($(window).scrollTop() > fixblock_pos){
				$('table.list').attr("data-item-original-width", $('table.list').width());
    			$('table.list').find('thead tr td').each(function(){
        			$(this).attr("data-item-original-width",$(this).outerWidth());
    			});
    			$('table.list').find('tbody tr:eq(0) td').each(function(){
        			$(this).attr("data-item-original-width",$(this).outerWidth());
    			});
				$('table.list thead').css({'position': 'fixed', 'top':'0', 'z-index':'1000'});
				$('.content').css('padding-top', fixblock_height+'px');
				$('table.list').width('100%');
				$('table.list thead').width($('table.list').width());
				$('table.list tbody').width($('table.list').width());
      		$('table.list').find('thead tr td').each(function(){
      			$(this).width(100/$('table.list').attr('data-item-original-width')*$(this).attr("data-item-original-width") + '%');
      		});     
      		$('table.list').find('tbody tr:eq(0) td').each(function(){
      			$(this).width(100/$('table.list').attr('data-item-original-width')*$(this).attr("data-item-original-width") + '%');
      		}); 
			}else{
				$('table.list thead').css({'position': 'static'});
				$('.content').css('padding-top', '');
				$('table.list thead').width('');
				$('table.list tbody').width('');
				$('table.list').find('thead tr td').each(function(){
      			$(this).width('');
      		});     
      		$('table.list').find('tbody tr:eq(0) td').each(function(){
      			$(this).width('');
      		});
			}
		})
	});	
	
	$(function() {
		if ($.cookie('skutd') == 'yes') {
			$('.skutd').removeClass('invisframe');
		}
		else {
			$('#skutd').prop('checked', false);
			$('.skutd').addClass('invisframe');
		};
		if ($.cookie('seotd') == 'yes') {
			$('.seotd').removeClass('invisframe');
		}
		else {
			$('#seotd').prop('checked', false);
			$('.seotd').addClass('invisframe');
		};
		if ($.cookie('cattd') == 'yes') {
			$('.cattd').removeClass('invisframe');
		}
		else {
			$('#cattd').prop('checked', false);
			$('.cattd').addClass('invisframe');
		};
		if ($.cookie('mantd') == 'yes') {
			$('.mantd').removeClass('invisframe');
		}
		else {
			$('#mantd').prop('checked', false);
			$('.mantd').addClass('invisframe');
		};
	});