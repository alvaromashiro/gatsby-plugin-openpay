import React from "react";
const { OpenPay } = window;

export class OpenPayButton extends React.Component {
  state = {
    disabled: false
  };
  componentDidMount() {
    const { sessionId } = window;
    this.props.getSessionId(sessionId);
  }

  payButton = async () => {
    await OpenPay.token.create(
      this.props.card,
      response => this.props.handleResponse(response),
      response => this.props.handleError(response)
    );
  };

  render() {
    return (
      <button
        onClick={this.payButton}
        disabled={this.state.disabled}
        className={this.props.classes}
      >
        {this.props.text || "Pay"}
      </button>
    );
  }
}
