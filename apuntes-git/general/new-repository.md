## Creando un nuevo repositorio en GitHub ##

### 1. Primeros pasos ###

1. Acceder a la cuenta de GitHub y hacer clic en el icono **+** situado en la parte superior derecha de la página.

2. Seguir los siguientes pasos:
    *  Dar un nombre al repositorio.
    *  Agregar una descripción (de ser necesaria).
    *  Seleccionar el tipo de repositorio: público o privado.
    *  Indicar si queremos incluír un README, un .gitignore y/o un tipo de licencia.

Tras realizar todo lo visto en el apartado anterior se habrá generado un nuevo repositorio vacío. Para poder subir nuevos archivos será necesario realizar un **clone** del repositorio creado en el ordenado del usuario.

### 2. Clonar un repositorio en nuestro ordenador ###

Esto es válido para cualquier repositorio al que tengamos acceso. Abrir el terminal y dirigirse al directorio donde se desea clonar el repositorio. Una vez dentro, emplear el comando **git clone** seguido de la URL del repositorio a clonar.

   * `git clone https://github.com/usuario/repo-name`

Con esto se habrá generado una nueva carpeta en la ubicación indicada en el terminal. 

### 3. Actualizar el repositorio ###

Para tal acción será necesario acceder mediante el terminal a la carpeta que contenga el repositorio:
   1. Lo primero será inicializar Git. Esta acción solo será necesaria la primera vez que se trabaje con el repositorio. Para ello se emplea el comando `git init`.
   
   2. Lo segundo será realizar el llamado **commit**. Para ello es necesario indicar los cambios a realizar (agregar ficheros, borrar ficheros, agregar directorios, etc.). Si solo se va a agregar un archivo o directorio concreto basta con ejecutar el comando `git add` seguido del nombre del archivo o directorio que se desee agregar (ej: `git add index.html`). Esto puede ser un tanto tedioso si se quiere agregar una cantidad de archivos más grande. La otra opción es emplear el comando `git add .` o `git add *`. Con esto todos los archivos y directorios que se encuentren en la carpeta serán incluídos en el nuevo commit.
   
   3. Tras lo anterior, ejecutaremos el comando `git commit -m "commit"`. Se debe substituír la parte de `"commit"` por un texto que describa los cambios que se van a realizar.
  
Con estos sencillos pasos se habrá creado un nuevo commit en el repositorio. 

### 4. Subir los nuevos cambios a GitHub ###
  
Si se desea que los cambios realizados en el repositorio se vean reflejados en GitHub hay que ordenarle a Git que haga un **push** al repositorio en la nube. Para ello basta con introducir el comando `git push -u origin master`. Se solicitará el usuario y contraseña de la cuenta de GitHub donde se encuentra el repositorio.

<br>