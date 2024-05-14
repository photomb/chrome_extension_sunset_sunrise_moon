function refreshAndDisplayTime() {
    const tzid2 = localStorage.getItem("tzid");
    const dateString = new Date().toLocaleString("fr-FR", {timeZone: tzid2});
    const getDay = new Date().getDay();
    const myDay = dateString.slice(0,2);
    const myMonth = dateString.slice(3,5);
    const myYear = dateString.slice(6,10);
    const formattedString = dateString.replace(", ", " - ");
    const formattedTime = formattedString.slice(10, 19);
    const formattedDate = switchDay[getDay]+" "+myDay+" "+switchMonth[myMonth]+" "+myYear;
    timeDisplay.innerHTML = formattedTime;
    dateDisplay.innerHTML = formattedDate;
    ZoneUTC.innerHTML = tzid2;
    console.log(myMonth);
};

setInterval(refreshAndDisplayTime, 1000);

async function getTimeZoneFromJson() {
    let timeZoneNames = [];
    const timeZone = await fetch('./time-zones.json');
    const result = await timeZone.json();
    result.forEach(element => {
        timeZoneNames.push(element.name); //&& element.rawOffsetInMinutes
    });
    timeZoneNames.sort();
    return timeZoneNames;
};

function addTimeZoneToSelect() {
    const timeZoneArray = getTimeZoneFromJson();
    timeZoneArray.then((result) => {
        for (let i = 0; i < result.length; i++) {
            const opt = document.createElement("option")
            opt.value = result[i];
            opt.innerHTML = result[i];
            timeZoneSelect.appendChild(opt);
        }
    });
}
 
function getSelectedValue() {
    tzid = localStorage.setItem("tzid", document.getElementById("timeZoneSelect").value);
}

const selectTzid = document.getElementById("timeZoneSelect");
selectTzid.addEventListener("change", (event) => {
    getSelectedValue();
});

addTimeZoneToSelect();