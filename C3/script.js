//lista de cor
const allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", 
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon",
    "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", 
    "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", 
    "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", 
    "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", 
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", 
    "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", 
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", 
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", 
    "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", 
    "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", 
    "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", 
    "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", 
    "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", 
    "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", 
    "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", 
    "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
  ];
  
  //pega 10 cores
  const gameColors = allColors.sort(() => 0.5 - Math.random()).slice(0, 10);
  
  //o pc escolher cor aleatoria
  const chosenColor = gameColors[Math.floor(Math.random() * gameColors.length)];
  
  const playerNameInput = document.getElementById("playerName");
  const startGameButton = document.getElementById("startGameButton");
  const nameSection = document.getElementById("nameSection");
  const gameSection = document.getElementById("gameSection");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const colorInput = document.getElementById("colorInput");
  const guessButton = document.getElementById("guessButton");
  const feedback = document.getElementById("feedback");
  
  let playerName = "";
  startGameButton.addEventListener("click", () => {
    playerName = playerNameInput.value.trim();
  
    if (playerName === "") {
      alert("Por favor, insira seu nome para começar.");
      return;
    }
    welcomeMessage.textContent = `Bem-vindo, ${playerName}! As cores disponíveis são: ${gameColors.join(", ")}.`;
    nameSection.style.display = "none";
    gameSection.style.display = "block";
  });

  guessButton.addEventListener("click", () => {
    const userGuess = colorInput.value.trim();
  
    if (userGuess === "") {
      feedback.textContent = `${playerName}, por favor, digite uma cor!`;
      return;
    }
  
    if (userGuess.toLowerCase() === chosenColor.toLowerCase()) {
      feedback.textContent = `Parabéns, ${playerName}! Você acertou! A cor era ${chosenColor}`;
      document.body.style.backgroundColor = chosenColor;
    } else {
      //ajudar jogador
      feedback.textContent = userGuess.toLowerCase() < chosenColor.toLowerCase() 
        ? `${playerName}, a cor é alfabeticamente maior!` 
        : `${playerName}, a cor é alfabeticamente menor!`;
    }
  
    colorInput.value = "";
});