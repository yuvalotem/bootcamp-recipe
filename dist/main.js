$('#button').on('click', function () {
    const input = $('#input').val()
    $.get(`/recipes/${input}`, function (data) {
        console.log(data);
    })
})