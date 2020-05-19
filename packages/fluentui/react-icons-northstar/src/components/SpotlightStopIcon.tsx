import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const SpotlightStopIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg className={classes.svg} viewBox="8 8 16 16" role="presentation" focusable="false">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M22.85,9.91h0c-2.44,2.44-4.86,4.88-7.31,7.3l-.07.07a.6.6,0,0,1,.44.56.56.56,0,0,1-.6.58h-1c-.23.22-1.65,1.61-1.73,1.76s0,.33,0,.49v0c.1,0,2.35,0,2.68,0a.58.58,0,0,1,.61.58c0,.44-.37.58-.75.58H10.88L8.94,23.77a.59.59,0,0,1-.43.22A.51.51,0,0,1,8,23.48a.47.47,0,0,1,.12-.31l.06-.06c5-5,10-9.95,14.94-14.93A.42.42,0,0,1,23.48,8a.52.52,0,0,1,.52.52.65.65,0,0,1-.24.44A1.93,1.93,0,0,1,24,9.8V16a.58.58,0,0,1-.57.64.57.57,0,0,1-.58-.6Z" />
        <path d="M18.3,21.53c-.36-.36-1.5-1.26-1.5-1.77a.5.5,0,0,1,.36-.48c.61-.13,1.25-.17,1.86-.29a.14.14,0,0,0,.12-.09c.22-.43.63-1.47.87-1.8a.46.46,0,0,1,.38-.19.44.44,0,0,1,.38.2c.18.24.82,1.85,1,1.88.61.14,1.28.13,1.89.29a.52.52,0,0,1,.36.49c0,.49-1.14,1.4-1.5,1.75v.05a9.72,9.72,0,0,0,.22,1.1,4.4,4.4,0,0,1,.1.88.52.52,0,0,1-.49.55,6.72,6.72,0,0,1-1.92-1,6.54,6.54,0,0,1-1.92,1,.5.5,0,0,1-.49-.5A7.61,7.61,0,0,1,18.2,22,3,3,0,0,0,18.3,21.53Z" />
        <path d="M21.7,8.13v0q-.56.57-1.11,1.11H9.89c-.51,0-.73.18-.73.7V20.09a.62.62,0,0,0,.15.42v0a5.5,5.5,0,0,1-.8.8A1.68,1.68,0,0,1,8,20.16V9.92a1.73,1.73,0,0,1,1.67-1.8h12Z" />
        <path d="M18.3,11.59l-.82.79a.2.2,0,0,1-.08-.1,1.71,1.71,0,1,0-2.29,2.45v0h0c-.09.08-.75.76-.81.79a2.81,2.81,0,0,1-1.16-2.26A2.86,2.86,0,0,1,16,10.41,2.77,2.77,0,0,1,18.3,11.59Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M8.52,21.33A1.67,1.67,0,0,1,8,20.18V9.92A1.72,1.72,0,0,1,9.83,8.13H21.67l0,0,0,0-3.36,3.36c-.07,0-.07,0-.1-.07a2.85,2.85,0,0,0-5.07,1.8,2.81,2.81,0,0,0,1.14,2.27v0L8.62,21.25Z" />
        <path d="M10.87,21.84c-.64.63-1.27,1.3-1.93,1.93a1.14,1.14,0,0,1-.11.11.56.56,0,0,1-.31.11A.52.52,0,0,1,8,23.47a.47.47,0,0,1,.19-.37L18.77,12.51c1.44-1.44,2.9-2.87,4.33-4.32l0,0A.41.41,0,0,1,23.47,8a.51.51,0,0,1,.52.51.6.6,0,0,1-.24.45l0,.08a1.77,1.77,0,0,1,.21.84v4.5c0,1.21,0,2.44,0,3.66h0c-.43-.08-.92-.11-1.33-.21s-.5-2.2-2.21-2.2c-1.15,0-1.45.75-1.89,1.62a.3.3,0,0,1-.16,0H15.48c-.08,0-.12.07-.17.12-1,1.07-2.1,2.12-3.16,3.17a.94.94,0,0,0-.1.1h0c.34,0,3.61,0,3.69,0a7.68,7.68,0,0,0,.93,1.12s-.15,0-.19,0Z" />
        <path d="M22.46,21.53a11.77,11.77,0,0,1,.33,2,.52.52,0,0,1-.49.54,6.8,6.8,0,0,1-1.91-1c-.36.09-1.34,1-1.92,1a.51.51,0,0,1-.5-.5,5.74,5.74,0,0,1,.17-1.31,4.87,4.87,0,0,0,.15-.76c-.35-.35-1.5-1.29-1.5-1.77a.5.5,0,0,1,.41-.49c.59-.08,1.2-.16,1.79-.27l.08,0c.09-.06.75-1.59.9-1.84a.48.48,0,0,1,.83,0c.28.49.59,1.28.87,1.82.45.1.93.15,1.39.22a4.17,4.17,0,0,1,.6.1.51.51,0,0,1,.31.47C24,20.25,22.82,21.21,22.46,21.53Z" />
      </g>
    </svg>
  ),
  displayName: 'SpotlightStopIcon',
});

export default SpotlightStopIcon;