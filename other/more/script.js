document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");

    // Start music after user interaction (for autoplay restrictions)
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.error("Autoplay blocked:", error));
        }
    }, { once: true });

    // Replace content when button is clicked
    document.getElementById("startButton").addEventListener("click", function () {
        let content = document.getElementById("content");

        // Clear everything inside the div and replace it with full content
        content.innerHTML = `
            <div class="envelope-wrapper">
                <div id="envelope" class="close">
                    <div class="front flap"></div>
                    <div class="front pocket"></div>
                    <div class="letter">
                        <p class="words line1">Soy super afortunado de tenerte en mi vida :D</p>
                        <p class="words line2">No puedo esperar para celebrar contigo!</p>
                        <p class="words line3">Te amo más de lo que nunca sabrás!</p>
                        <p class="words line4">- tu amoroso novio</p>
                    </div>
                </div>
            </div>
            <div class="continue">
                <button id="continue">Continuar</button>
            </div>
            <style>
                @font-face {
                    font-family: 'Caveat';
                    src: url('fonts/Caveat-Regular.ttf') format('truetype');
                }

                body {
                    background-color: #ffc3da;
                    font-family: 'Caveat', sans-serif;
                }

                .envelope-wrapper {
                    height: 380px;
                }

                #envelope {
                    position: relative;
                    height: 180px;
                    width: 280px;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                    margin-left: auto;
                    margin-right: auto;
                    top: 50%;
                    background-color: #FF6863;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                }

                .front {
                    position: absolute;
                    width: 0;
                    height: 0;
                    z-index: 3;
                }

                .flap {
                    border-top: 98px solid #FF6863;
                    border-left: 140px solid transparent;
                    border-right: 140px solid transparent;
                    border-bottom: 82px solid transparent;
                    transform-origin: top;
                }

                .pocket {
                    border-left: 140px solid #FF8BA0;
                    border-right: 140px solid #FF8BA0;
                    border-bottom: 90px solid #FFA8B5;
                    border-top: 90px solid transparent;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                .letter {
                    position: relative;
                    background-color: white;
                    width: 90%;
                    height: 95%;
                    top: 0%;
                    border-radius: 10px;
                    box-shadow: 0 2px 26px rgba(0, 0, 0, .12);
                    margin-left: auto;
                    margin-right: auto;
                }

                .letter:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

                .line1 { top: 15%; }
                .line2 { top: 25%; }
                .line3 { top: 45%; text-align: center; }
                .line4 { top: 55%; text-align: center; }

                .open .flap {
                    transform: rotatex(180deg);
                    transition: transform 0.4s ease, z-index 0.6s;
                    z-index: 1;
                }

                .close .flap {
                    transform: rotatex(0deg);
                    transition: transform 0.4s 0.6s ease, z-index 1s;
                    z-index: 5;
                }

                .open .letter {
                    transform: translatey(-80px);
                    transition: transform 0.4s 0.6s ease, z-index 0.6s;
                    z-index: 2;
                }

                .close .letter {
                    transform: translatey(0deg);
                    transition: transform 0.4s ease, z-index 1s;
                    z-index: 1;
                }

                .continue {
                    text-align: center;
                }

                .continue button {
                    font-weight: 800;
                    font-style: normal;
                    transition: all 0.1s linear;
                    background-color: transparent;
                    color: #FFFFFF;
                    display: inline-block;
                    font-size: 14px;
                    text-transform: uppercase;
                    margin: 20px;
                    margin-top: 100px;
                    padding: 10px;
                    line-height: 2em;
                    text-decoration: none;
                    min-width: 150px;
                    outline: none;
                }

                .continue button:hover {
                    background-color: #FFFFFF;
                    cursor: pointer;
                    color: white;
                }

                .question {
                    text-align: center;
                    margin-top: 100px;
                }

                .question p {
                    font-size: 20px;
                    font-weight: bold;
                    color: #FF6863;
                }

                .question button {
                    background-color: #FF6863;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    font-size: 18px;
                    margin: 10px;
                    cursor: pointer;
                    border-radius: 5px;
                    font-weight: bold;
                }

                .question button:hover {
                    background-color: #FF8BA0;
                }

                .surprise {
                    text-align: center;
                    margin-top: 50px;
                }

                .itinerary-img {
                    width: 70%;
                    max-width: 500px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                    margin-bottom: 20px;
                }

                #downloadBtn {
                    display: inline-block;
                    padding: 12px 25px;
                    background-color: #FF6863;
                    color: white;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: bold;
                    transition: 0.3s;
                }

                #downloadBtn:hover {
                    background-color: #FF8BA0;
                    transform: scale(1.05);
                }

                /* 👇 estilo para cuenta atrás */
                .countdown {
                    font-size: 30px;
                    font-weight: bold;
                    color: #FF6863;
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
        `;

        // Adding event listeners to Open and Continue buttons after content is loaded
        const envelope = document.getElementById("envelope");
        const btnContinue = document.getElementById("continue");

        // Open the envelope when clicked
        envelope.addEventListener("click", function () {
            envelope.classList.add("open");
            envelope.classList.remove("close");
        });

        // Continue button functionality to show the first question
        btnContinue.addEventListener("click", function () {
            showQuestion(1);
        });
    });

    function showQuestion(questionNumber) {
        let content = document.getElementById("content");

        let questionData = [
            { 
                question: "Eres la persona más increíble que he conocido, ¿quieres hacerme el honor de ser mi novia?",
                yes: "¡Sí, claro que sí!", 
                img: "pictures/question1.jpg"
            },
            { 
                question: "Cada vez que te veo me haces sonreír, ¿te gustaría salir conmigo?",
                yes: "¡Sí, me encantaría!", 
                img: "pictures/question2.jpg"
            },
            { 
                question: "Desde que llegaste a mi vida todo es mejor, ¿quieres ser parte de mi vida para siempre?",
                yes: "¡Sí, por siempre!", 
                img: "pictures/question3.jpg"
            }
        ];

        let currentQuestion = questionData[questionNumber - 1];

        content.innerHTML = `
            <img src="${currentQuestion.img}" alt="Pregunta bonita">
            <div class="question">
                <p>${currentQuestion.question}</p>
                <button id="yesBtn">${currentQuestion.yes}</button>
            </div>
        `;

        const yesBtn = document.getElementById("yesBtn");

        yesBtn.addEventListener("click", function () {
            if (questionNumber < questionData.length) {
                showQuestion(questionNumber + 1);
            } else {
                content.innerHTML = `
                    <div style="text-align: center;">
                        <img src="pictures/love.png" alt="Love GIF" style="display: block; margin: 0 auto;">
                        <p style="font-size: 24px;">¡Yaaaaaay! ¡Te amo!</p>
                        <div id="countdown" class="countdown"></div> <!-- 👈 añadido -->
                    </div>
                `;

                // 👇 cuenta atrás de 3 segundos después de 5s
                setTimeout(() => {
                    let countdownEl = document.getElementById("countdown");
                    let counter = 3;
                    countdownEl.textContent = `Redirigiendo en ${counter}...`;

                    let interval = setInterval(() => {
                        counter--;
                        if (counter > 0) {
                            countdownEl.textContent = `Redirigiendo en ${counter}...`;
                        } else {
                            clearInterval(interval);
                            window.location.href = "corazon/index.html"; // 👈 cambia aquí al archivo que quieras
                        }
                    }, 1000);
                }, 5000);
            }
        });
    }
});
