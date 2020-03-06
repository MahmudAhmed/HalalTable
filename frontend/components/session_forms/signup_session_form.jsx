import React from "react";
import { Redirect, Link } from "react-router-dom";

class SignUpSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_location: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.setState({
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

  handleClick(e) {
    e.preventDefault();
    $(".modal-signup").removeClass("is-open");
    this.setState({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      primary_location: ""
    })
  }

  toggleForms(e) {
    $(".modal-signup").removeClass("is-open");
    $(".modal-login").addClass("is-open");
  }

  render() {

    const { errors, loggedIn } = this.props;
    const displayErrors = errors.map((err, idx) => <h3 className="form-errors" key={idx}>{err}</h3>);
    loggedIn ?  $(".modal-signup").removeClass("is-open") : "";

    return (
      <div className="modal-signup">
        <span
          className="modal-close"
          title="close"
          onClick={this.handleClick}>
          &times;
        </span>

        <section
          className="modal-screen"
          onClick={this.handleClick}>
        </section>

        <form className="modal-form" onSubmit={this.handleSubmit}>
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
          <strong onClick={this.toggleForms}>  Click Here to Login!</strong>
          </span>
        </form>
      </div>
    );
  }
}

export default SignUpSessionForm;
