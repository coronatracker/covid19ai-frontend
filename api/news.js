export default axios => ({
  searchNews: q => {
    return axios
      .get(`/news`, {
        params: { q }
      })
      .then(res => res.data);
  }
});
