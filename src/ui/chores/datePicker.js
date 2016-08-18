import React from 'react'
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import TimePickerStart from 'ui/chores/timepickerstart'
import TimePickerEnd from 'ui/chores/timepickerend'

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

export default class DateSelector extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear());
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate: minDate, 
      maxDate: maxDate,
      autoOk: true,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <div style={optionsStyle}>
          <div style={{borderBottom:"1px solid green", marginBottom:10}}>
            <DatePicker
              onChange={this.handleChangeMinDate}
              autoOk={this.state.autoOk}
              floatingLabelText="Start Date"
              defaultDate={this.state.minDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <TimePickerStart />
          </div>  
          <div style={{borderBottom:"1px solid red", marginBottom:10}}>
            <DatePicker
              onChange={this.handleChangeMaxDate}
              autoOk={this.state.autoOk}
              floatingLabelText="End Date"
              defaultDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <TimePickerEnd />
          </div>
           
        </div>
      </div>
    );
  }
}
