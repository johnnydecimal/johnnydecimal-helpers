const areaNumberIsValid = (area: string) =>
  area.match(/^\d0-\d9$/) && area.substring(0, 1) === area.substring(3, 4);

const areaWithTitleIsValid = (areaWithTitle: string) =>
  areaWithTitle.match(/^\d0-\d9 .+/) &&
  areaWithTitle.substring(0, 1) === areaWithTitle.substring(3, 4);

const categoryNumberIsValid = (category: string) => category.match(/^\d\d$/);

export { areaNumberIsValid, areaWithTitleIsValid, categoryNumberIsValid };
