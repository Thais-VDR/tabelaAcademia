//mudando o titulo dinamicamente
//declarando variaveis utilizando o let
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//-------------------------------------------------------------------------------

//selecionando todos os pacientes da tabela e colocando dentro de uma lista
let pacientes = document.querySelectorAll('.paciente')
// console.log(pacientes)

//percorrendo a lista de pacientes
for(var i = 0; i <= pacientes.length; i++){
 let paciente = pacientes[i]
 
 //recebendo o peso do paciente
 let pesoTd = paciente.querySelector('.info-peso')
 let peso = pesoTd.textContent

 //recebendo a altura do paciente
let alturaTd = paciente.querySelector('.info-altura')
let altura = alturaTd.textContent

//calculando o imc do paciente
//let imc = peso / (altura * altura)

//selecionando imc
let imcTd = paciente.querySelector('.info-imc')

//toFixed para ajustar as casas decimais
//imcTd.textContent = imc.toFixed(2)
let imc = calculaImc(peso, altura)
imcTd.textContent = imc
}

function calculaImc(peso, altura){
let imc = 0
imc = peso / (altura * altura)
return imc.toFixed(2)
}




