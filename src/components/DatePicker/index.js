import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './DatePicker.css';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: props.initialDate,
        };
    
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

        this.props.onDateChange(this.state.date)
      }
    
      onDateChange(date) {
        this.setState({ date });
        this.props.onDateChange(date)
      }
    
      onFocusChange({ focused }) {
        this.setState({ focused });
      }
    
      render() {
        const { focused, date } = this.state;
    
        return (
            <div className="no-border">
                <SingleDatePicker
                    id="date_input"
                    date={date}
                    focused={focused || false}
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                    displayFormat={() => moment.localeData().longDateFormat('LL')}
                    hideKeyboardShortcutsPanel={true}
                    noBorder={false}
                    numberOfMonths={1}
                    block={true}
                />
            </div>
          
        );
      }
}

DatePicker.propTypes = {
  initialDate: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;