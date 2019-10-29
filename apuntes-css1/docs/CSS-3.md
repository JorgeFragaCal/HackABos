# Curso de HTML e CSS

- Flexbox

### Flexbox

#### Intro

- O layout flexbox é un modulo de CSS (un conxunto de propiedades cos seus respectivos valores) relativamente novo pero con moi bo soporte que proporciona un xeito eficiente de definir como van ocupar o espazo interno dun contenedor os seus fillos sen que sexa necesario saber o tamaño do contenedor, de aí o nome flex ou fluído.
- Cando definimos un contenedor como display: flex poderemos a través dunha serie de propiedades de css alterar o ancho e alto dos seus fillos para acomodalos no seu espazo dispoñible.
- Flexbox é complementario ao modulo de Grid que é máis moderno aínda e mentres que este último se usa normalmente para definir layouts máis grandes o flexbox é perfecto para definir os máis pequenos.

### Terminoloxía

![](/Users/berto/HackaBOS/JSBO3/css/docs/flex.png)

- **Contedor**: é o elemento que se define como flex e polo tanto os seus fillos van ser afectados por este tipo de display. A maioría de propiedades css do modulo flexbox aplícase ao contedor.
- **Fillos**: son os elementos internos de primeiro nivel do contenedor que se distribúen no espazo segundo as propiedades aplicadas ao pai. Tamén hai unha serie de propiedades no modulo que só se aplican aos fillos.
- **Eixo horizontal**: unha liña imaxinaria que cruza horizontalmente o contenedor e sobre esa liña se distribuirán os fillos dos contedores con flex de direccion horizontal.
- **Eixo vertical**: o mesmo que o anterior pero vertical.

#### Propiedades do contedor

Para que un contedor sexa de tipo flex ten que ter a propiedade de CSS `display: flex`. Todos os fillos do contedor que teña esa propiedade estarán afectados polas propiedades de flexbox que vemos a continuación.

- **flex-direction:** determina sobre cal dos eixos van fluir os fillos. Os posibles valores son:

  - `row`: horizontalmente de esquerda a dereita _(valor por defecto)_
  - `row-reverse`: horizontalmente de dereita á esquerda
  - `column`: verticalmente de arriba a abaixo
  - `column`-reverse: verticalmente de abaixo a arriba.

- **flex-wrap**: por defecto flexbox vai tentar distribuir todos os fillos nunha sóa liña aínda que se pase do ancho do contedor. No caso de que queiramos que os items que non entren pasen á seguinte liña temos que usar esta propiedade. Os valores posibles son:

  - `nowrap`: todos os fillos van estar nunha sóa liña _(valor por defecto)_
  - `wrap`: os items pasarán á liña inferior no caso de que non encaixen an anterior.
  - `wrap-reverse`: o mesmo que a anterior pero pasan á liña superior.

- **justify-content**: esta propiedade define como se van aliñar os elementos no eixo que teñamos escollido con `flex-direction`. Os valores posibles son:
  - `flex-start`: os elementos están apilados ao principio da liña definida polo eixo. (valor por defecto)
  - `flex-end`: os elementos apílanse ao final da liña.
  - `center`: os elementos apílanse no centro da liña.
  - `space-between`: os elementos distribúense ocupando toda a liña correspondente estando o primeiro pegado ao principio da liña e o último ao final da mesma.
  - `space-around`: similar ao anterior pero o primeiro e o último elemento teñen unha unidade de separación con respecto ao principio e o final respectivamente e dúas unidades de separación entre o resto dos elementos.
  - `space-evenly`: fai que todas as separacións incluídas a inicial e a final sexan iguais.
- **align-items:** esta propiedade é similar a anterior pero aplícase á distribución no eixo contrario ao que teñamos escollido no `flex-direction`. Os posibles valores son:
  - `flex-start, flex-end, center`: iguais que no caso de justify content.
  - `baseline`: aliña os elementos según a liña base de texto.
  - `stretch:` estira os elementos verticalmente para ocupar o espazo do contedor _(valor por decto)_
- **align-content:** similar a justify content pero só aplicable aos fillos cando estes ocupan máis dunha liña. As propiedades son:
  - `flex-start`: apila as liñas ao principio do contedor.
  - `flex-end`: o mesmo pero ao final do contedor.
  - `center, space-between, space-around`: apila as liñas do mesmo xeito que estas mesmas propiedades no justify-content.
  - stretch: fai que as liñas ocupen todo o espazo _(valor por defecto)_

#### Propiedades dos fillos

- **order:** determina a orde na que van aparecer no eixo no que se distribúen independentemente do orde en que aparezan no HTML. Valores posibles:
  - `número enteiro`. _(valor por defecto: 0)_
- **flex-grow:** determina se un fillo pode aumentar o seu ancho ou alto para ocupar o espazo libre dispoñible na liña correspondente. Valores posibles:
  - `número enteiro`. (valor por defecto: 0)
- **flex-shrink:** o mesmo que o anterior pero en lugar de aumentar sería diminuír.
- **flex-basis:** determina o tamaño por defecto do fillo antes de que flex distribúa o espazo. Valores por defecto.
  - `un tamaño determinado por calquera unidade de css (em, rem, %, px, etc...) ou auto.` _(valor por defecto: auto)_
- **align-self:** permite establecer un valor propio do fillo que se aplicaría en lugar do valor de align-items definido no contedor.
  - `auto, flex-start, flex-end, center, baseline ou stretch.`
