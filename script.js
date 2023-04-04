function clock (){
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date(); // informaçoes referente a tempo//
    const horas = horaAgora.getHours(); //banco horas que esta no pacote//
    const minutos = horaAgora.getMinutes(); //banco de minutos que está no pacote//
    const segundos = horaAgora.getSeconds(); //banco de segundos que está no pacote//
    const formatoHoras = horas.toString().padStart(2, "0"); //transformou meu numero em string(cadeia de caracteres)// //star define o começo da string// //(2) define quantas caracteres vai ter ("0") como termina//
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}` //${} place Holders//
}

setInterval(clock, 1000)