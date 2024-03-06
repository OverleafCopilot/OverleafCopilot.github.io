fetch(`./elements_${lang_code}.json`).then((response) => response.json()).then(({ page_title, title, slogan, agent_title }) => {
    $('head title').text(page_title);
    title.forEach(({ text, color }, i) => {
        var span = $(`<span class="mx-1" style="color:${color};">${text}</span>`);
        $('#title').append(span);
    })

    $('#slogan').text(slogan);

    $('#featured-agents-title').text(agent_title['featured']);
    $('#default-agents-title').text(agent_title['default']);
})

render_agent_row('/agents/featured/indexes.json', 'featured-agent-row', 'featured-agent-col')
render_agent_row('/agents/default/indexes.json', 'default-agent-row', 'default-agent-col')

async function copyTemp(source) {
    // urls with file:// indicates that the source file is packaged with the extension
    source = source.replace('file://agents/', 'https://overleafcopilot.github.io/agents/');
    const data = await (await fetch(source)).text();
    navigator.clipboard.writeText(data);
    showAlert('Template copied into the clipboard.');
}

function copyIndex(data) {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    showAlert('Agent copied into the clipboard.');
}
