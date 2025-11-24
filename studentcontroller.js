import pool from './db.js'

//to create a function to fetch data from mysql table
export async function fetchStudentsList(req,res)
{
	try
	{
		//fetching data from MySQL table
		const [result] = await pool.query("select * from student");
		//setting this data inot response in json
		res.json(result);
	}
	catch(err)
	{
		console.log("Unable to insert data ",err);
	}
}
// Update student data
export async function updateStudent(req, res) {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        await pool.query(
            "UPDATE student SET name=?, email=?, age=? WHERE id=?",
            [name, email, age, id]
        );

        res.json({ message: "Student updated successfully" });
    } catch (err) {
        console.log("Unable to update data", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Delete student record
export async function deleteStudent(req, res) {
    try {
        const { id } = req.params;

        await pool.query("DELETE FROM student WHERE id=?", [id]);

        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        console.log("Unable to delete data", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
