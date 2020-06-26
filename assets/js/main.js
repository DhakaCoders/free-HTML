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

  $('.get-value').keyup(function(){
    var takeValue = $(this).val(); 
    $('.value-set').html('<h5>'+takeValue+'</h5');
  });
  
  $(".why-sec-grd-cntlr ul li").slice(0,4).show();
  $("#seeMore").click(function(e){
    e.preventDefault();
    $(".why-sec-grd-cntlr ul li:hidden").slice(0,4).fadeIn("slow");
    
    if($(".why-sec-grd-cntlr ul li:hidden").length == 0){
       $("#seeMore").fadeOut("slow");
      }
  });


})(jQuery);