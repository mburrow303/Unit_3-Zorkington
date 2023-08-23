/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/
//! Do not alter name "gameDetails" or keynames
export const gameDetails = {   
    title: '<-Z->  Zorkington Golfshop Game  <-Z->',
    desc: 'Welcome to the world of Zorkington Golfshop, here are some quick rules & concepts...You can navigate through the golf shop by each department, pickup, drop, & add to inventory specific items in each department/room.',
    author: 'Matthew Burrow',
    cohort: 'SBPT-2022',
    startingRoomDescription: 'What you see before you is a large retail golf shop...',
    playerCommands: [
        // replace these with your games commands as needed
        'enter', 'exit', 'pickup', 'drop', 'add to inventory'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

//* Your code here

let currentRoom = 'startingRoom';

//TODO a dictionary of locations created
let roomState = {
    startingRoom: ['clubsRoom'],
    clubsRoom: ['bagsRoom'],
    bagsRoom: ['clubsRoom', 'ballsRoom'],
    ballsRoom: ['accessoriesRoom', 'bagsRoom', 'shoesRoom'],
    accessoriesRoom: ['apparelRoom', 'ballsRoom'],
    apparelRoom: ['shoesRoom', 'accessoriesRoom'],
    shoesRoom: ['apparelRoom', 'ballsRoom']
};
//console.log(room[currentRoom]);


function enterRoom(newRoom) {
  let validTransitions = roomState[currentRoom];
  if(validTransitions.includes(newRoom)) {
    currentRoom = newRoom;
    console.log(currentRoom);
  } else {
    throw(`Invalid Move: ${currentRoom} to ${newRoom}`);
  }
}


class Item {
    constructor(name, description, location, canPickup) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.canPickup = canPickup;
    }
    
    /*useItem() {
        console.log(`User has interacted with the item: ${this.name}`);
        return (`User has interacted with the item: ${this.name}`); // need to work in the different commands?
    }*/
}

//useItem();


//TODO a set of items generated
let driver = new Item('driver', 'Driver', 'clubsRoom', true);
//console.log(driver);

let hybrid = new Item('hybrid', 'Hybrid', 'clubsRoom', true);
//console.log(hybrid);

let putter = new Item('putter', 'Putter', 'clubsRoom', false);
console.log(putter);

let standBag = new Item('standBag', 'Stand bag', 'bagsRoom', true);

let cartBag = new Item('cartBag', 'Cart bag', 'bagsRoom', true);

let pushCart = new Item('pushCart', 'Push cart', 'bagsRoom', false);

let titleistBalls = new Item('titleistBalls', 'Titleist ballsRoom', 'balls', true);

let bridgestoneBalls = new Item('bridgestoneBalls', 'Bridgestone balls', 'ballsRoom', true);

let rangeBalls = new Item('practiceBalls', 'Practice balls', 'ballsRoom', false);

let hat = new Item('hat', 'Hat', 'accessoriesRoom', true);

let glove = new Item('glove', 'Glove', 'accessoriesRoom', true);

let tees = new Item('tees', 'Tees', 'accessoriesRoom', false);

let belt = new Item('belt', 'Belt', 'apparelRoom', true);

let shirt = new Item('shirt', 'Polo shirt', 'apparelRoom', true);

let jacket = new Item('jacket', 'Jacket', 'apparelRoom', false);

let spikedShoes = new Item('spikedShoes', 'Spiked Shoes', 'shoesRoom', true);

let spikelessShoes = new Item('spikelessShoes', 'Spikeless Shoes', 'shoesRoom', true);

let socks = new Item('socks', 'Socks', 'shoesRoom', false);


 class Location extends Item {
    constructor(name, description, roomInventory, exits) {
      super(name, description);
      this.roomInventory = roomInventory;
      this.exits = exits;
    } 

    /*enterLocation() {
     console.log(`User has entered the room: ${this.location}`);
     return (`User has entered the room: ${this.location}`);
    } */ // enter or exit room?
}

//enterLocation();


let startingRoom = new Location('startingRoom', 'Starting Room', '', 'clubsRoom');

let clubsRoom = new Location('clubsRoom', 'Clubs Room', 'driver, hybrid, putter', 'bagsRoom');

let bagsRoom = new Location('bagsRoom', 'Bags Room', 'standBag, cartBag, pushCart', 'clubsRoom, ballsRoom');

let ballsRoom = new Location('ballsRoom', 'Balls Room', 'titleistBalls, bridgestoneBalls, practiceBalls', 'accessoriesRoom, bagRoom, shoesRoom');

let accessoriesRoom = new Location('accessoriesRoom', 'Accessories Room', 'hat, glove, tees', 'apparelRoom, ballsRoom');

let apparelRoom = new Location('apparelRoom', 'Apparel Room', 'belt, shirt, jacket', 'shoesRoom, accessoriesRoom');

let shoesRoom = new Location('shoesRoom', 'Shoes Room', 'spikedShoes, spikelessShoes, socks', 'apparelRoom, ballsRoom');

//! Do not alter name "domDisplay or playerInput"
export const domDisplay = (playerInput) => {
    enterRoom('clubsRoom');
    console.log(playerInput);
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
