var courses = new Array() ;
function fetchCourse(){
    console.log("clicked");
    $.ajax({
        url:'https://www.codingninjas.in/api/v3/courses',
        method:'GET',
        async:false,
        success:function(data){
           $.each(data.data.courses,function(key,value){
                //console.log(value.title);
                courses.push(data.data.courses[key]);
           });   
        }
    });
}

fetchCourse();
console.log(courses);


for(let i=0;i<courses.length;i++){
    //console.log(courses[i]);
    var newDiv = document.createElement('div');
    newDiv.className = 'card';
    newP = document.createElement('p');
    newP.append(courses[i].title);
    newP.className="ml-2"
    newP2 = document.createElement('p');
    newP2.append(courses[i].level);
    newP2.className='ml-5';
    newP2.style.textAlign='right';
    newImage = document.createElement('img');
    //console.log(newImage);
    $(newImage).attr('src',courses[i].preview_image_url);
    newDiv.append(newImage);
    newDiv.append(newP);
    newDiv.append(newP2);
    newCol = document.createElement('div');
    newCol.className='col-3 mt-4';
    //console.log(newCol);
    newCol.append(newDiv);
    Row = $('.row');
    Row.append(newCol);
    console.log(Row);

}