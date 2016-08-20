import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SchoolManagement from './reducers/reducers'

let store = createStore(SchoolManagement,{addTeachers:[{name:"Aldo"}],addStudents:[{name:"mohan"}]})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));