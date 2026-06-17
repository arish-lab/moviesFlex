

const searchMovie =
document.getElementById("searchMovie");

searchMovie.addEventListener("keyup", () => {

    let filter =
    searchMovie.value.toLowerCase();

    let cards =
    document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        let title =
        card.querySelector("h3")
        .innerText
        .toLowerCase();

        if(title.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});


// CATEGORY FILTER

const filterBtns =
document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .querySelector(".filter-btn.active")
        .classList.remove("active");

        btn.classList.add("active");

        let category =
        btn.dataset.category;

        let cards =
        document.querySelectorAll(".movie-card");

        cards.forEach(card => {

            if(
                category === "all" ||
                card.dataset.category === category
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});


// TRAILER POPUP

function openTrailer(url){

    document
    .getElementById("trailerModal")
    .style.display = "block";

    document
    .getElementById("trailerFrame")
    .src = url;

}

document
.querySelector(".close")
.onclick = function(){

    document
    .getElementById("trailerModal")
    .style.display = "none";

    document
    .getElementById("trailerFrame")
    .src = "";

}

window.onclick = function(event){

    let modal =
    document.getElementById("trailerModal");

    if(event.target == modal){

        modal.style.display = "none";

        document
        .getElementById("trailerFrame")
        .src = "";
    }

}