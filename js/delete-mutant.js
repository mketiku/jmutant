//
//deletes mutant from the list
var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$('#new_mutant').on('submit', handleCreateFormSubmit())

function handleCreateFormSubmit (ev){
    ev.preventDefault();
    var f = ev.currentTarget;
    var mutant = {
        mutant_name: f.mutant_name.value,
        real_name: f.real_name.value,
        power: f.power.value,
    };
    createMutant(mutant)
}

function createMutant(mutant) {

    $.post({
        method: 'delete',
        url: url + '/' + mutant.id
        data: {
            mutant: mutant

        },

        success: function (mutant) {
            alert("BUhleeted")
        },
    });


}





