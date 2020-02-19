import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";

class LoginSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() =>
      this.setState({
        email: "",
        password: ""
      })
    );
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    $(".modal-login").removeClass("is-open");
    this.setState({
      email: "",
      password: ""
    });
  }

  toggleForms(e) {
    $(".modal-login").removeClass("is-open");
    $(".modal-signup").addClass("is-open");
  }

  render() {
    const { errors, loggedIn } = this.props;
    const displayErrors = errors.map((err, idx) => (
      <h3 className="form-errors" key={idx}>
        {err}
      </h3>
    ));
    loggedIn ? $(".modal-login").removeClass("is-open") : "";

    return (
      <div className="modal-login">
        <span className="modal-close" title="close" onClick={this.handleClick}>
          &times;
        </span>

        <section className="modal-screen" onClick={this.handleClick}></section>

        <form className="modal-form" onSubmit={this.handleSubmit}>
          <h1>Please sign in</h1>
          <hr />
          {displayErrors}
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={this.handleChange("password")}
            required
          />
          <button className="btn">Sign In</button>
          <br />
          <span className="button-alternative">
            New to HalalTable?
            <strong onClick={this.toggleForms}> Create an account</strong>
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginSessionForm);
