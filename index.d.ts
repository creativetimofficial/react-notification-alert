/*
 * ****************************************************************************
 * Copyright (C) 2018-2018 WeWill3C, LLC dba Now IMS, All rights reserved.
 * Project: nowims-ui
 * Modified By: rogerk
 * Created On: March 27th, 2018
 * Last Modified: March 27th, 2018
 * ****************************************************************************
 */
import * as React from 'react';

export interface AlertOptions {
  place: 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br',
  message: string,
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  icon: string,
  autoDismiss: number
}

declare class ReactNotificationAlert extends React.Component {
  notificationAlert(options: AlertOptions): void;
}

export default ReactNotificationAlert;

