var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';


// Only get ajax after everything has loaded
$(function(){
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
