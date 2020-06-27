(function($) {
  //matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };

  if($('.get-value').length){
    $('.get-value').keyup(function(){
      var takeValue = $(this).val(); 
      $('.value-set').html('<h5>'+takeValue+'</h5');
    });
  };
  if($('.why-sec-grd-cntlr').length){
    $(".why-sec-grd-cntlr ul li").slice(0,4).show();
    $("#seeMore").click(function(e){
      e.preventDefault();
      $(".why-sec-grd-cntlr ul li:hidden").slice(0,4).fadeIn("slow");
      
      if($(".why-sec-grd-cntlr ul li:hidden").length == 0){
         $("#seeMore").fadeOut("slow");
        }
    });
  };
    


    

    //$(".alert-txt").append( "<p>Ημερομηνια γεννησης</p>" );
    $('.acceess-submit-btn button').on('click', function(){
        var inputVal = $('.acceess-form-fields input').val();
        if (inputVal != 0){
          var yearTakeValue = $('.access-year').val();
          if (yearTakeValue <= 2004){
            $('.acceess-submit-btn button').on('click', function(){
              $('.page-acceess-con-cntlr').fadeOut(300);
            });
          }
        }
      
    });


})(jQuery);