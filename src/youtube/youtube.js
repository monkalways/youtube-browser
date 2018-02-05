import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCJ2md4jlD7llq7vy_UwTE0xzGTFz4Rk_s';

const youtubeSearch = (term, callback) => {
    YTSearch({
        key: API_KEY,
        term,
    }, callback);
};

export default youtubeSearch;