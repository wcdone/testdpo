

    function validate() {
      


$.get( "result.php", function( data ) {
  var text = data;
  $("#result").html("<p>Новье!"+text+"</p>")
});

    }