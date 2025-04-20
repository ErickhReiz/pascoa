// Constantes com as pistas e senhas
const clues = {
    1: `🎯 PISTA 1 (Início):
Nem tudo que é DOCE está na boca.
Mas o primeiro passo
está onde a comida começa a brotar.

Vá onde se PLANTA
talvez lá você PLANTE a sorte.

Entre as flores rosas e maracujás
algo cresce.`,
    
    2: `🎯 PISTA 2:
Tão doce quanto um BOLO
é o lugar que um dia queimava carvão
mas agora só tem saudade do churrasco.

Você procura MEMÓRIAS.
E não fumaça.`,
    
    3: `🎯 PISTA 3:
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

Dos TRÊS  banheiros desta casa
ache o que fica mais SOZINHO.`,
    
    6: `🎯 PISTA 6:
Agora é hora de DESCANSAR

Entre a lavanderia e o banheiro
o quadro você encontrará

Mas não olhe de longe
o que procura está por trás da imagem`,
    
    7: `🎯 PISTA 7:
Sente-se e ASSISTA.
Subindo degrals a pista voce vai achar.

Em video a senha verá`,
    
    8: `🎯 PISTA 8:
Se uma sala é pra VER
a outra é pra FAZER.

Vá onde a comida se guarda.`,
    
    9: `🎯 PISTA 9:
A trilha volta pra casa vizinha.

Descendo rolando voce encontra o caramelo

Junto à giselma ela revelará o mistério.`,
    
    10: `🎯 PISTA 10:
Quem DORME lá, sonha com gatos...
um gato espanhol em breve terá um irmão`, 
    
    11: `Acabou?
voce chegou fim?
ou apenas comecamos??

volte ao inicio, não 
é gelado mas está mantido no cooler`, 
};

const passwords = {
    1: "maracuja",
    2: "carne",
    3: "fogo",
    4: "massa",
    5: "xixi",
    6: "cama",
    7: "roblox",
    8: "marmita",
    9: "moranga",
    10: "pastel"
};

const clueAudios = {
    1: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_1.mp3",
    2: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_2.mp3",
    3: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_3.mp3",
    4: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_4.mp3",
    5: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_5.mp3",
    6: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_6.mp3",  
    7: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_7.mp3",
    8: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_8.mp3",
    9: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_9.mp3",
    10: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_10.mp3",
    11: "https://github.com/ErickhReiz/pascoa/raw/refs/heads/master/audios/pista_11.mp3"
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

        /* Estilos para o modal */
        .modal {
            display: none; /* Oculto por padrão */
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            border-radius: 10px;
            text-align: center;
        }

        .close-button {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close-button:hover,
        .close-button:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="progress-bar-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
        <div class="treasure-icon">🗺️</div>
        <div class="clue-number">Pista <span id="currentClue">0</span> de 10</div>
        <div class="clue" id="clueText"></div>

        <button id="playAudioButton" class="next-button">Ouvir Diga</button>
        
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


    </div>

    <!-- Adicione este HTML dentro do <body> -->
    <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close-button" onclick="closeModal()">&times;</span>
            <h2>Parabéns!</h2>
            <p>Você acertou a senha!</p>
            <div class="progress-bar-container" style="margin-top: 20px;">
                <div class="progress-bar" id="progressBar"></div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
    <script>
        // Dados das pistas
        const clues = ${JSON.stringify(clues, null, 2)};
        const passwords = ${JSON.stringify(passwords)};
        const clueAudios = ${JSON.stringify(clueAudios)};
        console.log(passwords)
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
            const playAudioButton = document.getElementById('playAudioButton');

            if (clueAudios[clueNum]) {
                audioSource.src = clueAudios[clueNum];
                audioPlayer.load();
                audioPlayer.style.display = 'block';

                // Hide the button initially
                playAudioButton.style.display = 'none';

                // Listen for the canplay event to ensure the audio is ready
                audioPlayer.addEventListener('canplay', () => {
                    // Show the button for user interaction
                    playAudioButton.style.display = 'block';

                    playAudioButton.addEventListener('click', () => {
                        audioPlayer.play().catch(error => {
                            console.error('Autoplay failed:', error);
                        });
                    });
                });
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

            // Predefined array of colors from red to green
            const colors = [
                '#FF0000', // Red
                '#FF3300',
                '#FF6600',
                '#FF9900',
                '#FFCC00',
                '#FFFF00',
                '#CCFF00',
                '#99FF00',
                '#66FF00',
                '#33FF00',
                '#00FF00'  // Green
            ];
            const colorIndex = Math.min(clueNum - 1, colors.length - 1);
            progressBar.style.backgroundColor = colors[colorIndex];
            
            sendClueWebhook(clueNum, 'view');
        }

        // Função para abrir o modal
        function openModal() {
            document.getElementById('successModal').style.display = 'block';
        }

        // Função para fechar o modal
        function closeModal() {
            document.getElementById('successModal').style.display = 'none';
        }

        // Atualize a função checkPassword
        async function checkPassword() {
            const currentClue = parseInt(getUrlParameter('pista')) || 1;
            const inputPassword = document.getElementById('passwordInput').value.trim().toUpperCase();
            const correctPassword = passwords[currentClue];

            if (inputPassword.toLowerCase() === correctPassword) {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
                
                // Abra o modal
                openModal();

                await sendClueWebhook(currentClue, 'solved');

                setTimeout(() => {
                    closeModal(); // Feche o modal antes de redirecionar
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
