// pada saat diklik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    // ambil elemen yang bersangkutan
    var elementujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elementujuan.offset().top - 50
    },1000, 'easeOutBounce');

e.preventDefault();
});

// parallax

$(window).scroll(function(){



// about
    $(window).on('load', function(){
        $('.pkiri').addClass('.pmuncul');
        $('.pkanan').addClass('.pmuncul');
    });
    
    // portofolio
    if (wScroll > $('.porto').offset().top - 200) {
        $('.porto .link').each(function(i){
            setTimeout(function(){
                $('.porto .link').eq(i).addClass('muncul');
            },300 * (i+1));
        });
    }
});