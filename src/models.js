export const user = {
  state: {},
  reducers: {
    setUser: (state, payload) => {
      console.log(state, payload);
      return {
        login: payload.login
      };
    }
  }
};
