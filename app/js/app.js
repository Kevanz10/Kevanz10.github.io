function scrollBanner() {
  $(document).scroll(function(){
  
    var scrollPos = $(this).scrollTop();
    $('.firstSection').css({
      'top' : (scrollPos/2)+'px',
      'bottom' : (scrollPos)+'px',
      'opacity' : 1-(scrollPos/760)
    });
  });    
}
scrollBanner();