class DataSource {
  static searchmovie(keyword) {
    console.log(keyword);
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=cabbfcc85626db2ac87d779b2e5a7acf&query=${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.results) {
        return Promise.resolve(responseJson.results);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
  }
  export default DataSource;