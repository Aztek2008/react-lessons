import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import getQueryParams from "../utils/getQueryStringParams";
import tvAPI from "../services/tv-api";
import MyComponent from "../components/MyComponent";
import promisePingApi from "../services/fakeFetch";

export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    query && this.fetchingShows(query);
    // IF NO QUERY - FETCH SOMETHING DEFAULT WITH TERNARY FUNCTION

    console.log("promisePingApi", promisePingApi);
    // promisePingApi.promisePingApi()
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    prevQuery !== nextQuery && this.fetchingShows(nextQuery);
  }

  fetchingShows = (query) => {
    tvAPI.fetchShowWithQuery(query).then((shows) => {
      this.setState({ shows });
    });
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />
        <h1>Shows Views</h1>;
        {shows.length > 0 && (
          <ul>
            {shows.map((show) => (
              <li key={show.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <MyComponent />
        {/* <Route path={`${match.path}/:showId`} component={InlineShowDetails} /> // НЕ ОБНОВЛЯЕТСЯ ПО НАЖАТИЮ, ПОЛЕ ВЫБОРА НОВОГО ЭЛЕМЕНТА ОБНОВЛЯЕТСЯ ТОЛЬКО ПОСЛЕ ПЕРЕЗАГРУЗКИ */}
      </>
    );
  }
}
