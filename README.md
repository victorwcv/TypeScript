# 📌 TypeScript Notes

This repository contains my notes and practices while learning TypeScript. Here, I store essential commands and useful configurations to quickly recall how to work with TS. 🚀

---

## 📂 Initial TypeScript Setup

### 1️⃣ Install TypeScript globally

```sh
npm install -g typescript
```

### 2️⃣ Check the installed TypeScript version

```sh
tsc -v
```

### 3️⃣ Create a `tsconfig.json` configuration file

```sh
tsc --init
```

This command generates a `tsconfig.json` file with the basic configuration for your project.

---

## 📝 Useful TypeScript Commands

### ✅ Compile a TypeScript file to JavaScript

```sh
tsc file.ts
```

This generates a `file.js` in the same folder.

### ✅ Compile and watch for changes automatically

```sh
tsc --watch
```

Whenever you save a change in a `.ts` file, TypeScript will recompile automatically.

### ✅ Run TypeScript without compiling (using `ts-node`)

```sh
npx ts-node file.ts
```

⚠️ **Note:** To use this command, install `ts-node` first:

```sh
npm install -g ts-node
```

### ✅ Configure `ts-node` in VS Code to run with Run Code
If you're using the **Code Runner** extension in VS Code and want to execute TypeScript directly, follow these steps:
1. Open user settings (`Ctrl + Shift + P` → "Preferences: Open Settings (JSON)").
2. Add the following:

```json
"code-runner.executorMap": {
  "typescript": "ts-node"
}
```

3. Save the changes, and now you can run `.ts` files directly using **Run Code**.

---

## ⚙️ Key `tsconfig.json` Options

Some useful options you can configure in `tsconfig.json`:

- "target": ECMAScript version to compile to (`es5`, `es6`, `esnext`...)
- "module": Module system to use (`commonjs`, `es6`...)
- "strict": Enables strict mode for better practices
- "outDir": Output folder for compiled files
- "rootDir": Folder where TypeScript files are located

Example:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 📦 TypeScript with Node.js Setup

### 1️⃣ Initialize a project with TypeScript

```sh
mkdir my-project
cd my-project
npm init -y
npm install typescript ts-node @types/node --save-dev
```

### 2️⃣ Add a script in `package.json`

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Now, you can run your code with:

```sh
npm run start
```

---

## 🚀 Useful Resources

- [Official TypeScript Documentation](https://www.typescriptlang.org/)
- [TypeScript on GitHub](https://github.com/microsoft/TypeScript)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

Happy coding! 🎯

