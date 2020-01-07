export const getUser = token =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          login: "90s_lover",
          firstName: "John",
          lastName: "Doe"
        }),
      1000
    )
  );
