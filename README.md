# 📌 TypeScript Notes

Este repositorio contiene mis apuntes y prácticas mientras aprendo TypeScript. Aquí guardo comandos esenciales y configuraciones útiles para recordar rápidamente cómo trabajar con TS. 🚀

---

## 📂 Configuración inicial de TypeScript

### 1️⃣ Instalar TypeScript de forma global

```sh
npm install -g typescript
```

### 2️⃣ Verificar la versión de TypeScript instalada

```sh
tsc -v
```

### 3️⃣ Crear un archivo de configuración `tsconfig.json`

```sh
tsc --init
```

Este comando generará un archivo `tsconfig.json` con la configuración básica para el proyecto.

---

## 📝 Comandos útiles de TypeScript

### ✅ Compilar un archivo TypeScript a JavaScript

```sh
tsc archivo.ts
```

Esto generará un archivo `archivo.js` en la misma carpeta.

### ✅ Compilar y observar cambios automáticamente

```sh
tsc --watch
```

Cada vez que guardes un cambio en un archivo `.ts`, TypeScript recompilará automáticamente.

### ✅ Ejecutar TypeScript sin compilar (usando `ts-node`)

```sh
npx ts-node archivo.ts
```

⚠️ **Nota:** Para usar este comando, primero instala `ts-node` con:

```sh
npm install -g ts-node
```

### ✅ Configurar `ts-node` en VS Code para ejecutar con Run Code
Si usas la extensión **Code Runner** en VS Code y quieres ejecutar TypeScript directamente, sigue estos pasos:
1. Abre las configuraciones de usuario (`Ctrl + Shift + P` → "Preferences: Open Settings (JSON)").
2. Agrega lo siguiente:

```json
"code-runner.executorMap": {
  "typescript": "ts-node"
}
```

3. Guarda los cambios y ahora puedes ejecutar archivos `.ts` directamente con **Run Code**.

---

## ⚙️ Opciones clave en `tsconfig.json`

Algunas opciones útiles que puedes configurar en `tsconfig.json`:

- "target": Versión de ECMAScript a la que se compilará (`es5`, `es6`, `esnext`...)
- "module": Sistema de módulos a utilizar (`commonjs`, `es6`...)
- "strict": Habilita el modo estricto para mejores prácticas
- "outDir": Carpeta de salida para los archivos compilados
- "rootDir": Carpeta donde están los archivos TypeScript

Ejemplo:

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

## 📦 Configuración de TypeScript con Node.js

### 1️⃣ Iniciar un proyecto con TypeScript

```sh
mkdir mi-proyecto
cd mi-proyecto
npm init -y
npm install typescript ts-node @types/node --save-dev
```

### 2️⃣ Agregar un script en `package.json`

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Ahora puedes ejecutar tu código con:

```sh
npm run start
```

---

## 🚀 Recursos útiles

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/)
- [TypeScript en GitHub](https://github.com/microsoft/TypeScript)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

¡Feliz coding! 🎯

# 📌 TypeScript Notes

Este repositorio contiene mis apuntes y prácticas mientras aprendo TypeScript. Aquí guardo comandos esenciales y configuraciones útiles para recordar rápidamente cómo trabajar con TS. 🚀

---

## 📂 Configuración inicial de TypeScript

### 1️⃣ Instalar TypeScript de forma global

```sh
npm install -g typescript
```

### 2️⃣ Verificar la versión de TypeScript instalada

```sh
tsc -v
```

### 3️⃣ Crear un archivo de configuración `tsconfig.json`

```sh
tsc --init
```

Este comando generará un archivo `tsconfig.json` con la configuración básica para el proyecto.

---

## 📝 Comandos útiles de TypeScript

### ✅ Compilar un archivo TypeScript a JavaScript

```sh
tsc archivo.ts
```

Esto generará un archivo `archivo.js` en la misma carpeta.

### ✅ Compilar y observar cambios automáticamente

```sh
tsc --watch
```

Cada vez que guardes un cambio en un archivo `.ts`, TypeScript recompilará automáticamente.

### ✅ Ejecutar TypeScript sin compilar (usando `ts-node`)

```sh
npx ts-node archivo.ts
```

⚠️ **Nota:** Para usar este comando, primero instala `ts-node` con:

```sh
npm install -g ts-node
```

### ✅ Configurar `ts-node` en VS Code para ejecutar con Run Code
Si usas la extensión **Code Runner** en VS Code y quieres ejecutar TypeScript directamente, sigue estos pasos:
1. Abre las configuraciones de usuario (`Ctrl + Shift + P` → "Preferences: Open Settings (JSON)").
2. Agrega lo siguiente:

```json
"code-runner.executorMap": {
  "typescript": "ts-node"
}
```

3. Guarda los cambios y ahora puedes ejecutar archivos `.ts` directamente con **Run Code**.

---

## ⚙️ Opciones clave en `tsconfig.json`

Algunas opciones útiles que puedes configurar en `tsconfig.json`:

- "target": Versión de ECMAScript a la que se compilará (`es5`, `es6`, `esnext`...)
- "module": Sistema de módulos a utilizar (`commonjs`, `es6`...)
- "strict": Habilita el modo estricto para mejores prácticas
- "outDir": Carpeta de salida para los archivos compilados
- "rootDir": Carpeta donde están los archivos TypeScript

Ejemplo:

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

## 📦 Configuración de TypeScript con Node.js

### 1️⃣ Iniciar un proyecto con TypeScript

```sh
mkdir mi-proyecto
cd mi-proyecto
npm init -y
npm install typescript ts-node @types/node --save-dev
```

### 2️⃣ Agregar un script en `package.json`

```json
"scripts": {
  "start": "ts-node src/index.ts"
}
```

Ahora puedes ejecutar tu código con:

```sh
npm run start
```

---

## 🚀 Recursos útiles

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/)
- [TypeScript en GitHub](https://github.com/microsoft/TypeScript)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

¡Happy coding! 🎯

