
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}



function mascaraTelefone(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
};
 
 function inspecionaCPF(cpf) 
 {
   var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
	
	if(!filtro.test(cpf))
	{
		window.alert("CPF inválido. Tente novamente.");
		document.cadastro.cpf.focus();
		document.cadastro.cpf.value = "";
		return false;
	}
   
	cpf = remove(cpf, ".");
	cpf = remove(cpf, "-");
	
	if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
		cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
		cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
		cpf == "88888888888" || cpf == "99999999999")
	{
		window.alert("CPF inválido. Tente novamente.");
		document.cadastro.cpf.focus();
		document.cadastro.cpf.value = "";
		return false;
   }

	soma = 0;
	for(i = 0; i < 9; i++)
	{
		soma += parseInt(cpf.charAt(i)) * (10 - i);
	}
	
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	if(resto != parseInt(cpf.charAt(9))){
		window.alert("CPF inválido. Tente novamente.");
		document.cadastro.cpf.focus();
		document.cadastro.cpf.value = "";
		return false;
	}
	
	soma = 0;
	for(i = 0; i < 10; i ++)
	{
		soma += parseInt(cpf.charAt(i)) * (11 - i);
	}
	resto = 11 - (soma % 11);
	if(resto == 10 || resto == 11)
	{
		resto = 0;
	}
	
	if(resto != parseInt(cpf.charAt(10))){
		window.alert("CPF inválido. Tente novamente.");
		document.cadastro.cpf.focus();
		document.cadastro.cpf.value = "";
		return false;
	}
	
	return true;
 };


function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
	return v
};
 
 function validaNome(campo) { 
		
		
		if(campo == ""){
			alert ("Campo Obrigatório!!!")
			document.cadastro.nome.focus();
			return false;
		}
		if(campo.match(['[-@!#$%¨&*+_´`^~;:?áÁéÉíÍóÓúÚãÃçÇ|\?,./{}"<>()1234567890]'])){ 
			//encontrou então não passa na validação
			alert ("Campo Obrigatório - Não é permitido números ou caracteres especiais!!!") 
			document.cadastro.nome.focus();
			document.cadastro.nome.value = "";
			return false; 
		} else { 
		
			//não encontrou caracteres especiais 
		
		  return true;
	}
 };
 
 function validaCidade(campo) { 
		
		
		if(campo == ""){
			alert ("Campo Obrigatório!!!")
			document.cadastro.cidade.focus();
			return false;
		}
		if(campo.match(['[-@!#$%¨&*+_´`^~;:?áÁéÉíÍóÓúÚãÃçÇ|\?,./{}"<>()1234567890]'])){ 
			//encontrou então não passa na validação
			alert ("Campo Obrigatório - Não é permitido números ou caracteres especiais!!!") 
			document.cadastro.cidade.focus();
			document.cadastro.cidade.value = "";
			return false; 
		} else { 
		
			//não encontrou caracteres especiais 
		
		  return true;
	}
 };
 
 function validaCampos(endereco){
	 if(endereco == ""){
		 alert("Campo Obrigatorio!!!")
		 document.cadastro.endereco.focus();
		 
	 } 
 };
 

function confirmaEmail(){

if( document.cadastro.email.value=="" 
   || document.cadastro.email.value.indexOf('@')==-1 
     || document.cadastro.email.value.indexOf('.')==-1 )
	{
		alert( "Campo Obrigatorio - Por favor, informe um email válido!" );
		document.cadastro.email.focus();
		document.cadastro.email.value = "";
		return false;
	}
		
};

function validaSenha(){
	if(document.cadastro.senha.value=="" 
		|| document.cadastro.senha.value.length < 7
			|| document.cadastro.senha.value.indexOf(' ','0')!= -1)
			{
				alert("Digite uma senha válida - Acima de 6 Caracteres!!!");
				document.cadastro.senha.focus();
			return false;
}
	

};

function validaSelect() {
        var comboSexo = document.getElementById("sexo");
        if (comboSexo.options[comboSexo.selectedIndex].value == "--Escolher Sexo--" ){
                alert("Selecione uma opção antes de prosseguir");
				document.cadastro.sexo.focus();
        }
				
		if (comboSexo.options[comboSexo.selectedIndex].value != "--Escolher Sexo--" ){
                
				document.cadastro.telefone.focus();
		}
    };    
	
function MsgChekBox(){
	
	var a = "A qualquer momento voce pode cancelar ";
	var b = "\no recebimento dos e-mails de promoção ";
	var c = "\nenviando um e-mail com o assunto STOP MAIL ";
	var d = "\npara o endereço contato@estacio.br";
		
	if(document.cadastro.sim.checked  && document.cadastro.nao.checked || 
		document.cadastro.sim.checked == false  && document.cadastro.nao.checked == false){
	    alert("Campo Obrigatório - Digite Sim ou Não");
		document.cadastro.sim.focus();
	return false;
	}
	
	if(document.cadastro.sim.checked == true && document.cadastro.nao.checked == false){
		
	document.getElementById("promocao").innerHTML = a + b + c + d;
	}
	else{
		document.getElementById("promocao").innerHTML = "";
	}
	return false;

		
};


function Valores(){
	
	var cpf = document.cadastro.cpf.value;
	var nome = document.cadastro.nome.value;
	var endereco = document.cadastro.endereco.value;
	var cidade = document.cadastro.cidade.value;
	var sexo = document.cadastro.sexo.value;
	var telefone = document.cadastro.telefone.value;
	var email = document.cadastro.email.value;
	var obs = document.cadastro.obs.value;
	
	if(document.cadastro.sim.checked == true){
		var promocao = "SIM";
	}else{
		var promocao = "Não";
	};	
	
	alert("CPF: " + cpf + "\nNOME: " + nome + "\nEndereço: " + endereco + "\nCidade: " + cidade + "\nSexo: " + sexo + 
	"\nTelefone: " + telefone + "\nE-mail: " + email + "\nReceber Promoções: " + promocao + "\nObservação: " + obs);
	
	
};

function observacao(){

   var TextMsg =  cadastro.obs.value;
   if (TextMsg.length>200)
   {
       alert("Limite Excedido - Máximo 200 caracteres!!!!");
	   document.cadastro.obs.focus();
   return false;
    }
   
};


function remove(str, sub) {
	i = str.indexOf(sub);
	r = "";
	if (i == -1) return str;
	{
		r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
	}
	
	return r;
};

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}


function maiuscula(id) {
                //palavras para ser ignoradas
                var wordsToIgnore = ["DOS", "DAS", "de", "do", "Dos", "Das"],
                minLength = 3;
                var str = $(id).val(); 
                var getWords = function(str) {
                    return str.match(/\S+\s*/g);
                }
                $(id).each(function () {
                    var words = getWords(this.value);
                    $.each(words, function (i, word) {
                        // somente continua se a palavra nao estiver na lista de ignorados
                        if (wordsToIgnore.indexOf($.trim(word)) == -1 && $.trim(word).length > minLength) {
                            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
                        } else{
                        words[i] = words[i].toLowerCase();}
                    });
                    this.value = words.join("");
                });
            };