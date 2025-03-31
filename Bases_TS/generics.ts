(() => {
	const genericFunction = <T>(algo: T): T => {
		return algo;
	};

	let a = genericFunction(123);
	genericFunction([1, 2, 3]);
	genericFunction("Hola mundo");

	interface Hero {
		name: string;
		realName: string;
	}

	interface Villian {
		name: string;
		dangerLevel: number;
	}

	const deadpool = {
		name: "Deadpool",
		realName: "Wade Winson",
		dangerLevel: 130,
	};

	console.log(genericFunction<Villian>(deadpool));
})();
