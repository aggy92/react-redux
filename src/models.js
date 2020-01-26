export const appSettings = {
  state: {
    theme: "outline"
  },
  reducers: {
    setTheme: (state, payload) => ({
      ...state,
      theme: payload
    })
  }
};
