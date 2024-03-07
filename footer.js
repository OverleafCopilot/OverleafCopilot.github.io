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

var footer = $(`
    <div class="container-xxl" id="footer-container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 mb-4 border-top">
            <p class="col-md-4 mb-0 text-body-secondary" id="copyright">© OverleafCopilot Team</p>
            <img src="/favicon.ico" style="width: 30px;">
            <ul class="nav col-md-4 justify-content-end" id="footer-links"></ul>
        </footer>
    </div>
`);
$('body').append(footer);

var alert_toast = $(`
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="alert-toast" class="toast text-bg-primary" role="alert">
            <div class="toast-body" id="toast-content"></div>
        </div>
    </div>
`);
$('body').append(alert_toast);
const bs_alert_toast = bootstrap.Toast.getOrCreateInstance($('#alert-toast'));

var footer_links = {
    "eng": [
        {
            "text": "Home",
            "url": "/"
        },
        {
            "text": "Contact",
            "url": "mailto:linyanwd@icloud.com"
        },
        {
            "text": "Dev's Page",
            "url": "https://logan-lin.github.io/"
        },
        {
            "text": "PromptGenius",
            "url": "https://www.promptgenius.site/"
        }
    ],
    "chn": [
        {
            "text": "首页",
            "url": "/"
        },
        {
            "text": "联系",
            "url": "mailto:linyanwd@icloud.com"
        },
        {
            "text": "开发者首页",
            "url": "https://logan-lin.github.io/"
        },
        {
            "text": "PromptGenius",
            "url": "https://www.promptgenius.site/"
        }
    ]
}

footer_links[lang_code].forEach(({ text, url }) => {
    footer.find('#footer-links').append(`
        <li class="nav-item">
            <a href="${url}" target="_blank" class="nav-link px-2 text-body-secondary">${text}</a>
        </li>`);
})