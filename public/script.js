$('.btn-search').click(function(){
    $('.searchbar').toggleClass('clicked');
    $('.stage').toggleClass('faded');
  
    
    if($('.searchbar').hasClass('clicked')){
      $('.btn-extended').focus();
    }
    
  }); 

//   tabs 
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })