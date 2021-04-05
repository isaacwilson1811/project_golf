export async function fetchCourses(){
    const callAPI = await fetch('https://golf-courses-api.herokuapp.com/courses',
    {method: 'GET' , headers: {ContentType: 'application/json'}});
    const json = await callAPI.json();
    const data = await json;
    return data.courses;
}