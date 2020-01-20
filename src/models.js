import { getAlbums } from "./api";

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
      const albums = await getAlbums();
      dispatch.albums.setAlbums(albums);
    }
  })
};
