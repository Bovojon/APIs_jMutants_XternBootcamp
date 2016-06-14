var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function processMutants(mutants){
  $.each(mutants, function(i, mutant){
    addMutant(mutant);
  });
}

function addMutant(mutant){
  var li = $('li.template') // Save a selection of an element by class name to a variable li
    .clone()
    .removeClass('template') // Remove the class template from each li
    .attr('data-id', mutant.id); // Set the attribute data-id to its value mutant.id

  li.find('.mutant-name') // with .find() get the descendants of each elemen in the current set of matched elements of li, filtered by a class selector
    .html(mutant.mutant_name); //set html to that value

$('#mutantList').append(li);
}

// Only get ajax after everything has loaded
$(function(){
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
