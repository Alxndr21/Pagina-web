// or with jquery
$(document).ready(function (){
	$('.datepicker').datepicker();
});

$(document).ready(function(){
	$('select').formSelect();
});

$('#Iniciar').click(funct n(){
	$('#p1').slideDown();
	$('#Iniciar').hide();
});

$('#Siguiente').click(function(){
	if ($("#p1").show()){
		$("#p1").hide();
	}
	if ($("#p2").hide()){
		$("#p2").show();
	}
});