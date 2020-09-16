import React, { Component } from "react";
import tvAPI from "../services/tv-api";

export default class InlineShowDetails extends Component {
  state = { show: null };

  componentDidMount() {
    tvAPI.fetchShowDetails(this.props.match.params.showId).then((show) => {
      this.setState({ show });
      console.log(this.state.show);
    });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
