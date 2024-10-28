const express = require('express');
const routers = express.Router()
const mongoose = require('mongoose')

const StudentData = require('../models/studentSchema'); // Import the StudentData model
routers.get('/',async(req,res)=>{
    try{
        // const students = await student.StudentData.find()
        res.send("hello")
    }
    catch(err){tude
        res.send(" error in finding requested detail in db" + err)

    }
})

routers.post('/', async (req, res) => {
    try {
        const instance = new SntData(req.body); // Create a new instance of StudentData
        await instance.save(); // Save the data to the database
        res.status(201).json({ message: 'Student data added successfully' });
        console.log('Added successfully'); // Log a success message
        // const stu = new StudentData({
        //     name: req.personalInfo.body.name
        // })
        // stu.save()
    } 
    
    catch (error) {
        console.error('Error adding student data:', error); // Log the error
        res.status(500).json({ error: 'Error adding student data' });
    }
});
module.exports = routers