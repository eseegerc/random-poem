// Array of poems
const poems = [
    "El sol es brillante, el cielo azul,\nEn mi alma hay un eco de luz,\nCada paso es un nuevo destino,\nCada día un canto divino.",
    "Noche tras noche, estrellas que brillan,\nEl viento susurra, las hojas que chillan.\nLa luna, tan triste, observa en el mar,\nLo que el alma oculta al soñar.",
    "Si la vida es un viaje, la muerte es un sueño,\nDonde el amor florece y el miedo es pequeño.\nNo temáis el final, no temáis el dolor,\nTodo se vuelve paz con el amor.",
    "Caminamos juntos en la oscuridad,\nBajo el cielo estrellado de nuestra verdad.\nCada paso firme, cada mirada clara,\nEl amor es nuestro faro, nuestra cara.",
    "A veces, el viento trae consigo,\nLa melodía de un viejo abrigo,\nQue en su susurro nos habla de amor,\nDe tiempos lejanos, de un mundo mejor.",
    "La luna se refleja en el agua tranquila,\nComo un espejo de luz que brilla.\nY en el silencio del mar profundo,\nEl alma canta su propio mundo.",
    "Bajo el árbol, en su sombra fría,\nMedito sobre la vida, sobre el día.\nCada hoja que cae es un pensamiento,\nCada raíz es un anhelo lento.",
    "El sol despierta y pinta el cielo,\nEl aire fresco trae su consuelo,\nLas aves cantan, el río susurra,\nLa naturaleza es poesía que murmura.",
    "La flor que crece en el jardín del alma,\nEs la esperanza que da calma.\nAunque la tormenta venga a llorar,\nLa flor siempre volverá a brillar.",
    "Si el amor es el fuego que consume,\nLa pasión es la llama que resume.\nBajo el cielo estrellado, tan quieto,\nEl corazón late, siempre completo."
];

// Function to show a new poem
function showPoem() {
    // Randomly select a poem from the array
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    // Log for debugging
    console.log("Displaying poem: " + randomPoem);

    // Update the 'poem' div with the selected poem
    document.getElementById("poem").innerText = randomPoem;
}

// Call the function to display the first poem on page load
showPoem();

