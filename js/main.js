import {API} from './api_handler_mod.js';
import {Render} from './render_mod.js';
import {GameData, PlayerData, CourseChoices} from './data_class_mod.js';

const renderTo = document.getElementById('rendered_content');
export let numberOfPlayers = 0;
export let namesOfPlayers = [];
export let selectedCourseID = null;
export let selectedTeeBox = null;

export function showAppPage(page,courseID,numPlayers = 1){
    switch(page){
        case 'setup1':
            API.fetchCourses().then( data => Render.drawSetup1(data,renderTo) );
        break;
        case 'setup2':
            numberOfPlayers = numPlayers;
            selectedCourseID = courseID;
            API.fetchTeeBoxes(courseID).then( data => Render.drawSetup2(data,renderTo) );
        break;
    }
}

export function showScores(playerNames,teeBox){
    namesOfPlayers = playerNames;
    selectedTeeBox = teeBox;
    console.log('course ', selectedCourseID);
    console.log('players ', numberOfPlayers);
    console.log('names ', namesOfPlayers);
    console.log('teebox', selectedTeeBox);
    API.fetchGame(selectedCourseID).then( data => Render.drawScores(data,renderTo) );
}

showAppPage('setup1');