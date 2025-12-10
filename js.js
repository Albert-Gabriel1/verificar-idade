function clicou(){
var dia = new Date()
var hoje = dia.getFullYear()
var idade1 = document.getElementById('idade')
var sexo = document.getElementsByName('Sexo')
var result = document.getElementById('resultado')
var img = document.getElementById('img1')
var idade = new Date(idade1.value).getFullYear()
var idade = hoje-idade
if(idade >0 && idade <=13 && sexo[0].checked){
    result.innerHTML = `Sua idade é ${idade} e você é um garoto`
    img.src = 'imagens/Mc.jpg'
    result.style.color ='#78E08F'
}
else if (idade >0 && idade <=13 && sexo[1].checked){
    result.innerHTML = `Sua idade é ${idade} e você é uma garota` 
    img.src = 'imagens/Fc.jpg'
    result.style.color ='#78E08F'
}
else if (idade <=18 && sexo[0].checked && idade>13){
    result.innerHTML = `Sua idade é ${idade} e você é um adolecente`
    img.src = 'imagens/Mj.jpg'
    result.style.color ='#78E08F'
}
else if (idade <=18 && sexo[1].checked && idade>13){
    result.innerHTML = `Sua idade é ${idade} e você é uma adolecente`
    img.src = 'imagens/Fj.jpeg'
    result.style.color ='#78E08F'
}
else if (idade >18 && sexo[0].checked && idade <60){
    result.innerHTML = `Sua idade é ${idade} e você é um homem adulto`
    img.src = "imagens/Ma.jpg"
    result.style.color ='#78E08F'
}
else if (idade >18 && sexo[1].checked && idade <60){
    result.innerHTML = `Sua idade é ${idade} e você é uma mulher adulta` 
    img.src = 'imagens/Fa.jpg'
    result.style.color ='#78E08F'
}

else if (idade >=60 && sexo[0].checked && idade <=100){
    result.innerHTML = `Sua idade é ${idade} e você é um idoso`
    img.src = 'imagens/Mi.jpg'
    result.style.color ='#78E08F'
}
else if (idade >=60 && sexo[1].checked && idade <=100){
    result.innerHTML = `Sua idade é ${idade} e você é uma mulher idosa`
    img.src = 'imagens/Fi.jpeg'
    result.style.color ='#78E08F'
}
else{
    alert('[ERRO] numero invalido');
    result.innerHTML = 'Lembre de colocar uma data valida'
    img.src = 'imagens/erro.jpg'
    result.style.color = '#E55039'
}
}
