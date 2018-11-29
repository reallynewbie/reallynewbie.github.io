function toggleNavSize() {
    document.getElementsByClassName("grid")[0].classList = "grid grid-toggled";
    document.getElementById("mainArea").style.display = "block";
}
/*
grid {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: 100% 0%;
    grid-template-areas: 
    "nav"
    "main"; 
    background-color: plum;
    transition: all 5s ease;
}
.grid-toggled {
    grid-template-rows: 5% 95%;
    transition: all 5s ease;
}
*/