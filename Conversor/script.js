const input = document.getElementById('input');
const botao = document.getElementById('botao');
const opcoes = document.getElementById('opcoes');
const texto = document.getElementById('texto');

botao.addEventListener('click',(e)=>{
  e.preventDefault();
  const valor = input.value;
  if(opcoes.selectedIndex==0){
    let result = parseFloat(valor)*1.094
    texto.innerText = `O resultado é ${result.toFixed(3)} jardas!`;
    input.value = '';
  } else if(opcoes.selectedIndex==1){
    let result = parseFloat(valor)*3.281;
    texto.innerText = `O resultado é ${result.toFixed(3)} pés!`;
    input.value = '';
  } else if(opcoes.selectedIndex==2){
    let result = parseFloat(valor)*39.37;
    texto.innerText = `O resultado é ${result.toFixed(3)} polegadas!`;
    input.value = '';
  } else if(opcoes.selectedIndex==3){
    let result = parseFloat(valor)*0.000621;
    texto.innerText = `O resultado é ${result.toFixed(3)} milhas!`;
    input.value = '';
  }
})