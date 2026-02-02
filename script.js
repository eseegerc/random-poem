// Array of 20 poems (example with longer poems)
const poems = [
`El árbol está en el viento,  
    En las ramas que se balancean.  
    No está solo. No está quieto.  
    El árbol no sabe que vive.  
    Es un cuerpo que no sabe  
    que respira, que existe.  
    El árbol tiene raíces  
    en la tierra y un cielo  
    al que no pertenece.  
    Cada rama es un sueño  
    sin forma, sin futuro.  
    Pero el árbol es fuerte,  
    como un ser que no sabe.`,

    `Bajo la luna, el mundo en calma,  
    La oscuridad cubre cada alma,  
    Los sueños nacen en la penumbra,  
    Y en el silencio, la esperanza zambulle.`,

    `Cada paso que doy en este sendero,  
    Me aleja de todo lo que es ligero,  
    Y me acerca a un destino sin fin,  
    Donde el amor será mi único confín.`,

    `Entre las sombras y la luz,  
    Busco respuestas, me pierdo en mi cruz,  
    Pero en mis ojos brillan las estrellas,  
    Y encuentro paz en las huellas.`,

    `El viento lleva susurros lejanos,  
    Como ecos de tiempos hermanos,  
    Sus palabras flotan en el aire,  
    Como un canto, suave y sin desgaste.`,

    `En la oscuridad se encienden las luces,  
    Como estrellas que la noche induce,  
    Y cada estrella, una historia de amor,  
    Un viaje en el tiempo, sin ningún error.`,

    `Cierro los ojos y veo el futuro,  
    En cada sueño, hay un cielo puro,  
    Y aunque el mundo esté lleno de grietas,  
    El amor sana todas las planetas.`,

    `El mar y el cielo se abrazan en el horizonte,  
    En su encuentro, se pierde el monte,  
    La brisa lleva consigo un secreto,  
    Y en su beso, soy completo.`,

    `Una flor crece en la tierra mojada,  
    Bajo la lluvia, la vida es renovada,  
    En cada pétalo, una historia vieja,  
    En cada raiza, una esperanza fija.`,

    `La vida es un viaje que no tiene fin,  
    Con cada paso, ganamos o perdemos sin fin,  
    Pero al final, todo cobra sentido,  
    Y cada paso es un reflejo vivido.`,

    `Cada día, el sol vuelve a nacer,  
    Y en su luz, todo vuelve a crecer,  
    Pero en mi corazón, queda el dolor,  
    De un amor perdido, sin ningún pudor.`,

    `En la inmensidad del cielo nocturno,  
    Me encuentro con mis miedos, tan oscuros,  
    Pero sé que en algún rincón del alma,  
    Habita la luz que todo desarma.`,

    `Recuerdo un tiempo en que todo era claro,  
    Los días eran largos, el cielo raro,  
    Pero el tiempo se llevó mis días,  
    Y ahora solo quedan las melodías.`,

    `En el viento escucho un canto triste,  
    Como si la tierra en su dolor insista,  
    Pero en mi pecho, una llama arde,  
    Que nunca se apaga, ni aunque tarde.`,

    `La ciudad despierta con el primer sol,  
    Mientras el mar susurra su rol,  
    Y yo camino, buscando algo más,  
    En un mundo lleno de paz y paz.`,

    `El reloj marca el paso del tiempo,  
    Cada tic, un cambio, un momento,  
    Pero yo sigo esperando,  
    Un signo, una señal, algo más profundo.`,

    `La luna llena ilumina la noche,  
    Mientras los sueños flotan, tan grandes como un coche,  
    Y entre las sombras, mi alma canta,  
    Un poema de amor, que siempre encanta.`,

    `La tierra susurra en sus noches frías,  
    Y en susurros, esconde sus melodías,  
    Con cada estrella, un deseo callado,  
    Que se lleva el viento, tan olvidado.`,

    `Un río fluye, tranquilo, sereno,  
    Su agua limpia todo lo terreno,  
    Y como el río, yo sigo mi camino,  
    Con la esperanza de encontrar mi destino.`,

    `El alma se llena de incertidumbre,  
    Cuando todo parece un mar de costumbre,  
    Pero en los ojos de quien ama,  
    Siempre hay una luz que nunca se apaga.`,

    `Y en el silencio de la noche,  
    Encuentro en mi pecho un reproche,  
    Pero sé que la paz está cerca,  
    En la melodía que mi corazón declara.`
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

// Show the first poem when the page loads
showPoem();

