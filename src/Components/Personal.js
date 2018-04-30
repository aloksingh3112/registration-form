import React from "react";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDJo0Ip34zCVTuPnYCPw7_Ip3Dan0CJvTU",
  authDomain: "reactform-7c2f3.firebaseapp.com",
  databaseURL: "https://reactform-7c2f3.firebaseio.com",
  projectId: "reactform-7c2f3",
  storageBucket: "",
  messagingSenderId: "392219091098"
};

firebase.initializeApp(config);

export class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.personalInformation = {
      Ethnicity: "",
      Race: "",
      Sex: ""
    };
  }

  formSubmit = () => {
    this.personalInformation.Name = this.props.location.state.name;
    this.personalInformation.Description = this.props.location.state.desc;
    this.personalInformation.State = this.refs.state.value;
    this.personalInformation.Age = this.refs.age.value;
    this.personalInformation.Height = this.refs.height.value;
    this.personalInformation.Weight = this.refs.weight.value;
    console.log(this.personalInformation);
    var db = firebase.database().ref("users");
    db.push().set(this.personalInformation);
  };

  ethnicityChange = event => {
    this.personalInformation.Ethnicity = event.target.value;
  };
  raceChange = event => {
    this.personalInformation.Race = event.target.value;
  };
  sexChange = event => {
    this.personalInformation.Sex = event.target.value;
  };

  render() {
    return (
      <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
        <form className="mt-2">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="Enter your State"
              ref="state"
            />
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="Age">Age</label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="Age"
              placeholder="Age"
              ref="age"
            />
            <hr />

            <h5>Ethnicity</h5>
          </div>
          {/* //radio button */}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Ethnicity"
              id="inlineRadio1"
              value="hisponic"
              Checked={this.personalInformation.Ethnicity === "hisponic"}
              onChange={this.ethnicityChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Hisponic
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Ethnicity"
              id="inlineRadio2"
              value="non-hisponic"
              Checked={this.personalInformation.Ethnicity === "non-hisponic"}
              onChange={this.ethnicityChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Non-Hisponoc
            </label>
          </div>
          <hr />

          {/* race radio button */}
          <h5>Race</h5>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Race"
              id="inlineRadio2"
              value="american"
              Checked={this.personalInformation.Race === "american"}
              onChange={this.raceChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              American
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Race"
              id="inlineRadio2"
              value="indian"
              Checked={this.personalInformation.Race === "indian"}
              onChange={this.raceChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Indian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Race"
              id="inlineRadio2"
              value="black"
              Checked={this.personalInformation.Race === "black"}
              onChange={this.raceChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Black
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Race"
              id="inlineRadio2"
              value="white"
              Checked={this.personalInformation.Race === "white"}
              onChange={this.raceChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              White
            </label>
          </div>
          {/* SEx */}

          <hr />
          <h5>Sex</h5>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="sex"
              id="inlineRadio2"
              value="male"
              Checked={this.personalInformation.Sex === "male"}
              onChange={this.sexChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="sex"
              id="inlineRadio2"
              value="female"
              Checked={this.personalInformation.Sex === "female"}
              onChange={this.sexChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Female
            </label>
          </div>
          <hr />

          {/* Height and Weight */}

          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Height</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Your Height"
              ref="height"
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Weight</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Your weight"
              ref="weight"
            />
          </div>
          <a className="btn btn-primary" onClick={this.formSubmit}>
            Submit
          </a>
        </form>
        <br />
      </div>
    );
  }
}
