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
        mutant_name: "Michael Mutant",
        real_name: "Michael",
        power: "Yeah"
    };
    createMutant(mutant)
}


function createMutant(mutant) {

    $.post({
        url: url,
        data: {
            mutant: mutant

        },

        success: function (x) {
            alert(x);
        },
});


}





