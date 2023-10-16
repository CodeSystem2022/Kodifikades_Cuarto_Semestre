function soyAsincrona() {
	console.log('Hola, soy una función asíncrona');
}

console.log('Iniciando el proceso...');
soyAsincrona();
console.log('Terminando el proceso...');

function hola(nombre, miCallback) {
	setTimeout(() => {
		console.log('Hola ' + nombre);
		miCallback(nombre);
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(function () {
		console.log('Adios', nombre);
	}, 1000);
}

function prueba(callback) {
	setTimeout(() => {
		console.log('prueba');
		callback();
	}, 1000);
}

console.log('Iniciando el proceso...');
hola('Carlos', function (nombre) {
	adios(nombre, function () {
		console.log('Terminando el proceso...');
		prueba(nombre);
	});
});

// hola('Carlos', function(){});
// adios('Carlos', function(){});
