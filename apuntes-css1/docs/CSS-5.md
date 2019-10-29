# Curso de HTML e CSS

- Grid

## CSS Grid Layout

- **CSS Grid Layout** é un módulo de CSS que permite dividir un elemento en filas e columnas creando unha grella de 2 dimensións a diferenza de Flexbox que é un sistema unidimensional.
- Traballaremos con Grid asignando unha serie de propiedades CSS ao contedor (_grid container_) e aos fillos (_grid items_).

### Terminoloxía

- _Grid container_: é o elemento no que queremos crear a grella e que se dividirá en filas e columnas.
- _Grid item_: cada un dos fillos de primeiro nivel do _grid container_ e que poderemos posicionar na grella.
- _Grid line_: as liñas que separan as filas e columnas e que determinan a estructura da grella.
- _Grid track_: cada unha das filas ou columnas que crea a grella
- _Grid cell_: cada unha das celas que crean as filas e columnas ao cruzarse, é o elemento mínimo da grella.
- _Grid area_: un grupo de celas que poderemos agrupar para posicionar items nela.

### Definindo filas e columnas

- Antes de nada, para crear unha grella nun elemento temos que aplicar a propiedade CSS `display: grid`.
- A diferenza do flexbox a aplicación desa propiedade non fai nada xa que antes temos que definir as columnas e/ou filas que vai ter.
- Para determinar as filas e columnas usamos as propiedades `grid-template-columns`e `grid-template-rows` que definirán os _tracks_:

```css
.container {
  display: grid;
  grid-template-columns: 500px 20rem;
  grid-template-rows: 100px 100px 100px;
}
```

- No exemplo anterior estamos creando unha grella de 2 columnas e 3 filas.

- Podemos establecer o tamaño das filas e columnas en calquera unidade válida de CSS e misturalas.

- Tamén podemos usar as unidades especiais:

  - _auto_: primeiro colocará todas as filas ou columnas cun tamaño especificado e despois encherá o espazo que sobre ata encher o contedor coas filas/columnas que teñan tamaño auto sendo como mínimo o tamaño do contido das mesmas.
  - _fr_: é unha unidade de tamaño que permite especificar o tamaño en base ao espazo libre que quede na fila/columna. Funciona similar ao _flex-grow / flex-shrink_.

- Podemos usar tamén a función _repeat_ para definir os tracks:

  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(4, 100px);
  	/* Isto creará 4 columnas de 100px */

  	grid-template-rows: repeat(3, 10rem 5rem);
  	/* Isto creará: 10rem 5rem 10rem 5rem 10rem 5rem /*
  }
  ```

#### Tracks explícitos e implícitos

- Por exemplo, se creamos unha grella de 3 columnas e dúas filas:

  ```css
  .container {
    display: grid;
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
  }
  ```

  E o contedor ten 10 fillos de primeiro nivel os primeiros 5 fillos colocaranse en tres columnas e dúas filas e ao acabar as columnas e filas definidas pasarán á seguinte liña e así sucesivamente.

- As filas e columnas definidas chámanse grid explícito. O resto das filas son tracks implícitos. O tamaño dos tracks implícitos poderemos definilios usando as propiedades `grid-auto-rows`e `grid-auto-columns`:

  ```css
  .container {
    display: grid;
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
    grid-auto-rows: 20px 50px;
  }
  ```

  Neste caso as filas que non son explícitas terán unha altura de 20px a primeira, terceira, quinta, etc. e de 50px a segunda, cuarta, sexta, etc...

- Se definimos `grid-auto-columns` a maioria das veces non vai pasar nada porque por defecto as grellas van crecer en filas e non en columnas. Pero podemos cambiar este comportamento coa propiedade `grid-auto-flow` que por defecto ten o valor _row_ pero podemos asignalo a _column_ e así a grella en lugar de crecer en filas crecerá en columnas. Isto a verdade non se usa moito pero pode ser útil para un layout horizontal en lugar de vertical.

### Definindo o tamaño dos items

- Por defecto cada _grid item_ ocupara un _grid cell_ (ver terminoloxía) pero poderemos modificar ese comportamento definindo para cada item que número de celas queremos que ocupe, e tamén cales serán esas celas.

- Aínda que definamos explícitamente o tamaño de cada _track_ en última instancia o tamaño fixo específicado para un fillo ou ben o seu contido indivisible (imaxes, palabras longas) van producir unha modificación de toda a grella.

- Para modificar este comportamento podemos asignar as propiedades `grid-column` e `grid-row` a calquera dos `grid items`:

  ```css
  .container {
    grid-template-columns: 10rem 1fr 15rem;
    grid-template-rows: 100px 100px;
  }

  .item1 {
    grid-column: span 2;
    /* Isto fará que o fillo .item1 se expanda en 2 columnas en lugar de 1 */
  }

  .item2 {
    grid-column: 1 / 3;
    /* O .item2 comezará na columna 1 e expandiráse ata a 3 */
  }

  .item3 {
    grid-column: 2 / -1;
    /* O item3 empezará na columna 2 chegará ata a última */
  }

  .item4 {
    grid-column: 2 / -2;
    /* O item4 empezará na columna 2 chegará ata a penúltima */
  }

  .item5 {
    grid-column: 2 / span 3;
    /* O .item5 empezara na columna 2 e expandirase 3 columnas */
  }
  ```

- Se non hai espazo suficiente no track isto pode crear espazos baleiros na grella pasando os items para novos tracks onde exista espazo.

- Se facemos que un elemento se expanda (por exemplo) máis columnas das que hai no track empezará a crear columnas implícitas.

### auto-fill e auto-fit

- Se queremos crear unha grella de filas/columnas variables en base ao tamaño dos _items_ podemos usar os keywords _auto-fill ou auto-fit_ á hora de definir a grella.

  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
  }
  ```

  Neste caso creará tantas columnas de 150px de ancho como permita o ancho do contedor, pasando as que non entren para a seguinte liña.

- A diferenza é:

  - auto-fill: vai encher a fila ata o final co número de columnas do tamaño especificado que entren en base ao tamaño do contedor.
  - auto-fit: só creará as columnas necesarias en base ao número de items.

### minmax

- A combinación de `auto-fill e auto-fit` con `minmax` vainos permitir crear grellas `responsive` sen necesidade de media queries.

- `minmax`vainos permitir definir o tamaño ancho mínimo e ancho das filas/columnas.

  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  ```

  Neste exemplo vai crear unha fila con tantas columnas como poida sendo o tamaño da columna mínimo de 150px e máximo de todo o espazo dispoñible.

### Grid areas

- Podemos darlle nomes a agrupacións de celas creadas polas filas e columnas para referirnos a elas á hora de posicionar _items_.

- Por exemplo creamos un grid de 3 columans e 3 filas:

  ```css
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 600px 1fr;
    grid-template-rows: 200px 200px 100px;
    grid-template-areas:
      'lateral-1 content lateral-2'
      'lateral-1 content lateral-2'
      'footer footer footer';
  }

  footer {
    grid-area: footer;
  }

  .content {
    grid-area: content;
  }
  ```

  Con `grid-template-areas` agrupamos por nome as celas creadas polos tracks e podemos posicionar nelas os items da grella.

### Aliñando a grid e os seus items

#### Items

- Por defecto os _grid items_ ocupan todo o espazo determinado polo tamaño da cela na que están posicionados.
- De xeito similar a flexbox podemos modificar o espazo que ocupan usando as propiedades _justify-items e align-items_ que se aplican ao contenedor.
- A propiedade _justify-items_ por defecto ten un valor de _stretch_ que fai que os îtems\* ocupen todo o espazo horizonal da cela pero tamén poderemos darlle os valores: start, center e end para posicionar ao principio, centro e final da cela respectivamente.
- A propiedade _align-items_ ten un comportamento exactamente igual pero aplícase verticalmente.
- Podemos aplicar esas dúas propiedades ao mesmo tempo usando a _place-items_:

```css
.container {
  place-items: center center;
  /* Isto é o mesmo que justify-items: center e align-items: center */
}
```

- Se queremos aplicar unha destas propiedades a un item específico e non a todos podemos usar as propiedades _justify-self e align-self_ nese item (non no contedor) que permiten os mesmos valores que as anteriores.

#### Grid

- Se a grid non ocupa o espazo do contenedor porque a suma das súas columnas é menor que o ancho do contenedor podemos usar a propiedades _justify-content e align-content_ para facer que as tracks se distribúan mellor no espazo determinado polo contenedor.
- A propiedade justify-content distribuira o espazo horizontal das columas. O valor por defecto é start que posicionará as columnas ao principio do contenedor pero poderemos usar:
  - \*center+: para posicionalas no centro do contenedor
  - _end_: ao final do contendo
  - _stretch_: estirando o ancho das columnas para ocupar todo o espazo
  - _space-around, space-between, space-evenly_: que teñen un comportamento igual que en flexbox.
- A propiedade _align-content_ ten un comportamento exactamente igual pero aplícase verticalmente.
- Podemos aplicar esas dúas propiedade ao mesmo tempo usando _place-content_ igual que no exemplo anterior.
