const { MongoClient } = require('mongodb');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config({ path: './config.env' });

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const AkromaNyameConsultSchema = new mongoose.Schema({
    // Define your schema here
    fullName: String,
    gender: String,
    nationality: String,
    email: String,
    contactNumber: String,
    alternateContactNumber: String,
    emergencyContact: String,
    currentAddress: String,
    passportNumber: String,
    destination: String,
    checkInDate: Date,
    checkOutDate: Date,
    roomType: String,
    otherRoom: String,
    bedPreference: String,
    smokingAllergies: String,
    specificHotel: String,
    otherSpecificHotel: String
});

const AkromaNyameStudyAbroadForm = new mongoose.Schema({
    fullName: String,
    gender: String,
    dateOfBirth: String,
    email: String,
    nationality: String,
    phone: String,
    emergencyContact: String,
    address: String,
    country: String,
    qualification: String,
    scholarship: String,
    program: String,
})
const AkromaNyameTravel = mongoose.model("AkromaNyameTravel", AkromaNyameConsultSchema);
const AkromahNyameStudyForm = mongoose.model("AkromahNyameStudyForm", AkromaNyameStudyAbroadForm);
app.post("/api/submit", async (req, res) => {
    const { fullName, gender, nationality, email, contactNumber, alternateContactNumber, emergencyContact, currentAddress, passportNumber, destination, checkInDate, checkOutDate, roomType, otherRoom, bedPreference, smokingAllergies, specificHotel, otherSpecificHotel } = req.body;

    const newTravel = new AkromaNyameTravel({
        fullName,
        gender,
        nationality,
        email,
        contactNumber,
        alternateContactNumber,
        emergencyContact,
        currentAddress,
        passportNumber,
        destination,
        checkInDate,
        checkOutDate,
        roomType,
        otherRoom,
        bedPreference,
        smokingAllergies,
        specificHotel,
        otherSpecificHotel
    });

    try {
        await newTravel.save();
        res.status(201).json({ message: "Travel request submitted successfully" });
    } catch (error) {
        console.error("Error submitting travel request:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// post api for study form
app.post("/api/submit", async (req, res) => {
    const { fullName, gender, nationality, email, emergencyContact, currentAddress, passportNumber, destination, roomType } = req.body;

    const newTravelStudent = new AkromahNyameStudyForm({
        fullName,
        gender,
        dateOfBirth,
        email,
        nationality,
        contact,
        emergencyContact,
        currentAddress,
        address,
        passportNumber,
        destination,
        qualificationSeeking,
        roomType,
        scholarship,
        programType,
    });

    try {
        await newTravelStudent.save();
        res.status(201).json({ message: "Travel request submitted successfully" });
    } catch (error) {
        console.error("Error submitting travel request:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
