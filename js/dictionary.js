const toDayMoon = Math.round(Date.now() / 1000);
const toDaySun = new Date();
//const currentHour = toDaySun.getHours();
const currentHour = 23;
const year = toDaySun.getUTCFullYear();
const month = toDaySun.getUTCMonth() + 1;
const day = toDaySun.getUTCDate();
const tzid2 = localStorage.getItem("tzid");
const fullDateForSun = year + "-" + month + "-" + day;
const balisePhase = document.getElementById("phase");
const baliseSunset = document.getElementById("sunset");
const baliseSunrise = document.getElementById("sunrise");
const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const ZoneUTC = document.getElementById("tzid");
const backgroundElement = document.querySelector(".wrapper");
const moonElement = document.querySelector(".moon");
const sunElement = document.querySelector(".sun"); 

const englishToFrench = {
"New Moon" : "Nouvelle lune",
"Waxing Crescent" : "Premier croissant",
"First Quarter" : "Premier quartier",
"Waxing Gibbous" : "Gibbeuse croissante",
"Full Moon" : "Pleine lune",
"Waning Gibbous" : "Gibbeuse décroissante",
"Last Quarter" : "Dernier quartier",
"Waning Crescent" : "Dernier croissant"
}

const switchDay = {
    0 : "Dimanche",
    1 : "Lundi",
    2 : "Mardi",
    3 : "Mecredi",
    4 : "Jeudi",
    5 : "Vendredi",
    6 : "Samedi",
}

const switchMonth = {
    '01' : "Janvier",
    '02' : "Février",
    '03' : "Mars",
    '04' : "Avril",
    '05' : "Mai",
    '06' : "Juin",
    '07' : "Juillet",
    '08' : "Août",
    '09' : "Septembre",
    '10' : "Octobre",
    '11' : "Novembre",
    '12' : "Décembre"
}

async function getTimeUTCJson() {
    let timeUTCNames = [];
    const timeZone = await fetch('./time-zones.json');
    const result = await timeZone.json();
    result.forEach(element => {
        timeUTCNames.push(element.rawOffsetInMinutes);
    });
    return timeUTCNames;
};
