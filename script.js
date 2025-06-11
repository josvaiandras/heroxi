 // 🔽 START: Versatile Players Object
    const versatilePlayers = {
      ROONEY: ["ST", "CAM", "CM"],
  BECKHAM: ["RW", "RM", "CM"],
  MOORE: ["CB"],
  SHILTON: ["GK"],
  COLE: ["LB", "LWB"],
  CHARLTON: ["CM", "CAM", "ST"],
  "B.WRIGHT": ["CB"],
  KANE: ["ST"],
  WALKER: ["CB"],
  LAMPARD: ["CM", "CAM",],
  GERRARD: ["CM", "CDM", "CAM", "RM"],
  ROBSON: ["CM", "CAM", "LM"],
  OWEN: ["ST"],
  SANSOM: ["LB"],
  NEVILLE: ["RB"],
  WILKINS: ["CM", "CDM"],
  STONES: ["CB", "RB"],
  STERLING: ["RW", "LW", "ST"],
  FERDINAND: ["CB"],
  BARNES: ["LW", "LM", "CAM"],
  TERRY: ["CB"],
  PEARCE: ["LB"],
  BUTCHER: ["CB"],
  FINNEY: ["RW", "LW"],
  SEAMAN: ["GK"],
  HART: ["GK"],
  CAMPBELL: ["CB"],
  BANKS: ["GK"],
  PICKFORD: ["GK"],
  BALL: ["CM"],
  SCHOLES: ["CM", "CAM"],
  WATSON: ["CM", "CB"],
  MAGUIRE: ["CB"],
  SHEARER: ["ST"],
  KEEGAN: ["ST", "CAM"],
  WILSON: ["LB"],
  PLATT: ["CM", "CAM"],
  HESKEY: ["ST", "LW"],
  BELL: ["CM"],
  DIER: ["CDM", "CB"],
  WADDLE: ["RW", "CAM", "LW"],
  RICE: ["CDM", "CM", "CB"],
  HUGHES: ["CB"],
  CAHILL: ["CB"],
  MILNER: ["CM", "RM", "RB", "LB"],
  CLEMENCE: ["GK"],
  RASHFORD: ["LW", "ST", "RW"],
  BEARDSLEY: ["ST", "RW", "CAM"], 
  "P.NEVILLE": ["RB", "LB", "CM"],
  GREAVES: ["ST"],
  DEFOE: ["ST"],
  GASCOIGNE: ["CM", "CAM"],
  SOUTHGATE: ["CB"],
  HAYNES: ["CAM", "CM"],
  "JOE COLE": ["LW", "CAM", "LM"],
  MATTHEWS: ["RW"],
  JOHNSON: ["RB", "RM"],
  HODDLE: ["CM", "CAM", "AM"],
  TRIPPIER: ["RB", "LB", "RWB"],
  INCE: ["CDM", "CM"],
  JAMES: ["GK"],
  FRANCIS: ["ST", "CAM"],
  SHERINGHAM: ["ST", "CAM",],
  NEAL: ["RB"],
  HURST: ["ST"],
  FLOWERS: ["CM"],
  DICKINSON: ['CDM', 'CM', "CB", "LB"],
  WALCOTT: ["RW", "ST"],
  BROOKING: ["CM", "CAM"],
  CHANNON: ["ST"],
  "M.WRIGHT": ["CB"],
  SAKA: ["RW", "LW", "RWB", ],
  FODEN: ["CAM", "LW", "RW"],
  KEOWN: ["CB"],
  WOODS: ["GK"],
  CROUCH: ["ST"],
  ARMFIELD: ["RB"],
  WOODCOCK: ["ST"],
  WELBECK: ["ST", "LW"],
  COPPEL: ["RW"],
  THOMPSON: ["CM", "LM", "LW"],
  BATTY: ["CDM", "CM"],
  HARGREAVES: ["CDM", "CM", "RB"],
  MILLS: ["RB"],
  CROMPTON: ["RB"],
  ROBINSON: ["GK"],
  BELLINGHAM: ["CM", "CAM", "CDM"],
  JAGIELKA: ["CB", "RB"],
  YOUNG: ["LB", "LM", "LW", "RB"],
  GREALISH: ["LW", "CAM", "CM"],
  BUTT: ["CDM", "CM"],
  CARRAGHER: ["CB", "RB"],
  MACMANAMAN: ["RW", "CAM", "RM"],
  ALLI: ["CAM", "CM"],
  COHEN: ["RB", "RM"],
  DOUGLAS: ["CM", "RM"],
  "WRIGHT-PHILLIPS": ["RW", "RM"],
  "LE SAUX": ["LB", "LM"],
  MARINER: ["ST"],
  "OXLADE-CHAMBERLAIN": ["CM", "RW", "RM"],
  "JACK CHARLTON": ["CB"],
  MULLERY: ["CDM", "CM"],
  CLAYTON: ["CM", "LM"],
  DOWNING: ['CAM', "LM", "LW"],
  HUNT: ["ST", "LW"],
  LALLANA: ["CAM", "CM", "LW"],
  SHAW: ["LB", "LWB"],
  WILSHERE: ["CM", "CDM"],
  CARRICK: ["CDM", "CM"],
  LOFTHOUSE: ["ST"],
  WRIGHT: ["ST"],
  BARKLEY: ["CAM", "CM"],
  TAA: ["RB", "RWB",'CDM','CM'],
  BYRNE: ["LB", "CM", "CDM"],
  DYER: ["RW", "RM"],
  SPRINGETT: ["GK"],
  HATELEY: ["ST"],
  LINGARD: ["CAM", "RW"],
  RAMSEY: ["RB"],
  SMALLING: ["CB"],
  PHILLIPS: ["CDM", "CM"],
  ANDERTON: ["RM", "RW"],
  ANDERSON: ["RB", "CB"],
  BAINES: ["LB", "LWB"],
  HAPGOOD: ["RB", "LB"],
  ROSE: ["LB", "LWB"],
  HUNTER: ["CB"],
  MCFARLAND: ["CB"],
  LEE: ["ST", "LM"],
  CHERRY: ["CB"],
  FRANKLIN: ["CB","RB"],
  NEWTON: ["RB"],
  TODD: ["CB"],
  JONES: ["CB"],
  MANNION: ['CAM', "ST"],
  STURRIDGE: ["ST"],
  CROOKS: ['RW', "ST"],
  FOWLER: ["ST"],
  VARDY: ["ST"],
  WEBB: ["RB", "CM"],
  WEDLOCK: ["CB","CM"],
  LESCOTT: ["CB"],
  BLENKINSOP: ["LB"],
  LABONE: ["CB"],
  MORTENSEN: ["ST"],
  MCDERMOTT: ['CM', 'ST'],
  CHIVERS: ['ST'],
  HODGE: ['RM', 'RW', 'CM'],
  MADELEY: ['RB', 'CB'],
  WILLIAMS: ["GK"],
  BLOOMER: ['ST', 'RW', 'LW'],
  WOODWARD: ['ST'],
  BARMBY: ['CAM', 'LM', 'CM'],
  LAWTON: ['ST'],
  SANCHO: ['RW', 'LW'],
  BROWN: ['CB', 'RB'],
  MARTYN: ['GK'],
  VASSEL: ['ST'],
  "P.BARNES": ['LW', 'LM'],
  DIXON: ['RB'],
  PALLISTER: ['CB'],
  GUEHI: ['CB'],
  MERSON: ['CAM', 'CM'],
  KING: ['ST'],
  "R.LEE": ['CM', 'LM', 'LW'],
  JENAS: ['CM', 'CAM'],
  WISE: ['CM'],
  CHILWELL: ['LB', 'LWB'],
  GALLAGHER: ['CM', 'CAM'],
  LENNON: ['RW', 'RM'],
  FENWICK: ['CB', 'CM'],
  DELPH: ['CM', 'LB'],
  'ALAN SMITH': ['ST'], 
  CLARKE: ['ST'], 
  BERTRAND: ['LB'],
  PARKER: ['RB', 'CDM'],
  STOREY: ['CM', 'CB'],
  WATKINS: ['ST'],
  MINGS: ['CB'],
  "CARLTON PALMER": ['CM', 'CDM'],
  GREENHOFF: ["CB",'CM', 'CAM'],
  "SCOTT PARKER": ['CDM', 'CM'],
  "LES FERDINAND": ['ST'],
  CURRIE: ['CM'],
  KENNEDY: ['LB',"CDM"],
  REDKNAPP: ['CM'],
  MARTIN: ["CB",'CM'],
  MCMAHON: ['CM'],
  MABBUTT: ['CB'],
  RIX: ['CAM', 'LM', 'CM'],
  PEARSON: ['ST', 'CM'],
  "ANDY COLE": ['ST'],
  DORIGO: ['LB'],
  GOMEZ: ['CB', 'RB'],
  MACDONALD: ['ST'],
  BLISSET: ['ST'],
  BOWEN: ['RW', 'ST'],
  CLOUGH: ['CAM', 'ST'],
  ROCASTLE: ['RM', 'CM'],
"DAVID JAMES": ['GK'],
CLYNE: ['RB'],
BULL: ['ST'],
BENT: ['ST'],
TOWNSEND: ['RW', 'RM'],
RICHARDS: ['RB', 'CB'],
REID: ['CM'],
CLEVERLY: ['CM', 'CAM'],
KEANE: ['CB'],
SINCLAIR: ['LW', 'LM'],
GREEN: ['GK'],
DCL: ['ST'],
LAMBERT: ['ST'],
JWP: ['CM'],
"TIM FLOWERS": ['GK'],
COWANS: ['CM'],
WINKS: ['CM'],
ABRAHAM: ['ST'],
COADY: ['CB'],
GIBBS: ['LB'],
RLC: ['CM', 'CAM'],
POPE: ['GK'],
MAINOO: ['CM', 'CDM'],
CARROLL: ['ST'],
"CALLUM WILSON": ['ST'],
MURPHY: ["CM", 'RW', 'RM'],
BUTLAND: ['GK'],
KONSA: ['CB', 'RB'],
RICHARDSON: ['LW', 'LM', 'LB'],
MADDISON: ['CAM', 'CM'],
TONEY: ['ST'],
DUNK: ['CB'],
WHITE: ['CB', 'RB'],
COLWILL: ['CB', 'LB'],
OSMAN: ['CM', 'CAM'],
GODFREY: ['CB', 'RB', 'LB'],
PALMER: ['RW', 'CAM'],
WHARTON: ['CM', 'CDM'],
BARRY: ['CM', 'CDM'],
LINEKER: ['ST'],
HENDERSON: ['CM', 'CDM'],
ADAMS: ['CB'],
PETERS: ['LM', 'CM'],
EDWARDS: ['CM'],
"KYLE WALKER": ['RB', 'CB', 'RWB'],
"LAMPARD SR": ['LB'],
SHACKLETON: ['LW', 'CM'],
DEAN: ['ST'],
BASTIN: ['LW', 'ST'],
CARTER: ['CAM', 'ST'],
CAMSELL: ['ST'],
HARDWICK: ['LB'],
TAYLOR: ['ST'],
MOUNT: ['CAM', 'CM'],
"REECE JAMES": ['RB', 'RWB', 'CB'],
MCMANAMAN: ['RW', 'RM', 'CAM']
      // Add more players here
    };
// 🔼 END: Versatile Players Object

window.alert = function(message) {
  showCustomAlert(message);
};
// Add the missing downloadImage function
function downloadImage(imageURL) {
  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "my-england-xi.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  const positionCategory = {
    GK: "GK",
    LB: "DEF", RB: "DEF", CB: "DEF", LWB: "DEF", RWB: "DEF",
    CDM: "MID", CM: "MID", CAM: "MID", LM: "MID", RM: "MID",
    LW: "ATT", RW: "ATT", ST: "ATT", CF: "ATT"
  };

  let selectedPlayers = {
    GK: [],
    DEF: [],
    MID: [],
    ATT: []
  };

  let formationLimits = {
    GK: 1,
    DEF: 4,
    MID: 4,
    ATT: 2
  };
const formationPresets = {
  "4-4-2": { DEF: 4, MID: 4, ATT: 2 },
  "4-3-3": { DEF: 4, MID: 3, ATT: 3 },
  "3-5-2": { DEF: 3, MID: 5, ATT: 2 },
  "5-3-2": { DEF: 5, MID: 3, ATT: 2 },
  "5-4-1": { DEF: 5, MID: 4, ATT: 1 },
  "4-2-3-1": { DEF: 4, MID: 2, ATT: 4 },
  "3-4-3": { DEF: 3, MID: 4, ATT: 3 },
  "4-1-4-1": { DEF: 4, MID: 5, ATT: 1 },
  "4-5-1": { DEF: 4, MID: 5, ATT: 1 },
  "3-6-1": { DEF: 3, MID: 6, ATT: 1 }
};
  document.getElementById("formationPicker").addEventListener("change", () => {
  const formation = document.getElementById("formationPicker").value;
  if (formationPresets[formation]) {
    formationLimits = { GK: 1, ...formationPresets[formation] };
    resetTeam();
  }
});
  function resetTeam() {
    selectedPlayers = { GK: [], DEF: [], MID: [], ATT: [] };
    ["gk", "def", "mid", "att"].forEach(id => {
      document.getElementById(id + "List").innerHTML = "";
    });
    document.querySelectorAll("[data-player]").forEach(el => {
      el.classList.remove("highlighted");
    });
  }
const roleNames = {
  GK: "Goalkeeper",
  DEF: "Defender positions",
  MID: "Midfielder positions",
  ATT: "Attacker positions",
};

function addPlayerToTeam(name, position) {
  const role = positionCategory[position];
  if (!role) return false;

  if (selectedPlayers[role].length >= formationLimits[role]) {
    if (role === "GK") {
      alert(`You already picked a goalkeeper.`);
    } else {
      alert(`${roleNames[role]} are already full in this formation.`);
    }
    return false;
  }

  if (Object.values(selectedPlayers).flat().some(p => p.startsWith(name))) {
    alert(`${name} is already selected.`);
    return false;
  }

    selectedPlayers[role].push(`${name} (${position})`);
    document.getElementById(role.toLowerCase() + "List").innerHTML = selectedPlayers[role]
      .map(p => `<span class="player-tag" onclick="removePlayer('${role}', '${name}')">${p}</span>`)
      .join(", ");

checkTeamCompletion(); // ✅ Call it here

    return true;
  }

  function removePlayer(role, name) {
    selectedPlayers[role] = selectedPlayers[role].filter(p => !p.startsWith(name));
    document.getElementById(role.toLowerCase() + "List").innerHTML = selectedPlayers[role]
      .map(p => `<span class="player-tag" onclick="removePlayer('${role}', '${p.split(" ")[0]}')">${p}</span>`)
      .join(", ");

    document.querySelectorAll("[data-player]").forEach(el => {
      if (el.getAttribute("data-player").toUpperCase() === name) {
        el.classList.remove("highlighted");
      }
    });
    checkTeamCompletion();
  }
  

 let firstClick = true; // ✅ Add this at the top of your script
 // Generate lineup text
  function generateLineupText() {
    const formation = document.getElementById("formationPicker").value;
    const gk = selectedPlayers.GK.join(", ");
    const def = selectedPlayers.DEF.join(", ");
    const mid = selectedPlayers.MID.join(", ");
    const att = selectedPlayers.ATT.join(", ");
    return `My England XI is\n${formation}\n${gk}\nDEF: ${def}\nMID: ${mid}\nATT: ${att}`;
  }
document.addEventListener("DOMContentLoaded", () => {
  // Close popup button handler
  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("positionPopup").style.display = "none";
  });

  // Close popup for team completion
  document.getElementById("closePopupButton").addEventListener("click", () => {
    document.getElementById("teamCompletePopup").style.display = "none";
  });

  // Player click handlers
  document.querySelectorAll("[data-player]").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const rawName = el.getAttribute("data-player");
      const name = rawName?.toUpperCase();
      if (!name) return;

      // Deselect if already selected
      if (el.classList.contains("highlighted")) {
        el.classList.remove("highlighted");

        Object.keys(selectedPlayers).forEach(role => {
          selectedPlayers[role] = selectedPlayers[role].filter(p => !p.startsWith(name));
          document.getElementById(role.toLowerCase() + "List").innerHTML = selectedPlayers[role]
            .map(p => `<span class="player-tag" onclick="removePlayer('${role}', '${p.split(" ")[0]}')">${p}</span>`)
            .join(", ");
        });

        checkTeamCompletion(); // ✅ Ensures features lock/unlock

        return; // Exit early since we deselected
      }

      // Existing logic for versatile players
      if (versatilePlayers[name]) {
        const options = versatilePlayers[name];
        if (options.length > 1) {
          showPositionPopup(name, options, el); // Show position picker
          if (firstClick) {
            document.getElementById("instructionText").style.display = "none";
            firstClick = false;
          }
        } else {
          const added = addPlayerToTeam(name, options[0]);
          if (added) {
            el.classList.add("highlighted");
            if (firstClick) {
              document.getElementById("instructionText").style.display = "none";
              firstClick = false;
            }
          }
        }
      } else {
        alert(`No position data found for ${name}.`);
      }
    });
  });

  // ✅ Share My XI logic starts here


document.getElementById("rateButton").addEventListener("click", async () => {
  document.getElementById("textSummaryHeading").style.display = "none";
  const lineupText = generateLineupText();
  try {
    const rateButton = document.getElementById("rateButton");
    rateButton.disabled = true;
    rateButton.textContent = "Rating...";

    const response = await fetch("http://localhost:3000/rate-xi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ lineupText: lineupText })
    });

    const data = await response.json();
    const textBox = document.getElementById("xiText");
    if (data && data.ratingText) {
      textBox.value = data.ratingText;
    } else {
      textBox.value = "Error: Something went wrong.";
    }

  } catch (err) {
    console.error(err);
    document.getElementById("xiText").value = "Error: Could not connect to server.";
  } finally {
    const rateButton = document.getElementById("rateButton");
    rateButton.disabled = false;
    rateButton.textContent = "Rate my XI";
  }
});


  // Export poster to 1080x1350 canvas
document.getElementById("shareBtn").addEventListener("click", async () => {
  const shareBtn = document.getElementById("shareBtn");
  shareBtn.disabled = true;
  shareBtn.textContent = "Generating...";

  document.getElementById("textSummaryHeading").style.display = "none";

  const captureElement = document.getElementById("posterCapture");

  try {
    const canvas = await html2canvas(captureElement, {
      backgroundColor: "#ffffff",
      scale: 2
    });

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = 2160; // 1080 * 2
    finalCanvas.height = 2700; // 1350 * 2

    const ctx = finalCanvas.getContext("2d");

    // Fill background white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    // Calculate scaled image size and position
    const verticalPadding = 90; // Add space at top and bottom
    const scale = Math.min(
      finalCanvas.width / canvas.width,
      (finalCanvas.height - verticalPadding * 2) / canvas.height
    );

    const width = canvas.width * scale;
    const height = canvas.height * scale;
    const x = (finalCanvas.width - width) / 2;
    const y = (finalCanvas.height - height) / 2;

    // Draw shadowed rectangle behind image (transparent copy)
    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 400;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, width, height);
    ctx.restore();

    // Draw the actual poster image
    ctx.drawImage(canvas, x, y, width, height);

    // Draw black frame
    const frameWidth = 20;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = frameWidth;
    ctx.strokeRect(x - frameWidth / 2, y - frameWidth / 2, width + frameWidth, height + frameWidth);

    // Export image
    const imageURL = finalCanvas.toDataURL("image/png");

    let imageContainer = document.getElementById("shareImageContainer");
    if (!imageContainer) {
      imageContainer = document.createElement("div");
      imageContainer.id = "shareImageContainer";
      const textSummarySection = document.getElementById("textSummarySection");
      textSummarySection.parentNode.insertBefore(imageContainer, textSummarySection.nextSibling);
    }

    imageContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
        <img src="${imageURL}" alt="Your England XI lineup poster" style="max-width: 400px; width: 100%; height: auto; border: 1px solid #ccc;">
        <button id="downloadBtn" style="margin: 0; padding: 8px 16px; font-size: 14px; border: none; color: white; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 5px;">Download</button>
      </div>
    `;

    // Event delegation to ensure the button is captured
    imageContainer.addEventListener("click", (e) => {
      if (e.target && e.target.id === "downloadBtn") {
        downloadImage(imageURL);
      }
    });

    document.getElementById("xiText").value = generateLineupText();
  } catch (error) {
    console.error("Sharing error:", error);
    const imageContainer = document.getElementById("shareImageContainer");
    if (imageContainer) {
      imageContainer.innerHTML = `<p style="color: red; text-align: center;">Failed to generate image. Please try again.</p>`;
    }
  } finally {
    shareBtn.disabled = false;
    shareBtn.textContent = "Regenerate Image";
  }
});

  // Copy lineup text to clipboard
   document.getElementById("copyTextBtn").addEventListener("click", () => {
    const textarea = document.getElementById("xiText");
    textarea.select();
    document.execCommand("copy");
    showCustomAlert("✅ Copied to clipboard!", 3000, "green"); // Use green for success
  });

  // ✅ Share My XI logic ends here
});

document.getElementById("simulateMatchBtn").addEventListener("click", async () => {
  document.getElementById("textSummaryHeading").style.display = "none"; 
  const simulateBtn = document.getElementById("simulateMatchBtn");
  const opponentName = document.getElementById("opponentTeam").value;
  const lineupText = generateLineupText();

  if (!lineupText || lineupText.includes("No players selected")) {
    alert("Please complete your England XI before simulating a match.");
    return;
  }

  simulateBtn.disabled = true;
  simulateBtn.textContent = "Simulating match...";

  try {
    const response = await fetch("http://localhost:3000/simulate-match", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ englandLineup: lineupText, opponentName }),
    });

    const data = await response.json();

    if (data.result) {
      // Overwrite the textarea with the simulation result
      document.getElementById("xiText").value = data.result;
    } else {
      document.getElementById("xiText").value = "Error: Something went wrong.";
    }
  } catch (error) {
    console.error("Match simulation error:", error);
    document.getElementById("xiText").value = "Server error occurred.";
  } finally {
    simulateBtn.disabled = false;
    simulateBtn.textContent = "Simulate match with my XI vs.";
  }
});

// Updated showCustomAlert to support color
function showCustomAlert(message, duration = 3000, color = "red") { // Default to red for warnings
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.style.backgroundColor = color; // Set background color
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, duration);
}

  function showPositionPopup(player, options, el) {
    const popup = document.getElementById("positionPopup");
    const text = document.getElementById("positionText");
    const buttons = document.getElementById("positionButtons");

    text.textContent = `Where do you want to play ${player}?`;
    buttons.innerHTML = "";

    options.forEach(pos => {
      const btn = document.createElement("button");
      btn.textContent = pos;
      btn.onclick = () => {
        popup.style.display = "none";
        const added = addPlayerToTeam(player, pos);
        if (added && el) {
          el.classList.add("highlighted");
        }
      };
      buttons.appendChild(btn);
    });

    popup.style.left = "50%";
    popup.style.top = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.display = "block";
  }

 function checkTeamCompletion() {
  const totalSelected = Object.values(selectedPlayers).flat().length;
  const isComplete = totalSelected === 11;

  const popup = document.getElementById("teamCompletePopup");
  const lockMessage = document.getElementById("actionLockMessage");
  const buttons = document.querySelectorAll("#actionSection button");

  if (isComplete) {
    popup.style.display = "block";
    lockMessage.style.display = "none";

    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.add("unlocked");
    });
  } else {
    popup.style.display = "none";
    lockMessage.style.display = "block";

    buttons.forEach(btn => {
      btn.disabled = true;
      btn.classList.remove("unlocked");
    });
  }

  // ✅ Always update the heading regardless of state
  updateTextSummaryHeading();
}

function updateTextSummaryHeading() {
  const heading = document.getElementById("textSummaryHeading");
  if (!heading) return;

  const total = Object.values(selectedPlayers).flat().length;
  if (total === 11) {
    heading.textContent = "Now pick one of the 3 options above.";
    heading.style.display = "block";
  } else {
    heading.textContent = "Pick your XI players on the poster, then click one of the three options above.";
    heading.style.display = "block";
  }
}

