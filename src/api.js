export const getUser = id =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          id,
          login: "90s_lover",
          firstName: "John",
          lastName: "Doe"
        }),
      1000
    )
  );
