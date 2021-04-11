/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// function getEmailDomain(email) {
//   const regx = /@([^@]+)$/;
//   return email.match(regx)[1];
// }
const getEmailDomain = (email) => email.match(/@([^@]+)$/)[1];

module.exports = getEmailDomain;
