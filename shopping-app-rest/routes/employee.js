const express = require('express')
const {saveEmployeeDetails, getEmployeeDataUsingDepartment} = require('../controllers/employee')
const router = express.Router()

router.post('/save',saveEmployeeDetails)
router.get('/employess',getEmployeeDataUsingDepartment)

module.exports = router