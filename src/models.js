import { getUser } from "./api";

export const user = {
  state: {},
  reducers: {
    setUser: (state, payload) => ({
      login: payload.login
    })
  },
  effects: dispatch => ({
    fetchUser: async (payload, state) => {
      const user = await getUser(payload);
      dispatch.user.setUser(user);
    }
  })
};
