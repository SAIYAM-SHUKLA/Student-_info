const mongoose = require('mongoose');

// Define the PersonalInfo schema
const personalInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    enrollNo: String,
    branch: String,
    yearOfStudy: String,
    contactNo: String,
    address: String,
    dateOfBirth: String,
    gender: String,
    bloodGroup: String,
    photo: String,
    signature: String
});

// Define the AcademicInfo schema
const academicInfoSchema = new mongoose.Schema({
    courses: [{
        name: String
    }],
    CGPA: String,
    attendance: String,
    SGPA: [{
        semester: String
    }],
    backLogs: String,
    midTermMarks: [String]
});

// Define the ProfessionalInfo schema
const professionalInfoSchema = new mongoose.Schema({
    projects: [String],
    skills: [String],
    achievements: [String],
    hobbies: [String],
    languages: [String]
});

// Define the MachineLearning schema
const machineLearningSchema = new mongoose.Schema({
    behaviourAnalytics: [String],
    studentScore: String
});

// Define the SocialLinks schema
const socialLinksSchema = new mongoose.Schema({
    LinkedIn: String,
    Github: String,
    Portfolio: String
});

// Define the main StudentData schema
const studentDataSchema = new mongoose.Schema({
    personalInfo: personalInfoSchema,
    academicInfo: academicInfoSchema,
    professionalInfo: professionalInfoSchema,
    machineLearning: machineLearningSchema,
    socialLinks: socialLinksSchema
});

// Create and export the StudentData model
const StudentData = mongoose.model('StudentData', studentDataSchema);
module.exports = StudentData;
