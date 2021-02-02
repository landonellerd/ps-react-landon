import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/** Required TextBox with Error*/
class ExampleOptional extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          textValue: ''
        };
      }
    render() {
        return (
            <TextInputStyledComponents
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={ event => this.setState({ textValue: event.target.value })}
            required
            error={this.state.textValue === '' ? "First Name Is Required" : undefined}
            />
        )
    }
}

export default ExampleOptional;