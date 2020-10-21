
const requests = {
    fetchGamesByPlatform: `/platforms?&language=en-US`,
    fetchGamesByGenres: `/genres?&language=en-US`,
    fetchTopRated: `/games?2019-01-01,2020-12-31&ordering=-added&language=en-US`,
}

export default requests;