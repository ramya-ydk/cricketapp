export const ReduxFetch = (fetchData) => {
  console.log(fetchData);
  return new Promise((resolve) => resolve({ data: fetchData }));
};
