import React from "react";
import "./Introduction.css";

export class Introduction extends React.Component {
  constructor(props) {
    super(props);
    
    this.introductionObj={

    }
   
  }
  proceed(){
     this.introductionObj.name=this.refs.name.value;
     this.introductionObj.desc=this.refs.desc.value ;
     this.refs.desc.value='';
     this.refs.name.value='';
    
    this.props.history.push({pathname: '/personal',
      state: {
         name: this.introductionObj.name,
        desc:  this.introductionObj.desc
    }});
   
    
}

  
  render() {
    return (
      <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
        <form>
          <div className="form-group" id="information">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter your name "
              ref="name"
            />
           
          </div>
          <div className="form-group">
            <label htmlFor="Desc">Short Description About Yourself</label>
            <textarea
              className="form-control noresize"
              id="Desc"
              rows="5"
              ref="desc"
            />
          </div>
          <a  className="btn btn-primary" onClick={this.proceed.bind(this)}>Proceed</a>
         
          
        </form>
      </div>
    );
  }
}
