
////// function de deletar opportunitties

function deletarOpt(a){
    //// confimar o delete da oportunidade 
    var resp = confirm( 'Deseja excluir essa opportunities ? ');
    ///// chamando parametro key
    var inpKey = document.getElementById('email');
    ///// chamando parametro name
    var inpName  = document.getElementById(`${a.id}`);

    ///// indicando a rota de delete
    (resp == true )? a.href = `/admin/delopt/${inpKey.value}/${inpName.value}`: null ;
     
}

////// function de deletar Client
function deletarClient(a){
    //// confimar o delete da client 
    var resp = confirm( 'Deseja excluir essa opportunities ? ');
    ///// chamando parametro key
    var inpKey = document.getElementById('email');

    ///// indicando a rota de delete
    (resp == true )? a.href = `/admin/del/${inpKey.value}`: null ;
     
}