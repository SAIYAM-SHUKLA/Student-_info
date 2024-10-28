const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')

async function connectToMongoDB() {
    const url = 'mongodb://localhost:27017'; // Connection URL
    const dbName = 'student_data'; // Your database name
    // mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    //     console.log("connected")
    // }).catch(()=>{
    //     console.log("err")
    // })

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect(); // Connect to MongoDB

        console.log('Connected to MongoDB successfully!');

        // Now you can perform database operations using the client

        // Example: Create a new collection
        const db = client.db(dbName);
        const studentdatas = db.collection('studentdatas');
        await studentdatas.insertOne({ name: 'John Doe' });

        // Close the connection
        // await client.close();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


connectToMongoDB();

const app = express();
app.use(express.json())
const routers = require("./routers/Student.js");
app.use('/student', routers);


app.listen(9000, function () {
    console.log('Server started...');
});










































// const express = require('express');
// const mongoose = require('mongoose');
// // const url = "mongodb://localhost:27017";
// const dbName = '/student_data'; // Your database name


// const { MongoClient } = require('mongodb');

// async function connectToMongoDB() {
//     const url = 'mongodb://localhost:27017'; // Connection URL
//     // const dbName = 'mydb'; // Your database name

//     try {
//         const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect(); // Connect to MongoDB

//         console.log('Connected to MongoDB successfully!');

//         // Now you can perform database operations using the client

//         // Example: Create a new collection
//         const db = client.db(dbName);
//         const myCollection = db.collection('mycollection');
//         await myCollection.insertOne({ name: 'John Doe' });

//         // Close the connection
//         await client.close();
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// connectToMongoDB();





// const app = express();
// // mongoose.connect(url, { useNewUrlParser: true });

// // const con = mongoose.connection;
// // con.on('open', function () {
// //     console.log("Connected to the database");
// // });

// const studentRouters = require("./routers/Student.js")
// app.use('/student',studentRouters)

// app.listen(9000,function(){console.log('server started.......')})
