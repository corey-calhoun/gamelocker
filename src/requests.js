const APIKEY = "8ciwm8h4jkzatmul41ioggy8f1ejvn";

const requests = {
    fetchGamesByPlatform: `/games/platforms?api_key=${APIKEY}&language=en-US`,
    fetchGamesByGenres: `/genres?api_key=${APIKEY}&language=en-US`,
    fetchGamesByFranchise: `/franchises?api_key=${APIKEY}&language=en-US`,
}

export default requests;