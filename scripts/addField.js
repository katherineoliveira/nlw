document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField(){
    teste = document.querySelector('.schedule-item').cloneNode(true)
    document.querySelector('#inscricao').appendChild(teste)

}