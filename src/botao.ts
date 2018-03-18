export class Botao {

    constructor(private name: string){ }

    show(): string {
        return `<button style='background-color: green;'>${this.name}</button>`;
    }

    event(id: string): any {        
        let title = document.getElementById(id);
        title.innerText = 'Bem Vindo ao Blog Daniel Silva';        
    }
}