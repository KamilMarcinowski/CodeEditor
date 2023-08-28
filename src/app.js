const codeArea = document.getElementById("codeArea");
const output = document.getElementById("output");
const run = document.getElementById("run");
const lineNumbers = document.getElementById("lineNumber");

const data = "<DOCTYPE html>\n<html>\n<head\n<meta charset='UTF-8'>\n</head>\n<body>\n<h1>Hello World</h1>\n</body>\n</html>";

function Initialize()
{
    if (localStorage.getItem("code") !== "")
    {
        loadData();
    }
    else{
        codeArea.value = data;
    }
    UpdateLines();
    runCode();
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
    saveData();
}

function saveData()
{
    localStorage.setItem("code", codeArea.value);
}

function loadData()
{
    codeArea.value = localStorage.getItem("code");
}

codeArea.addEventListener("scroll", UpdateLines);
codeArea.addEventListener("input", UpdateLines);
codeArea.addEventListener("input", runCode);
window.addEventListener("load", Initialize);