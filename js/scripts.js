$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // const person1 = $("input#person1").val();
    // const person2 = $("input#person2").val();
    // const animal = $("input#animal").val();
    // const exclamation = $("input#exclamation").val();
    // const verb = $("input#verb").val();
    // const noun = $("input#noun").val();

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    const madLibArray = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    madLibArray.forEach(function(lib){
      let input = $('input#' + lib).val();
      $('span.' + lib).text(input);
    });

    $("#story").show();
  });
});
