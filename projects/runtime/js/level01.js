var level01 = function (window) {


    window.opspark = window.opspark || {};


    var draw = window.opspark.draw;
    var createjs = window.createjs;


    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;


        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "bird", "x": 400, "y": groundY },
                { "type": "bird", "x": 600, "y": groundY },
                { "type": "bird", "x": 900, "y": groundY },
                { "type": "bird", "x": 1000, "y": 350},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);


        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE


        /**function createSawBlade(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            obstacleImage.x = -25
            obstacleImage.y = -25
            sawBladeHitZone.addChild(obstacleImage);
        };
        */


        function createObstacle(x, y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var meteoriteHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            meteoriteHitZone.x = x;
            meteoriteHitZone.y = y;
            game.addGameItem(meteoriteHitZone);
            var obstacleImage = draw.bitmap("img/bird.png");
            obstacleImage.x = -60
            obstacleImage.y = -45
            obstacleImage.rotationalVelocity = -3 * Math.random();
            meteoriteHitZone.addChild(obstacleImage);


        };


        createObstacle(1000, 350);


       


        function createEnemy(x,y) {
            var enemy = game.createGameItem("enemy", 20);
            var redSquare = draw.rect(50, 50, "red");
            redSquare.x = -10;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x
            enemy.y = y
            game.addGameItem(enemy);
            enemy.velocityX = -5
            enemy.rotationalVelocity = -5 * Math.random();
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10)
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.fadeOut();
            }
       
        }



        createEnemy(400, groundY - 10);
        createEnemy(800, groundY - 100);
        createEnemy(1200, groundY - 50);
        createEnemy(1600, groundY - 35);
        createEnemy(2100, groundY + 15);
        createEnemy(2200, groundY - 5);
        createEnemy(3500, groundY - 56);
        createEnemy(3850, groundY - 25);
        createEnemy(4250, groundY - 60);
        createEnemy(5225, groundY - 75);
        createEnemy(6000, groundY - 75);
        createEnemy(6025, groundY - 75);
        createEnemy(7000, groundY - 75);
        createEnemy(7500, groundY - 75);
        createEnemy(8600, groundY - 75);
        createEnemy(9015, groundY - 75);
        createEnemy(10001, groundY - 75);
        createEnemy(10500, groundY - 75);
        createEnemy(11670, groundY - 75);
        createEnemy(12450, groundY - 75);
        createEnemy(12925, groundY - 75);



        function createReward(x,y) {
            var enemy = game.createGameItem("reward", 25);
            var redSquare = draw.rect(50, 50, "green");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x
            enemy.y = y
            game.addGameItem(enemy);
            enemy.velocityX = -1
            enemy.rotationalVelocity = -1 * Math.random();
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(100)
                enemy.fadeOut();
            }


       
        }


        createReward(1000, groundY - 10);
        createReward(400, groundY - 10);
        createReward(2000, groundY - 10);
        createReward(4000, groundY - 10);
        createReward(6045, groundY - 10);
        createReward(7045, groundY - 10);
        createReward(8000, groundY - 10);
        createReward(10400, groundY - 10);
        createReward(12500, groundY - 10);


        function createMarker(x,y) {
            var enemy = game.createGameItem("marker", 25);
            var redSquare = draw.rect(50, 50, "white");
            redSquare.x = -30;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x
            enemy.y = y
            game.addGameItem(enemy);
            enemy.velocityX = -1
            enemy.rotationalVelocity = -1 * Math.random();
            enemy.onPlayerCollision = function () {
                startLevel()
            };
            enemy.onProjectileCollision = function () {
                startLevel()
            };
        }
        createMarker(1600, groundY - 30);




        // DO NOT EDIT CODE BELOW HERE
    }
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
