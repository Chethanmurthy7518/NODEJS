const employeeModel = require('../models/employee')
const departmentModel = require('../models/department');
const department = require('../models/department');

const saveEmployeeDetails = async(req,res,next)=>{
    const {ename,salary,gender}= req.body;

    try{
        const emp = new employeeModel({
            ename,salary,gender
        })
        const employeeData = await emp.save()

        const dept = new departmentModel({
            dname:department.dname,
            dlocation:department.dlocation,
            empid:employeeData._id
        })
        const departmentData = await dept.save()

        res.json({
            error:false,
            message:'EmployeeDate Saved Successfull',
            data:departmentData

        })

    }catch(err){
        next(err)

    }
}

const getEmployeeDataUsingDepartment = async (req,res,next)=>{
    const {empid}=req.body

    try{
        const employeeData = await departmentModel.find({empid}).populate('empid')
        res.json({
            error:false,
            message:'Fetch Successfull',
            data:employeeData
        })

    }catch(err){
        next(err)
    }
}

module.exports = {
    saveEmployeeDetails,
    getEmployeeDataUsingDepartment
}