## Trabajando en equipo ##

### 1. Coordinador ###

A la hora de trabajar en equipo siempre habrá un repositorio central alrededor del cuál girarán todos los cambios. Las empresas suelen tener una cuenta Enterprise en la que tienen lugar todas las actualizaciones del código. Sin embargo, habrá ocasiones en las que colabores otras personas fuera del mundo laboral con motivo de realizar un proyecto común, ya sea por hobby, por incrementar tus conocimientos, etc. 

En tal caso lo normal no es usar una cuenta Enterprise, si no acordar cuál de los componentes del equipo será el encargado de supervisar y coordinar el repositorio en su cuenta personal. Esta persona tendrá la ardua tarea de revisar y aceptar los llamados **pull request** que le envíen el resto de compañeros de equipo. Por tanto, el coordinador deberá crear un repositorio para el proyecto a realizar y compartir el enlace con el resto del grupo. 

### 2. Conexión con el repositorio principal ###

Solo el coordinador tiene acceso al repositorio principal, por tanto, ¿cómo podemos colaborar con el proyecto si no tenemos acceso a dicho repositorio? Para tal fin vamos a seguir los siguientes pasos:

  1. Lo primero que debemos hacer es hacer un **fork** del repositorio principal. Para ello, el coordinador debe enviarnos el enlace al mismo y darnos acceso en caso de tratarse de un repositorio privado. Esta opción se encuentra disponible en la parte superior derecha bajo la barra de navegación principal.
  
  2. Tras realizar el **fork** se habrá creado una copia exacta del proyecto en nuestra cuenta de GitHub. Lo siguiente será hacer un **clone** de esta copia en algún directorio de nuestro ordenador.
  
  3. Accedemos al directorio donde se encuentra el repositorio clonado. Este repositorio estará automáticamente conectado al repositorio forkeado en nuestra cuenta de GitHub. Esta conexión es a lo que Git llama "origin". Dado que también necesitaremos actualizar el proyecto cuando el coordinador haga cambios en el repositorio principal, necesitamos que exista también una conexión a dicho repositorio para poder realizar un **pull** cuando sea necesario. Para tal fin debemos indicarle a Git dos direcciones:
  
     *  La dirección del repositorio forkeado en nuestra cuenta. Lo mejor en este caso es renombrar la conexión de "origin" a, por ejemplo, "fork". Para ello emplearemos el comando `git remote rename origin fork`. A partir de ahora, si queremos subir un cambio a nuestro repositorio copiado lo haremos así: `git push -u fork master`.
     
     *  La dirección del repositorio original. Ahora que hemos renombrado la dirección "origin" a "fork", vamos a crear de nuevo una dirección "origin" que apuntará al repositorio principal: `git remote add origin URL-del-repositorio-original`. De esta forma podremos descargarnos los nuevos cambios que vayan teniendo lugar en el proyecto para tener siempre el repositorio actualizado mediante el comando `git pull origin master`.
     
Con esto ya tendremos las conexiones establecidas correctamente. ¡Ojo! Puede que hayáis pensado en crear una única cuenta de GitHub compartida a la que todos los miembros del equipo. Esto no es para nada una buena práctica y creo que los motivos son más que evidentes.

### 2. Uso de ramas ###

En Git, las ramas son espacios o entornos independientes que permiten trabajar sobre un mismo proyecto sin provocar algún daño a los archivos originales del proyecto. Esto nos permitirá trabajar en nuevas funcionalidades que queramos implementar de una forma segura. Es por este motivo que generalmente se suele trabajar sobre ramas, y, una vez comprobado que la nueva funcionalidad que se está desarrollando en esa rama está bien y no causa ningún conflicto, se realiza un **merge** con la rama master. 

Para crear una nueva rama basta con emplear el comando `git branch branch-name`. Podemos visualizar la lista de ramas existentes con `git branch`. Para movernos de una rama a otra utilizaremos `git checkout branch-name`. Es recomendable eliminar la rama una vez finalizado el desarrollo de la nueva funcionalidad para la cuál ha sido creada y tras haber sido mergeada con el master. Para tal fin tenemos `git branch -d branch-name`. ¡Pero cuidado! Esto solo eliminará la rama localmente. Si en algún momento hemos pusheado dicha rama a GitHub seguirá existiendo en la nube. Como consecuencia de esto, debemos asegurarnos de borrar la rama tanto localmente como remotamente. Para esto último emplearemos `git push origin --delete branch-name`.