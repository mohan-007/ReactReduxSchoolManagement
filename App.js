import React from 'react';
import SchoolAdministration from './components/SchoolAdministration'
import { connect } from 'react-redux'

var details = {
		Student : ["mohan","arun","aathi"],
		Teacher : ["deepa","aldo"],
		Guardian : ["ayan"]
}
class App extends React.Component {
	constructor(){
		super();
		this.state = details
	}

   render() {
      const { dispatch, schoolDetails } = this.props

      return (
         <div>
         	<SchoolAdministration schoolDetails = {schoolDetails} dispatch={dispatch} ></SchoolAdministration>
         </div>
      );
   }
}
function select(state) {
   return {
   	schoolDetails : {
      StudentList: state.addStudents,
      TeacherList : state.addTeachers
  	}
   }
}

export default connect(select)(App)
