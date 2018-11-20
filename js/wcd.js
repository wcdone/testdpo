

    function validate() {
      

$.get( "file:///C:/src/wcdone.git/result.php", function( data ) {
  var text = data;
  $("#result").html("<p>Новье!"+text+"</p>")
});

    }