const { readDatabase } = require('../utils');

class StudentsController {
  /**
   * Static method to handle GET request for all students.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Response} - Response with status 200 and student list or error message.
   */
  static async getAllStudents(req, res) {
    try {
      const studentData = await readDatabase(req.databaseFile);

      if (!studentData || (!studentData.CS && !studentData.SWE)) {
        return res.status(500).send('Cannot load the database');
      }

      const response = `
        This is the list of our students
        Number of students: ${studentData.CS.length + studentData.SWE.length}
        Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}
        Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}
      `;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  /**
   * Static method to handle GET request for students by major.
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Response} - Response with status 200 and student list or error message.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentData = await readDatabase(req.databaseFile);

      if (!studentData || !studentData[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const response = `
        List of students in ${major}:
        List: ${studentData[major].join(', ')}
      `;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
