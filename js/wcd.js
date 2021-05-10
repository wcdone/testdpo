
function errors() {

  $("#result").html("");
  var value = $('#example-text-input').val();
  $("#result").html("К сожалению документы №"+value+" не найдены " +"");

}



function validate() {
      
$("#result").html("");
  var value = $('#example-text-input').val();
if(value.length == 0)
  return false;
  var regex = /(\d{4,10})/;

  var match = regex.exec(value);
  
  if(match!=null){
      $.get( "result_.php?code="+match[1], function( data ) {
          var text = data;
           if(text.indexOf("false")==-1){
            var jarr = JSON.parse(text);
             $("#result").html("Документы №"+jarr[0]+" выданы " + jarr[1]+" от "+ jarr[2] +".");
             //$("#result").html("Удостоверение №"+match[1]+" выдано " + text +".");
          }
          else{
           errors();
          }
         


      });

    }
    else
    {

      console.log(match);
      errors();

    }
}