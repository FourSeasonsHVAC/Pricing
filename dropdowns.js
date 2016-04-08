
$(document).ready(function(){
  $('#ac').click(function(item) {
    $('#ac1ModelNum').html(item.target.id)
    console.log($(this).index(item))
    console.log('change')
  });
});
