
import React, { Component, useCallback } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // letProdId: 0,
      // letJsonValues: ""
      list: [],
    }
    // this.addProd = this.addProd.bind(this);
    // this.addCart = this.addCart.bind(this);
    // this.renderHtml = this.renderHtml.bind(this);
  }


  componentDidMount() {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    fetch(url).then(response => response.json()).then(this.jsonData).catch()
  }

  jsonData = (data) => {
    this.setState({
      list: data
    })
  }

  render() {
    // const letJSONObj = require('./values.json');

    // let letJSONObj=[1,2,3]
    // letJSONObj.map(i => {
    //   <td>i</td>
    //   let letJsonSno = letJSONObj[i].sno;

    // })
    // addProd(){

    // }
    return (
      <div>
        <ul>
          {
            this.state.list.length == 0 &&
            <li>Sorry no data found</li>
          }
          <table>
            {
              this.state.list.length > 0 && this.state.list.map((item) => (
                // <td key={item.id} id={item.id} className={"liClass"}>{item.id + ' ' + item.employee_name + ' ' + item.employee_salary + ' ' + item.employee_age}</td>
                <tr key={item.id} id={item.id} className={"liClass"}>
                  <td>{item.id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_salary}</td>
                  <td>{item.employee_age}</td>
                </tr>

              ))
            }
          </table>
        </ul>


      </div>
    )
  }
}

export default App;