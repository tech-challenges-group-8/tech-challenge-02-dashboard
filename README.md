# Financial Management App - Dashboard

This is a **Financial Management** application built with [Vite](https://vitejs.dev), [Material-UI](https://mui.com/), and [React Router](https://reactrouter.com/). The app provides a clean and responsive interface for managing financial data, including dashboards, transactions, investments, and services.

## Features

- **Vite**: Fast build tool with hot module replacement and optimized performance.
- **Material-UI**: Modern and accessible UI components.
- **React Router**: Client-side routing for seamless navigation.
- **ESLint**: Code linting with custom rules for clean and maintainable code.
- **TypeScript**: Strongly typed codebase for better developer experience.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v23 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
```

## Running the Development Server

To start the development server, run:

```bash
npm run dev
```
Open http://localhost:5173 in your browser to view the app.

## Building for Production
To build the app for production, run:

```bash
npm run build
```
The optimized production build will be output to the dist directory. You can then preview the production build with:

```bash
npm run preview
```
## Linting the Code
To check for linting issues, run:

```bash
npm run lint
```
To automatically fix linting issues, run:

```bash
npm run lint:fix
```

## Module federation

Para rodar esse projeto localmente junto ao projeto principal `tech-challange-02`, é preciso rodar em modo produção:

```bash
npm run build
npm run preview
```

## Docker e Docker Compose

Este projeto inclui um `Dockerfile` para criar a imagem do frontend.

### Pré-requisitos

- [Docker](https://www.docker.com/get-started)

### Como usar

 **Build imagem local:**

   No diretório raiz do projeto, execute:

   ```bash
   docker build . -t tech-challange-front-dashboard
   ```

## Authors

- <img src="https://avatars.githubusercontent.com/u/132622525?v=4" width="24" height="24" alt="Fernando Gustavo Cortez" style="border-radius: 50%; vertical-align: middle;"> **Fernando Gustavo Cortez** - [https://github.com/FernandoGustavoCortez](https://github.com/FernandoGustavoCortez)

- <img src="https://avatars.githubusercontent.com/u/37480857?v=4" width="24" height="24" alt="Lucas Wenceslau" style="border-radius: 50%; vertical-align: middle;"> **Lucas Wenceslau** - [https://github.com/lucaswenceslau](https://github.com/lucaswenceslau)

- <img src="https://avatars.githubusercontent.com/u/71905861?v=4" width="24" height="24" alt="Osmar" style="border-radius: 50%; vertical-align: middle;"> **Osmar** - [https://github.com/MazFilho](https://github.com/MazFilho)

- <img src="https://avatars.githubusercontent.com/u/13469487?v=4" width="24" height="24" alt="Vittoria Zago" style="border-radius: 50%; vertical-align: middle;"> **Vittoria Zago** - [https://github.com/vittoriazago](https://github.com/vittoriazago)
