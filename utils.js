var lang_code = 'eng';
if ((navigator.language || navigator.userLanguage).indexOf('zh') === 0) {
    lang_code = 'chn';
}
var saved_lang_code = get_cookie('lang_code');
if (saved_lang_code !== '' && saved_lang_code !== undefined) {
    lang_code = saved_lang_code;
}

function masonry_reload(parent_dom, item_selector) {
    parent_dom
        .masonry({
            itemSelector: item_selector,
            columnWidth: item_selector,
            transitionDuration: 0,
            percentPosition: true,
        })
        .masonry('reloadItems')
        .masonry('layout');

    parent_dom.masonry({
        itemSelector: item_selector,
        columnWidth: item_selector,
        transitionDuration: 500,
        percentPosition: true,
    });
}

function masonry_reload_on_images(parent_dom, item_selector) {
    var images = parent_dom.find('img');
    images.each(() => {
        if (this.complete) {
            $(this).trigger('load');
        }
    });
    images.on('load', () => {
        parent_dom
            .masonry({
                itemSelector: item_selector,
                columnWidth: item_selector,
                transitionDuration: 500,
                percentPosition: true,
            })
            .masonry('reloadItems')
            .masonry('layout');
    });
}

function render_highlight_row(highlights, row_id, col_class) {
    highlights.forEach(({ title, texts, img, badge }, i) => {
        var card_body = $('<div class="card-body">');
        var card_title = $(`<h5 class="card-title">${title}</h5>`);
        var card_text = $('<div class="card-text">');
        texts.forEach((text) => {
            card_text.append(
                `<p class="mb-0 mt-1 small text-secondary">${text}</p>`,
            );
        });
        card_body.append(card_title).append(card_text);

        var card = $('<div class="card shadow-sm">');
        card.append(
            `<img src="/images/${img}" class="card-img-top img-fluid rounded-start" alt="${img}">`,
        );
        card.append(card_body);
        $(`#${row_id}`).append(
            $(`<div class="col ${col_class}">`).append(card),
        );

        if (badge) {
            var float_badge = $(`
                <span class="badge text-bg-warning position-absolute" style="top: 1%; right: 1%; opacity: 75%">
                <i class="bi bi-${badge[0]} pe-1"></i>${badge[1]}</span>
            `);
            card.append(float_badge);
        }
    });

    masonry_reload($(`#${row_id}`), `.${col_class}`);
    masonry_reload_on_images($(`#${row_id}`), `.${col_class}`);
}

function render_agent_row(indexes, row_id, col_class) {
    fetch(indexes)
        .then((response) => response.json())
        .then((featured_agents) => {
            featured_agents.forEach((data) => {
                var {
                    name,
                    desc,
                    level,
                    author,
                    image,
                    source,
                    private,
                    version,
                    contact,
                } = data;
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
                    <div class="col">
                        <button class="btn btn-sm btn-outline-info w-100 h-100 px-0 copy-temp-btn">Copy Source</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-sm btn-info w-100 h-100 px-0 copy-agent-btn">Copy Agent</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-sm btn-warning w-100 h-100 px-0 install-btn"
                        data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Install agent directly into your Copilot.">
                            <i class="bi bi-archive me-1"></i><span>Install</span>
                        </button>
                    </div>
                </div>
            `);
                card_body
                    .append(card_title)
                    .append(card_text)
                    .append(card_btn_row);

                var install_btn = card_btn_row.find('.install-btn');
                install_btn.on('click', () => {
                    if (window.registerAgentIndex) {
                        registerAgentIndex(data)
                            .then(() => {
                                showAlert('Agent installed into the Copilot.');
                                install_btn.addClass('disabled');
                                install_btn.find('span').text('Installed');
                            })
                            .catch((err) => {
                                showAlert(
                                    'Failed to install agent into the Copilot.',
                                );
                            });
                    } else {
                        showAlert('No Copilot detected in your browser.');
                    }
                });
                new bootstrap.Tooltip(install_btn);
                card_btn_row.find('.copy-agent-btn').on('click', () => {
                    copyIndex(data);
                });
                card_btn_row.find('.copy-temp-btn').on('click', () => {
                    copyTemp(source);
                });

                var card = $('<div class="card shadow-sm">');
                if (image) {
                    card.append(
                        `<img src="${image}" class="card-img-top img-fluid rounded-start" alt="${image}">`,
                    );
                }
                card.append(card_body);
                $(`#${row_id}`).append(
                    $(`<div class="col ${col_class}">`).append(card),
                );
            });

            masonry_reload($(`#${row_id}`), `.${col_class}`);
            masonry_reload_on_images($(`#${row_id}`), `.${col_class}`);
        });
}

function set_cookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function get_cookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function showAlert(content) {
    $('#toast-content').text(content);
    bs_alert_toast.show();
}
