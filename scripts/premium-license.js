premium_license['title'].forEach(({ text, color }, i) => {
    var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
    $('#title').append(span);
})

$('#slogan').text(premium_license['slogan']);

render_highlight_row('highlights/premium.json', 'function-row', 'function-col');

premium_license['pricing'].forEach(({ title, style, price, span, desc, button }) => {
    var card = $(`<div class="card w-100 mb-4 rounded-3 shadow-sm border-${style}">`)
    var card_header = $(`
        <div class="card-header py-3 text-bg-${style} border-${style}">
            <h4 class="my-0 fw-normal">${title}</h4>
        </div>
    `);

    var card_body = $(`<div class="card-body d-flex flex-column">`);
    var card_title = $(`<h1 class="card-title mb-0">`);
    card_title.append(`<span>${price}</span>`);
    if (span) { card_title.append(`<small class="text-body-secondary fw-light">/${span}</small>`) }

    var func_list = $('<ul class="list-unstyled my-auto py-3">');
    desc.forEach((desc_block, i) => {
        desc_block.forEach((line) => { func_list.append(`<li>${line}</li>`); })
        if (i < desc.length - 1) { func_list.append('<hr class="my-2">'); }
    })

    card_body.append(card_title).append(func_list).append($(`
        <button type="button" class="w-100 mt-auto btn btn-lg btn-${button['style']}"
            onClick="javascript:window.open('${button['url']}', '_blank');">${button['text']}</button>
    `));
    $('#prices').append($('<div class="col d-flex align-self-stretch px-2">').append(card.append(card_header).append(card_body)));
})