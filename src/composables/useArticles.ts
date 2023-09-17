import mockArticles from "../mocks/articles.json";
import mockExplore from "../mocks/explore.json";

export default function useArticles() {
  function getArticles() {
    return mockArticles.items;
  }

  function getArticle(id) {
    return mockArticles.items[id];
  }

  function getExploreArticles() {
    return mockExplore;
  }


  function fetchArticles() {
    const mediumUrl =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fadamakis";

    return fetch(mediumUrl).then((res) => res.json());
  }

  return { getArticles, getArticle, getExploreArticles };
}
