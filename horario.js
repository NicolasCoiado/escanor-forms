function carregar(){
    var agora = new Date;

    let img = window.document.getElementById("i");
    let horario =  window.document.getElementById("horario");
    let forma =  window.document.getElementById("forma")
    let cor = window.document.getElementById("header")
    let h = agora.getHours();
    let m = agora.getMinutes();

    if(h<10){
        if(m<10){
            horario.innerHTML=`0${h}:0${m}`
        }else{
            horario.innerHTML=`0${h}:${m}`
        }
    }else{
        if(m<10){
            horario.innerHTML=`${h}:0${m}`
        }else{
            horario.innerHTML=`${h}:${m}`
        }
    }

    if(h>=7 && h<18 && h!=12 || h==12 && m!=00){
        img.src="imagens/forte.jpg";
        forma.innerHTML=`Escanor`
        cor.style.background="#76CDF3"
    
    }else if (h>=18 || h<7){
        img.src="imagens/fraco.jpg";
        forma.innerHTML='Small Escanor'
        cor.style.background="#00557B"

    }else if(h==12 && m==00){  
        img.src="imagens/The One.jpg";
        forma.innerHTML='The One'
        cor.style.background="#FF4F00"
  
    }else{
        alert('ERRO NO HORÁRIO')
    }
    
}
