const codeArea = document.getElementById("codeArea");
const output = document.getElementById("output");
const run = document.getElementById("run");

const data = "<DOCTYPE html><html><head><meta charset='UTF-8'></head><body><h1>Hello World</h1></body></html>";

function Initialize()
{
    codeArea.value = data
    runCode();
}

function runCode()
{
    const code = codeArea.value;

    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
}

window.addEventListener("load", Initialize);
run.addEventListener("click", runCode);