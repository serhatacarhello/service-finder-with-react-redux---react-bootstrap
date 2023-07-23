// DateUtils.js
const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  return dateObject.toLocaleDateString();
};

export default formatDate;
