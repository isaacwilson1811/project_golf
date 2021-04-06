//import modules
import {GameData, PlayerData, CourseChoices} from './data_class_mod.js';
import {fetchCourses} from './api_handler_mod.js';
import {Render} from './render_mod.js';


fetchCourses().then(result =>{Render.drawCourseChoices(result)});






