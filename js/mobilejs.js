$(document).on('click', '.showAndClose_button', function () {
            $('.menu_pop_up').toggleClass('show-menu');
            $('body').removeClass('show-menu');
});

$(document).on('click', '.showAndClose_button2', function () {
            $('.menu_pop_up2').toggleClass('show-menu');
            $('body').removeClass('show-menu');
});


$(document).on('ready', function(){
		$('.single-item').slick({
            dots: true,
			arrows:false,
            infinite: true,
            speed: 1500,
			fade:false,
            slidesToShow: 1,
            slidesToScroll: 1,
			autoplay:true,
        });
		
		$('.jfslide-content').slick({
            centerMode:true,
			centerPadding:'5px',
			slidesToShow:2,
			arrows:false,
			//responsive:[{breakpoint:768,settings:{}}]
        });
		
		$('.jfslide-content2').slick({
            centerMode:true,
			centerPadding:'5px',
			slidesToShow:2,
			arrows:false,
			//responsive:[{breakpoint:768,settings:{}}]
        });
		$('.preview-ud-cetak a').simpleLightbox()
})

function linkhome() {
    
	window.location.href='/' 
}

function waorder(tpud){
	window.location.href='https://api.whatsapp.com/send?phone=6289605563525&text=Saya%20Tertarik%20dengan%20undangan%20online%20'+tpud+'%20gimana%20cara%20ordernya?'
}

 
