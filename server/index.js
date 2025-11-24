import express from 'express';
import cors from 'cors';
import {Pool} from 'pg';


const app = express();
const port = 5000;

// Database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'work_form_applications_db',
  password: 'akrom(a)@nyame.tnt',
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Create application
app.post('/api/applications', async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      email,
      nationality,
      contactNumber,
      emergencyContact,
      currentAddress,
      passportNumber,
      destination,
      workType
    } = req.body;
    const dateValue = req.body.date=== ""? null : req.body.date;

    const result = await pool.query(
      `INSERT INTO applications 
       (full_name, date_of_birth, gender, email, nationality, contact_number, 
        emergency_contact, current_address, passport_number, destination, work_type, 
        status, approvals, action, date)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
       RETURNING *`,
      [fullName, dateOfBirth, gender, email, nationality, contactNumber,
       emergencyContact, currentAddress, passportNumber, destination, workType,
       'Pending', 'Awaiting', 'Review', req.body.date, dateValue]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all applications
app.get('/api/applications', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM applications ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});