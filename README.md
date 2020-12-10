# React Notification Alert
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]

**React Notification Alert** is a component made with [reactstrap components](https://reactstrap.github.io/) and [React](https://reactjs.org/).

## Installation

`npm install --save react-notification-alert`

## Usage
You can import react-notification-alert in your application like so:

`import NotificationAlert from 'react-notification-alert';`

After that, in your component render method add the following line:

`<NotificationAlert ref="notificationAlert" zIndex={1031} onClick={() => console.log("hey")} />`

We've used `ref="notificationAlert"` property on the `NotificationAlert` tag to access this components properties.

Somewhere in your component call `notificationAlert(options)` function like:

`this.refs.notificationAlert.notificationAlert(options);`

## Styles

Do not forget to import our styles in your project:
```
import "react-notification-alert/dist/animate.css";
```

## *zIndex*
If you want to add a special zIndex to the notification, if not, `9999` will be set as default.

## *onClick*
This function will be called when the user clicks on a certain notification.

## *options* parameter

This parameter has to be a javascript object with the following props:

```
var options = {
    place: ,
    message: ,
    type: ,
    icon: ,
    autoDismiss: ,
    closeButton: ,
    zIndex: ,
}
```

### *place*
This is where will the notification appear. Can be one of:
1. `tl` - notification will be rendered in the top-left corner of the screen
2. `tc` - notification will be rendered in the top-center corner of the screen
3. `tr` - notification will be rendered in the top-right corner of the screen
4. `bl` - notification will be rendered in the bottom-left corner of the screen
5. `bc` - notification will be rendered in the bottom-center corner of the screen
6. `br` - notification will be rendered in the bottom-right corner of the screen

### *message*
Can be `string` / `node`. This is goind to be the message inside the `notification`.

### *type*
This is the color of the notification and can be one of, according to [reactstrap colors for alerts](https://reactstrap.github.io/components/alerts/):
1. `primary`
2. `secondary`
3. `success`
4. `danger`
5. `warning`
6. `info`
7. `light`
8. `dark`

### *icon*
String used to add an icon to the notification.

### *autoDismiss*
This prop is used to tell the notification after how many **seconds** to auto close.
If is set to a value lower than or equal to 0, then the notification will not auto close.

### *closeButton*
If this prop is set to false, than no close button will render in the notification.

## Example code

```
import React, { Component } from 'react';
import NotificationAlert from 'react-notification-alert';

var options = {};
options = {
    place: 'tl',
    message: (
        <div>
            <div>
                Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
            </div>
        </div>
    ),
    type: "danger",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 7
}

class App extends Component {
    myFunc(){
        this.refs.notify.notificationAlert(options);
    }
  render() {
    return (
      <div>
          <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />
        <button onClick={() => this.myFunc()}>Hey</button>
      </div>
    );
  }
}

export default App;
```

## Dependencies

For this component to work properly you have to have the following libraries installed in your project:

```
npm install --save reactstrap
npm install --save bootstrap
```
Bootstrap will require the following:
```
npm install --save jquery
```


[CHANGELOG]: ./CHANGELOG.md

[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-0.0.13-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
