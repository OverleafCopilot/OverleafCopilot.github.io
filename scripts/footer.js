$('#footer-container').append(`
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 mb-4 my-1">
        <p class="col-md-4 mb-0 text-body-secondary" id="copyright">© OverleafCopilot Team</p>
        <img src="favicon.ico" style="width: 30px;">
        <ul class="nav col-md-4 justify-content-end" id="footer-links"></ul>
    </footer>
`);

var footer_links = [
    {
        "text": "Home",
        "url": "./index.html"
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
]

footer_links.forEach(({ text, url }) => {
    $('#footer-links').append(`
        <li class="nav-item">
            <a href="${url}" target="_blank" class="nav-link px-2 text-body-secondary">${text}</a>
        </li>`);
})