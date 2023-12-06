import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
        if (this.state.name.length >= 2 && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: false
            })
        } else {
            this.setState({
                error: true
            })
        }
  }

  render() {
    const { name, salary, error } = this.state;

    let classNameName = "form-control new-post-label";
    let classNameSalary = "form-control new-post-label"
 
    if (error) {
      classNameName += " error";
      classNameSalary += " error"; 
    }

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit = {this.onSubmit}>
          <input
            type="text"
            className={classNameName}
            placeholder="Enter the employee's name"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className={classNameSalary}
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;

