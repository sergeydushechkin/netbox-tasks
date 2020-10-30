const createTableData = (data) => {
  return {
    id: Number(data[0].value),
    name: data[1].value,
    age: Number(data[2].value),
    phone: data[3].value,
    email: data[4].value,
  };
};

export default createTableData;
