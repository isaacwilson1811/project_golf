init();
async function init(){
    const getCoursesFromAPI = await fetch('https://golf-courses-api.herokuapp.com/courses',
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    let response = await getCoursesFromAPI.json();
    let data = await response;
    // call other functions with the API data passed in
    renderCourses(data.courses);
}

function renderCourses(courses){
    console.log(courses);
    let textBuffer = '';
    courses.forEach(course=>{
        let code = `
            <div>
            <h1>${course.name}</h1>
            <img onclick="selectCourse('${course.id}')" src="${course.image}"/>
            <p>${course.id}</p>
            </div>
        `;
        textBuffer += code;
    })
    document.getElementById('course_info').innerHTML = textBuffer;
}

async function selectCourse(id){
    const getCourseFromAPI = await fetch('https://golf-courses-api.herokuapp.com/courses/'+id,
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    let response = await getCourseFromAPI.json();
    let data = await response;
    renderCourse(data.data);
}

function renderCourse(data){
    console.log(data.holes);
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