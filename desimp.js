const name = "badhon";
const age = 25;

const person = { name, age};

console.log(person);

const skier = {
    name,
    sound,
    powederYell(){
        let yell = this.sound.toUpperCase();
        console.log(`${yell} !!!!`);
    },
    speed(mph){
        this.speed = mph;
        console.log("speed:",mph);
    }
};
