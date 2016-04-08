
$(document).ready(function(){
  $('#ac').click(function(item) {
    $('#ac1ModelNum').html(item.target.id)
    
    $('a').click(function() {
      console.log($('a').index(this))
    console.log('Whatsup')
  });
  });
  $('#ac2').click(function(item) {
    $('#ac1ModelNum').html(item.target.id)
    
    $('a').click(function() {
      console.log($('a').index(this))
    console.log('Whatsup')
  });
  });

});
