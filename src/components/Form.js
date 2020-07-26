import React from 'react';
import TextInput from './TextInput';
import '../styles/Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state=this.defaultState();
    }
    weightChange = (weightValue) => {
        this.setState({ weight : weightValue },this.computeBmi);
    }

    heightChange = (heightValue) => {
        this.setState({ height : heightValue }, this.computeBmi);
    }

    defaultState=() =>{
        return{
            height:1.56,
            weight:76,
            bmi: 20.9,
            bmiClass: 'Normal Weight'
        };
    }

    computeBmi(){
        var bmivalue=((this.state.weight/this.state.height) / this.state.height).toFixed(2);
        this.setState({ bmi : bmivalue });
        this.setState({ bmiClass : this.getBmi(bmivalue) });
    }

    getBmi(bmi){
        if(bmi<18.5){
            return "Underweight";
        }
        if(bmi>=18.5 && bmi<24.9){
            return "Normal Weight";
        }
        if(bmi>=25 && bmi<29.9){
            return "Overweight";
        }
        if(bmi>=30){
            return "Obesity";
        }
    }

    getColours = () =>{
        return {
            underweight: { color: '#87d6d5' },
            normal: { color: '#26f041' },
            overweight: { color: '#cbd111' },
            obesity: { color: '#FF5411' }
        }
    }
render(){
    let styles=this.getColours();
    return (
        <div>
            <div className="row">
            <TextInput label="Height: " id="height" placeholder="Enter height in meters" onChange={this.heightChange} />
            </div>
            <div className="row">
                <TextInput label="Weight: " id="weight" placeholder="Enter weight in kg" onChange={this.weightChange}/>
            </div>
            <div className="bmi">
                <h3>BMI={this.state.bmi}</h3>
            </div> 
            <div className="type">
                <h3 style={styles[this.state.bmiClass.split(' ')[0].toLowerCase()]}>{this.state.bmiClass}</h3>
            </div>
        </div>
    )
}
}
export default Form;