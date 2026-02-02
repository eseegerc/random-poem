// Poems: full (public domain) + long excerpts
const poems = [

`¿Quién, si yo gritara, me oiría desde los coros de los ángeles?
Y aun si uno me tomara de pronto en su corazón:
yo perecería ante su existencia más fuerte.
Pues lo bello no es sino el comienzo de lo terrible,
que todavía soportamos,
y lo admiramos tanto porque serenamente desdeña
destruirnos.
Todo ángel es terrible.
Y así me contengo y ahogo el llamado
de oscuros sollozos.
¡Ay, quién puede ayudarnos!

— Rainer Maria Rilke
(Primera Elegía)`,

`Hay golpes en la vida, tan fuertes… ¡Yo no sé!
Golpes como del odio de Dios;
como si ante ellos, la resaca de todo lo sufrido
se empozara en el alma… ¡Yo no sé!
Son pocos; pero son…
Abren zanjas oscuras en el rostro más fiero
y en el lomo más fuerte.
Serán tal vez los potros de bárbaros Atilas;
o los heraldos negros que nos manda la Muerte.

— César Vallejo
(Los heraldos negros)`,

`La noche tiene la forma de un animal herido.
Tiembla en mi memoria
como una lámpara sola.

— Alejandra Pizarnik`,

`La poesía es como el pan, de todos.
Y si alguien se queda sin ella,
se muere de hambre.

— Roque Dalton`,

`Yo vengo de un país
donde la tristeza
aprendió a cantar.

— Mauricio Redolés`,

`Escribo
para no desaparecer
del todo.

— Elvira Hernández`,

`Piececitos de niño,
azulosos de frío,
cómo os ven y no os cubren.

— Gabriela Mistral`,

`Un día olvidaremos los nombres de las cosas
y quedará sólo
la música del mundo.

— Jorge Teillier`
];

// Function to show a new poem
function showPoem() {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById("poem").innerText = randomPoem;
}


