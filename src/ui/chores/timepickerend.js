import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class TimePickerEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value12: null};
  }

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  };

  render() {
  	console.log(this.state.value12)
    return (
      <div>
        <TimePicker
          style={{color:"white", fontFamily:"Chalky"}}
          format="ampm"
          hintText="End Time"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
      </div>
    );
  }
}