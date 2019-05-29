'use strict';

class Body extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      firstname : "",
      lastname  : ""
    }
  }

  bindFname = event => {
    this.setState({
      firstname: event.target.value
    })
   }
   
   bindLastname = event => {
    this.setState({
      lastname: event.target.value
    })
   }

  submit = () => {
    if(confirm('Add new student?') == 1){
      axios.post('rest/model.php', {
        method: 'create',
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })
      .then(function (response) {
        alert('New name successfully recorded.');
        location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render(){
    return(
      <div>
        <div className="container">
         <br/>
         <div className="row">
            <div className="col-xl-12">
              {this.state.firstname === "" || this.state.lastname === "" ? <h1>Enter Name&Lastname:</h1> : <h1>Hi my name is {this.state.firstname} {this.state.lastname}</h1> }
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xl-12">
              <input type="text" className={"form-control"} value={this.state.firstname} onChange={this.bindFname} />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-xl-12">
              <input type="text" className={"form-control"} value={this.state.lastname} onChange={this.bindLastname} />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-xl-12">
              <button className="btn btn-success" onClick={this.submit}>Save</button>
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

export default Body