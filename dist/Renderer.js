class Render {
    constructor() { }

    render(data) {
        if (data[0] != undefined) {
            const source = $('#recipes-template').html()
            const template = Handlebars.compile(source)
            const newHTML = template({ data })
            $('#recipes-container').empty().append(newHTML)
        } else {
            const newHTML = "<div class='error'> Recipes is unavailabe</div>"
            $('#players').append(newHTML)
        }
    }
}