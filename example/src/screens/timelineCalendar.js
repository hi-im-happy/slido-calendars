import _ from 'lodash';
import React, { Component, useState } from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { ExpandableCalendar, Timeline, CalendarProvider } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { backgroundColor } from '../../../src/style';


const EVENTS = [
  {
    start: '2021-02-11 05:00:00',
    end: '2021-02-11 06:00:00',
    title: 'Important meeting',
    summary: '3412 A. Mickiewicza St PL, 3032',
    color: '#e6add8'
  },
  {
    start: '2021-02-11 00:30:00',
    end: '2021-02-11 01:30:00',
    title: 'Talk to Matus Horvath',
    summary: 'I really like this guy!',
    color: '#ade6d8'
  },
  {
    start: '2021-02-11 02:30:00',
    end: '2021-02-11 03:20:00',
    title: 'Meeting with Slido CEO',
    summary: 'Meeting with Peter Komornik in his office.',
    color: '#e6add8'
  },
  {
    start: '2021-02-11 04:10:00',
    end: '2021-02-11 04:40:00',
    title: 'Tea Time with Mark Zuckerberg',
    summary: 'Tea Time with Mark, he wants to sell Facebook apparently...'
  },
  {
    start: '2021-02-11 01:05:00',
    end: '2021-02-11 01:35:00',
    title: 'Shopping time!!!',
    summary: 'Finally, gonna go wild!'
  },
  {
    start: '2021-02-11 14:30:00',
    end: '2021-02-11 16:30:00',
    title: 'Meeting Some Friends in McD',
    summary: 'I love McNuggets!',
    color: '#d8ade6'
  },
  {
    start: '2021-02-12 01:40:00',
    end: '2021-02-12 02:25:00',
    title: 'Meet Viktória Karol`ova',
    summary: 'Another interview incoming soon',
    color: '#e6bcad'
  },
  {
    start: '2021-02-12 04:10:00',
    end: '2021-02-12 04:40:00',
    title: 'Tea Time with Colleagues',
    summary: 'Bros bros bros'
  },
  {
    start: '2021-02-12 00:45:00',
    end: '2021-02-12 01:45:00',
    title: 'League Of Legends',
    summary: 'tryna get to Master this season!'
  },
  {
    start: '2021-02-12 11:30:00',
    end: '2021-02-12 12:30:00',
    title: 'Study time',
    summary: 'This one is gonna be hard'
  },
  {
    start: '2021-02-13 12:10:00',
    end: '2021-02-13 13:45:00',
    title: 'Sit back and relax',
    summary: 'Ommmmmmmmmmmmmmmmmmmmmmmm'
  },

];

export default class TimelineCalendarScreen extends Component {

  state = {
    currentDate: new Date(),
  };

  onDateChanged = date => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
    this.setState({ currentDate: date });
  };

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  renderEmptyItem() {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  }

  renderItem = ({ item }) => {
    if (_.isEmpty(item)) {
      return this.renderEmptyItem();
    }

    return (
      <TouchableOpacity style={styles.item}>

        <View>
          <Text style={styles.itemHourText}>{item.hour}</Text>
          <Text style={styles.itemDurationText}>{item.duration}</Text>
        </View>
        <Text style={styles.itemTitleText}>{item.title}</Text>
        <View style={styles.itemButtonContainer}>
          <Button title={'Info'} />
        </View>
      </TouchableOpacity>
    );
  };

  getTheme = () => {
    const themeColor = '#3cac49';
    const lightThemeColor = '#e6efff';
    const disabledColor = '#a6acb1';
    const black = '#20303c';
    const white = '#ffffff';

    return {
      // arrows
      arrowColor: black,
      arrowStyle: { padding: 0 },
      // month
      monthTextColor: black,
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: black,
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // today
      todayBackgroundColor: lightThemeColor,
      todayTextColor: '#3cac49',
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: white,
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: white,
      disabledDotColor: disabledColor,
      dotStyle: { marginTop: -2 }
    };
  };

  render() {

    return (

      <CalendarProvider

        // date={ITEMS[0].title}
        date={this.state.currentDate}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        theme={{ todayButtonTextColor: '#3cac49' }}
        showTodayButton
        AppButton
        disabledOpacity={0.6}
      // todayBottomMargin={16}
      >

        <ExpandableCalendar
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          firstDay={1}
          // markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          // markedDates={() => {}} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
          theme={this.getTheme()}
          leftArrowImageSource={require('../img/previous.png')}
          rightArrowImageSource={require('../img/next.png')}
        // calendarStyle={styles.calendar}
        // headerStyle={styles.calendar} // for horizontal only
        // disableWeekScroll


        />
        <Timeline
          format24h={true}
          eventTapped={e => e}
          events={EVENTS.filter(event => moment(event.start).isSame(this.state.currentDate, 'day'))}
        // scrollToFirst={true}
        // start={0}
        // end={24}
        />

        <View>
          <Button
            title="Add Event"
            color='#3cac49'
            onPress={() => EVENTS.push(

              {
                start: '2021-02-15 01:10:00',
                end: '2021-02-15 02:45:00',
                title: 'Slido Interview!',
                summary: 'I have just added a new event! Yay!'
              },

            )}
          />
        </View>

      </CalendarProvider>
    );
  }
}

const styles = StyleSheet.create({

  addEventButton: {
    backgroundColor: 'white',

  },
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  section: {
    backgroundColor: '#f0f4f7',
    color: '#79838a'
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0',
    flexDirection: 'row'
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0'
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14
  }
});
