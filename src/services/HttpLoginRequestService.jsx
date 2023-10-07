export async function post(endpoint, options) {
  const controller = new AbortController();
  options.signal = controller.signal;

  return await fetch(endpoint, options)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            error: true,
            status: res.status || "000",
            message: res.json().then((result)=>result),
          })
    )
    .catch((err) => err);
}
