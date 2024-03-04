index['title'].forEach(({ text, color }, i) => {
    var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
    $('#title').append(span);
})

$('#slogan').text(index['slogan']);

index['buttons'].forEach(({ url, text, icon, style, tooltip }, i) => {
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

for (var key in index['head_imgs']) {
    $(`#headline-${key}`).attr('src', `images/${index['head_imgs'][key]}`)
}

fetch('data/index_highlights.json').then((response) => response.json()).then((highlights) => {
    highlights.forEach(({ title, texts, img, badge }, i) => {
        var card_body = $('<div class="card-body">');
        var card_title = $(`<h5 class="card-title">${title}</h5>`);
        var card_text = $('<div class="card-text">');
        texts.forEach((text) => {
            card_text.append(`<p class="mb-0 mt-1 small text-secondary">${text}</p>`);
        })
        card_body.append(card_title).append(card_text);

        var card = $('<div class="card shadow-sm">');
        card.append(`<img src="images/${img}" class="card-img-top img-fluid rounded-start" alt="${img}">`);
        card.append(card_body);
        $('#function-row').append($('<div class="col function-col">').append(card));

        if (badge) {
            var float_badge = $(`
                <span class="badge text-bg-warning position-absolute" style="top: 1%; right: 1%; opacity: 75%">
                <i class="bi bi-${badge[0]} pe-1"></i>${badge[1]}</span>
            `)
            card.append(float_badge)
        }
    })

    masonry_reload($('#function-row'), '.function-col')
    masonry_reload_on_images($('#function-row'), '.function-col')
})

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