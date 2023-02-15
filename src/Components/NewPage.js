import React, { Component } from 'react';
import Emptable from './Emptable';
import FnPage from './FnPage';

class NewPage extends Component {
    constructor(){
        super()
        this.state={
            b:20,
            text:"This is Class Component ",
            show:false,
            arr:[1,2,3,4,5],
            employees: [
                {
                  sno: "AAA100",
                  name: "Rajan",
                  age: 25,
                  designation: "Software Engineer",
                  location: "Hyderabad",
                },
                {
                  sno: "AAA101",
                  name: "Mahesh",
                  age: 35,
                  designation: "Sr.Software Engineer",
                  location: "Bangalore",
                },
                {
                  sno: "AAA103",
                  name: "John",
                  age: 40,
                  designation: "Project Manager",
                  location: "Chennai",
                },
                {
                  sno: "AAA104",
                  name: "Wilson",
                  age: 55,
                  designation: "Director",
                  location: "Bangalore",
                },
              ],
        }
    }

    changeData=()=>{
         this.setState({b:10})
        this.setState({data:"new string"})
        console.log(this.state);

    }
    showAndHide=()=>{
        this.setState({show:!this.state.show})
    }
    // show=()=>{
    //     this.setState({show:true})

    // }


    // hide=()=>{
    //     this.setState({show:false})

    // }


   
    render() {
        // const text = "This is Class Component "
        let {aData} = this.props
        // text= "Class Component"
       
        return (
            <div>
              <button onClick={this.showAndHide}>Show and Hide</button>
              {/* <button onClick={this.hide}>Hide</button> */}
                <br/>
                {this.state.show?<div>{this.state.text}</div>:null}


                <br/>
              <Emptable employees={this.state.employees} />
    
            </div>
        );
    }
}

export default NewPage;
