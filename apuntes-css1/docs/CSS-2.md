# Curso de HTML e CSS

- Unidades e cores
- Estilo de textos
- Tipografía
- O modelo de caixas
- Estilo de caixas

### Unidades e cores

#### Unidades

- Moitas das propiedades de CSS que vimos ata agora e moitas das que veremos teñen valores numéricos, a maioría deles van asociados a unidades pero non todos.

- As unidades historicamente máis habituais son os píxeles (px), que son unidades absolutas e sempre miden o mesmo:

  ```css
  p {
    margin: 5px;
    padding: 10px;
    border: 2px solid black;
  }
  ```

- Hai outras unidades absolutas como cuartos de milimetro (q), milimetros (mm), centímetros (cm), pulgadas (in), etc... pero o seu uso non é habitual.

- Coa proliferación da web en dispositivos de diferentes tamaños de pantalla as unidades absolutas están quedando cada vez máis en desuso a favor das relativas que en xeral dependen de outros factores como o tamaño do contedor ou outros factores proporcionais:

  - **em**: `1em` coincide co tamaño da fonte do elemento onde se aplica, que normalmente ven herdada do elemento pai. Se non se fai ningún cambio de fonte o valor por defecto de `1em` nos navegadores é de 16px.
  - **rem**: moi similar ao anterior pero en lugar de ter en conta o tamaño da fonte herdada do elemento pai sempre colle o tamaño de fonte do elemento raíz que é o `html`. Polo que se usamos sempre unidades rem será moi sinxelo modificar a proporción simplemente modificando o tamaño de fonte do elemento `html` mediante CSS.
  - **vw, vh**: unidades que dependen do tamaño da ventana do navegador. `1vw` é unha centésima parte do ancho da ventana e `1vh` é unha centésima parte do alto da ventana. Son útiles para establecer tamaños de caixas como veremos máis adiante.
  - **porcentaxes**: se establecemos unha unidade coma porcentaxe estamos establecendo o porcentaxe do valor por defecto desa propiedade. Por exemplo `font-size: 200%;` establecería un tamaño de fonte doble da herdada para ese elemento e se usamos `width: 50%;` estableceríamos un ancho da metade do contedor para ese elemento.

- Se temos que establecer unha unidade con valor 0 non é necesario establecer as unidades, 0 sempre é cero usemos a unidade que usemos: `margin: 0;` por exemplo.

- Hai outras propiedades que admiten valores sen unidades, por exemplo `line-height` que establece o alto de liña dun texto. Por defecto é 1.2, sen unidades.

#### Cores

- Hai varios xeitos de especificar as cores en CSS e todas teñen o mesmo resultado.

- O modelo de cor dos dispositivos modernos é de 24bits polo que admite 16.7 millóns de cores posibles, estos son unha combinación de 3 canles de cor: vermello (R), verde (G) e azul (B). Cada unha destas unidades permite 256 valores numéricos, entre 0 e 255.

- Xeitos de especificar cores en CSS:

  - Cores con nome: CSS soporta un gran número de cores por defecto que teñen un nome asociado. Aquí podedes ver a lista completa: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords Para establecer un color con nome simplemente establecemos o nome:

    ```css
    h1 {
      color: rebeccapurple;
    }
    ```

  - Formato hexadecimal: é unha notación de cor que permite establecer o valor das 3 canles como 6 números hexadecimais (valores entre 0 e f: 0123456789abcdef) agrupados en pares. É unha notación bastante común e todos os programas de edición de gráficos permiten ver o valor hexadecimal de calquera cor:

    ```css
    h1 {
      color: #663399;
    }
    ```

  - Formato RGB: é un xeito máis moderno de establecer a cor no que simplemente indicamos os valores de cada canle en formato decimal (entre 0 e 255), úsase así:

    ```css
    h1 {
      color: rgb(102, 51, 153);
    }
    ```

  - O formato RGB permite establecer un cuarto valor que especifica a opacidade ou transparencia da cor, o valor vai entre 0 onde a cor sería completamente transparente e 1 onde sería unha cor sólida (igual que se non se establecera). Os valores intermedios establecerían diferentes grados de transparencia, p.e. 0.5 sería un 50% de transparencia. Úsase rgba en lugar de rgb:

    ```css
    h1 {
      color: rgba(102, 51, 153, 0.5);
    }
    ```

- Usando esta utilidade online pódese cambiar entre formatos de cor: https://serennu.com/colour/hsltorgb.php

### Estilos de texto

- Moitos dos elementos HTML que vimos ata agora poden conter texto e podemos darlle estilos visuais a ese texto mediante CSS: cores, tipografías, tamaños, aliñamentos, etc...
- En xeral os estilos agrúpanse en dous tipos: estilos de fonte e estilos de disposición.

#### Estilos de fonte

- Podemos darlle un cor á fonte usando a propiedade `color`:

  ```css
  p {
    color: red;
  }
  ```

- Darlle unha tipografía con `font-family`:

  ```css
  p {
    font-family: Arial;
  }
  ```

  - As tipografías poden establecerse usando valores xenéricos: sans-serif, monospace e serif serían os valores xenéricos máis habituais para fontes sen serifa, monoespaciadas e con serifa. Especificando estes valores deixamos ao navegador que use a tipografía que considere máis apropiada para ese valor.

  - Tamén podemos establecer valores específicos usando o nome de fonte, por exemplo: Arial. Se o nome da tipografía ten varias palabras debemos poñelo entre aspas (""):

    ```css
    p {
      font-family: 'Comic Sans';
    }
    ```

  - O normal é especificar varias tipografías separadas por comas e o navegador vai coller a primeira que teña dispoñible:

    ```css
    p {
      font-family: 'Trebuchet MS', Arial, sans-serif;
    }
    ```

  - O normal neste último caso é establecer como última opción un nome xenérico para que no caso de que non teña dispoñible algun dos tipos anteriores sempre colla algunha similar.

- Para darlle tamaño ao texto usamos a propiedade `font-size` especificada en calquera das unidades que vimos anteriormente:

  ```css
  p {
    font-size: 200%;
  }

  p {
    font-size: 2rem;
  }

  p {
    font-size: 20px;
  }
  ```

- Hai outras propiedades como:

  - [font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style): permite establecer texto en cursiva.
  - [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight): permite establecer o grado de grosor do texto.
  - [text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform): permite modificar as maiúsculas e minúsculas do texto.
  - [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration): permite establecer diferentes tipos de subraiados.

- Se queremos darlle unha sombra ao texto usamos a propiedade `text-shadow` que define unha sombra establecendo o desplazamento horizontal, desplazamento vertical, grado de "difumine" e cor da sombra:

  ```css
  h1 {
    text-shadow: 2px 2px 5px black;
  }
  ```

- O exemplo anterior crearía unha sombra desplazada 2 pixeles horizontal e verticalmente con respecto ao texto e cun radio de difusión de 5px. A cor da sombra sería negro.

#### Estilos de disposición

- A disposición do texto afecta ao aliñado, interliñado e separación de letras e palabras.

- Para cambiar o aliñamento do texto usamos a propiedade `text-align` que admite os valores tradicionais `left, center e right`. Tamén permite o valor justify para xustificar o texto aos bordes pero non é recomendado polas limitacións dos navegagores á hora de dividir palabras.

  ```css
  h1 {
    text-align: center;
  }
  ```

* Para cambiar o alto de liña usamos _line-height_ que admite valores **sen** unidade. O valor por defecto é 1.2 e podemos. Por exemplo para poñer interliñado a doble espazo:

  ```css
  p {
    line-height: 2;
  }
  ```

* A separación entre letras e palabras pode controlarse coas propiedades letter-spacing e word-spacing que permiten valores nas unidades coñecidas e funcionan igual:

  ```css
  h1 {
    letter-spacing: -2px;
    word-spacing: 0.3rem;
  }
  ```

### Tipografías

- Ata agora aprendimos a asignar tipografías ao texto usando `font-family`, pero sempre dependíamos das tipografías que tivera dispoñibles o sistema operativo.

- Os navegadores modernos permiten usar tipografías aínda que non estén dispoñibles no sistema operativo cargando o propio arquivo da fonte.

- O método máis habitual é usar Google Fonts, só temos que escoller a fonte e teremos dispoñible o código CSS necesario para usar esa fonte, para a tipografía [Open Sans](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans) isto sería:

  ```css
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  ```

  Este código teríamos que colocalo ao principio de todo do CSS xa que é un `@import`, despois diso poderíamos usar esta tipografía como se fose calquera outra instalada:

  ```css
  p {
    font-family: 'Open Sans', sans-serif;
  }
  ```

  sempre especificando un nome de tipografía xenérico ao final por se houbera algún problema cargando a tipografía de Google.

- No caso de que Google Fonts non teña a tipografía que queremos temos que conseguir o arquivo da tipografía orixinal.

- Despois teríamos que convertir esa tipografía a varios formatos, xa que non todos os navegadores soportan os mesmos formatos de fonte. Os navegadores modernos soportan os formatos _woff_ e _woff2_ polo que usando eses chegaría se non temos necesidades especiais.

- Para facer a conversión podemos usar un servizo web como este: https://www.fontsquirrel.com/tools/webfont-generator

- Estes servizos aparte de convertir a fonte aos formatos máis habituais tamén nos dan o código CSS a insertar ou importar no noso sitio web.

- Despois de facer a conversión temos que colocar os arquivos resultantes nunha carpeta no noso sitio web e temos que definir a fonte a usar mediante o statement `@font-face`:

  ```css
  @font-face {
    font-family: 'cantarellregular';
    src: url('cantarell-regular-webfont.woff2') format('woff2'), url('cantarell-regular-webfont.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }
  ```

- É importante fixarnos que as referencias a `url(...)` realmente apunten aos ficheiros no noso servidor.

- Ver a demo no día respectivo do curso.

### O modelo de caixas

- O modelo de caixas de CSS é a base da creación de layouts nas webs. Todos os elementos que creamos están representados por unha caixa que ten unha serie de propiedades:

  ![img](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

- Ancho e alto:

  - As propiedades `width` e `height` definen o ancho e alto das caixas respectivamente e poden ser definidas en calqura das unidades que vimos ata agora. Excepto o height que non pode ser definido en unidades de tanto por cento (%).
  - O valor por defecto é `auto`. Cando teñen ese valor é o navegador quen calcula o tamaño das caixas que por defecto é o 100% do ancho da caixa pai e o alto establecido polos contidos internos da caixa.

- Padding:

  - A propiedade `padding` determina o marxe interno da caixa; a distancia entre os contidos e o borde interno.
  - Podemos especificar padding de cada un dos lados da caixa coas propiedades `padding-top, padding-right, padding-bottom e padding-left`.

- Margin:

  - A propiedade margin determina o marxe externo da caixa; a distancia dos bordes da caixa con outras caixas que a rodean.
  - O tamaño do marxe podemos establecelo en calquera das unidades de tamaño que xa coñecemos.
  - Se establecemos o valor como `auto` o navegador collerá o maior marxe dispoñible. Isto é aplicable aos marxes laterais e sirve tradicionalmente para centrar un elemento nun contedor.
  - Ao igual que o `padding` podemos especificar para cada lado: `margin-top, margin-right, margin-bottom e margin-left`.
  - Os marxes teñen un comportamento especial que se chama _margin collapsing_: cando dúas caixas con marxe se tocan a distancia entre elas non é a suma dos marxes se non a distancia definida polo marxe máis grande.

- Borde:

  - A propiedade `border` e define o ancho, estilo e cor do borde, a liña habitualmente visible que rodea á caixa. Veremos máis adiante como definilo.

- De todo isto conclúese que o ancho total dunha caixa é a suma do seu ancho máis o padding de cada lado máis o borde de cada lado. Se queremos mudar este comportamento por defecto podemos usar a propiedade `box-sizing` que permite os seguites valores:

  - `content-box`: é o valor por defecto. Se establecemos un `width` da caixa de 100px para calcular o ancho total o navegador sumará o borde e o padding.
  - `border-box`: cambia o modelo de caixas. Se establecemos un ancho de 100px o total sempre será 100px independentemente o ancho do borde e do padding.

#### Overflow

- Ao poder establecer un ancho e alto das caixas manualmente pode ocurrir que nalgúns casos o contido non colla dentro da caixa, para establecer que pasa con ese contido usamos a propiedade `overflow` que permite establecer estes valores (entre outros menos habituais):
  - `auto`: se o contido non colle na caixa o que quede fora non se verá e aparecerán unhas barras de scroll na caixa para poder ver ese contido.
  - `hidden`: o contido que non colla non se verá.
  - `visible`: o contido que non colla verase fora da caixa. Este é o valor por defecto.

#### Límites de ancho e alto

- Cando definimos unha caixa con ancho ou alto porcentual, por exemplo 50% podemos definir uns valores máximos dos que non queremos que se pase aínda que o tamaño do contedor creza.
- Para isto usamos as propiedades `max-width, max-height, min-width e min-height` e a caixa collera eses valores no caso de que o ancho ou alto calculado polas propiedades `width` e `height` saia dos límites que establecemos.

#### Display

- Todo o comportamento do modelo de caixas descrito nos anteriores puntos aplícase aos elementos de tipo **block**, pero xa sabemos que hai outros elementos que son de tipo **inline**. Veremos agora as particularidades de cada tipo con respecto ao modelo de caixas e como modificar mediante CSS o tipo de cada caixa. E veremos que hai outros tipos de caixas que podemos definir usando a propiedade `display` de CSS:

  - **Caixas de bloque**: os elementos de tipo bloque apílanse uns sobre outros e teñen por defecto o ancho do contedor do que son fillos. Podemos mudar o ancho e alto desas caixas con `width` e `height` e aplican o modelo de caixas tal como explicamos ata agora.
  - **Caixas inline**: os elementos inline flúen co texto, aparecen na mesma liña que o texto que os rodea e que outros elementos inline. O seu contido distribuirase en diferentes liñas se se pasa de tamaño. **Non** podemos establecer ancho e alto destas caixas pero si marxes (só horizontais), bordes e paddings.
  - **Caixas inline-block**: este modo novo pódese definir só por CSS e funciona como unha mistura dos anteriores. Podemos establecer un `width e height` e non dividirán o contido en diferentes liñas se se pasan de tamaño.

- Podemos modificar o tipo de caixa usando a propiedade `display` de CSS:

  ```css
  h1 {
    display: inline;
  }

  strong {
    display: block;
  }

  span {
    display: inline-block;
  }
  ```

- Hai outro tipo de caixa que se chama `flex` que veremos nos próximos capítulos.

### Estilo de caixas

#### Fondo

- O fondo dunha caixa é a área posterior ao espazo que ocupa o contido da caixa, padding e border. Pero non o marxe.

- Podemos especificar fondos de cor ou de imaxe usando unha serie de propiedades:

  - `background-color`: permite establecer unha cor de fondo. Por defecto as caixas teñen como cor de fondo `transparent`:

    ```css
    p {
      padding: 2rem;
      background-color: rebeccapurple;
      color: white;
    }
    ```

  - `background-image`: permite establecer unha imaxe como fondo usando a notación `url(...)`:

    ```css
    h1 {
      background-image: url(/images/fondo.png);
    }
    ```

  - `background-repeat`: por defecto os fondos de imaxe repítense para cubrir todo o espazo da caixa, esta propiedade permite definir como funciona esa repetición:

    - `no-repeat`: a imaxe de fondo non se vai repetir, só se mostrará unha vez.
    - `repeat-x`: a imaxe só se repetirá horizontalmente.
    - `repeat-y`: a imaxe só se repetirá verticalmente.
    - `repeat`: este é o valor por defecto e repetirá a imaxe horizontal e verticalmente ata cubrir todo o espazo da caixa.

  - `background-position`: no caso de ter un fondo cunha imaxe que non se repita esta propiedade vainos permitir posicionar esa imaxe. Por defecto soporta dous valores separados por espazo para especificar as coordenadas x e y da imaxe con respecto ao centro de coordenadas que é a esquina superior esquerda. Aparte de sorportar calquera das unidades coñecidas (px, rem, %), tamén soporta posicions con nome (e calquera combinación entre unhas e outras):

    - left, center, right: para posicionamento horizontal
    - top, center, bottom: para posicionamento vertical

    ```css
    p {
      background-color: rebeccapurple;
      background-image: url(/images/fondo.png);
      background-repeat: no-repeat;
      background-position: 200px center;
    }
    ```

  - `background-size`: permite establecer o tamaño da imaxe especificada como fondo con `background-image`. Os posibles valores son:

    - Dous valores separados por espazo: establece o tamaño da imaxe de fondo, os dous valores poden ser nas unidades típicas de css ou `auto`. O valor por defecto da propiedade é `auto auto`.
    - `contain`: tenta encaixar a imaxe sen recortala dentro do fondo sen recortala nen modificar as proporcións.
    - `cover`: tenta encaixar a imaxe no background sen modificar as proporcións pero pode recortala se é necesario. Esta propiedade é moi útil para poñer imaxes de fondo en caixas de tamaño variable.

- Ampliando coñecemento na MDN:

  - Fondos múltiples: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds#Multiple_backgrounds
  - A propiedade `background` permite establecer varias das propiedades comentadas anteriormente nunha sóa liña, podedes aprender máis dela aquí: https://developer.mozilla.org/en-US/docs/Web/CSS/background
  - Gradientes: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Backgrounds#Background_image_gradients

#### Borde

- O borde dunha caixa está definido por tres propiedades: anchura, estilo e cor. Por defecto as caixas teñen un borde de anchura `0`, negro e sólido (unha liña sen espazos).

- Podemos modificar o borde dunha caixa coa propiedade `border` que permite definir as tres propiedades na mesma liña ou establecelas por separado coas propiedades `border-width, border-style e border-color`:

  ```css
  h1 {
    border: 2px solid blue;
  }

  /* A seguinte regla é igual que a anterior pero por separado*/
  h1 {
    border-width: 2px;
    border-style: solid;
    border-color: blue;
  }
  ```

  - `border-width`: establece o ancho do borde en calquera unidade de CSS (excepto %).
  - `border-style`: os posibles valores de estilo son estes https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values. Os típicos valores son `solid` (por defecto), `dotted` e `dashed` que establecen liñas sólidas, de puntos e de raias respectivamente.
  - `border-color`: establece a cor do borde usando calquera notación de cor de CSS.

- Se queremos facer bordes redondeados usamos a propiedade `border-radius` que permite establecer o radio de redondeo dos bordes:

  ```css
  p {
    border: 2px solid red;
    borde-radius: 20px;
  }
  ```

  Se queremos establecer un radio de redondeo diferente para cada esquina podemos establecer catro valores separados por espazo que establecerían por orde o radio de: equina superior esquerda, superior dereita, inferior dereita e inferior esquerda:

  ```css
  p {
    border: 2px solid red;
    borde-radius: 20px 20px 0 0;
    /*só teria os as esquinas superiores redondeadas*/
  }
  ```

#### Sombras

- Ao igual que o texto (`text-shadow`) as caixas poden ter sombras coa mesma notación:

  ```css
  h1 {
    box-shadow: 2px 2px 5px black;
  }
  ```

- Os valores son respectivamente: desplazamento horizontal, desplazamento vertical, radio de difusión e cor de sombra.

#### Flotando elementos

- A propiedade `float` permítenos sacar elementos do fluxo normal no contenedor posicionándoos na parte esquerda ou dereita e facendo que o resto dos elementos aparezan rodeándono.
- Históricamente usouse como as tablas para facer _layouts_ pero agora coa aparición de Flexbox e Grid ese uso quedou obsoleto.
- O valor por defecto é none pero pode ser left ou right.

```css
.left {
  float: left;
  margin-right: 10px;
  height: 200px;
}
```

```html
<section class="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat.
  </p>

  <aside class="left">
    <blockquote>Cita famosa</blockquote>
  </aside>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat.
  </p>
</section>
```

- Vemos no exemplo que todos os parágrafos distribúense arredor do elemento flotado. Se queremos que un dos elementos non teña ese comportamento podemos establecer a propiedade `clear`, que permite os valores none, left e right.
- Se establecemos un `clear: left` ao segundo parágrafo fará que non se distribua arredor dos elementos flotados á súa esquerda.

#### Posicionando elementos

- Os elementos que siguen o fluxo normal do documento por defecto teñen unha propiedade de CSS que se chama `position` con valor `static`.
- Vamos ver outros tipos de posicionamento: `relative`, `absolute` e `fixed`.

##### Posicionamento relativo

- Os elementos con `position: relative` vamos poder darlle unha serie de propiedades de CSS: top, left, bottom e right que van a modificar a súa posición con respecto á súa posición por defecto:

```css
.desplazado {
  position: relative;
  top: 20px;
  left: 20px;
}
```

- O espazo orixinal ocupado no documento polo elemento posicionado relativamente manténse aínda que o o elemento esté noutra posición.

##### Posicionamento absoluto

- Os elemento con `position: absolute` posicionanse con respecto ao seu contexto de posicionamento.

- O contexto de posicionamento é o primeiro pai que teña `position: relative` e se non hai ningún é o elemento `html`, ou sexa, a parte superior esquerda da páxina.

  ```css
  .absoluto {
    position: absoluto;
    right: 20px;
    bottom: 100px;
  }
  ```

- A diferenza dos relativos estes elementos deixan de ocupar o espazo que ocuparían inicialmente no caso de non estar posicionados absolutamente.

##### Posicionamento fixo

- A `position: fixed` funciona exactamente igual que o absoluto pero o contexto de posicionamento sempre vai ser o viewport da páxina polo que aínda que fagamos scrollo o elemento sempre se vai manter na mesma posición.

##### Z-index

- No caso de que dous elementos posicionados absolutamente ou relativamente o que vai aparecer enriba do outro é o que ten a propiedade CSS `z-index` maior. Esta propiedade acepta valores numéricos positivos ou negativos sen unidade.
- No caso de non ter establecido un `z-index` aparecerá por arriba o último elemento que esté definido no HTML.