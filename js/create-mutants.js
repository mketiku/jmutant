/**
 * Created by mketiku on 6/7/16.
 */
var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$('#new_mutant').on('submit', handleCreateFormSubmit() {

//    prevent event of the submit button from working
    
})

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
        url: url,
        data: {
            mutant: mutant

        },

        success: function (mutant) {
            console.log(x.mutant_name)
        },
});


}





