function consultaCep() {
	$('.barra-progresso').show();
	let cep = $('#cep').val();
	var url = 'https://viacep.com.br/ws/' + cep + '/json/';

	$.ajax({
		url: url,
		type: 'GET',
		success: function(response) {
			$('#logradouro').html(response.logradouro);
			$('#bairro').html(response.bairro);
			$('#localidade').html(response.localidade);
			$('#uf').html(response.uf);
			$('#titulo-cep').html('CEP ' + response.cep);
			$('.cep').show();
			$('.barra-progresso').hide();
		}
	});
}

$(function() {
	$('.cep').hide();
	$('.barra-progresso').hide();
});
