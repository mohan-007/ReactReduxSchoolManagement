import { combineReducers } from 'redux'
import { ADD_STUDENT,ADD_TEACHER } from '../actions/actions'


function addStudent(state,action){
	switch(action.type){
		case ADD_STUDENT : return {
			//id : action.id,
			name : action.name
		}
		default : return state
	}
}

function addStudents(state=[],action){
	switch(action.type){
		case ADD_STUDENT : return [
			...state,addStudent(undefined,action)
		]
		default : return state
	}
}


function addTeacher(state,action){
	switch(action.type){
		case ADD_TEACHER:
			return {
				//id:action.id,
				name:action.name
			}
		default : return state
	}
}

function addTeachers(state=[],action){
	switch(action.type){
		case ADD_TEACHER:return [
			...state,
			addTeacher(undefined,action)
		]
		default : return state
	}
}

const SchoolManagement = combineReducers({
	addStudents,addTeachers
})

export default SchoolManagement