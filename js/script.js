// Basicamente um endereço eletronico deve possuir as seguintes opções no seu campo.
//
// Não possuir espaços;
// Possuir o @;
// Possuir algum caracter após o @;
// Possuir algum caracter antes do @;
// Possuir pelo menos um ponto após o caracter depois do @;
// Possuir algum caracter após o ponto.


    function validacaoEmail(field) {
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        user = field.value.substring(0,field.value.length)
        btn = document.querySelector("#submit");

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            console.log("valid email address");
        }
        else if (user == ""){
            event.preventDefault();
            document.getElementById("msgemail").innerHTML="<p class='alert'>Oops! Please add your email </p>";
            console.log("please add your email address");
        }else
        {
            document.getElementById("msgemail").innerHTML="<p class='alert'>Oops! Please check your email </p>";
            console.log("Invalid email address");
        }
    }


