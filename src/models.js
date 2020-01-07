import { getUser } from "./api";

export const user = {
  state: {},
  reducers: {
    setUser: (state, payload) => ({
      id: payload.id,
      login: payload.login,
      name: `${payload.firstName} ${payload.lastName}`
    })
  },
  effects: dispatch => ({
    fetchUser: async (payload, state) => {
      const user = await getUser(payload);
      dispatch.user.setUser(user);
    }
  })
};
