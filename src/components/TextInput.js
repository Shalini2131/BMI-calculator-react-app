import React from 'react';

class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={ value: ''};
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        let inputValue = event.target.value;
        this.setState({ value: inputValue });
        this.props.onChange(inputValue);
    }
render(){
    return(
        <div>
            <label>
            { this.props.label }
            </label>
            <input type="text" value={ this.state.value } placeholder={ this.props.placeholder } onChange={ this.handleChange }/>
        </div>
    )
}

}
export default TextInput;