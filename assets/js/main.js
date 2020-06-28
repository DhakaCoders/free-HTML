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
    
  $('.acceess-submit-btn button').on('click', function(){
      var date = $('.acceess-form-fields input[name=date]').val();
      var month = $('.acceess-form-fields input[name=month]').val();
      var year = $('.acceess-form-fields input[name=year]').val();
      console.log(date.length);
      if (date != 0 && month != 0 && year != 0){
        if (year <= 2004){
          $('.page-acceess-con-cntlr').fadeOut(300);
        }else{
          $('.alert-txt').html('Lorem Ipsum Dummy. Lorem Ipsum Dummy');
        }
      }else{
        $('.alert-txt').html('Lorem Ipsum Dummy');
      }
    
  });


})(jQuery);