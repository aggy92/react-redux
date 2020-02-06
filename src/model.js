import {getAlbums} from "./api";

export const appSettings = {
    state: {
        theme: "solid"
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
        albumsList:[],
        loaded: false
    },
    reducers: {
        setAlbumsList:(state, payload) => ({
            ...state,
            albumsList: payload,
            loaded: true
        }),
        setLoaded:(state, payload) => ({
            ...state,
            loaded: payload
        })
    },
    effects: dispatch => ({
        fetchAlbums: async (payload, state) => {
            const fetchAlbums = await getAlbums();
            dispatch.albums.setAlbumsList(fetchAlbums);
        }
    })
};