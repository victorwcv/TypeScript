(() => {
  const msg: string = "Hello World";
  console.log(msg + " from app.ts");

  const a: number = 10;

  function sayHello(msg: string): void {
    console.log(msg);
  }

  sayHello("Soy Victor");
})();
