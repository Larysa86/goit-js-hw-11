import axios from 'axios';

async function getData(data, page) {
  const apiData = await axios.get(
    `https://pixabay.com/api/?key=31040308-bd27c3f4cf506e614f730da89&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return apiData;
}

export default { getData };