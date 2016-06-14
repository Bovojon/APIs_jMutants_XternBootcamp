var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click', 'a.delete', function(ev){
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('li'); // Return the value at the named data store for the first element in the jQuery collection
  deleteMutant(id, li);
});

$('form').on('submit', createMutant);

// Only get ajax after everything has loaded
$(function(){
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
