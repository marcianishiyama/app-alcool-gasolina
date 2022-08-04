console.log('ola')

let preco_alcool = 0
let preco_gasolina = 0

document
  .querySelector('.btn-calcular')
  .addEventListener('click', validaFormulario)

function validaFormulario(event) {
  event.preventDefault()
  if (
    document.getElementById('nome').value != '' &&
    document.getElementById('email').value != ''
  ) {
    alert('Pronto! Você receberá as novidades por e-mail')
  } else {
    alert('Por favor, preencha os campos nome e e-mail')
  }
}
