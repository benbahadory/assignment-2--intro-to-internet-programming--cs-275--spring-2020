let caliRecipe = document.getElementById(`caliRecipe`);
let whiteRecipe = document.getElementById(`whiteRecipe`);

let caliButton = document.getElementById(`caliButton`);
let whiteButton = document.getElementById(`whiteButton`);

let softRiceButton = document.getElementById(`softRice`);
let ozCaliRice = document.getElementById(`ozCaliRice`);
let ozCaliWater = document.getElementById(`ozCaliWater`);

let selectCaliRecipe = () => {
    whiteRecipe.style.display = `none`;
    caliRecipe.style.display = `block`;
};
let selectWhiteRecipe = () => {
    caliRecipe.style.display = `none`;
    whiteRecipe.style.display = `block`;
};

let calculateCaliWater = () => {
    if (softRiceButton.checked)
    {
        ozCaliWater.value = ozCaliRice.value*2;
    }
    else ozCaliWater.value = ozCaliRice.value*1.6;
};

caliButton.addEventListener(`click`, selectCaliRecipe, false);
whiteButton.addEventListener(`click`, selectWhiteRecipe, false);

ozCaliRice.addEventListener(`keyup`,calculateCaliWater);
