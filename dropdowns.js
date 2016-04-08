
$(document).ready(function(){
  $('#ac').click(function(item) {
    $('#ac1ModelNum').html(item.target.id)
    console.log($(item.target.id).index(this))
    console.log('change')
  });
});
