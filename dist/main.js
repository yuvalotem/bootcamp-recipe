const display = new Render()
$('#button').on('click', function () {
    const input = $('#input').val()
    $.get(`/recipes/${input}`, function (data) {
        display.renderer(data)
        $('#input').val('')
    })
})

$('#recipes-container').on('click', '.dish-img', function () {
   const firstIngred = $(this).closest('div').find( "li" ).first().text()
   alert(firstIngred)
})