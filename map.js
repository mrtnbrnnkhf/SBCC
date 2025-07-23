const FloorOffsets = Object.freeze({
    Floor4: 0,
    Floor3: 750,
    Floor2: 1500,
    Floor1: 2250,
    Groundfloor: 3000,
    Basement1: 3750,
    Basement2: 4500
});

function toFloor(floor) {
    if (FloorOffsets.hasOwnProperty(floor)) {
        window.scrollTo(0, FloorOffsets[floor]);
    }
}

function showGreen(room) {
    var elem = document.getElementById(room);
    if (elem.style.opacity < "0.1") {
        elem.style.opacity = 1 ;
    } else if (elem.style.opacity > "0.9") {
        elem.style.opacity = 0;
    }
}
