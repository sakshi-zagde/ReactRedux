
//Function to perform create course operation 

//1. Write a function which accepts a parameter for course and returns the object (type - 'CREATE_COURSE , value as input paramter )
//2. Export the function for reusing it in other files

export function createCourse(course){
     return{ type:'CREATE_COURSE',course:course};
}


