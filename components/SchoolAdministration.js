import React from 'react'
import { addStudentAction,addTeacherAction } from '../actions/actions'
import { connect } from 'react-redux'



export default class SchoolAdministration extends React.Component{
	render(){
		return(
				<div>
				<input type="button" value="View Student" />
				<input type="button" value="View Teacher"/>
				<input type="button" value="View Guardians"/>
				<input type="button" value="Add Student" onClick={()=>{var name = this.refs.myInput.value ; this.refs.myInput.value="";return this.props.dispatch(addStudentAction(name))}} />
				<input type="button" value="Add Teacher" onClick={()=>{var name = this.refs.myInput.value ; this.refs.myInput.value="";return this.props.dispatch(addTeacherAction(name))}} />
				<DisplayStudents data={this.props.schoolDetails.StudentList}></DisplayStudents>
				<DisplayTeachers data={this.props.schoolDetails.TeacherList}></DisplayTeachers>
				<input type="text" ref="myInput"/>
				</div>
			);
	}
}

class DisplayStudents extends React.Component{
	render(){
		var data = this.props.data
		return(

				<p>StudentList	{data.map((data,index) => { {return data.name+",   "}})}      </p>
			);
	}
}

class DisplayTeachers extends React.Component{
	render(){
		var data = this.props.data
		return(

				<p>Teachers List	{data.map((data,index) => { {return data.name+",   "}})}      </p>
			);
	}
}