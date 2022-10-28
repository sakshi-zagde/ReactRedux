import React , { Component} from "react";
//Import the actions to be triggered in teh component 
// courseActions is an alias name 
import * as courseActions from "./actions/courseActions";

// Import the connect element from the react-redux
import { connect } from "react-redux";

class Courses extends Component{
    //constructor
    constructor(){
        super();

        //create a state variable for the course title 
        this.state ={
            course:{
                title:''
            }
        }

        //bind the events  -- to map the events 
        this.CourseChange = this.CourseChange.bind(this);
        this.CourseSave = this.CourseSave.bind(this);
    }

    //textbox onchange event handler 
    CourseChange(event){
        //store the course state in a variable 
        const coursestate = this.state.course;
        coursestate.title = event.target.value;
        //modify the state data 
        this.setState({
            course:coursestate
        });
    }

    //button onclick event handler 
    CourseSave(event){
        //to fetch the course title 
        this.props.createCourse(this.state.course);
    }

    render(){
        return(
            <div>
                <h1> This is REDUX COMPONENT</h1>
                {/* Display the list of courses  */}
                {this.props.courses.map((value,index)=>{
                        return <div key={index}> {value.title} </div> 
                    }
                )}
                <h4>ADD COURSE </h4>
                {/* Add events(methods) to the onChange() and onClick() event handlers  */}
                Enter Course Name :<input type="text" onChange={this.CourseChange} />
                <input type="submit" value="ADD COURSE" onClick={this.CourseSave} />

            </div>
        )
    }
}

//create the two functions mapStateToPRops and mapDispatchToProps for the connect finction 

//input is state element and returns the updated state 
function mapStateToProps(state){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return{
        createCourse: course=>dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Courses);