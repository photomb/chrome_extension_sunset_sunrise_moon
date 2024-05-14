const moonPhases = [
    "new_moon.svg",
    "waxing_crescent.svg",
    "first_quarter.svg",
    "waxing_gibbous.svg",
    "full_moon.svg",
    "waning_gibbous.svg",
    "last_quarter.svg",
    "waning_crescent.svg"
];

function getImgMoon(moonPhase) {
    const moonImage = document.getElementById("moon-image");
    if (moonPhase in moonPhases) {
        moonImage.src = "../img/" + moonPhases[moonPhase];
    } else { 
        moonImage.src = "../img/new_moon.svg";
    }
    balisePhase.innerHTML = englishToFrench[moonPhase]
};

getMoonPhase().then(result => {
    const moonPhase = result[0].Phase;
    getImgMoon(moonPhase);
});

let currentPhaseIndex = 0;
const moonImage = document.getElementById("moon-image");
function changeMoonPhase() {
    let currentPhaseI = (currentPhaseIndex + 1) % moonPhases.length;
    console.log(currentPhaseIndex);
    moonImage.src = "img/" + moonPhases[currentPhaseI];
    console.log(moonImage.src);
}

setInterval(changeMoonPhase, 1000);