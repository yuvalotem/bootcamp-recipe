const display = new Render()
$('#button').on('click', function () {
    const input = $('#input').val()
    $.get(`/recipes/${input}`, function (data) {
        display.render(data)
    })
})