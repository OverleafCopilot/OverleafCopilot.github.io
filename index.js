index['title'].forEach(({ text, color }, i) => {
    var span = $(`<span style="color:${color};">${text}</span>`);
    if (i > 0) {
        span.addClass('ms-2');
    }
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
    $(`#headline-${key}`).attr('src', `index_asset/${index['head_imgs'][key]}`)
}

index['cards'].forEach(({ title, texts, img }, i) => {
    var card_body = $('<div class="card-body">');
    var card_title = $(`<h5 class="card-title">${title}</h5>`);
    var card_text = $('<div class="card-text">');
    texts.forEach((text) => {
        card_text.append(`<p class="mb-0 mt-1 small text-secondary">${text}</p>`);
    })
    card_body.append(card_title).append(card_text);

    var card = $('<div class="card shadow-sm">');
    card.append(`<img src="index_asset/${img}" class="card-img-top img-fluid rounded-start" alt="...">`);
    card.append(card_body);
    $('#function-row').append($('<div class="col function-col">').append(card));
})

$('#play-btn').on('click', () => {
    $('#demo-video').removeClass('d-none');
    $('#headline-div').hide();
    $('#play-btn').hide();
    $('#close-video-btn').show();
})

$('#close-video-btn').on('click', () => {
    $('#demo-video').addClass('d-none');
    $('#headline-div').show();
    $('#play-btn').show();
    $('#close-video-btn').hide();
})

function masonry_reload_on_images(parent_dom, item_selector) {
    var images = parent_dom.find('img');
    images.each(() => {
        if (this.complete) {
            $(this).trigger('load');
        }
    })
    images.on('load', () => {
        parent_dom.masonry({
            itemSelector: item_selector,
            columnWidth: item_selector,
            transitionDuration: 500,
            percentPosition: true
        }).masonry('reloadItems').masonry('layout');
    })
}

masonry_reload_on_images($('#function-row'), '.function-col')