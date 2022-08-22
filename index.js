// xdscrabble

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getDatabase, ref, set, onDisconnect, onValue, onChildAdded, onChildRemoved, get, child } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdDLRi3gIfn8csQA88l8avcqdQIUDxqw8",
    authDomain: "xdscrabble.firebaseapp.com",
    projectId: "xdscrabble",
    storageBucket: "xdscrabble.appspot.com",
    messagingSenderId: "777393344555",
    appId: "1:777393344555:web:bd1fe87119ec7e53801a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// getting canvas and context
var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");
 
// disable right click context menu on canvas
c.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
});
 
// key event listeners
window.addEventListener("keydown", keyPressed, false);
window.addEventListener("keyup", keyReleased, false);
 
// define keys list
var keys = [];
var type = [];

// key functions
function keyPressed(event){
    keys[event.keyCode] = true;
    // 8 = backspace, 13 = enter
    if (event.keyCode != 8 && event.keyCode != 13) {
        type.push(event.keyCode);
    } else {
        if (event.keyCode == 8) {
            type.pop();
        }
    }
}
function keyReleased(event){
    keys[event.keyCode] = false;
}
 
// mouse vars
var mX;
var mY;
 
// mouse event listener
window.addEventListener("mousemove", function(event) {
    mX = event.clientX - c.getBoundingClientRect().left;
    mY = event.clientY - c.getBoundingClientRect().top;
});
 
// click var
var mouseDown;
var mouseButton;
 
// click event listeners
window.addEventListener("mousedown", function(event){
    mouseDown = true;
    mouseButton = event.button;
});
window.addEventListener("mouseup", function(){
    mouseDown = false;
});
 
// wheel var
var wheelDir;
 
// wheel event listener
window.addEventListener("wheel", function(event) {
    wheelDir = event.deltaY;
});

function sia() {
    signInAnonymously(auth).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
    });
}

import { box, letters, GenerateCode } from "./convenience.js"

var screen = 0;

var playerID;
var playerRef
var allPlayersRef;

var gameID;
var gameRef;
var allGames;

var localGame;

function main() {
    switch (screen) {
        // main menu
        case 0: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "#888888";
            ctx.fillRect(0, 0, 600, 600);
            
            // title
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "60px Comic Sans MS";
            ctx.fillText("XD SCRABBLE", 90, 80);
            ctx.font = "30px Comic Sans MS";
            ctx.fillText("By Zasharan2", 190, 120);

            // create game button
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(160, 160, 256, 80);
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.font = "40px Comic Sans MS";
            ctx.fillText("Create Game", 167, 210);
            if (box(mX, mY, 160, 160, 256, 80) && mouseDown) {
                screen = 0.1;
            }

            // join game button
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(160, 320, 256, 80);
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.font = "40px Comic Sans MS";
            ctx.fillText("Join Game", 189, 373);
            if (box(mX, mY, 160, 320, 256, 80) && mouseDown) {
                type = [];
                screen = 0.2;
            }

            break;
        }

        // create game
        case 0.1: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, 600, 600);

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // logged in
                    playerID = user.uid;
                    gameID = user.uid;
                    // players node does not exist yet but firing of this will create the node as well as populate it with the player id
                    // after the players node is created, all other player ids will be populated into the existing player node
                    gameRef = ref(database, `games/${playerID}`);

                    allPlayersRef = ref(database, `games/${gameID}/gamePlayers`);

                    var code;

                    get(child(ref(database), `games`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            var i = 0;
                            while (i == 0) {
                                i = 1;
                                code = GenerateCode();
                                for (var key in snapshot.val()) {
                                    if (code == snapshot.val()[key]['gameCode']) {
                                        i = 0;
                                    }
                                }
                            }
                        } else {
                            code = GenerateCode();
                        }
                        console.log(code);

                        set(gameRef, {
                            gameId: playerID,
                            gameCode: code,
                            gameTurn: playerID,
                            gameState: "Joinable",
                            gamePlayers: {}
                        });

                        playerRef = ref(database, `games/${gameID}/gamePlayers/${playerID}`);
        
                        set(playerRef, {
                            playerId: playerID,
                            playerTiles: ""
                        });    
                    });
        
                    onDisconnect(gameRef).remove();

                    // callback will occur whenever player ref changes
                    onValue(gameRef, (snapshot) => {
                        localGame = snapshot.val();
                    });

                    // callback will occur whenever (relative to the client) a new player joins
                    // (this means even if people were playing before a new client joins, to the client the other people will have just joined and this function will fire for all of them)
                    onChildAdded(allPlayersRef, (snapshot) => {
                        // var addedPlayer = snapshot.val();

                        // if (addedPlayer.playerId != playerID) {
                        //     opponentID = addedPlayer.playerId;
                        // }
                        // console.log(addedPlayer.playerId);
                    });

                    screen = 0.3;
                } else {
                    // logged out
                }
            });

            sia();

            break;
        }

        // join game
        case 0.2: {
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, 600, 600);

            var enterJoinCode = (letters[type[0] - 65] || "") + (letters[type[1] - 65] || "") + (letters[type[2] - 65] || "") + (letters[type[3] - 65] || "") + (letters[type[4] - 65] || "") + (letters[type[5] - 65] || "");

            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.font = "25px Comic Sans MS";
            ctx.fillText(`Enter Code: ${enterJoinCode}`, 20, 40);

            if (type.length > 5) {
                type = [];
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // logged in
                        playerID = user.uid;
            
                        get(child(ref(database), `games`)).then((snapshot) => {
                            if (snapshot.exists()) {
                                for (var key in snapshot.val()){
                                    if (snapshot.val()[key]['gameCode'] == enterJoinCode && snapshot.val()[key]['gameState'] == "Joinable") {
                                        gameID = snapshot.val()[key]['gameId'];
                                        localGame = snapshot.val()[key];
                                    }
                                }
                            }
            
                            gameRef = ref(database, `games/${gameID}`);
            
                            playerRef = ref(database, `games/${gameID}/gamePlayers/${playerID}`);
            
                            localGame["gamePlayers"][playerID] = {
                                playerId: playerID,
                                playerTiles: ""
                            }

                            set(playerRef, localGame["gamePlayers"][playerID]);
                
                            onDisconnect(playerRef).remove();
                
                            // callback will occur whenever player ref changes
                            onValue(gameRef, (snapshot) => {
                                localGame = snapshot.val();
                            });
            
                            screen = 0.4;
                        });
                    } else {
                        // logged out
                    }
                });
            
                sia();
            }

            break;
        }

        // game settings
        case 0.3: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "#888888";
            ctx.fillRect(0, 0, 600, 600);
            
            // title
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "60px Comic Sans MS";
            ctx.fillText("SETTINGS", 130, 80);

            // create game button
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.fillRect(160, 480, 256, 80);
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.font = "40px Comic Sans MS";
            ctx.fillText("Start Game", 175, 530);
            if (box(mX, mY, 160, 480, 256, 80) && mouseDown) {
                console.log(localGame["gameCode"]);
                set(gameRef, {
                    gameId: localGame["gameId"],
                    gameCode: localGame["gameCode"],
                    gameTurn: localGame["gameTurn"],
                    gameState: "Ingame",
                    gamePlayers: localGame["gamePlayers"]
                });

                screen = 1;
            }

            break;
        }

        // waiting
        case 0.4: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "#888888";
            ctx.fillRect(0, 0, 600, 600);
            
            // title
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "60px Comic Sans MS";
            ctx.fillText("WAITING", 140, 80);

            if (localGame["gameState"] == "Ingame") {
                screen = 1;
            }

            break;
        }

        // game
        case 1: {
            // background
            ctx.beginPath();
            ctx.fillStyle = "#888888";
            ctx.fillRect(0, 0, 600, 600);

            break;
        }
    }

    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);