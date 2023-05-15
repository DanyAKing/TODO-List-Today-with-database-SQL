/* eslint-disable max-classes-per-file */
// class Error {}
class NotFoundError extends Error {}

const handleError = async (err, req, res) => {
  if (err instanceof NotFoundError) {
    res
      .status(404)
      .render('templates/error', {
        message: 'Can not find todos. Probably todos was removed or ID is incorrect.',
      });
  }
};

module.exports = { handleError, NotFoundError };
