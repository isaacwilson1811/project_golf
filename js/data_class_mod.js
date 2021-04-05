// console.log('players', Number(document.getElementById('numPlayers').value));
// console.log('course selected', document.querySelector('input[name="course"]:checked').value);
// console.log(document.getElementById('tee').value);


export class GameData {
    constructor(){
        this.numPlayers = 0;
        this.chosenCourseID = null;
        this.chosenTeeBox = null;
        this.players = [];
    }
    addPlayer(player){
        this.players.push(player);
    }
}

export class PlayerData {
    constructor(name){
        this.name = name;
        this.strokesOut = [0,0,0,0,0,0,0,0,0];
        this.strokesIn = [0,0,0,0,0,0,0,0,0];
        this.outTotal = 0;
        this.inTotal = 0;
        this.courseTotal = 0;
    }
    recordStrokes(hole,strokes){
        let array = hole <= 9 ? this.strokesOut : this.strokesIn;
        array[hole] = strokes;
    }
    updateTotals(){
        this.outTotal = this.strokesOut.reduce(function(acc,val){
            return acc + (val || 0);
        }, 0);
        this.inTotal = this.strokesIn.reduce(function(acc,val){
            return acc + (val || 0);
        }, 0);
        this.courseTotal = this.outTotal + this.inTotal;
    }
}