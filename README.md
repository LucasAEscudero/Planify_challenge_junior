# Planify_challenge_junior
## Instalacion y ejecucion
> [!NOTE]
> Si se accede desde el deploy del proyecto que se encuentra al final del README, se puede omitir la instalacion y la ejecucion!
1. Posicionado en la carpeta del proyeto, sed ebe ejecutar el siguiente comando para la instalacion de dependencias:

```sh
npm install
```

2. Luego, se debe ejecutar la siguiente combinacion:

```sh
npm run build
npm run preview
```
    
## Ejecucion del proyecto (paso a paso)
1. Si se accede desde el deploy se puede omitir este paso! Desde la consola de la carpeta se deben ejecutar los comandos 'npm install' y, seguido de eso, el comando 'npm run dev' (tambien se pueden ejecutar los comandos 'npm run build' + 'npm run preview').
   
2. Ya en la ventana del navegador se procede a seleccionar una categoria a eleccion, la cual desplegara distintas opciones/servicios y que, una vez seleccionado un servicio, hara que aparezca el boton para continuar al siguiente paso.
   
3. Como siguiente paso, la fecha y el horario del turno. ACLARACION: El unico servicio que tiene turnos disponibles proveniente de la API (JSON) es el que se encuentra en la categoria 'Hair' y cuyo nombre es 'Cut and Style', como los demas no tienen turnos solo aparecera un mensaje avisando que no hay turnos de ese servicio, por lo que el boton para avanzar al siguiente paso estara desabilitado.
   
4. En este paso solo se mostrara el servicio y turno para confirmar. Despues de presionar el boton se redirigira a la ruta '/my-turns', la cual contendra todos los turnos guardados en el localStorage.
   
5. Puede volver a la ruta principal '/' desde la navbar ('Reservar') para seleccionar otro servicio o turno!! Todos los turnos 'confirmados' se guardaran en el localStorage, pero como los datos provienen de un JSON tanto los servicio como turnos disponibles seran siempre los mismos.

> [!NOTE]
> En los items anteriores no menciono ninguna paso para probar el responsive, por lo cual es mejor probarlo con distintas dispositivos o cambiando la resolucion de la ventana dle navegador!

## Detalles Relevantes
#### Tecnologias usadas: 
- HTML5
- CSS3 y TailwindCSS
- Typescript
- React + Vite
- Zustand (manejador de estado global)
- Git

#### Responsive
El diseño del proyecto, el cual fue hecho usando CSS3 junto con TailwindCSS, es responsive, por lo que se ajusta a la pantalla del usuario, y, dependiendo de la pantalla del usuario, la visualizacion de la navbar cambiara su posicion (haciendo que para pantallas pequeñas la navbar se encuentre en la parte inferior de la pantalla, mientras que en pantallas con un width minimo de 640px la navbar se encontrara en parte superior).

#### Para que se utilizo Zustand?
Se utilizo zustand para el manejo y la obtencion de los turnos confirmados por el usuario, los cuales se guardan en el localStorage del navegador (obviamente en un proyecto real o mas grande se utilizaria una base de datos para guardar y obtener datos). Si bien no es algo que se pedia en el challenge, me parecio una buena idea agregarlo como un extra, para que no parezca vacia la seccion de 'Mis turnos' y hacer mas intuitivo el 'Confirmar' al final del proceso.

## Extras
#### - Manejador de estado global + localStorage ya mencionados anteriormente
#### - Deploy (OnRender): https://planify-challenge-junior.onrender.com
