const capitalize = n => {
  if (!n) {
    return '';
  }
  return `${n.charAt(0).toUpperCase()}${n.slice(1)}`;
};

export default capitalize;
