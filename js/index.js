
/*
FUNÇÃO QUE REALIZA O COMPORTAMENTO DE ANCORA DO LINK(BUTTON) NO HERO.
QUE LEVA ATÉ O MODULO DE GALERIA DE PRODUTOS.
*/
$('.hero-button').on('click', function(e) {
	e.preventDefault();
	
    var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 70
	}, 600);
});


/*
FUNCÃO QUE DEIXA O HEADER FIXO QUANDO SE INICIA UM SCROLL NA PÁGINA
*/
$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop(), 
        main = $('main');
  
    if (scroll >= 7) { 
        sticky.addClass('header-fixed');
        main.addClass('fixed')
    }else {
        sticky.removeClass('header-fixed');
        main.removeClass('fixed')
    }
});

      
