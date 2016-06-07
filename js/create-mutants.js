/**
 * Created by mketiku on 6/7/16.
 */
$('#new_mutant').on('submit', handleDeleteClick)
//passes the new mutant on submit to handleDeleteClick submit

function handleDeleteClick(ev) {
    ev.preventDefault();
    var li = $(ev.currentTarget).closest('li');
    var id = li.attr('data-id')
    deleteMutant(id);
}


function deleteMutant(id) {
//function does not need data, it just deletes it
    //mutants are deleted by id

    $.ajax({
        method: 'delete',
        url: url + '/' + id,
        success: function() {
            $('li[data-id=' + id + ']').remove();
        },
});


}





