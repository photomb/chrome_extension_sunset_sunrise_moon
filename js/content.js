//COORDONNEES NAVIGATEUR
function gps() {
    navigator.geolocation.getCurrentPosition(stockPosition);
}

function stockPosition(position) {
    const coordArr = [position.coords.latitude, position.coords.longitude];
    getSun(coordArr); // Appel de getSun une fois que les coordonnées sont disponibles
};

function refreshTime() {
    const dateString = new Date().toLocaleString("fr-FR", {timeZone: tzid2});
    const getDay = new Date().getDay();
    const myMonth = dateString.slice(3,5);
    const myDay = dateString.slice(0,2);
    const formattedString = dateString.replace(", ", " - ");
    const formattedTime = formattedString.slice(10, 19);
    const formattedDate = switchDay[getDay]+" "+myDay+" "+switchMonth[myMonth]+" "+year;
    timeDisplay.innerHTML = formattedTime;
    dateDisplay.innerHTML = formattedDate;
    ZoneUTC.innerHTML = tzid2;
    sunAndMoonPosition();
};

gps();
setInterval(refreshTime, 1000);

//POSITION SPE SUN & BG

function sunAndMoonPosition() {
    let positionY = '0';
    if (currentHour >= 6 && currentHour < 10) {
        positionY = '50%';
        moonElement.remove();
    } else if (currentHour >= 11 && currentHour < 16) {
        positionY = '20%';
        moonElement.remove();
    } else if (currentHour >= 17 && currentHour < 21) {
        positionY = '40%';
        moonElement.remove();
    } else if (currentHour >= 21 && currentHour < 24) {
        positionY = '30%';
        sunElement.remove();
    } else if (currentHour >= 0 && currentHour < 6) {
        positionY = '20%';
        sunElement.remove();
    }
    changeBackground();
    sunElement.style.top = positionY;
};

function changeBackground() {
    if (currentHour >= 6 && currentHour < 10) {
        backgroundElement.style.backgroundImage = "linear-gradient(rgba(255,233,135,1), rgba(255,255,255,0))";
    } else if (currentHour >= 11 && currentHour < 16) {
        backgroundElement.style.backgroundImage = "linear-gradient(rgba(120,172,255,1), rgba(255,255,255,0))";
    } else if (currentHour >= 17 && currentHour < 21) {
        backgroundElement.style.backgroundImage = "linear-gradient(rgba(250,148,52,1), rgba(255,255,255,0))";
    } else if (currentHour >= 21 && currentHour < 24) {
        backgroundElement.style.backgroundImage = "linear-gradient(rgba(18,52,71,1), rgba(255,255,255,0))";
    } else if (currentHour >= 0 && currentHour < 6) {
        backgroundElement.style.backgroundImage = "linear-gradient(rgba(4,4,39,1), rgba(255,255,255,0))";
    }
}