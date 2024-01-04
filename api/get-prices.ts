export const getUSDPrices = () =>
  fetch(`/api/v1/get-prices`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => await response.json())
    .catch(console.error);
