# Portafolio personal

Proyecto de la Evaluación 2 de Full Stack 2, desarrollado con React, Vite y Ant Design.

## Requisitos

- Tener instalado Node.js versión 24 o superior y npm.
- Tener conexión a internet para descargar las dependencias.

Puedes comprobar las versiones instaladas desde la terminal:

```bash
node --version
npm --version
```

## 1. Abrir la carpeta del proyecto

Descarga o copia el proyecto en tu computador. Abre una terminal dentro de la carpeta `Portafolio`, donde está el archivo `package.json`.

Si estás en la carpeta que contiene el proyecto, puedes entrar con:

```bash
cd Portafolio
```

## 2. Instalar las dependencias

Ejecuta este comando dentro de la carpeta del proyecto:

```bash
npm install
```

Espera a que termine. Este comando instala las dependencias indicadas en `package.json` y las guarda en la carpeta `node_modules`.

## 3. Iniciar el proyecto

Para levantar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Abre en el navegador la dirección que aparezca en la terminal. Normalmente será [http://localhost:5173](http://localhost:5173). Si ese puerto está ocupado, utiliza la dirección que indique Vite.

Mantén la terminal abierta mientras uses la página. Al guardar cambios en el código, Vite actualizará la página automáticamente.

Para detener el servidor, presiona `Ctrl + C` en la terminal.

## Volver a abrir el proyecto

En las siguientes ocasiones, entra a la carpeta `Portafolio` y ejecuta `npm run dev`. Solo necesitas repetir `npm install` si faltan las dependencias o cambian las del proyecto.

## Otros comandos

Ejecuta estos comandos desde la misma carpeta:

| Comando | Función |
| --- | --- |
| `npm test` | Ejecuta las pruebas automáticas. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Genera la versión de producción en la carpeta `dist`. |
| `npm run preview` | Permite revisar la versión de producción localmente, después de ejecutar `npm run build`. |
