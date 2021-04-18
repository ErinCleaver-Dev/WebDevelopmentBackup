const animals = {
    tiger: 25,
    lion: 5,
    monkey: 2,
    bird: 40
}

function objectSpread(p1, p2, p3) {
    console.log(p1, p2, p3);
}

const {tiger, lion, ...rest} = animals;

objectSpread(tiger, lion, rest);