import newsApiFactory from "./news";

const apiFactory = axios => ({
  news: newsApiFactory(axios)
});

export default apiFactory;
