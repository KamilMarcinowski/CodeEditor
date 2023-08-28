const codeArea = document.getElementById("codeArea");
const output = document.getElementById("output");
const run = document.getElementById("run");
const lineNumbers = document.getElementById("lineNumber");

const data = "<DOCTYPE html>\n<html>\n<head\n<meta charset='UTF-8'\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";

function Initialize()
{
    codeArea.value = data
    runCode();
    UpdateLines();
}

function UpdateLines()
{
    const lines = codeArea.value.split("\n");
    const lineNumbersHTML = lines.map((_, index) => index + 1).join('\n');
    lineNumbers.value = lineNumbersHTML;
    lineNumbers.scrollTop = codeArea.scrollTop;
}

function runCode()
{
    const code = codeArea.value;

    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
}

codeArea.addEventListener("scroll", UpdateLines);
codeArea.addEventListener("input", UpdateLines);
window.addEventListener("load", Initialize);
run.addEventListener("click", runCode);