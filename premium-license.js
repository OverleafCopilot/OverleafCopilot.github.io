premium_license['title'].forEach(({ text, color }, i) => {
    var span = $(`<span style="color:${color};">${text}</span>`);
    $('#title').append(span);
})

$('#slogan').text(premium_license['slogan']);

premium_license['cards'].forEach(({ title, texts, img, badge }, i) => {
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

    if (badge) {
        var float_badge = $(`<span class="badge text-bg-warning position-absolute" style="top: 1%; right: 1%; opacity: 75%">
            <i class="bi bi-${badge[0]} pe-1"></i>${badge[1]}</span>`)
        card.append(float_badge)
    }
})

premium_license['pricing'].forEach(({ title, style, price, span, basic, advanced, button }) => {
    var card = $(`<div class="card w-100 mb-4 rounded-3 shadow-sm border-${style}">`)
    var card_header = $(`
        <div class="card-header py-3 text-bg-${style} border-${style}">
            <h4 class="my-0 fw-normal">${title}</h4>
        </div>
    `);

    var card_body = $(`<div class="card-body d-flex flex-column">`);
    var card_title = $(`<h1 class="card-title mb-0">`);
    card_title.append(`<span>${price}</span>`);
    if (span) {
        card_title.append(`<small class="text-body-secondary fw-light">/${span}</small>`)
    }
    var func_list = $('<ul class="list-unstyled my-auto py-3">');
    basic.forEach((line) => {
        func_list.append(`<li>${line}</li>`);
    })
    if (advanced) {
        func_list.append('<hr>');
        advanced.forEach((line) => {
            func_list.append(`<li>${line}</li>`);
        })
    }
    card_body.append(card_title).append(func_list).append($(`
        <button type="button" class="w-100 mt-auto btn btn-lg btn-${button['style']}"
            onClick="javascript:window.open('${button['url']}', '_blank');">${button['text']}</button>
    `));
    $('#prices').append($('<div class="col d-flex align-self-stretch">').append(card.append(card_header).append(card_body)));
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