# Curso de HTML e CSS

- Transformacións
- Transicións
- Animacións

## Transformacións

- A propiedade CSS `transform` permítenos realizar múltiples transformacións na representación visual dun elemento.
- Estas transformacións aplícanse usando unha serie de funcións de CSS que reciben determinados parámetros.
- As funcións son as seguintes:
  - `translate`: Permite modificar a posición con respecto a posición por defecto
  - `scale`: Permite cambiar a escala do elemento
  - `rotate`: Permite rotar o elemento
  - Aparte poderemos combinar varias das anteriores.
  - Hai máis funcións de transformación aquí: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function, entre elas hai transformacións 3D pero as tres anteriores son as máis habituales. Podedes seguir investigando e facer probas coas outras.
- Por defecto as transformacións aplícanse tomando como referencia o centro visual do elemento pero podemos modificar esa referencia coa propiedade `transform-origin` que admite valores numéricos ou xenéricos como `top, left, right, bottom`.

### Translate

- A función translate permítenos desplazar o elemento horizontal ou verticalmente:

  ```css
  .selector {
    transform: translate(1rem, 2rem);
  }
  ```

  Esta clase moverá o elemento 1rem horizontalmente e 2rem verticalmente.

- Podemos usar calquera unidade con valores positivos ou negativos.

- Esta propiedade pode dividirse en dúas: `translateX(1rem)` e `translateY(2rem)`.

- Vimos unha propiedade similar que é `position: relative` pero as transformacións son máis modernas e poden usar a aceleración da tarxeta gráfica do dispositivo. Son máis eficientes en xeral.

### Scale

- A función scale permite cambiar o tamaño visual do elemento:

  ```css
  .selector {
    transform: scale(2);
  }
  ```

  Neste caso faría que o elemento visualmente fose o doble e escalaría proporcionalmente o seu tamaño horizontal e vertical. Podemos usar valores decimais. Tamén podemos usar valores negativos pero nese caso aplicará a escala invertindo especularmente o elemento.

  Se usamos a función con dous valores: `transform: scale(2, 1)` cada valor aplicará o cambio de escala horizontal e verticalmente.

- Esta propiedade igualmente pode dividirse en `scaleX` e `scaleY` que aplicaría a transformación por separado horizontal e verticalmente.

### Rotate

- A funcion rotate permite rotar o elemento:

  ```css
  .selector {
    transform: rotate(90deg);
  }
  ```

  O ángulo de rotación exprésade en grados: a rotación completa sería `360deg`

## Transicións

- As transicións permiten definir como se vai mostrar visualmente a través do tempo a transición entre dous estados dun elemento que por defecto son instantáneas.

- Permiten crear animacións básicas pero moi efectivas.

- Os cambios de estado dun elemento sabemos facelos usando pseudo-classes de CSS ou veremos como facelos usando JavaScript.

- As propiedades CSS que usaremos para definir a transición dun elemento serán:

  - `transition-property`: para definir que propiedade debe transicionar de xeito animado. Podemos usar o valor `all` para que calquera cambio de propiedade execute unha transición animada, pero non é moi optimizado.
  - `transition-duration`: define o tempo que vai durar a animación de transición. Mídese en segundos (s) ou milisegundos (ms).
  - `transition-timing-function`: define a curva de aceleración durante a duración da transición. Aquí podedes ver as funcións: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
  - `transition-delay`: define o tempo de espera antes de comezar a transición.

- Por exemplo:

  ```css
  .box {
    padding: 1rem;
    background: pink;
    width: 100px;
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    transition-delay: 500ms;
  }

  .box:hover {
    background: green;
  }
  ```

  Neste caso cando pasemos o cursor por enriba do elemento con clase `.box` este modificará o seu color de fondo gradualmente entre rosa e verde durante un segundo e a transición tardará medio segundo en comezar.

- A transición pode resumirse usando unha sóa propiedade de resumen:

  ```css
  .box {
    transition: background-color 1s ease-out 500ms;
  }
  ```

  Podedes ver máis sobre a síntaxe desa propiedade aquí: https://developer.mozilla.org/en-US/docs/Web/CSS/transition

- Aquí tedes un artigo moi interesante sobre este tema: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

## Animacións

- As animacións de CSS permiten establecer transicións de elementos máis avanzadas.
- Teñen dúas partes:
  - Definición da secuencia de animacións usando `keyframes`
  - Definición da aplicación da animación

### Keyframes

- Mediante o statement `@keyframes` definicmos os diferentes estados da animación e o nome da mesma:

  ```css
  @keyframes slide {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  ```

- Vemos que usamos os keywords `from` e `to` pero podemos usar tamén valores porcentuales para definir máis estados intermedios:

  ```css
  @keyframes crazymove {
    0% {
      top: 0;
      left: 0;
      transform: rotate(0);
    }
    25% {
      top: 100px;
      left: 100px;
      transform: rotate(180deg);
    }
    75% {
      top: 40px;
      left: 40px;
      transform: rotate(270deg);
    }
    100% {
      top: 0;
      left: 0;
      transform: rotate(0);
    }
  }
  ```

### Configuración da animación

- Despois de ter definidos os keyframes podemos aplicar a animación usando unha serie de propiedades de CSS similares ás vistas anteriormente de transformación:
  - `animation-name`: define que keyframes vai usar a animación. O valor debe ser o nome que lle demos aos keyframes.
  - `animation-duration`: define canto vai durar a animación en segundos (s) ou milisegundos (ms)
  - `animation-timing-function`: define como vai ser a curva de aceleración da animación igual que nas transicións.
  - `animation-delay`: define o retardo no inicio da animación.
  - `animation-iteration-count`: define cantas veces queremos que se execute a animación, podemos usar un valor numérico ou `infinite` se queremos que se execute indefinidamente.
  - `animation-direction`: define se a animación debe executarse de principio a fin, de fin a principio ou alternadamente:
    - `normal`: a animación vai ir entre `from` e `to` (ou os seus valores porcentuais).
    - `reverse`: ... entre `to` e `from`.
    - `alternate`: alternará entre normal e reverse cada vez que se execute a animación (definimos o número de veces en `animation-iteration-count`).
  - `animation-fill-mode`: define como se aplica a animación antes e despois da súa execución. O seu valor por defecto é `none` polo que ningún estilo definido nos keyframes da animación se vai aplicar se a animación non se está executando. Outros valores son:
    - `forwards`: a animación cando remate manterá os estilos definidos nos keyframes finais da animación.
    - `backwards`: o elemento collerá os estilos definidos no primeiro keyframe da animación tan axiña se lle aplique, aínda que teña un retardo no comezo da mesma.
    - `both`: unha combinación dos anteriores.
