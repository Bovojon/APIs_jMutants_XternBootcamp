function createMutant(ev){
  ev.preventDefault();
  var mutantName = ev.currentTarget.mutantName.value;
  $.post({
    url: mutantsUrl,
    data: {
      mutant:{
        mutant_name: mutantName,
        real_name: 'Real-world ' + mutantName,
        power: 'Ajax!'
      }
    },
    success: addMutant // Just calling function - not returning anything so no parenthesis
  });
}
