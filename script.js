const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');

const htmlEditor = CodeMirror.fromTextArea(htmlCode, {
    mode: 'xml',
    theme: 'dracula',
    lineNumbers: true,
});

const cssEditor = CodeMirror.fromTextArea(cssCode, {
    mode: 'css',
    theme: 'dracula',
    lineNumbers: true,
});

const jsEditor = CodeMirror.fromTextArea(jsCode, {
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
});

function updateOutput() {
    const html = htmlEditor.getValue();
    const css = `<style>${cssEditor.getValue()}</style>`;
    const js = `<script>${jsEditor.getValue()}<\/script>`;
    const srcDoc = `${html}${css}${js}`;

    output.srcdoc = srcDoc;
}

htmlEditor.on('change', updateOutput);
cssEditor.on('change', updateOutput);
jsEditor.on('change', updateOutput);

// Initialize the output on page load
updateOutput();
