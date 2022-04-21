hiscores = [{
    points: 0,
    name: nom
}]

function insert (sc) {
    i = 0;
    while (sc < hiscores[i].points && i < 5) {
        if (sc >= hiscores[i].points) {
            for (j = i + 1; j < 5; j += 1) {
                hiscores[j] = hiscores[j - 1];
            }
            hiscores[i].points = sc;
            hiscores[i].name = nom;
        }
        i += 1;
    }
}
console.log(hiscores);

var nom;

function infinite_game() {
    nom = prompt("User name");
    loadpage("./html/infinite.html");
}

var hiscores = localStorage.getItem("hiScores");

function showHiScores() {
    document.getElementById("top1").innerHTML = hiscores[0].name + ", " + hiscores[0].points + " partides completades";
    document.getElementById("top2").innerHTML = hiscores[1].name + ", " + hiscores[1].points + " partides completades";
    document.getElementById("top3").innerHTML = hiscores[2].name + ", " + hiscores[2].points + " partides completades";
    document.getElementById("top4").innerHTML = hiscores[3].name + ", " + hiscores[3].points + " partides completades";
    document.getElementById("top5").innerHTML = hiscores[4].name + ", " + hiscores[4].points + " partides completades";
}