import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './DatePicker.css';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          focused: props.autoFocus,
          date: props.initialDate,
        };
    
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);

        this.props.onDateChange(this.state.date.toDate().toLocaleDateString())
      }
    
      onDateChange(date) {
        this.setState({ date });
        this.props.onDateChange(date.toDate().toLocaleDateString())
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
                    date={this.state.date}
                    focused={focused}
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

export default DatePicker;