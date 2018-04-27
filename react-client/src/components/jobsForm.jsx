import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: ''}

			
		}
		this.baseState = this.state;
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e) {
	  var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states});  
	};
	

	handleSubmit(event) {
		event.preventDefault();
		axios.post('/job', this.state.states)
  			.then(function (response) {
    		console.log(response);
  			})
  			.catch(function (error) {
    		console.log(error);
  			});

  			
		};

	render() {
		return (
			<center>
			<div id="jobform" className="container wrapper well"><br /><br /><br />
			<form onSubmit={this.handleSubmit}>
			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Title</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "text" name = "jobTitle" placeholder = "Job Title" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Category</span>
			</Col>
			<Col md={3}>
			<label >
			<div className="form-group">
        <select name = "category" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
          <option value="Select">Select Category</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
        </select>
        </div>
			</label>
			</Col>
			<Col md={1}>
			</Col>
			</Row> <br />

			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>Job Description</span>
			</Col>
			<Col md={8}>
			<label >
			<FormControl  componentClass="textarea" rows={2} cols={90} name="jobDescription" placeholder = "Job Description" autoFocus required onChange={this.onChange} />
			</label></Col>
			
			<Col md={1}>
			</Col> 
			</Row><br />

			<Row>
			<Col md={1}>
			</Col> 
			<Col md={2}>
			<span>From</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus required onChange={this.onChange} />
			</label> </Col>
			<Col md={2}>
			<span>To</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={1}>
			</Col>
			</Row><br /><br />

			    <Button id="jobb" className="btn btn-primary" type="submit" bsSize="large" >
				      Submit
			    </Button>	
			</form>
			</div>
			</center>
		)
	}
}


export default JobsForm;