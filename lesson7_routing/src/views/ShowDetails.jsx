import React, { Component } from "react";
import tvAPI from "../services/tv-api";
import routes from "../routes";

export default class ShowDetails extends Component {
  state = { show: null };

  componentDidMount() {
    tvAPI.fetchShowDetails(this.props.match.params.showId).then((show) => {
      this.setState({ show });
      console.log(this.state.show);
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;

    state && state.from ? history.push(state.from) : history.push(routes.shows);
    //   IF ELSE
  };

  // getGoBackLink = () => {
  //   const { state } = this.props.location;
  // };

  render() {
    // const goBackLink = this.getGoBackLink();

    return (
      <>
        {/* <Link to={goBackLink} ></Link> */}

        <button type="button" onClick={this.handleGoBack}>
          Back to show schedule
        </button>
        <br />
        {this.state.show && (
          <>
            <h1>{this.state.show.name}</h1>
            <img
              src={this.state.show.image.medium}
              alt={this.state.show.name}
            />
            {this.state.show.summary}
          </>
        )}
      </>
    );
  }
}
