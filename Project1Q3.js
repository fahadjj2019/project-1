var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}


aquarium.numberOfRocks+= 3;

console.log(aquarium.fish[2]);
cclownaSize = aquarium.fish[2].size;
aquarium.fish[0].size= "4 inches";

aquarium.fish[3]= {type: 'starfish',
size: '5 inch',
color: 'blue'

};

console.log(aquarium.fish[3]);
// printing thw whole object
console.log("=============================");
console.log("=============================");
console.log("=============================");
console.log(aquarium);
