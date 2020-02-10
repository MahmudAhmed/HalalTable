import React from "react";
import { Redirect, Link } from "react-router-dom"
class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    const user = Object.assign({}, this.state);
    $(".sidenav").removeClass("is-open");
    login(user);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  render() {
    
    const { errors } = this.props;
    const displayErrors = errors.map((err, idx) => <h3 className="form-errors" key={idx}>{err}</h3>);

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
            value={this.state.password}
            onChange={this.handleChange("password")}
            required
          />
          <button className="btn">Sign In</button>
          <br />
          <span className="button-alternative">New to HalalTable?
          <strong><Link to="/signup">  Create an account</Link></strong>
          </span>

        </form>
      </div>
    );
  }
}

export default SignInPage;
