let listaSorte = [];
let limite = 100;
let numero = gerarNumeroAleatorio();

function pegartag(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});

}

function exibirMensagemInicial(){
    pegartag('h1','Jogo do número secreto');
    pegartag('p', 'Escolha um número de 1 a 100');
}

exibirMensagemInicial();

console.log(numero);
let tentativa = 1;
function verificarChute(){
    
    let chute = document.querySelector('input').value;
    if (chute == numero){
        let palavra = tentativa > 1 ? 'tentativas':'tentativa';
        let mensagem = `Parabéns você acertou o número secreto ! Você descobriu com ${tentativa} ${palavra} !` ;
        pegartag('h1',mensagem);  
        pegartag('p','');
        document.querySelector('input').style.visibility ="hidden";
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if(chute < numero){
            pegartag('p','Escolha um número maior!');
            
        }else{ 
                pegartag('p','Escolha um número menor!');
                
            }
            tentativa++
            limparCampo();
    };
    
}
function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random()* limite + 1 ) ;
    let quantidade = listaSorte.length;
    if(quantidade == 3){
        listaSorte = [];
    }
    if(listaSorte.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        
        listaSorte.push(numeroEscolhido);
        console.log(listaSorte);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numero = gerarNumeroAleatorio();
    limparCampo();
    tentativa= 1;
    document.querySelector('input').style.visibility ="visible";
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}