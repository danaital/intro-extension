// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(function () {
    const vscode = acquireVsCodeApi();

    // const oldState = /** @type {{ count: number} | undefined} */ (vscode.getState());
    const obje = { count: 0 };
    const h1 = document.getElementById('1');
    const button = document.getElementById('button');
    const label = document.getElementById('label');
    console.log("1", h1);
    console.log("button", button);
    console.log("doc", document.getElementsByTagName('h1'));
    button.addEventListener('click', () => {
        console.log("Hello from main.js");
        obje.count += 1;
        label.innerText = obje.count; 
    });
})();