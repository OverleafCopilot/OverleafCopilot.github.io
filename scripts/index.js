fetch(`elements/index_${lang_code}.json`).then((response) => response.json()).then(({ page_title, title, slogan, head_imgs, buttons }) => {
    $('head title').text(page_title);
    title.forEach(({ text, color }, i) => {
        var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
        $('#title').append(span);
    })

    $('#slogan').text(slogan);

    buttons.forEach(({ url, text, icon, style, tooltip }, i) => {
        var button = $(`
            <button type="button" class="btn btn-${style} btn-lg"
                onClick="javascript:window.open('${url}', '_blank');"
                data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="${tooltip}">
                <i class="bi bi-${icon} pe-2"></i><span>${text}</span>
            </button>
        `);
        if (tooltip) {
            new bootstrap.Tooltip(button);
        }
        $('#button-row').append(button);
    })

    for (var key in head_imgs) {
        $(`#headline-${key}`).attr('src', `images/${head_imgs[key]}`)
    }
})

render_highlight_row(`elements/highlights/index_${lang_code}.json`, 'function-row', 'function-col');

$('#play-btn').on('click', () => {
    $('#video-overlay').removeClass('d-none');
    $('#video-overlay').addClass('d-flex');
    $('#demo-video').trigger('play');
})

$('#close-video-btn').on('click', () => {
    $('#video-overlay').addClass('d-none');
    $('#video-overlay').removeClass('d-flex');
    $('#demo-video').trigger('pause');
})