import React from "react";
const { OpenPay } = window;

class OpenPayButton extends React.Component {
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
        style={this.props.style}
        onClick={this.payButton}
        disabled={this.props.disabled}
        className={this.props.className}
      >
        {this.props.text || "Pay"}
      </button>
    );
  }
}
export default OpenPayButton;
