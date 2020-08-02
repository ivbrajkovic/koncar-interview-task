/**
 * Filter data based on title
 * @param {*} data Array of data to filter
 * @param {*} title title to metch
 */
export const filterData = (data, title) =>
  data
    .filter((el) => el.title.toLowerCase().includes(title.toLowerCase()))
    .map((el) => ({ id: el.id, title: el.title }));
