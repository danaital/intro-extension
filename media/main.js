// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.

(function () {
    const vscode = acquireVsCodeApi();
    const button = document.getElementById('button');
    const label = document.getElementById('label');

    button.addEventListener('click', () => {
        // Send a message back to the extension
        vscode.postMessage({
            command: 'alert',
            text: 'Hello from the webview'
        });
    });
})();