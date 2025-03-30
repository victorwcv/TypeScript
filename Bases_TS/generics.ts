(() => {
	const printObject = <T>(algo: T): T => {
		return algo;
	};

	let a = printObject(123)
	printObject([1, 2, 3]);
	printObject("Hola mundo")
})();
