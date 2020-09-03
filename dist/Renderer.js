class Render {
    constructor() { }

    renderer(data) {
        if (data[0] != undefined) {
            const source = $('#recipes-template').html()
            const template = Handlebars.compile(source)
            const newHTML = template({ data })
            $('#recipes-container').empty().append(newHTML)
        } else {
            const newHTML = "<div id='error'>No recipes for this ingredient</div>"
            $('#recipes-container').append(newHTML)
        }
    }
}