var E = require('./errors.js');
var C = require('./const.js');

module.exports = Room;

function Room() {
    'use strcit';
    var obj = {};

    // basic walls setup
    var walls = {};
    walls.UP = true;
    walls.DOWN = true;
    walls.LEFT = true;
    walls.RIGHT = true;

    obj.canMove = canMove;
    obj.getWalls = getWalls;
    obj.canMove =  canMove;
    obj.setWall =  setWall;
    obj.buildRoom =  buildRoom;
    obj.isBuilded = isBuilded;
    obj.visit = visit;
    obj.wasVisited = wasVisited;
    obj.draw = draw;
    obj.setPosition = setPosition;
    obj.getPosition = getPosition;
    obj.setMazeSize = setMazeSize;
    obj.getMazeSize = getMazeSize;
    obj.canOpenWall = canOpenWall;
    obj.getPossibleDirections = getPossibleDirections;
    obj.getVisitedTimes = getVisitedTimes;

    function getWalls() {}

    function setWall(dir, wall) {
        if (C.PossibleDirections.indexOf(dir) === -1) {
            throw new E.NotPossibleDirectionError();
        }

        if (isBuilded()) {
            throw new E.UpdateLockedCellError();
        }

        walls[dir] = wall;
    }

    var builded = false;
    function buildRoom() {
        builded = true;
    }

    function isBuilded() {
        return builded;
    }


    var visitCount = 0;

    function visit() {
        visitCount = visitCount + 1;
    }

    function wasVisited() {
        return visitCount > 0;
    }

    function getVisitedTimes() {
        return visitCount;
    }

    function draw() {}

    var position = [0, 0];
    function setPosition(pos) {
        position = pos;
    }

    function getPosition() {
        return position;
    }


    var mazeSize = [1, 1];
    function setMazeSize(size) {
        mazeSize = size;
    }

    function getMazeSize() {
        return mazeSize;
    }

    function canOpenWall() {}

    function getPossibleDirections() {
        return C.PossibleDirections;
    }

    function canMove(dir) {
        if (getPossibleDirections().indexOf(dir) === -1) {
            throw new E.NotPossibleDirectionError();
        }
        // ...
        // ...
        return !walls[dir];
    }

    function getWalls() {
        return walls;
    }

    return obj;

}



var room = Room();
