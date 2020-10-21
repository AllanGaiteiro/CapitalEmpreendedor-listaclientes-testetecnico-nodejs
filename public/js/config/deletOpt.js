
////// function de deletar opportunitties

function deletarOpt(a){
    //// confimar o delete da oportunidade 
    var resp = confirm( 'Deseja excluir essa opportunities ? ');
    ///// chamando parametro key
    var inpKey = document.getElementById('KeyEmail');
    ///// chamando parametro name
    console.log(a.id)
    var inpName  = document.getElementById(`${a.id}`);

    ///// indicando a rota de delete
    (resp == true )? a.href = `/admin/delopt/${inpKey.value}/${inpName.value}`: null ;
     
}