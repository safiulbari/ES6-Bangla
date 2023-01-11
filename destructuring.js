const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"],
};

const {bread, meat} = sandwich;

console.log(bread, meat);

const lordify = ({firstname}) => `${firstname} of canterbury`;

const regularPerson = {
    firstname : "Safiul",
    lastname : "Bari",
    spouse: {
        sfirstname : "Pranty",
        slastname : "Jarin"
    }
};

const getSpouse = ({firstname, spouse : {sfirstname}}) => `${firstname}'s wife name is ${sfirstname}`;

console.log(lordify(regularPerson));
console.log(getSpouse(regularPerson));