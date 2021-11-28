function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            //console.log(response);
            $("#logradouro").html(response.logradouro);//forma simplificada
            //document.getElementById("logradouro").innerHTML = response.logradouro;//forma extensa

            $("#bairro").html(response.bairro);//forma simplificada
            //document.getElementById("bairro").innerHTML = response.bairro;

            $("#localidade").html(response.localidade);//forma simplificada
            //document.getElementById("localidade").innerHTML = response.localidade;

            $("#uf").html(response.uf);//forma simplificada
            //document.getElementById("uf").innerHTML = response.uf;

            $("#ddd").html(response.ddd);//forma simplificada
            //document.getElementById("ddd").innerHTML = response.ddd;
            $("#titulo_cep").html("CEP " + response.cep);//Inserir o CEP na frente do nome
            $(" .cep").show();//mostrar os resultados da busca
            $(".barra-progresso").hide();
        }
    })
}

//Esconder elemento
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});