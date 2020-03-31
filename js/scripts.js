 $(document).ready(function() {
   $("form#stressTest").submit(function(event) {
     event.preventDefault();
     $("#output").show();

     var warningSign = $("input:checkbox[name=warning]:checked").length;
      $('#output').append(warningSign + "<br>");
      //console.log(warningSign);

      var symptomSign = $("input:checkbox[name=symptoms]:checked").length;
      $('#output').append(symptomSign + "<br>");

      var copingSkills = $("input:checkbox[name=mechanisms]:checked").length;
      $('#output').append(copingSkills + "<br>");
      console.log(warningSign, symptomSign, copingSkills)
     
    var result;

      if (warningSign + symptomSign > copingSkills) {
        $("#output").text("You are a high risk person and should seek medical advice")
      } else if (warningSign === copingSkills){
        $("#output").text("You are doing ok with managing your stress but you could be doing more follow this link")
      } else if (copingSkills >= 1)
        $("#output").text("You are doing great with managing your stress!") 

    });
  });
