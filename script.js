const turnOn = document.getElementById('turnOn');//botao-ligar
const turnOff = document.getElementById('turnOff');//botao-delis
const lamp = document.getElementById('lamp');//img

function isLampBroken(){//função lampada quebrada
    return lamp.src.indexOf('quebrada') > -1 // esse -1 quer dizer nenhuma string encontrada.Esse maior >  quer dizer se na varredura da string for encontrado esse nome 'quebrada' ativa função
}

function lampOn(){
    if ( !isLampBroken()){//se nao encontrar string quebrada pode rodar essa função,se tiver quebrada essa função nao roda.

        lamp.src = './images/lamp-ligada.jpg'
    }
}
function lampOff(){//se nao encontrar string quebrada pode rodar essa função , se tiver quebrada função nao roda.
    if(!isLampBroken()){

        lamp.src = './images/lamp-desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = './images/lamp-quebrada.jpg'
}



turnOn.addEventListener('click', lampOn);//clicar botão
turnOff.addEventListener('click', lampOff);//clicar botão
lamp.addEventListener('mouseover', lampOn);//mousesobre
lamp.addEventListener('mouseleave', lampOff);//mousedeixar
lamp.addEventListener('dblclick', lampBroken);//doisClick lamp-quebrada.