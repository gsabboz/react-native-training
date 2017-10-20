import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducer2'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
})