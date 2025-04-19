export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // HTML como uma string normal, evitando template literals
    const html = '<!DOCTYPE html>' +
    '<html lang="pt">' +
    '<head>' +
    '    <meta charset="UTF-8">' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '    <title>Caça ao Tesouro 🗺️</title>' +
    '    <link rel="preconnect" href="https://fonts.googleapis.com">' +
    '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">' +
    '    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/97408981?s=40&v=4" type="image/x-icon">' +
    '<style>' +
    '    body { text-align: center; font-family: \'Montserrat\', sans-serif; background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%); color: #333; min-height: 100vh; margin: 0; padding: 20px; }' +
    '    .card { background: rgba(255, 255, 255, 0.95); padding: 30px; border-radius: 20px; display: inline-block; margin-top: 30px; position: relative; max-width: 600px; width: 90%; box-shadow: 0 8px 32px rgba(0,0,0,0.1); border: 3px solid #FFD700; }' +
    '    h1 { color: #FF6B6B; font-size: 2.5em; text-shadow: 2px 2px 0px #FFD700; }' +
    '    .clue { font-size: 20px; color: #444; background: rgba(255,215,0,0.1); padding: 20px; border-radius: 15px; border: 2px dashed #FFD700; white-space: pre-line; line-height: 1.6; font-weight: 500; }' +
    '    .next-button { background: linear-gradient(45deg, #FF6B6B, #FFD93D); color: white; padding: 12px 25px; border-radius: 25px; text-decoration: none; display: inline-block; margin: 20px 5px; font-weight: bold; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }' +
    '    .next-button:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,0.25); }' +
    '    .clue-number { font-size: 28px; color: #FF6B6B; margin-bottom: 20px; font-weight: bold; }' +
    '    .treasure-icon { font-size: 50px; margin-bottom: 20px; animation: bounce 2s infinite; }' +
    '    .gif { padding: 20px; display: flex; position: relative; justify-content: center; align-items: center; }' +
    '    .name { text-transform: capitalize; }' +
    '    .venue-logo { max-height: 50px; width: auto; border-radius: 50%; }' +
    '    @media screen and (min-width: 768px) { .lottie-player { width: 400px; height: 400px; } }' +
    '    a { color: #172d4400; }' +
    '    .map-toggle { cursor: pointer; color: #172D44; font-weight: bold; font-size: 20px; text-decoration: none; }' +
    '    .password-form { margin: 20px 0; }' +
    '    .password-input { padding: 15px; border: 3px solid #FFD700; border-radius: 25px; background: white; font-size: 18px; text-align: center; margin-right: 10px; width: 200px; transition: all 0.3s ease; }' +
    '    .password-input:focus { border-color: #FF6B6B; outline: none; box-shadow: 0 0 15px rgba(255,107,107,0.3); }' +
    '    .submit-button { background: linear-gradient(45deg, #FFD93D, #FF6B6B); color: white; padding: 15px 30px; border-radius: 25px; border: none; font-weight: bold; font-size: 18px; cursor: pointer; transition: all 0.3s ease; }' +
    '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }' +
    '.error-message { color: #ff6b6b; margin-top: 10px; font-size: 14px; display: none; }' +
    '.success-message { color: #51cf66; margin-top: 10px; font-size: 14px; display: none; }' +
    '.audio-player { margin: 20px 0; width: 100%; max-width: 300px; }' +
    '.audio-container { margin: 15px 0; padding: 10px; background: rgba(255, 255, 255, 0.8); border-radius: 10px; display: flex; align-items: center; justify-content: center; }' +
    '</style>' +
    '</head>' +
    '<body>' +
    '    <div class="card">' +
    '        <div class="treasure-icon">🗺️</div>' +
    '        <div class="clue-number">Pista <span id="currentClue">0</span> de 12</div>' +
    '        <div class="clue" id="clueText"></div>' +
    '        <div class="audio-container">' +
    '            <audio id="clueAudio" class="audio-player" controls>' +
    '                <source id="audioSource" src="" type="audio/mpeg">' +
    '                Seu navegador não suporta o elemento de áudio.' +
    '            </audio>' +
    '        </div>' +
    '        <div class="password-form">' +
    '            <input type="text" id="passwordInput" class="password-input" placeholder="Digite a senha encontrada" autocomplete="off">' +
    '            <button onclick="checkPassword()" class="submit-button">Verificar Senha</button>' +
    '        </div>' +
    '        <div id="errorMessage" class="error-message">Senha incorreta! Tente novamente.</div>' +
    '        <div id="successMessage" class="success-message">Senha correta! Redirecionando para próxima pista...</div>' +
    '    </div>' +
    '    <div class="gif">' +
    '        <dotlottie-player src="https://lottie.host/c7f68032-3e7d-4255-94bb-1248f75b0fba/w1HkAXzOLm.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" loop autoplay>' +
    '        </dotlottie-player>' +
    '    </div>' +
    '    <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>' +
    '    <script>' +
    '        const clues = {' +
    '            1: "🎯 PISTA 1 (Início):\\n" +' +
    '               "Nem tudo que é DOCE está na boca...\\n" +' +
    '               "...mas o primeiro passo...\\n" +' +
    '               "está onde a comida começa a brotar.\\n\\n" +' +
    '               "Vá onde se PLANTA...\\n" +' +
    '               "talvez lá... você PLANTE a sorte.\\n\\n" +' +
    '               "Entre limões e maracujás...\\n" +' +
    '               "...algo cresce.\\n\\n" +' +
    '               "Siga o verde.\\n" +' +
    '               "Ele pode te levar... ao começo de tudo.",' +
    '            2: "🎯 PISTA 2:\\n" +' +
    '               "Tão doce quanto um BOLO...\\n" +' +
    '               "é o lugar que um dia queimava carvão...\\n" +' +
    '               "...mas agora só tem saudade do churrasco.\\n\\n" +' +
    '               "Você procura MEMÓRIAS.\\n" +' +
    '               "E não fumaça.", ' +
    '            3: "🎯 PISTA 3:\\n" +' +
    '               "Três RONCOS diferentes...\\n" +' +
    '               "mas só um acelera no silêncio.\\n\\n" +' +
    '               "Duas sombras grandes...\\n" +' +
    '               "e uma menor... que corre com mais pressa.\\n\\n" +' +
    '               "Olhe onde os motores descansam.\\n" +' +
    '               "...mas não se distraia com o brilho.\\n\\n" +' +
    '               "A pista está perto...\\n" +' +
    '               "...de quem anda rápido até parado.", ' +
    '            4: "🎯 PISTA 4:\\n" +' +
    '               "De FORA pra DENTRO...\\n" +' +
    '               "...agora você ENTRA.\\n\\n" +' +
    '               "Onde MÁQUINAS fazem barulho...\\n" +' +
    '               "talvez a próxima pista RONQUE!", ' +
    '            5: "🎯 PISTA 5:\\n" +' +
    '               "Banho ninguém toma aqui...\\n" +' +
    '               "...mas AQUI tem pista.\\n\\n" +' +
    '               "Dos TRÊS irmãos banheiros desta casa...\\n" +' +
    '               "ache o que fica mais SOZINHO.", ' +
    '            6: "🎯 PISTA 6:\\n" +' +
    '               "Agora é hora de DESCANSAR.\\n\\n" +' +
    '               "Mas só UM dos dois...\\n" +' +
    '               "tem janelas voltadas pro SOL da tarde.\\n\\n" +' +
    '               "Oeste... é pra lá que ele se põe.", ' +
    '            7: "🎯 PISTA 7:\\n" +' +
    '               "Sente-se... e ASSISTA.\\n" +' +
    '               "Mesmo que não tenha TV.\\n\\n" +' +
    '               "O próximo DOCE está onde todos param...\\n" +' +
    '               "...pra conversar.", ' +
    '            8: "🎯 PISTA 8:\\n" +' +
    '               "Se uma sala é pra VER...\\n" +' +
    '               "a outra é pra FAZER.\\n\\n" +' +
    '               "Vá onde a comida se cria.\\n" +' +
    '               "Mas agora... dentro da segunda casa.", ' +
    '            9: "🎯 PISTA 9:\\n" +' +
    '               "A trilha volta pra casa vizinha.\\n\\n" +' +
    '               "Vá até o quarto onde jogam com a LUZ...\\n" +' +
    '               "o que brilha em NEON.", ' +
    '            10: "🎯 PISTA 10:\\n" +' +
    '                "Quem DORME, sonha com doces...\\n\\n" +' +
    '                "Mas um dos quartos está VAZIO...\\n" +' +
    '                "...ou será que está cheio de pistas?", ' +
    '            11: "�� PISTA 11:\\n" +' +
    '                "Espelhos...\\n" +' +
    '                "toalhas...\\n" +' +
    '                "água caindo...\\n\\n" +' +
    '                "O lugar onde todos se limpam...\\n" +' +
    '                "guarda sua PENÚLTIMA surpresa.", ' +
    '            12: "🎯 PISTA 12 (Plot twist — final é o começo!):\\n" +' +
    '                "Você chegou ao fim...\\n" +' +
    '                "...mas será mesmo?\\n\\n" +' +
    '                "VOLTE AO INÍCIO!\\n" +' +
    '                "Lá está...\\n" +' +
    '                "o verdadeiro TESOURO."' +
    '        };' +
    '        const passwords = {' +
    '            1: "HORTA2024",' +
    '            2: "CHURRAS21",' +
    '            3: "FOGO1234",' +
    '            4: "MAQUINA55",' +
    '            5: "BANHEIRO3",' +
    '            6: "QUARTO123",' +
    '            7: "SALA4567",' +
    '            8: "COZINHA9",' +
    '            9: "NEON2024",' +
    '            10: "VAZIO123",' +
    '            11: "ESPELHO7",' +
    '            12: "INICIO00"' +
    '        };' +
    '        const clueAudios = {' +
    '            1: "URL_DO_AUDIO_PISTA_1.mp3",' +
    '            2: "URL_DO_AUDIO_PISTA_2.mp3",' +
    '            3: "URL_DO_AUDIO_PISTA_3.mp3",' +
    '            4: "URL_DO_AUDIO_PISTA_4.mp3",' +
    '            5: "URL_DO_AUDIO_PISTA_5.mp3",' +
    '            6: "URL_DO_AUDIO_PISTA_6.mp3",' +
    '            7: "URL_DO_AUDIO_PISTA_7.mp3",' +
    '            8: "URL_DO_AUDIO_PISTA_8.mp3",' +
    '            9: "URL_DO_AUDIO_PISTA_9.mp3",' +
    '            10: "URL_DO_AUDIO_PISTA_10.mp3",' +
    '            11: "URL_DO_AUDIO_PISTA_11.mp3",' +
    '            12: "URL_DO_AUDIO_PISTA_12.mp3"' +
    '        };' +
    '        function getUrlParameter(name) {' +
    '            name = name.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");' +
    '            var regex = new RegExp("[\\\\?&]" + name + "=([^&#]*)");' +
    '            var results = regex.exec(location.search);' +
    '            return results === null ? "1" : decodeURIComponent(results[1].replace(/\\+/g, " "));' +
    '        }' +
    '        async function sendClueWebhook(clueNumber, action) {' +
    '            try {' +
    '                const response = await fetch("https://webhookn8n.kakee.net.br/webhook/treasure-hunt", {' +
    '                    method: "POST",' +
    '                    headers: {' +
    '                        "Content-Type": "application/json"' +
    '                    },' +
    '                    body: JSON.stringify({' +
    '                        clueNumber: clueNumber,' +
    '                        action: action,' +
    '                        timestamp: new Date().toISOString()' +
    '                    })' +
    '                });' +
    '                if (!response.ok) {' +
    '                    console.error("Erro ao registrar ação da pista");' +
    '                }' +
    '            } catch (error) {' +
    '                console.error("Erro ao enviar webhook:", error);' +
    '            }' +
    '        }' +
    '        function showClue(clueNumber) {' +
    '            const clueNum = parseInt(clueNumber);' +
    '            document.getElementById("currentClue").textContent = clueNum;' +
    '            document.getElementById("clueText").innerHTML = clues[clueNum].replace(/\\n/g, "<br>") || "Pista não encontrada";' +
    '            const audioPlayer = document.getElementById("clueAudio");' +
    '            const audioSource = document.getElementById("audioSource");' +
    '            if (clueAudios[clueNum]) {' +
    '                audioSource.src = clueAudios[clueNum];' +
    '                audioPlayer.load();' +
    '                audioPlayer.style.display = "block";' +
    '            } else {' +
    '                audioPlayer.style.display = "none";' +
    '            }' +
    '            document.getElementById("errorMessage").style.display = "none";' +
    '            document.getElementById("successMessage").style.display = "none";' +
    '            document.getElementById("passwordInput").value = "";' +
    '            sendClueWebhook(clueNum, "view");' +
    '        }' +
    '        async function checkPassword() {' +
    '            const currentClue = parseInt(getUrlParameter("pista")) || 1;' +
    '            const inputPassword = document.getElementById("passwordInput").value.trim().toUpperCase();' +
    '            const correctPassword = passwords[currentClue];' +
    '            if (inputPassword === correctPassword) {' +
    '                document.getElementById("successMessage").style.display = "block";' +
    '                document.getElementById("errorMessage").style.display = "none";' +
    '                await sendClueWebhook(currentClue, "solved");' +
    '                setTimeout(function() {' +
    '                    if (currentClue < 12) {' +
    '                        window.location.href = "?pista=" + (currentClue + 1);' +
    '                    } else {' +
    '                        window.location.href = "?pista=final";' +
    '                    }' +
    '                }, 2000);' +
    '            } else {' +
    '                document.getElementById("errorMessage").style.display = "block";' +
    '                document.getElementById("successMessage").style.display = "none";' +
    '            }' +
    '        }' +
    '        document.getElementById("passwordInput").addEventListener("keypress", function(e) {' +
    '            if (e.key === "Enter") {' +
    '                checkPassword();' +
    '            }' +
    '        });' +
    '        window.addEventListener("load", function() {' +
    '            const clueNumber = getUrlParameter("pista");' +
    '            if (clueNumber === "final") {' +
    '                document.querySelector(".card").innerHTML = ' +
    '                    "<div class=\\"treasure-icon\\">🎉</div>" +' +
    '                    "<h1>PARABÉNS!</h1>" +' +
    '                    "<p>Você completou a caça ao tesouro!</p>" +' +
    '                    "<div class=\\"treasure-icon\\">🏆</div>";' +
    '            } else {' +
    '                showClue(clueNumber);' +
    '            }' +
    '        });' +
    '    </script>' +
    '</body>' +
    '</html>';

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  }
};
