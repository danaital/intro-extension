import * as vscode from 'vscode';

const prefix = "intro-extension";
export interface ICommand {
    command: string;
    params?: any[];
    callback: (...args: any[]) => any;
    
}
export const commands: ICommand[] = [
    {command: `${prefix}.helloWorld`, callback: () => vscode.window.showInformationMessage('Hello World from intro-extension! after refactoring')},
    {command: `${prefix}.test`, callback: () => vscode.window.showInformationMessage('Hello World 2 from intro-extension! after refactoring')},
    {command: `${prefix}.askQuestion`, callback: async () => { 
        const answer = await vscode.window.showInformationMessage('How are you?', 'good', 'bad');
        vscode.window.showInformationMessage(`You are ${answer}`);
    }},
];
export function registerCommands(context: vscode.ExtensionContext, commands: ICommand[]) {
    for (const command of commands) {
        const disposable = vscode.commands.registerCommand(command.command, command.callback);
        context.subscriptions.push(disposable);
    }
}

