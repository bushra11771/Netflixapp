const key = '962f7e72366a228b167e539c68c85092'

const Requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en_US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en_US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en_US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en_US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,

  
};

export default Requests