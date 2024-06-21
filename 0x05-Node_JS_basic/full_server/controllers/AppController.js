class AppController {
    /**
     * Static method to handle GET request for homepage.
     * @param {Request} req - Express request object.
     * @param {Response} res - Express response object.
     * @returns {Response} - Response with status 200 and message.
     */
    static getHomepage(req, res) {
      return res.status(200).send('Hello Holberton School!');
    }
  }
  
  module.exports = AppController;
  