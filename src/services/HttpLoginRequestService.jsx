export async function login(endpoint, options) {
  const controller = new AbortController();
  options.signal = controller.signal;

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

export async function loginWhitGoogle(endpoint, options) {
  const controller = new AbortController();
  options.signal = controller.signal;

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
