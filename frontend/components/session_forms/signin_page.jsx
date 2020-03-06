import React from "react";
import { Link } from "react-router-dom"
class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login, history } = this.props;
    let url = "/";
    if (history.location.state) {
      url = history.location.state.from.pathname;
    }
    const user = Object.assign({}, this.state);
    document.querySelector(".sidenav").classList.remove("is-open");
    login(user).then(() => history.push(url));
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  loginDemoUser() {
    const { login, history } = this.props;
    let url = "/";
    if (history.location.state) {
      url = history.location.state.from.pathname;
    }
    document.querySelector(".sidenav").classList.remove("is-open");
    login({ email: "demo@ht.com", password: "fireball42" }).then(() => history.push(url));
  }

  render() {
    const { errors } = this.props;
    const displayErrors = errors.map((err, idx) => (
      <h3 className="form-errors" key={idx}>
        {err}
      </h3>
    ));

    return (
      <div className="session-page">
        <form className="session-form" onSubmit={this.handleSubmit}>
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
            <strong>
              <Link to="/signup"> Create an account</Link>
            </strong>
          </span>
          <span
            className="signin-btn"
            id="demo-span-button"
            title="Use Demo Account"
            onClick={this.loginDemoUser}
          >
            Try A Demo Account Instead.
          </span>
        </form>
      </div>
    );
  }
}

export default SignInPage;
