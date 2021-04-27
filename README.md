<div align="center" id="top"> 
  <img src="./.github/GithubIcon.png" alt="Museum Gallery" width=250 />

  &#xa0;
</div>

<h1 align="center">Museum Gallery</h1>

<p align="center">
  <img alt="Github Lenguaje mas utilizado" src="https://img.shields.io/github/languages/top/feliamunda/museum-gallery?color=56BEB8">

  <img alt="Github numero de lenguajes utilizados" src="https://img.shields.io/github/languages/count/feliamunda/museum-gallery?color=56BEB8">

  <img alt="Tamano del repo" src="https://img.shields.io/github/repo-size/feliamunda/museum-gallery?color=56BEB8">

  <img alt="Licencia" src="https://img.shields.io/github/license/feliamunda/museum-gallery?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">Acerca de</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Características</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requerimientos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Empezar</a> &#xa0; | &#xa0;
  <a href="#memo-license">Licencia</a> &#xa0; | &#xa0;
  <a href="https://github.com/feliamunda" target="_blank">Autor</a>
</p>

<br>

## :dart: Acerca de ##

Esta App de react consume la API de Hardvard Museums para mostrar en una interfaz responsiva las diferentes obras de arte y piezas de los museos de Hardvard.

### Principal Problema / Solución
- Estandarizar y jugar con el tamaño de las imagenes para que no se superpongan y mantengan un tamaño uniforme en todos los dispositivos sin alterar su proporcion orginal
- La solución fue agregar una condición cuando se lee la imagen en la respuesta de la API para que agregue o no una clase CSS que cambia la manera en que se muestra cada imagen dependiendo si su proporcion es mayor por el ancho o por el alto.

### Arquitectura
La arquitectura elegida al trabajar con [React](https://pt-br.reactjs.org/) fue la orientada a componentes, en este caso haciendo uso de componentes funcionales, ya que al trabajar con componentes aporta modularidad y flexibilidad a la aplicacion a la vez que permite pensar en la escalabilidad de forma progresiva, al ser una aplicacion muy sencilla en su version inicial se deja la posibilidad de añadir y expandir funcionalidades.

### Trade-offs
La implementación inicial es funcional sin embargo tiene muchos campos de mejora:
- Implementación de un loader para mejorar la experiencia de usuario.
- Implementar un Lazy Load para los componentes Frame.
- Completar las pruebas unitarias a un 100% de cobertura (Actualmente el componente Gallery se encuentra en 83.33% en la sección *Branches*).
- Optimizar las peticiones de la api condicionando las peticiones a si no se encuentran almacenandas en un storage local de páginas ya cargadas en la memoria para no sobrecargar las peticiones.
- Mejorar Diseño (Diseñar UI)
- Añadir animaciones a los Frames.

### [Código orgullo](https://github.com/feliamunda/museum-gallery/blob/master/src/library/components/Gallery/Gallery.js)

### [Producción](https://feliamunda.github.io/museum-gallery/)
## :sparkles: Caracteristicas ##

:heavy_check_mark: Scroll Infinito\
:heavy_check_mark: Responsivo\
:heavy_check_mark: Escalable

## :rocket: Tecnologías ##

Las siguientes tecnologias fueron usadas en este proyecto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS](https://www.w3schools.com/css/)

## :white_check_mark: Requerimientos ##

Antes de empezar :checkered_flag:, necesitas tener [Git](https://git-scm.com) y [Node](https://nodejs.org/en/) instalados.

Y definir en tu sistema o ambiente las variables de entorno requeridas
### *Variable de entorno requerida*
REACT_APP_HARDVARD_MUSEUM_APIKEY *

## :checkered_flag: Empezar ##

```bash
# Clona el projecto
$ git clone https://github.com/feliamunda/museum-gallery

# Accede
$ cd museum-gallery

# Instala dependencias 
$ npm install

###OPCIONES###

# 1- Corre el projecto
$ npm start
# El servidor se inicializa en <http://localhost:3000>

# 2- Construye el projecto
$ npm run build
# Servir el directorio con el servidor web de su preferencia

# 3- Corre Pruebas con cobertura activada
$ npm test

##############
# Ctrl+C para salir de los procesos de servidor de prueba y testing
```

## :memo: Licencia ##

Este Proyecto esta bajo la licencia [GPL](LICENSE.md).


Hecho con el :heart: por <a href="https://github.com/feliamunda" target="_blank">Felicie Amundaray</a>

&#xa0;

<a href="#top">Volver arriba</a>
