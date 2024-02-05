import * as vscode from 'vscode';
import { CommandEnum } from '../shared/dtos/enums/command.enum';
import { BasePanel } from './base.panel';

const prefix = "intro-extension";
export interface ICommand {
    command: string;
    params?: any[];
    callback: (...args: any[]) => any;
    
}
export function registerCommands(context: vscode.ExtensionContext) {
    const commands: ICommand[] = [
        {command: `${prefix}.${CommandEnum.HELLO_WORLD}`, callback: () => vscode.window.showInformationMessage('Hello World from intro-extension! after refactoring')},
        {command: `${prefix}.${CommandEnum.TEST}`, callback: () => vscode.window.showInformationMessage('Hello World 2 from intro-extension! after refactoring')},
        {command: `${prefix}.${CommandEnum.ASK_QUESTION}`, callback: async () => { 
            const answer = await vscode.window.showInformationMessage('How are you?', 'good', 'bad');
            vscode.window.showInformationMessage(`You are ${answer}`);
        }},
        
    ];
    const contextDepCommands = [{command: `${prefix}.${CommandEnum.OPEN_BASE_PANEL}`, callback: () => { 
        BasePanel.createOrShow(context.extensionUri);
    }}];


    for (const command of commands) {
        const disposable = vscode.commands.registerCommand(command.command, command.callback);
        context.subscriptions.push(disposable);
    }
    
    for (const command of contextDepCommands) {
        const disposable = vscode.commands.registerCommand(command.command, command.callback);
        context.subscriptions.push(disposable);
    }
}

