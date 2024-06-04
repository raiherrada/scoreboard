let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function one_point_home() {
    countHome += 1
    homeScore.textContent = countHome
}

function two_points_home() {
    countHome += 2
    homeScore.textContent = countHome
}

function three_points_home() {
    countHome += 3
    homeScore.textContent = countHome
}

function one_point_guest() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function two_points_guest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function three_points_guest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function changeColor(base) {
    
    var currentSrc = base.getAttribute("src");
    var image1 = "/Media/Images/diamond.png";
    var image2 = "/Media/Images/red-diamond.png";
    var newSrc = currentSrc === image1 ? image2 : image1;
    base.setAttribute("src", newSrc);
}

    resetButton.addEventListener('click', () => {
        countHome = 0;
        countGuest = 0;
        homeScore.textContent = countHome;
        guestScore.textContent = countGuest;
    });