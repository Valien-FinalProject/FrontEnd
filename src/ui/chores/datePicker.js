import React from 'react'
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import TimePickerStart from 'ui/chores/timepickerstart'
import TimePickerEnd from 'ui/chores/timepickerend'
import {fullWhite} from 'material-ui/styles/colors'

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};
const styles ={
  hintStyle:{
    color:fullWhite
  },
  inputStyle:{
    color:fullWhite
  }
}
const style={
  backgroundImage:"url(assets/images/chalkboard2.jpg)"
}
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
    this.props.getMinDate(date)
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.props.getMaxDate(date)
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
          <div style={{color:fullWhite, marginBottom:10}}>
            <DatePicker
              hintStyle={{color:"white"}}
              defaultDate={this.state.minDate}
              textFieldStyle={style}
              name="startDate"
              onChange={this.handleChangeMinDate}
              autoOk={this.state.autoOk}
              disableYearSelection={this.state.disableYearSelection}
            />
            {/*<TimePickerStart />*/}
          </div>  
          <div style={{marginBottom:10}}>
            <DatePicker
              fullWidth={true}
              style={{color:"white"}}
              textFieldStyle={styles.inputStyle}
              name="endDate"
              onChange={this.handleChangeMaxDate}
              autoOk={this.state.autoOk}
              defaultDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            {/*<TimePickerEnd />*/}
          </div>
           
        </div>
      </div>
    );
  }
}
