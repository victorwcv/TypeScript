(() => {
	type Hero = {
		name: string;
		age: number;
		powers: string[];
		getName?: () => string;
	};

	let flash: Hero = {
		name: "Barry Allen",
		age: 24,
		powers: ["Speed", "Time Travel"],
		getName() {
			return this.name;
		},
	};

	console.log(flash);
})();
