let caliRecipe = document.getElementById(`caliRecipe`);
let whiteRecipe = document.getElementById(`whiteRecipe`);
let caliButton = document.getElementById(`caliButton`);
let whiteButton = document.getElementById(`whiteButton`);

let selectCaliRecipe = () => {
    whiteRecipe.style.display = `none`;
    caliRecipe.style.display = `block`;
};
let selectWhiteRecipe = () => {
    caliRecipe.style.display = `none`;
    whiteRecipe.style.display = `block`;
};

caliButton.addEventListener(`click`, selectCaliRecipe, false);
whiteButton.addEventListener(`click`, selectWhiteRecipe, false);
