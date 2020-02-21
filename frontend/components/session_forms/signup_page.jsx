import React from "react";
import { Redirect, Link } from "react-router-dom";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signup } = this.props;
    const user = Object.assign({}, this.state);
    $(".sidenav").removeClass("is-open");
    signup(user).then( () => this.setState({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_location: ""
    }));
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
          <h1>Welcome to HalalTable!</h1>
          <hr />
          {displayErrors}
          <input
            className="input"
            type="text"
            placeholder="First Name *"
            value={this.state.first_name}
            onChange={this.handleChange("first_name")}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Last Name *"
            value={this.state.last_name}
            onChange={this.handleChange("last_name")}
            required
          />
          <input
            className="input"
            type="email"
            placeholder="Email *"
            value={this.state.email}
            onChange={this.handleChange("email")}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password *"
            onChange={this.handleChange("password")}
            required
          />

          <select
            id="primary-location"
            defaultValue="Primary Dining Location *"
            onChange={this.handleChange("primary_location")}>
            <option disabled >Primary Dining Location *</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>

          <button className="btn">Create Account</button>
          <br />
          <span className="button-alternative">Already Have an Account?
          <strong><Link to="/login">  Click Here to Login!</Link></strong>
          </span>

        </form>
      </div>
    );
  }
}

export default SignUpPage;

