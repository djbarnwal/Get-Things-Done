var colors = ['#1abc9c', '#3498db', '#2ecc71', '#9b59b6', '#34495e', '#f1c40f',
'#e67e22','#3F51B5','#375263','#63393E','#7574A7'];

$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('.delete-item').on('click', function(){
      var item = $(this).parent().text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

  $('.delete-item').hover(function(e){
    $(this).parent().css("background", e.type === "mouseenter"?"#ED5E68":"#fff");
  });

  $('li').each(function(){
    var randomColor = Math.floor(Math.random() * colors.length);
    $(this).css('border-left-color', colors[randomColor]);
  });

});
