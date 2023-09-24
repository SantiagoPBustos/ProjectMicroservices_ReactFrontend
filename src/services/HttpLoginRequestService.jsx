export async function login(endpoint, options) {
  const controller = new AbortController();
  options.signal = controller.signal;

  options.body = JSON.stringify(options.body) || false;
  if (!options.body) delete options.body;

  return await fetch(endpoint, options)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            error: true,
            status: res.status || "000",
          })
    )
    .catch((err) => err);
}