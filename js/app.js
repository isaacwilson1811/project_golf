console.log('./js/app.js loaded');
const appPages = ['setGame','setPlayerNames','showHole']
const appPage = appPages[2];
const appHTML = document.getElementById('html-app-page');

class Display {
    static render(){
        switch(appPage){
            case 'setGame':
                appHTML.innerHTML = Display.setGameHTML;
                break;
            case 'setPlayerNames':
                appHTML.innerHTML = '<div>setPlayerNames</div>';
                break;
            case 'showHole':
                appHTML.innerHTML = Display.showHoleHTML;
                break;
        }
    }
    static setGameHTML = `
    <div class="row">
        <div class="col-sm">
            <h1>SELECT NUMBER OF PLAYERS</h1>
        </div>
        <div class="col-sm">
            <h1>1-4</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
            <h1>SELECT A COURSE</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
            <h1>IMAGE</h1>
        </div>
        <div class="col-sm">
            <h1>COURSE NAME</h1>
        </div>
        <div class="col-sm">
            <ul>
                <li>red</li>
                <li>blue</li>
                <li>white</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
            <button>Create Game</button>
        </div>
    </div>
    `;
    static setPlayerNamesHTML = `
    `;
    static showHoleHTML = `
    <div class="row">
        <div class="col-sm">
            <table class="table table-sm">
                <thead>
                    <trow>
                        <th scope="col">HOLE 1</th>
                        <th scope="col">200yrds</th>
                        <th scope="col">HCP 1</th>
                        <th scope="col">PAR 3</th>
                    </trow>
                    <tbody>
                        <td>18</td>
                        <td>total_yards</td>
                        <td>blank</td>
                        <td>total par</td>
                    </tbody>
                </thead>
            </table>
            <table class="table table-hover table-sm">
                <tbody>
                    <tr>
                        <th scope="row">P1 Strokes</th>
                        <th scope="row">P2 Strokes</th>
                        <th scope="row">P3 Strokes</th>
                        <th scope="row">P4 Strokes</th>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>OUT/IN TOTAL</td>
                        <td>OUT/IN TOTAL</td>
                        <td>OUT/IN TOTAL</td>
                        <td>OUT/IN TOTAL</td>
                    </tr>
                    <tr>
                        <td>COURSE TOTAL</td>
                        <td>COURSE TOTAL</td>
                        <td>COURSE TOTAL</td>
                        <td>COURSE TOTAL</td>
                    </tr>
                </tbody>
            </table>
            <button>Next Hole</button>
        </div>
    </div>
    `;
}




Display.render();