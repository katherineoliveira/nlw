document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField(){
   const duplicata = document.querySelector('.schedule-item').cloneNode(true)
   const fields = duplicata.querySelectorAll('input')
   fields.forEach(function(field){
       field.value = ""
   })

    document.querySelector('#inscricao').appendChild(duplicata)

}