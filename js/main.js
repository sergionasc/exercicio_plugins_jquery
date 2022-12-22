$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')
    $("#cpfCnpj").keydown(function(){
        let tamanho = $("#cpfCnpj").val().length;
    
        if(tamanho < 14){
            $("#cpfCnpj").mask("000.000.000-00");
        } else {
            $("#cpfCnpj").mask("00.000.000/0000-00");
        }                   
    });

    
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpfCnpj: {
                required: true,
            },
            cep: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: '<font color="red">Insira o seu nome</font>',
            email: '<font color="red">Insira o seu e-mail</font>',
            telefone: '<font color="red">Insira seu telefone</font>',
            cpfCnpj: '<font color="red">Insira o CPF ou CNPJ</font>',
            cep: '<font color="red">Insira o CEP</font>'
        },
    })
})







