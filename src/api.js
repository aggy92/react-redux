export const getAlbums = () =>
    new Promise(resolve => setTimeout(() => resolve([
        {
            id: 1,
            artist: "Soundgarden",
            title: "Superunknown",
            year: "1994"
        },
        {
            id: 2,
            artist: "Red Hot Chili Peppers",
            title: "Californication",
            year: "1999"
        },
        {
            id: 3,
            artist: "Rage Against The Machine",
            album: "Rage Against The Machine",
            year: "1992"
        },
        {
            id: 4,
            artist: "Nirvana",
            album: "Nevermind",
            year: "1991"
        },
        {
            id: 5,
            artist: "Alice In Chains",
            album: "Unplugged",
            year: "1996"
        },
        {
            id: 6,
            artist: "The Roots",
            album: "Things Fall Apart",
            year: "1999"
        }], 2000)));