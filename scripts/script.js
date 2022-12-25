//  Carne - 400gr por pessoa + de 6 horas - 650gr
//  Cerveja - 1200ml por pessoa + 6 horas - 2000ml
//  Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao= document.getElementById("duracao");
let resultado = document.getElementById("resultado")



function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntTotalCeva = cervejaPP(duracao) * adultos;
    let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML = `
    <div class="edit-block">
      
      <p><img src="../img/meat.png">${qntTotalCarne/1000} Kg de Carne</p>
    </div>
  `
  
    
    resultado.innerHTML += `
    <div class="edit-block">
    <p><img src="../img/beer.png">${Math.ceil(qntTotalCeva/355)} Latas de Cerveja</p>
    </div>
    `
    
    resultado.innerHTML += `
    <div class="edit-block">
    <p><img src="../img/refri.png">${Math.ceil(qntTotalBebidas/2000)} Pet de 2L de Bebida</p>
    </div>
    `
}


function carnePP(duracao){
    if ( duracao >= 6){
        return 650;
    }
    else {return 400;
}
}
function cervejaPP(duracao){
    if ( duracao >= 6){
        return 2000;
    }
    else {return 1200;
}
}

function bebidasPP(duracao){
    if ( duracao >= 6){
        return 1500;
    }
    else {return 1000;
}
}