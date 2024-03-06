const alert_toast = bootstrap.Toast.getOrCreateInstance($('#alert-toast'));

function showAlert(content) {
    $('#toast-content').text(content);
    alert_toast.show();
}

agents['title'].forEach(({ text, color }, i) => {
    var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
    $('#title').append(span);
})

$('#slogan').text(agents['slogan']);

function render_agent_row(indexes, row_id, col_class) {
    fetch(indexes).then((response) => response.json()).then((featured_agents) => {
        featured_agents.forEach((data) => {
            var { name, desc, level, author, image, source, private, version, contact } = {
                image: 'https://via.placeholder.com/300x200?text=No+Image',
                ...data
            };
            var card_body = $('<div class="card-body">');
            var card_title = $(`
                <div class="card-title">
                    <span class="h5">${name}</span>
                </div>
            `);
            var card_text = $(`
                <div class="card-text mb-2">
                    <div class="d-flex flex-wrap gap-1 my-2">
                        <span class="badge rounded-pill text-bg-info">
                            <i class="bi bi-code-slash me-1"></i>${version}
                        </span>
                        <span class="badge rounded-pill text-bg-secondary">
                            <i class="bi bi-person-gear me-1"></i>${author}
                        </span>
                    </div>
                    <p class="mb-0 mt-1">${desc}</p>
                </div>
            `);
            var card_btn_row = $(`
                <div class="d-flex flex-row flex-nowrap align-items-stretch gap-2">
                    <div class="col install-col">
                        <button class="btn btn-warning w-100 h-100 px-0 install-btn"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Install agent directly into your Copilot.">
                            <i class="bi bi-archive me-1"></i><span>Install</span>
                        </button>
                    </div>
                    <div class="col">
                        <button class="btn btn-info w-100 h-100 px-0 copy-agent-btn">Copy Agent</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-info w-100 h-100 px-0 copy-temp-btn">Copy Source</button>
                    </div>
                </div>
            `)
            card_body.append(card_title).append(card_text).append(card_btn_row);

            var install_btn = card_btn_row.find('.install-btn');
            install_btn.on('click', () => {
                if (window.registerAgentIndex) {
                    registerAgentIndex(data);
                    showAlert('Agent installed into the Copilot.');
                    install_btn.addClass('disabled');
                    install_btn.find('span').text('Installed');
                } else {
                    showAlert('No Copilot detected in your browser.');
                }
            })
            new bootstrap.Tooltip(install_btn);
            card_btn_row.find('.copy-agent-btn').on('click', () => { copyIndex(data) });
            card_btn_row.find('.copy-temp-btn').on('click', () => { copyTemp(source) });

            var card = $('<div class="card shadow-sm">');
            card.append(`<img src="${image}" class="card-img-top img-fluid rounded-start" alt="${image.split('/').pop()}">`);
            card.append(card_body);
            $(`#${row_id}`).append($(`<div class="col ${col_class}">`).append(card));
        })

        masonry_reload($(`#${row_id}`), `.${col_class}`)
        masonry_reload_on_images($(`#${row_id}`), `.${col_class}`)
    })
}

render_agent_row('agents/featured/indexes.json', 'featured-agent-row', 'featured-agent-col')
render_agent_row('agents/default/indexes.json', 'default-agent-row', 'default-agent-col')

async function copyTemp(source) {
    source = source.replace('file://agents/', 'https://overleafcopilot.github.io/agents/default/');
    const data = await (await fetch(source)).text();
    navigator.clipboard.writeText(data);
    showAlert('Template copied into the clipboard.');
}

function copyIndex(data) {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    showAlert('Agent copied into the clipboard.');
}
