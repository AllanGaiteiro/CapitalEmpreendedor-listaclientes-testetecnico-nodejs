
///// functio de Tranformal os inputs que sao somente visuais em editaveis 

function editInfo(btn) {

    if (btn.value == 'Enviar') {
        btn.type = 'submit'
    } else if (btn.type == 'button') {
        btn.value = 'Enviar'
        var obj = document.getElementById(`${btn.id}`).getElementsByTagName('input')
        
        for (const i in obj) {

            obj[i].readOnly = false
            obj[i].className = ''
            btn.className = "btn btn-success"
            console.log(obj[i])
        }
    }
}