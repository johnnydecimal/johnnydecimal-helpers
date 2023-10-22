const areaNumberIsValid = (area) => {
  return (
    area.match(/^\d0-\d9$/) && area.substring(0, 1) === area.substring(3, 4)
  );
};

export { areaNumberIsValid };
