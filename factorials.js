//factorial of an integer.
let n = parseInt(prompt("Factorial of:"));
let p = n*(n-1);

function factorial() {
	for (let i = 2; i < n; i++) {
		p *= n-i;
	}
	alert(p);
}

factorial();
