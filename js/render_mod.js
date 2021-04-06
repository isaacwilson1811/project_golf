export class Render {
    static drawCourseChoices(array){
        console.log('Course 1')
        console.log(array[0].name);
        console.log(array[0].id);
        console.log(array[0].image);
        console.log('Course 2')
        console.log(array[1].name);
        console.log(array[1].id);
        console.log(array[1].image);
        console.log('Course 3')
        console.log(array[2].name);
        console.log(array[2].id);
        console.log(array[2].image);


        let buffer = '<ul>';
        for (let i=0; i < array.length;i++){
            let chunk = `<li>Name: ${array[i].name}</li>
            <input type="radio" name="course" value="${array[i].id}">`;
            buffer += chunk;
        }
        buffer += '</ul>';
        
        document.getElementById('drawHere').innerHTML = buffer;
    }
}