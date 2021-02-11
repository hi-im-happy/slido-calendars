import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

const appIcon = require('../img/slidologo.png');
const testIDs = require('../testIDs');

export default class MenuScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container} testID={testIDs.menu.CONTAINER}>
          <Image source={appIcon} style={styles.image} />

          <Text style={styles.homeScreenText}>Calendar App</Text>

          {/* <TouchableOpacity
            testID={testIDs.menu.CALENDARS}
            style={styles.menu}
            onPress={this.onCalendarsPress.bind(this)}
          >
            <Text style={styles.menuText}>Calendars</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID={testIDs.menu.CALENDAR_LIST}
            style={styles.menu}
            onPress={this.onCalendarListPress.bind(this)}
          >
            <Text style={styles.menuText}>Calendar List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID={testIDs.menu.HORIZONTAL_LIST}
            style={styles.menu}
            onPress={this.onHorizontalCalendarListPress.bind(this)}
          >
            <Text style={styles.menuText}>Horizontal Calendar List</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity testID={testIDs.menu.AGENDA} style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
            <Text style={styles.menuText}>Agenda</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            testID={testIDs.menu.EXPANDABLE_CALENDAR}
            style={styles.menu}
            onPress={this.onExpandablePress.bind(this)}
          >
            <Text style={styles.menuText}>Expandable Calendar</Text>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.menu} onPress={this.onTimelinePress.bind(this)}>
            <Text style={styles.menuText}>Open Calendar</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            testID={testIDs.menu.WEEK_CALENDAR}
            style={styles.menu}
            onPress={this.onWeekPress.bind(this)}
          >
            <Text style={styles.menuText}>Week Calendar</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }

  pushScreen(screen, props) {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: props,
        options: {
          topBar: {
            title: {
              text: 'Slido Calendar App'
            },
            backButton: {
              accessibilityLabel: 'back',
              showTitle: false, // iOS only
              color: Platform.OS === 'ios' ? '#2d4150' : undefined
            }
          }
        }
      }
    });
  }

  onCalendarsPress() {
    this.pushScreen('Calendars');
  }

  onCalendarListPress() {
    this.pushScreen('CalendarsList');
  }

  onHorizontalCalendarListPress() {
    this.pushScreen('HorizontalCalendarList');
  }

  onAgendaPress() {
    this.pushScreen('Agenda');
  }

  onExpandablePress() {
    this.pushScreen('ExpandableCalendar');
  }

  onTimelinePress() {
    this.pushScreen('TimelineCalendar');
  }

  onWeekPress() {
    this.pushScreen('ExpandableCalendar', { weekView: true });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    marginTop: 40,
    marginBottom: 10,
    width: 316,
    height: 105
  },
  menu: {
    width: 300,
    padding: 15,
    margin: 150,
    backgroundColor: '#3cac49',
    alignItems: 'center',
    borderRadius: 30,

  },
  homeScreenText: {
    fontSize: 30,
    color: '#3cac49',
  },
  menuText: {
    fontSize: 20,
    color: 'white',
  }
});
