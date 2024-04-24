export default function handleResponseFromAPI(promise) {
  return promise.then((response) => ({
    status: 200,
    body: response.success,
  })).catch(() => {
    Promise.reject(new Error());
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
