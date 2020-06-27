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
    


    /*var t = $('.acceess-form-fields input').prop('required',true);
    alert(t);
    if( t == true){
      $('.acceess-submit-btn button').on('click', function(){
        $('.page-acceess-con-cntlr').hide();
      });
    }*//*else{
      $(".alert-txt").append( "<p>Ημερομηνια γεννησης</p>" );
    }*/
    /*$('.access-year').keyup(function(){
      //var inputFillUp = $('.acceess-form-fields input[name="acceess"]')[0].checked = true;
      
      var yearTakeValue = $(this).val();
      if (yearTakeValue <= 2004){
        $('.acceess-submit-btn button').on('click', function(){
          $('.page-acceess-con-cntlr').hide();
        });
      }
    });*/
    $('.acceess-submit-btn button').on('click', function(){
      var inputVal = $('.acceess-form-fields input').val();
      var ;
      $('.page-acceess-con-cntlr').hide();
    });


})(jQuery);