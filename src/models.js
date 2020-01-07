import { getUser, getAlbums } from "./api";

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
      dispatch.albums.fetchAlbums(user.id);
    }
  })
};

export const albums = {
  state: {
    albums: [],
    albumsLoaded: false
  },
  reducers: {
    setAlbums: (state, payload) => ({
      ...state,
      albums: payload,
      albumsLoaded: true
    }),
    setAlbumsLoaded: (state, payload) => ({
      ...state,
      albumsLoaded: payload
    })
  },
  effects: dispatch => ({
    fetchAlbums: async (payload, state) => {
      dispatch.albums.setAlbumsLoaded(false)
      const albums = await getAlbums(payload.id);
      dispatch.albums.setAlbums(albums);
    }
  })
};
