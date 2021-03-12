init();
async function init(){
    const getCoursesFromAPI = await fetch('https://golf-courses-api.herokuapp.com/courses',
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    let response = await getCoursesFromAPI.json();
    let data = await response;
    renderCoursesInfo(data.courses);
}

function renderCoursesInfo(courses){
    console.log(courses);
    let textBuffer = '';
    courses.forEach(course=>{
        let code = `
            <div style="color:white;background:black;">
            <h1>${course.name}</h1>
            <img onclick="selectCourse('${course.id}')" src="${course.image}"/>
            <p>${course.id}</p>
            </div>
        `;
        textBuffer += code;
    })
    document.getElementById('all_courses_info').innerHTML = textBuffer;
}

async function selectCourse(id){
    const getCourseFromAPI = await fetch('https://golf-courses-api.herokuapp.com/courses/'+id,
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    let response = await getCourseFromAPI.json();
    let data = await response;
    renderSelectedCourse(data.data);
}

function renderSelectedCourse(data){
    console.log(data);
    let textBuffer = '';
    for(let key in data){
        console.log(key, data[key]);
        if (!Array.isArray(data[key])){
            let code = `
                <div style="color:black;background:white;">
                    <p>${key}: ${data[key]}</p>
                </div>
            `;
            textBuffer += code;
        } else {
            data.holes.forEach(hole=>{
                for(let prop in hole){
                    let code =`
                    <div style="color:black;background:white;">
                        <p>${prop}: ${hole[prop]}</p>
                    </div>
                    `;
                    textBuffer += code;
                }
            })
        }
    }
    document.getElementById('selected_course_info').innerHTML = textBuffer;
}





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