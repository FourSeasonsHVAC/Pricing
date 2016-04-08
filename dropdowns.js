
$(document).ready(function(){
  $('#ac').click(function(item) {
    $('#ac1ModelNum').html(item.target.id)
    console.log($('#ac').index(document.getElementById(item.target.id)))
  });
});
