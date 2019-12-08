this.logueado = false;

$("#entrar").click(function(){
	if ($("#Usuario").val() == "Alex" && $("#Contraseña").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./page/inicio.html"
		}
	}else{
		swal.fire('Error');
	}
});

window.addEventListener('load',function(){
	$('.container').slideToggle(1000);
});

$("#Galeria").click(function(){
	window.location = "./Galeria.html"
})

$("#PDF").click(function(){
	window.location = "./PDF.html"
})

$("#prueba").click(function(){
	window.location = "./prueba.html"
})
