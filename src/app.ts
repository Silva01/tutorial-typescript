
import { Botao } from './botao';

class App {

    private static NOME_BUTAO = 'Mudar Titulo';

    constructor(){
        this.init();
    }

    init(): void {
        let botao = new Botao(App.NOME_BUTAO);
        let app = document.getElementById('app');

        let botaoTag = document.createElement('button');
        botaoTag.innerHTML = botao.show();
        botaoTag.addEventListener('click', () => {
            botao.event('title');
        });

        app.appendChild(botaoTag);
    }
}

new App();