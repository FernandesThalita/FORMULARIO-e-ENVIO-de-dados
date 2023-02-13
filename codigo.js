
//funcao para botao
function gravarFormulario(){
    //criacao de obj (json)
    var formCliente = new Object()

    formCliente.nome = document.getElementById('nome').value
    formCliente.sobrenome = document.getElementById('sobrenome').value
    formCliente.idade = document.getElementById('idade').value
    formCliente.estadoCivil = document.getElementById('estadoCivil').value   
    formCliente.cep = document.getElementById('cep').value 
    formCliente.cpf = document.getElementById('cpf').value       
    formCliente.rg = document.getElementById('rg').value   
    formCliente.renda = document.getElementById('renda').value    
     


    //coversao para string json
    var json = JSON.stringify(formCliente )
    console.log(formCliente)

    // retorna valor primitivo de um obj
    console.log(formCliente.valueOf())
    window.print(json)
    
}