var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function processMutants(mutants){
  $.each(mutants, function(i, mutant){
    addMutant(mutant);
  });
}

function addMutant(mutant){
  $('#mutantList').append('<li data-id="'+ mutant.id + '">' + mutant.mutant_name + '</li>'); // target ul with id #mutantList and append list item with mutant.id
}

$.get({
  url: mutantsUrl,
  success: processMutants
});
