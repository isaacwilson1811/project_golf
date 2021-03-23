//Get Data For All Courses
getDataAllCourses()

async function getDataAllCourses(){
    const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses',
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    const json = await callAPI.json();
    const dump = await json;
    displayAllCourses(dump.courses);
};

// Display the All Courses Data
function displayAllCourses(courses){
    console.log(courses);
    let openHTML = '<div style="display:flex;flex-direction:column;">'
    let closeHTML = '</div>';
    let textBuffer = '';
    courses.forEach(course=>{
        let code = `
            <div style="color:white;background:black;margin:1em;">
            <h1>${course.name}</h1>
            <img onclick="selectCourse('${course.id}')" src="${course.image}"/>
            <p>${course.id}</p>
            </div>
        `;
        textBuffer += code;
    })
    document.getElementById('all_courses_info').innerHTML = openHTML+textBuffer+closeHTML;
}

// Click Event to selected a course
async function selectCourse(id){
    const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses/'+id);
    const json = await callAPI.json();
    const dump = await json;
    extractSelectedCourseData(dump.data);
}

// extract the needed information
function extractSelectedCourseData(obj){
    let selectedCourse = new Course(obj);
    console.log(selectedCourse);
    fillcourseData(selectedCourse);
}

class Player {
    constructor(name){
        this.name = name;
        this.strokes = [];
        this.chosenTeeBox = null;
    }
}

let players = [];
let player1 = new Player('jim');



function fillcourseData(obj){
    drawThis('par_display','PAR',' ','par');
    drawThis('yard_display','YARDS','tee color','yards');
    drawThis('hcp_display','HCP',' ','hcp');
    function drawThis(html,ROW,HEAD,prop){
        let drawTo = document.getElementById(html);
        let buffer = '<th scope="row">'+ROW+'</th><td>'+HEAD+'</td>';
        let OutTotal = 0;
        let InTotal = 0;
        for (let i = 0; i < 9; i++){
            let chunk = `<td>${obj.teeBoxesPerHole[i][1][prop]}</td>`;
            buffer += chunk;
            OutTotal += obj.teeBoxesPerHole[i][1][prop];
        }
        buffer += '<td>'+ OutTotal +'</td>';
        for (let i = 9; i < 18; i++){
            let chunk = '<td>'+ obj.teeBoxesPerHole[i][1][prop] +'</td>';
            buffer += chunk;
            InTotal += obj.teeBoxesPerHole[i][1][prop];
        }
        buffer += '<td>'+ OutTotal +'</td>';
        buffer += '<td>'+ (OutTotal+InTotal) +'</td>';
        drawTo.innerHTML = buffer;
    }
}

class TeeBox{
    constructor(obj){
        this.name = obj.teeType,
        this.color = obj.teeColorType,
        this.hexColor = obj.teeHexColor,
        this.hcp = obj.hcp,
        this.par = obj.par,
        this.yards = obj.yards
    }
}

class Course {
    constructor(obj){
        this.name = obj.name;
        this.id = obj.courseId;
        this.holeCount = obj.holeCount;
        // this.holesDump = obj.holes;
        this.teeBoxesPerHole = Course.extractTeeBoxes(obj.holes)
    }
    static extractTeeBoxes(array){
        let courseHoles = [];
        for (let i=0; i<array.length; i++){
            let hole = [];
            for (let j=0; j<array[i].teeBoxes.length; j++){
                if (array[i].teeBoxes[j].teeType == 'auto change location'){
                    continue;
                }else {
                    let teebox = new TeeBox(array[i].teeBoxes[j]);
                    hole.push(teebox);
                }
            }
            courseHoles.push(hole);
        }
        return courseHoles;
    }
}

    // let holesData = []
    // let holesArr = data.holes;
    // let yardsArr = [];
    // let parArr = [];
    // for (let i = 0; i < holesArr.length; i++){
    //     yardsArr.push(holesArr[i].teeBoxes[0].yards);
    //     parArr.push(holesArr[i].teeBoxes[0].par);
    // }
    // displayHolesData(yardsArr,parArr);

    // let textBuffer = '';
    // for(let key in data){
    //     console.log(key, data[key]);
    //     if (!Array.isArray(data[key])){
    //         let code = `
    //             <div style="color:black;background:white;">
    //                 <p>${key}: ${data[key]}</p>
    //             </div>
    //         `;
    //         textBuffer += code;
    //     } else {
    //         data.holes.forEach(hole=>{
    //             for(let prop in hole){
    //                 let code =`
    //                 <div style="color:black;background:white;">
    //                     <p>${prop}: ${hole[prop]}</p>
    //                 </div>
    //                 `;
    //                 textBuffer += code;
    //             }
    //         })
    //     }
    // }
    // document.getElementById('selected_course_info').innerHTML = textBuffer;



// const courseIDs = [];
// var course1;
// var course2;
// var course3;

// function fetchGolfCourses(){
//     fetch('https://golf-courses-api.herokuapp.com/courses',
//     {
//     method: 'GET',
//     headers: {
//         ContentType: 'application/json',
//     }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // courseIDs.push(data.courses[0].id);
//         // courseIDs.push(data.courses[1].id);
//         // courseIDs.push(data.courses[2].id);
//         // console.log(courseIDs);
//         course1 = new golfCourse(data.courses[0].id);
//         course2 = new golfCourse(data.courses[1].id);
//         course3 = new golfCourse(data.courses[2].id);
//     });
// }

// class golfCourse {
//     constructor(id){
//         this.id = id;
//         this.data = {};
//     }
//     fetchCourseData = function(){
//         fetch('https://golf-courses-api.herokuapp.com/courses/'+this.id)
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }
// }



// // course1.fetchCourseData();

// fetchGolfCourses();