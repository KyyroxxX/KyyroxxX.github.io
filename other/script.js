var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Inicializa las estrellas con valores de opacidad aleatorios
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

// Obtener el botón
// Obtener el botón
const button = document.getElementById("valentinesButton");

// Añadir el evento de clic
button.addEventListener("click", function() {
  // Cambiar el texto del botón y redirigir
  button.textContent = "Cargando...";

  // Redirige a la página "other/more/index.html" correctamente
  setTimeout(function() {
    window.location.href = "more/index.html";  // Asegúrate de que la ruta sea correcta
  }, 500);  // Redirige después de medio segundo
});




function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Ajusta el tamaño de la fuente según el ancho de la pantalla
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // Efecto de resplandor
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Cada día no puedo creer lo afortunado que soy", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    // Desvanece el texto disminuyendo la opacidad
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Cada día no puedo creer lo afortunado que soy", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    // Necesita esta condición para restablecer la opacidad antes de la siguiente declaración en el lienzo
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           // Acorta la frase para pantallas móviles
            drawTextWithLineBreaks(["Entre billones y billones de estrellas,", "a lo largo de miles de millones de años"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Entre billones y billones de estrellas, a lo largo de miles de millones de años", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Entre billones y billones de estrellas,", "a lo largo de miles de millones de años"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Entre billones y billones de estrellas, a lo largo de miles de millones de años", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Estar vivo, y poder pasar esta vida contigo", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Estar vivo, y poder pasar esta vida contigo", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Es tan increíblemente, inimaginablemente improbable", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Es tan increíblemente, inimaginablemente improbable", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Y sin embargo, aquí estoy para obtener lo imposible", "de tener la oportunidad de conocerte"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Y sin embargo, aquí estoy para obtener lo imposible de tener la oportunidad de conocerte", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Y sin embargo, aquí estoy para obtener lo imposible", "de tener la oportunidad de conocerte"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Y sin embargo, aquí estoy para obtener lo imposible de tener la oportunidad de conocerte", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Te amo tanto Elena, más que", "todo el tiempo y espacio que el universo pueda contener"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Te amo tanto Elena, más que todo el tiempo y espacio que el universo pueda contener", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["¡Y no puedo esperar para pasar todo el tiempo", "del mundo compartiendo ese amor contigo!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("¡Y no puedo esperar para pasar todo el tiempo del mundo compartiendo ese amor contigo!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("¡Feliz Cumpleaños <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Restablece el efecto de sombra después de dibujar el texto
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
