import {Form} from './form_submit_mod.js';
import {numberOfPlayers, namesOfPlayers, selectedCourseID, selectedTeeBox} from './main.js';

export class Render {
    static drawSetup1(data,domElm){
        domElm.innerHTML = `
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Select The Golf Course</h4></div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[0].id}" class="form-check-input" type="radio" name="radio_course" checked>
                        <label class="form-check-label">${data[0].name}</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[1].id}" class="form-check-input" type="radio" name="radio_course">
                        <label class="form-check-label">${data[1].name}</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${data[2].id}"class="form-check-input" type="radio" name="radio_course">
                        <label class="form-check-label">${data[2].name}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Select Number Of Players</h4></div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers1" class="form-check-input" type="radio" name="radio_playerNum" checked>
                        <label class="form-check-label">1 Player</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers2" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">2 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers3" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">3 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="numPlayers4" class="form-check-input" type="radio" name="radio_playerNum">
                        <label class="form-check-label">4 Players</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <button id="submitSetup1btn" type="button" class="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
        `;
        document.getElementById("submitSetup1btn").addEventListener("click", function(){ Form.submitSetup1(data); });
    }
    static drawSetup2(data,domElm){

        let teeBoxNames = [];
        for (let i=0; i < data.length; i++){
            if (data[i].teeType == 'auto change location'){
                continue;
            }
            teeBoxNames.push(data[i].teeType);
        }
        console.log(teeBoxNames);

        let htmlPart1 =`
        <div class="container-sm">
        <div class="row">
            <div class="col-sm"><h4>Select The Tee Box For All Players</h4></div>
        </div>
        `;
        
        let buffer = '';

        teeBoxNames.forEach(function(name){
            let chunk = `
            <div class="row">
                <div class="col-sm">
                    <div class="form-check">
                        <input id="${name}" class="form-check-input" type="radio" name="radio_teeBox">
                        <label class="form-check-label">${name.toUpperCase()}</label>
                    </div>
                </div>
            </div>
            `;
            buffer += chunk;
        })
        htmlPart1 += (buffer + '</div>');

        buffer = '';

        for (let i = 0; i < numberOfPlayers; i++){
            let chunk =`
            <div class="row">
                <div class="col-sm">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text">Player ${i+1}</span>
                        <input id="nameP${i+1}" type="text" class="form-control">
                    </div>
                </div>
            </div>
            `;
            buffer+=chunk;
        }
        let htmlPart2 =`
        <div class="container-sm">
            <div class="row">
                <div class="col-sm"><h4>Enter Player Names</h4></div>
            </div>

        
        `;
        let htmlPart3 = `
        <div class="row">
            <div class="col-sm">
                <button id="submitSetup2btn" type="button" class="btn btn-primary">OK</button>
            </div>
            <div class="col-sm">
                <span id="warning" class="warning-text" style="display:none">Please Enter Unique Names</span>
            </div>
        </div>
        </div>`;

        htmlPart2 += (buffer+htmlPart3);


        domElm.innerHTML = htmlPart1+htmlPart2;
        document.getElementById(teeBoxNames[0]).checked = true;


        document.getElementById("submitSetup2btn").addEventListener("click", function(){ Form.submitSetup2(teeBoxNames); });
    }
    static drawScores(data,domElm){
        console.log(data);
        let boxNum = 0;
        data.holes[0].teeBoxes.forEach(function(box, index){
            if (box.teeType == selectedTeeBox){
                boxNum = index;
            }
        });
        domElm.innerHTML = `
        <div class="container-sm" style="overflow-x:auto;white-space:nowrap;">
        <div class="row">
            <div class="col-sm">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">HOLE</th>
                            <th scope="col">1</th>
                            <th scope="col">2</th>
                            <th scope="col">3</th>
                            <th scope="col">4</th>
                            <th scope="col">5</th>
                            <th scope="col">6</th>
                            <th scope="col">7</th>
                            <th scope="col">8</th>
                            <th scope="col">9</th>
                            <th scope="col">OUT</th>
                            <th scope="col">10</th>
                            <th scope="col">11</th>
                            <th scope="col">12</th>
                            <th scope="col">13</th>
                            <th scope="col">14</th>
                            <th scope="col">15</th>
                            <th scope="col">16</th>
                            <th scope="col">17</th>
                            <th scope="col">18</th>
                            <th scope="col">IN</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">YARDS</th>
                            <td>${data.holes[0].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].yards}</td>
                            <td>TOTAL</td>
                            <td>${data.holes[9].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].yards}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].yards}</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                        </tr>
                        <tr>
                            <th scope="row">HCP</th>
                            <td>${data.holes[0].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].hcp}</td>
                            <td>TOTAL</td>
                            <td>${data.holes[9].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].hcp}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].hcp}</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                        </tr>
                        <tr>
                            <th scope="row">PAR</th>
                            <td>${data.holes[0].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[1].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[2].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[3].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[4].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[5].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[6].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[7].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[8].teeBoxes[boxNum].par}</td>
                            <td>TOTAL</td>
                            <td>${data.holes[9].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[10].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[11].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[12].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[13].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[14].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[15].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[16].teeBoxes[boxNum].par}</td>
                            <td>${data.holes[17].teeBoxes[boxNum].par}</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                        </tr>
                        <tr>
                            <th scope="row">Player 1</th>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">Player 2</th>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">Player 3</th>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th scope="row">Player 4</th>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td><input type="number" id="" min="0" value="" step="1" oninput="validity.valid||(value='');"></td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        `;
    }
}