var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';


function loadMutants(mutants){
    $.each(mutants, addMutant);
}

function addMutant(i, mutant){
    var li = $('.template')
                .clone()
                .removeClass('.template');
    //cloned list from the form by class type
    li.find('.mutant-name').text(mutant.mutant_name)
    $('#mutantList').append(li);
}

$.get({
    url: url,
    success: loadMutants

});
