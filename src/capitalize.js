// module.exports = function capitalize(arr) {
//   return arr.charAt(0).toUpperCase() + arr.slice();
// }

const capitalize = (arr) => {
  const result = arr.charAt(0).toUpperCase() + arr.slice(1);
  return result;
};

export default capitalize;

