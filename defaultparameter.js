const defaultPerson = {
    name:{
        first: "Lional",
        last: "Messi"
    },
    favActivity: "Football"
};

function logActivity(person = defaultPerson){
    console.log(`${person.name.first} ${person.name.last} loves ${person.favActivity}`)
}

logActivity();

function logWorks(name="Badhon", activity="football"){
    console.log(`${name} loves ${activity}`)
}

logWorks();