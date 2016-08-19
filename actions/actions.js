export const ADD_STUDENT = "ADD_STUDENT"
export const ADD_TEACHER = "ADD_TEACHER"
let id = 0;
let TeacherId = 0;
export function addStudentAction(name){
	return{
		type:ADD_STUDENT,
		id:id++,
		name:name
	}
}
export function addTeacherAction(name){
	return {
		type : ADD_TEACHER,
		id : TeacherId++,
		name : name
	}
}