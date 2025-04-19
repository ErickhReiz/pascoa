// Constantes com as pistas e senhas
const clues = {
    1: `🎯 PISTA 1 (Início):
Nem tudo que é DOCE está na boca.
Mas o primeiro passo
está onde a comida começa a brotar.

Vá onde se PLANTA
talvez lá você PLANTE a sorte.

Entre limões e maracujás
algo cresce.

Siga o verde.
Ele pode te levar ao começo de tudo.`,
    
    2: `🎯 PISTA 2:
Tão doce quanto um BOLO
é o lugar que um dia queimava carvão
mas agora só tem saudade do churrasco.

Você procura MEMÓRIAS.
E não fumaça.`,
    
    3: `🎯 PISTA 3:
Três RONCOS diferentes
mas só um acelera no silêncio.

Duas sombras grandes
e uma menor que corre com mais pressa.

Olhe onde os motores descansam.
Mas não se distraia com o brilho.

A pista está perto
de quem anda rápido até parado.`,
    
    4: `🎯 PISTA 4:
De FORA pra DENTRO
agora você ENTRA.

Onde MÁQUINAS fazem barulho
talvez a próxima pista RONQUE.`,
    
    5: `🎯 PISTA 5:
Banho ninguém toma aqui
mas AQUI tem pista.

Dos TRÊS irmãos banheiros desta casa
ache o que fica mais SOZINHO.`,
    
    6: `🎯 PISTA 6:
Agora é hora de DESCANSAR.

Mas só UM dos dois
tem janelas voltadas pro SOL da tarde.

Oeste é pra lá que ele se põe.`,
    
    7: `🎯 PISTA 7:
Sente-se e ASSISTA.
Mesmo que não tenha TV.

O próximo DOCE está onde todos param
pra conversar.`,
    
    8: `🎯 PISTA 8:
Se uma sala é pra VER
a outra é pra FAZER.

Vá onde a comida se cria.
Mas agora dentro da segunda casa.`,
    
    9: `🎯 PISTA 9:
A trilha volta pra casa vizinha.

Vá até o quarto onde jogam com a LUZ
o que brilha em NEON.`,
    
    10: `🎯 PISTA 10:
Quem DORME, sonha com doces.

Mas um dos quartos está VAZIO
ou será que está cheio de pistas.`,
    
    11: `🎯 PISTA 11:
Espelhos
toalhas
água caindo

O lugar onde todos se limpam
guarda sua PENÚLTIMA surpresa.`,
    
    12: `🎯 PISTA 12:
Você chegou ao fim
mas será mesmo

VOLTE AO INÍCIO
Lá está
o verdadeiro TESOURO.`
};

const passwords = {
    1: "HORTA2024",
    2: "CHURRAS21",
    3: "FOGO1234",
    4: "MAQUINA55",
    5: "BANHEIRO3",
    6: "QUARTO123",
    7: "SALA4567",
    8: "COZINHA9",
    9: "NEON2024",
    10: "VAZIO123",
    11: "ESPELHO7",
    12: "INICIO00"
};

const clueAudios = {
    1: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_1.mp3",
    2: "URL_DO_AUDIO_PISTA_2.mp3",
    3: "URL_DO_AUDIO_PISTA_3.mp3",
    4: "URL_DO_AUDIO_PISTA_4.mp3",
    5: "URL_DO_AUDIO_PISTA_5.mp3",
    6: "URL_DO_AUDIO_PISTA_6.mp3",
    7: "URL_DO_AUDIO_PISTA_7.mp3",
    8: "URL_DO_AUDIO_PISTA_8.mp3",
    9: "URL_DO_AUDIO_PISTA_9.mp3",
    10: "URL_DO_AUDIO_PISTA_10.mp3",
    11: "URL_DO_AUDIO_PISTA_11.mp3",
    12: "URL_DO_AUDIO_PISTA_12.mp3"
};

// Função principal do worker
export default {
    async fetch(request) {
        const html = `<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caça ao Tesouro 🗺️</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/97408981?s=40&v=4" type="image/x-icon">
    
    <style>
        body { 
            text-align: center; 
            font-family: 'Montserrat', sans-serif; 
            background: linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%);
            color: #333;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .card { 
            background: rgba(255, 255, 255, 0.95); 
            padding: 30px;
            border-radius: 20px;
            display: inline-block;
            margin-top: 30px;
            position: relative;
            max-width: 600px;
            width: 90%;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            border: 3px solid #FFD700;
        }
        h1 { 
            color: #FF6B6B;
            font-size: 2.5em;
            text-shadow: 2px 2px 0px #FFD700;
        }
        .clue { 
            font-size: 20px; 
            color: #444;
            background: rgba(255,215,0,0.1);
            padding: 20px;
            border-radius: 15px;
            border: 2px dashed #FFD700;
            white-space: pre-line;
            line-height: 1.6;
            font-weight: 500;
        }
        .next-button {
            background: linear-gradient(45deg, #FF6B6B, #FFD93D);
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            display: inline-block;
            margin: 20px 5px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .next-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        .clue-number {
            font-size: 28px;
            color: #FF6B6B;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .treasure-icon {
            font-size: 50px;
            margin-bottom: 20px;
            animation: bounce 2s infinite;
        }
        .gif {  
            padding: 20px; 
            display: flex; 
            position: relative; 
            justify-content: center;
            align-items: center;
        }
        .name {
            text-transform: capitalize;
        }
        
        .venue-logo {
            max-height: 50px;
            width: auto;
            border-radius: 50%;
        }
        
        /* Media query para telas maiores (desktop) */
        @media screen and (min-width: 768px) {
            .lottie-player {
                width: 400px;
                height: 400px;
            }
        }
        a {
            color: #172d4400;
        }
        .map-toggle {
            cursor: pointer;
            color: #172D44;
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
        }
        .password-form {
            margin: 20px 0;
        }
        
        .password-input {
            padding: 15px;
            border: 3px solid #FFD700;
            border-radius: 25px;
            background: white;
            font-size: 18px;
            text-align: center;
            margin-right: 10px;
            width: 200px;
            transition: all 0.3s ease;
        }
        .password-input:focus {
            border-color: #FF6B6B;
            outline: none;
            box-shadow: 0 0 15px rgba(255,107,107,0.3);
        }
        .submit-button {
            background: linear-gradient(45deg, #FFD93D, #FF6B6B);
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            border: none;
            font-weight: bold;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .error-message {
            color: #ff6b6b;
            margin-top: 10px;
            font-size: 14px;
            display: none;
        }

        .success-message {
            color: #51cf66;
            margin-top: 10px;
            font-size: 14px;
            display: none;
        }

        .audio-player {
            margin: 20px 0;
            width: 100%;
            max-width: 300px;
        }

        .audio-container {
            margin: 15px 0;
            padding: 10px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .progress-bar-container {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            margin: 20px 0;
            height: 20px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            width: 0;
            background-color: #FF6B6B;
            border-radius: 25px;
            transition: width 0.3s ease;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="treasure-icon">🗺️</div>
        <div class="clue-number">Pista <span id="currentClue">0</span> de 12</div>
        <div class="clue" id="clueText"></div>
        
        <div class="audio-container">
            <audio id="clueAudio" class="audio-player" controls>
                <source id="audioSource" src="" type="audio/mpeg">
                Seu navegador não suporta o elemento de áudio.
            </audio>
        </div>

        <div class="password-form">
            <input type="text" id="passwordInput" class="password-input" placeholder="Digite a senha encontrada" autocomplete="off">
            <button onclick="checkPassword()" class="submit-button">Verificar Senha</button>
        </div>
        <div id="errorMessage" class="error-message">Senha incorreta! Tente novamente.</div>
        <div id="successMessage" class="success-message">Senha correta! Redirecionando para próxima pista...</div>

        <div class="progress-bar-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
    </div>

    <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
    <script>
        // Dados das pistas
        const clues = ${JSON.stringify(clues, null, 2)};
        const passwords = ${JSON.stringify(passwords)};
        const clueAudios = ${JSON.stringify(clueAudios)};

        // Funções
        function getUrlParameter(name) {
            name = name.replace(/[\\[]/, '\\\\[').replace(/[\\]]/, '\\\\]');
            var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '1' : decodeURIComponent(results[1].replace(/\\+/g, ' '));
        }

        async function sendClueWebhook(clueNumber, action) {
            try {
                const response = await fetch('https://webhookn8n.kakee.net.br/webhook/treasure-hunt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        clueNumber: clueNumber,
                        action: action,
                        timestamp: new Date().toISOString()
                    })
                });
                
                if (!response.ok) {
                    console.error('Erro ao registrar ação da pista');
                }
            } catch (error) {
                console.error('Erro ao enviar webhook:', error);
            }
        }

        function showClue(clueNumber) {
            const clueNum = parseInt(clueNumber);
            document.getElementById('currentClue').textContent = clueNum;
            document.getElementById('clueText').innerHTML = clues[clueNum].replace(/\\n/g, '<br>') || 'Pista não encontrada';
            
            const audioPlayer = document.getElementById('clueAudio');
            const audioSource = document.getElementById('audioSource');
            if (clueAudios[clueNum]) {
                audioSource.src = clueAudios[clueNum];
                audioPlayer.load();
                audioPlayer.style.display = 'block';
            } else {
                audioPlayer.style.display = 'none';
            }
            
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('passwordInput').value = '';
            
            // Update progress bar
            const progressBar = document.getElementById('progressBar');
            const progressPercentage = ((clueNum - 1) / 11) * 100; // 11 because there are 12 clues (0 to 11)
            progressBar.style.width = progressPercentage + '%';

            // Calculate color gradient from red to green
            const red = Math.round(255 * (1 - (clueNum - 1) / 11));
            const green = Math.round(255 * ((clueNum - 1) / 11));
            const color = `rgb(${red}, ${green}, 0)`;
            progressBar.style.backgroundColor = color;
            
            sendClueWebhook(clueNum, 'view');
        }

        async function checkPassword() {
            const currentClue = parseInt(getUrlParameter('pista')) || 1;
            const inputPassword = document.getElementById('passwordInput').value.trim().toUpperCase();
            const correctPassword = passwords[currentClue];

            if (inputPassword === correctPassword) {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
                
                await sendClueWebhook(currentClue, 'solved');

                setTimeout(() => {
                    if (currentClue < 12) {
                        window.location.href = \`?pista=\${currentClue + 1}\`;
                    } else {
                        window.location.href = '?pista=final';
                    }
                }, 2000);
            } else {
                document.getElementById('errorMessage').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
            }
        }

        // Event Listeners
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });

        // Inicialização
        window.addEventListener('load', function() {
            const clueNumber = getUrlParameter('pista');
            if (clueNumber === 'final') {
                document.querySelector('.card').innerHTML = \`
                    <div class="treasure-icon">🎉</div>
                    <h1>PARABÉNS!</h1>
                    <p>Você completou a caça ao tesouro!</p>
                    <div class="treasure-icon">🏆</div>
                \`;
            } else {
                showClue(clueNumber);
            }
        });
    </script>
</body>
</html>`;

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
