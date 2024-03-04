agents['title'].forEach(({ text, color }, i) => {
    var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
    $('#title').append(span);
})

$('#slogan').text(agents['slogan']);

fetch('agents/featured/indexes.json').then((response) => response.json()).then((featured_agents) => {
    featured_agents.forEach((data) => {
        var { name, desc, level, author, img, source, private, version, contact } = data
        var card_body = $('<div class="card-body">');
        var card_title = $(`<h5 class="card-title">${name}</h5>`);
        var card_text = $(`
            <div class="card-text">
                <p class="mb-0 mt-1">${desc}</p>
                <p class="mb-0 mt-1 small text-secondary">Version: ${version}</p>
                <p class="mb-0 mt-1 small text-secondary">Author: ${author}</p>
            </div>
        `);
        var card_btn_row = $(`
            <div class="row g-2 row-cols-2 mt-2">
                <div class="col">
                    <button class="btn btn-info w-100 px-0 copy-agent-btn">Copy Agent</button>
                </div>
                <div class="col">
                    <button class="btn btn-outline-info w-100 px-0 copy-temp-btn">Copy Template</button>
                </div>
            </div>
        `)
        card_body.append(card_title).append(card_text).append(card_btn_row);
        card_btn_row.find('.copy-agent-btn').on('click', () => { copyIndex(data) });
        card_btn_row.find('.copy-xml-btn').on('click', () => { copyTemp(source) });

        var card = $('<div class="card shadow-sm">');
        card.append(`<img src="agents/featured/${img}" class="card-img-top img-fluid rounded-start" alt="${img}">`);
        card.append(card_body);
        $('#agent-row').append($('<div class="col agent-col">').append(card));
    })

    masonry_reload($('#agent-row'), '.agent-col')
    masonry_reload_on_images($('#agent-row'), '.agent-col')
})


async function copyTemp(source) {
    const data = await (await fetch(source)).text();
    navigator.clipboard.writeText(data);
    // alert("Template copied to clipboard!");
}

function copyIndex(data) {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    // alert("Index copied to clipboard!");
}
