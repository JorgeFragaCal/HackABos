# Curso de HTML e CSS

- Breve historia do CSS
- Relación de HTML e CSS
- Síntaxe do CSS
- Selectores
- Modelo de cascada e herdanza
- Modularización

### Breve historia do CSS

- O CSS foi proposto no ano 1994 como unha linguaxe para especificar como os documentos HTML son presentados aos usuarios.
- A w3 escolleu entre múltiples propostas de follas de estilo, o CSS foi a escollida.
- No ano 1996 aparece a primeira especificación da w3: CSS1.
- Non é unha idea nova, dende os anos 80 habia diferentes sistemas de especificar a presentación de documentos XML e similares.
- No ano 1997 especificouse o CSS2 e no 1998 o CSS3 que é unha especificación aínda non rematada e é que usamos agora.
- O soporte nos navegadores nos primeiros anos foi moi limitado e non foi ata metade dos anos 2000 cando comezou o seu uso serio.

### Relación de HTML e CSS

- O CSS aplícase ao HTML mediante unha serie de reglas que definen como determinados tags se mostran.

- Por exemplo: quero que todos os meus encabezados de primeiro nivel teñan o texto amarelo e fondo azul.

- O primeiro que fai o navegador é cargar o HTML

- No HTML hai referencias a reglas CSS, veremos que estas referencias poden ser de diferentes tipos.

- Cando todo está cargado o navegador convirte o HTML ao que se chama DOM que é unha representación en memoria da estructura do HTML.

- O navegador procesa o CSS e comproba se hai algunha regla aplicable ao DOM e aplícaa.

- Finalmente o navegador renderiza o DOM no viewport (parte do navegador onde se ve o contido do body)

- Exemplo:

  ```html
  <!DOCTYPE html>
  <html lang="gl">
    <head>
      <meta charset="utf-8" />
      <title>CSS!</title>

      <style type="text/css">
        h1 {
          color: yellow;
          background: blue;
        }
      </style>
    </head>
    <body>
      <h1>Ola amigas!</h1>
    </body>
  </html>
  ```

#### Xeitos de aplicar o CSS

- Hai tres xeitos de cargar CSS no noso HTML:

  - aplicar directamente as propiedades ás etiquetas (non recomendado):

    ```html
    <h1 style="color:yellow;background:blue">Isto non mola!</h1>
    ```

  - usando a etiqueta style no _head_ (ver exemplo anterior). Tampouco é recomendado.

  - O xeito recomendado é usar un arquivo CSS externo, para iso temos que indicar no head a referencia a ese arquivo, este sería o HTML:

    ```html
    <!DOCTYPE html>
    <html lang="gl">
      <head>
        <meta charset="utf-8" />
        <title>CSS!</title>

        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Ola amigas!</h1>
      </body>
    </html>
    ```

    e este o arquivo CSS referenciado no _head_:

    ```
    h1 {
        color: yellow;
        background: pink;
    }
    ```

### Síntaxe do CSS

- O CSS constrúese mediante declaracións agrupadas en bloques, e eses bloques están asociados a selectores que definen a que elementos HTML se aplican. O conxunto de selector e bloque de declaracións é unha regla de CSS.

- As declaracións de CSS están compostos por propiedades e valores separadas internamente por dous puntos (:) e coa seguinte declaración con ";":

  ```css
  background: blue;
  ```

  - As propiedades indican o aspecto estilístico que queremos modificar: fonte, cor, fondo, posición...
  - Os valores indican como queremos mudar o aspecto estilístico anterior.

- Os bloques son grupos de declaracións agrupados entre chaves ({}):

  ```css
   {
    background: blue;
    color: yellow;
  }
  ```

- É obrigatorio que todas as declaracións estén agrupadas en bloques, fora dos bloques non deben aparecer.

- Os bloques teñen que estar precedidos por selectores, os selectores definen a que elementos se aplican as declaracións agrupadas no bloque. Estas declaracións poden facer referencia directa a tags, clases, ids:

  ```css
  h1 {
    background: blue;
    color: yellow;
  }
  ```

- Fora dos bloques poden aparecer os chamados CSS Statements, que son reglas especiais de CSS que definen tipos de letra, codificación de caracteres, media queries ou módulos que veremos nas seguintes seccións:

  ```css
  @import 'ficheiro.css';
  ```

- Ao igual que no HTML o espazo en blanco nos ficheiros CSS son ignorados.

### Selectores

- Os selectores de CSS permiten asociar bloques de declaracións de CSS con elementos nas nosas páxinas.
- Tipos de selectores:
  - **Selectores simples**: permiten seleccionar por tipo de elemento (nome do tag), class ou id.
  - **Selectores por atributos**: permiten seleccionar elementos baseándose nos seus atributos ou valores de atributos.
  - **Pseudo-classes**: permiten seleccionar elementos baseándose no seu estado actual.
  - **Pseudo-elements**: permite seleccionar contido posicionado respecto a un elemento ou xerar contido asociado a un elemento.

#### Selectores simples

##### Selectores por tipo de elemento

- Para seleccionar un elemento polo seu nome do tag simplemente indicamos o nome do tag no selector:

  ```html
  <p>lorem ipsum</p>
  ```

  ```css
  p {
    color: rebeccapurple;
  }
  ```

- Os selectores por nome de tag son moi potentes e afectan a todos os tags, hai que usalos con coidado e normalmente combinados con outros selectores. Veremos máis adiante como facelo.

- Hai un selector especial que é asterisco (\*) que selecciona todos os elementos, usar con coidado ou combinado con outros selectores:

  ```css
  * {
    background: rgba(0, 255, 0, 0.2);
  }
  ```

##### Selectores por class

- O class é un atributo que pode ter calquera elemento HTML. Pódese especificar unha única class ou varias para cada elemento e pode haber multiples elementos na mesma páxina co mesmo class. Non poden ter espazos.

  ```html
  <p class="defecto cabeceira parrafo-especial">lorem ipsum</p>
  ```

- Para seleccionar por class en CSS simplemente indicamos o nome da class cun punto (.) antes:

  ```css
  .cabeceira {
    background: lightgray;
  }
  ```

##### Selectores por id

- O id é un atributo que pode ter calquera elemento HTML, ao igual co class non pode ter espazos. Os ids teñen que ser únicos dentro do mesmo documento HTML pero poden repetirse en outros documentos do sitio web.

  ```html
  <h1 id="principal">Lorem ipsum</h1>
  ```

- Para seleccionar por id en CSS simplemente indicamos o nome do id cun cancelo (#) antes:

  ```css
  #principal {
    text-decoration: underline;
  }
  ```

#### Selectores por atributos

- Os elementos HTML poden ter atributos variados:

  ```html
  <p lang="en">Texto en inglés</p>
  <a href="http://google.com">Google</a>
  ```

- Aparte dos atributos propios de cada elemento (ver a documentación da MDN de cada elemento particular) estes son os atributos globais que soportan todos os elementos: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes

- O atributo especial data permítenos crear atributos personalizados, simplemente temos que formar un atributo que se chame "data-ALGO":

  ```html
  <p data-autor="Berto">Texto por Berto</p>
  <article data-etiquetas="producto destacado oferta">...contido</article>
  <button data-numero="3">Enviar</button>
  ```

- Para seleccionar por nome de atributo usamos o selector _[atributo]_:

  ```css
  [lang] {
    background: blue;
  }

  [data-autor] {
    color: red;
  }
  ```

- Para seleccionar por combinación de atributo e valor usamos _[atributo=valor]_:

  ```css
  [data-autor='Berto'] {
    color: green;
  }
  ```

  Iso seleccionaría todos os elementos que teñan o atributo _data-autor_ con valor Berto.

- Para selectionar por contido de atributo usamos [atributo~=valor]:

  ```css
  [data-etiquetas~='ofterta'] {
    font-size: 2rem;
  }
  ```

  Iso seleccionaría todos os elementos que teñan a palabra oferta no valor do seu atributo _data-etiquetas_

- Seguindo a lóxica do punto anterior temos:

  - `[atributo^="val"]`: selecciona todos os elementos cuxo atributo comece por "val"
  - `[atributo$="val"]`: selecciona todos os elementos cuxo atributo remate por "val"
  - `[atributo*="val"]`: selecciona todos os elementos cuxo atributo conteña a cadea de texto "val", da igual que forme parte dunha palabra, p.ex.: seleccionaria os atributos con valor "o**val**ado".

- Máis detalles e exemplos sobre isto aquí: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors

#### Pseudo-classes

- As pseudo-classes permiten darlle estilos aos elementos **en base ao seu estado, posicion, fillos, etc.**

- Escríbense con dous puntos (:) antes e normalmente complementan a outros selectores.

- Normalmente complementan a outros selectores:

  ```html
  <a href="http://google.com">Google</a>
  ```

  ```css
  a:visited {
    color: gray;
  }
  ```

- Hai moitas pseudo-classes que se poden consultar aquí: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes

- Algunhas das pseudo-classes máis usadas:

  - :checked - selecciona inputs de tipo checkbox que estén marcados.
  - :first-child - selecciona os elementos que sexan primeiros fillos dun grupo de fillos.
  - :last-child - o mesmo que o anterior pero o último.
  - :not(selector) - selecciona elementos non afectados por "selector"
  - :nth-child(valor) - selecctiona elementos fillos doutro en base á súa posición.

#### Pseudo-elements

- Os pseudo-elements son selectores que nos permiten referirnos a **partes dos elementos**.

- Son similares ás pseudo-classes pero en lugar de dous puntos (:) antes escríbense con dous puntos dobles (::).

- Os pseudo-elements máis usados son:

  - ::first-letter - permite darlle estilo á primeira letra do texto que contén o elemento
  - ::first-line - o mesmo que o anterior pero á primeira liña de texto
  - ::selection - permite darlle estilo ao texto que teñamos seleccionado

- Hai dous pseudo-elements especiais que seleccionan partes dos elementos **que non existen** e permiten "crealas" asociandolles un contido usando unha propiedade especial de CSS. Son ::before e ::after.

  ```css
  p.especial::after {
    content: 'Ver máis';
    color: red;
  }
  ```

  Isto crearía o contido textual "Ver máis" despois dos parrafos coa class "especial". É importante ter en conta que isto non crea unha etiqueta nova se non que só crea o contido nunha especie de elemento sen nome e sen valor estructural pero que pode ser estilado. No exemplo anterior aparecería de cor vermella.

#### Combinación de selectores

- Hai varios xeitos de combinar selectores para optimizar o noso CSS e non ter que escribir tantas liñas:
  - **Lista de selectores:** `A, B` calquera elemento que seleccione A e/ou B.
  - **Descendentes:** `A B`: selecciona os elementos B que sexan fillos de A.
  - **Descendentes directos:** `A > B` selecciona os elementos B que teñan de pai a A.
  - **Adxacentes:** `A + B` selecciona os elementos B que apareza xusto despois de A sendo os dous fillos directos do mesmo pai.
  - **Irmáns non seguidos:** `A ~ B` selecciona os elementos B que aparezan despois de A aínda que non sexan os seguintes e que compartan o mesmo pai.

### Modelo de cascada e herdanza

#### A cascada

- Cando escribimos selectores chegará un momento que múltiples reglas de CSS afectan a un mesmo elemento.

- O modelo de cascada define cal das reglas gaña e é aplicada. O modelo de cascada é complexo e require experiencia a parte de teoría á hora de usalo ben.

- Hai tres factores que afectan ao modelo de cascada: importancia, especificidade e orde.

- A importancia dunha propiedade de CSS podemos aplicala usando unha declaración especial: _!important_:

  ```html
  <p class="especial">lorem ipsum</p>
  <p class="especial" id="unico">hello kitty</p>
  ```

  ```css
  #unico {
    border: 1px solid red;
    color: red;
  }

  .especial {
    color: green;
    border: none !important;
  }
  ```

- Se estamos usando moitos !important no noso CSS estamos facendo algo mal, a mellor estratexia é evitalos completamente unicamente que sexa a última opción e saibamos o que estamos facendo.

- A especificidade determina canto de específico é un selector.

- Como regla xeral os selectores de elemento teñen pouca especificidade, os de clase máis e os de id aínda máis. O único xeito de gañar a un selector de ID é usar algunha propiedade co keyword !important.

- O CSS que se establece mediante o atributo style directamente nos tags (**non recomendado!**) gaña sempre a calquera outro CSS.

- Quitando estas excepcións as reglas son así:

  - Cada selector vai ter un valor de especificidade numérico.

  - Cada elemento que conteña o selector aumenta a especificidade en 1.

  - Cada clase ou pseudo-clase que conteña o selector aumenta a especificidade en 10.

  - Cada id que conteña o selector aumenta a especificidade en 100.

  - Os pseudo-elementos non afectan ao valor de especificidade.

    ```css
    /* especificidade: 101 */
    #outer a {
      background-color: red;
    }

    /* especificidade: 201 */
    #outer #inner a {
      background-color: blue;
    }

    /* especificidade: 104 */
    #outer div ul li a {
      color: yellow;
    }

    /* especificidade: 113 */
    #outer div ul .nav a {
      color: white;
    }

    /* especificidade: 24 */
    div div li:nth-child(2) a:hover {
      border: 10px solid black;
    }

    /* especificidade: 23 */
    div li:nth-child(2) a:hover {
      border: 10px dashed black;
    }

    /* especificidade: 33 */
    div div .nav:nth-child(2) a:hover {
      border: 10px double black;
    }
    ```

- Por último a orde na que está especificado o CSS tamén afecta á Cascada, polo tanto a dúas reglas coa mesma especificidade exacta afecta sempre a última que aparece no código.

#### A herdanza

- A herdanza en CSS determina que propiedades van afectar aos fillos dun elemento cando lle aplicamos CSS.
- Algunhas propiedades hérdanse e outras non. Non hai unha regla xeral para establecer cales son unhas e outas se non que hai que aplicar o sentido común (ou mirar a documentación).
- Por exemplo, o tipo de letra, cor si que se herda pero o marxe non.
- Para ver cales son herdadas e cales non pódese consultar a documentación, p.ex: se imos á documentación da propiedade _font-style_: https://developer.mozilla.org/en-US/docs/Web/CSS/font-style#Specifications vemos na sección de "Specifications" unha táboa de fondo azul que indica se é "Inherited" ou non.
- Hai dous valores especiais que son universais a calquera propiedade de CSS que permite controlar a herdanza: _inherit_ e _initial_. As propiedades que teñan valor _inherit_ sempre herdarán o valor do seu elemento pai e as que teñan o valor _initial_ cancelarán calquera herdanza e collerán o valor da folla de estilos por defecto do navegador

### Modularización

- Os ficheiros CSS permiten cargar outros ficheiros CSS mediante o _statement_ @import.

- O @import vai acompañado da URL que queremos cargar:

  ```css
  @import '/css/outros-estilos.css';
  ```

- Os @import **sempre** deben aparecer ao principio da folla de estilos antes que calquera outra regla.
