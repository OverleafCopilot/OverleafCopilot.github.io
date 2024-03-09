var lang_switch_btn = $(`
    <button class="btn btn-sm btn-outline-secondary position-absolute top-0 start-0 m-2">
        <i class="bi bi-translate"></i> ${lang_code === 'chn' ? 'Switch to English' : "切换到中文"}
    </button>
`)
$('body').append(lang_switch_btn);
lang_switch_btn.on('click', () => {
    lang_code = (lang_code === 'chn') ? 'eng' : 'chn';
    set_cookie('lang_code', lang_code, 30);
    location.reload();
})

if (location.pathname != '/') {
    var back_btn = $(`
        <button class="btn btn-sm btn-outline-dark position-absolute top-0 end-0 m-2"
        onClick="javascript: location.href='/';">
            <i class="bi bi-house-fill"></i>
        </button>
    `);
    $('body').append(back_btn);
}

var alert_toast = $(`
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="alert-toast" class="toast text-bg-primary" role="alert">
            <div class="toast-body" id="toast-content"></div>
        </div>
    </div>
`);
$('body').append(alert_toast);
const bs_alert_toast = bootstrap.Toast.getOrCreateInstance($('#alert-toast'));


var footer = $(`
    <div class="container-xxl" id="footer-container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 mb-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary">© <span id="copyright"></span></p>
            <img src="/favicon.ico" style="width: 30px;">
            <ul class="nav col-md-4 justify-content-end" id="footer-links"></ul>
        </footer>
    </div>
`);
$('body').append(footer);

var contact_modal = $(`
    <div class="modal fade" tabindex="-1" id="contact-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center align-items-center flex-wrap gap-3"></div>
                </div>
            </div>
        </div>
    </div>
`)
$('body').append(contact_modal);
const bs_contact_modal = new bootstrap.Modal(contact_modal);

fetch(`/footer/elements_${lang_code}.json`).then((response) => response.json()).then(({ copyright, links, contact }) => {
    $('#copyright').text(copyright);

    links.forEach(({ text, url }) => {
        footer.find('#footer-links').append(`
            <li class="nav-item">
                <a href="${url}" class="nav-link px-2 text-body-secondary">${text}</a>
            </li>`);
    })

    contact_modal.find('.modal-title').text(contact['title']);
    contact['links'].forEach(({ text, url, icon }) => {
        var p = $(`<span><i class="bi bi-${icon}"></i> ${text}</span>`);
        if (url) {
            p = $(`<button class="btn btn-outline-dark" onClick="javascript: location.href='${url}';">`).append(p);
        }
        contact_modal.find('.modal-body div').append(p);
    })
})
