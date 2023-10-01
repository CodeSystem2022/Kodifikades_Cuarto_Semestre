console.log('Hola a todos');

let i = 0;
const interval = setInterval(() => {
	console.log(i);
	i++;
	if (i == 10) clearInterval(interval);
}, 1000);
