var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';



$.get({
        url: url,
        success: function (mutants) {
            $.each(mutants, function (i, mutant) {
                console.log(mutant.mutant_name);

            })
        }
    })