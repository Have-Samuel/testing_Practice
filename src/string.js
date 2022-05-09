function stringLength(string) {
  if (string.length > 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String must have atleast 1 character and not more than 10');
  }
}

export default stringLength;