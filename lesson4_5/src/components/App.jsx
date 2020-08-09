import React, { Component } from "react";

import Spinner from "./Spinner";
import Notification from "./Notification";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import articlesApi from "../services/articlesApi";

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    /*DOING FETCH IF NEW DATA IN QUERY*/
    prevQuery !== nextQuery && this.fetchArticles();
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    articlesApi
      .fetchArticlesWithQuery(searchQuery, page)
      .then((articles) =>
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
          /* THIS ADD NEW QUERY ARRAY TO EXISTED ARTICLES AND ENCREASE PAGE IF ALL LOADED SMOOTHLY */
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormQuerySubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 0,
      articles: [],
    });
  };

  render() {
    const { articles, loading, error } = this.state;

    return (
      <>
        {error && (
          <Notification message={`Whoops, smth went wrong: ${error.message}`} />
        )}

        <SearchForm onSubmit={this.handleSearchFormQuerySubmit} />

        {articles.length > 0 && <ArticleList articles={this.state.articles} />}

        {loading && <Spinner message="Loading..." />}

        {articles.length > 0 && !loading && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </>
    );
  }
}
