const taxaDolar = 5.20
const taxaEuro = 5.60
const valorBRLinput = document.querySelector('input#valorBRL')
const conversorBtn = document.querySelector('button#converterBtn')
const resFixed = document.getElementById('resultadoFixed')
const resUSD = document.getElementById('resultadoUSD')
const resEUR = document.getElementById('resultadoEUR')

function converterMoedas(){
  const resBRL = valorBRLinput.value
  const resBrlNumber = Number(resBRL)

  const FixedNumber = resBrlNumber.toFixed(2)
  //to fixed arredonda para cima ou para baixo o numero apos a virgula,e o (2) adiciona duas casas apos a virgula

  resFixed.textContent = FixedNumber

  const valDolar = (resBrlNumber / taxaDolar)
  const newDolar = valDolar.toLocaleString('en-US',{style:'currency',currency: 'USD'})


  const valEur = ( resBrlNumber / taxaEuro)
  const newEur = valEur.toLocaleString('en-US',{style:'currency',currency: 'EUR'})

  resUSD.textContent = newDolar
  resEUR.textContent = newEur
}

conversorBtn.addEventListener('click',converterMoedas)