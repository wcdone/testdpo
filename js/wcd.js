

    function validate() {
      


$.get( "https://wcdone.github.io/result.php", function( data ) {
  var text = data;
  $("#result").html("<p>Удостоверение №"+text+"валидно</p>")
});

    }