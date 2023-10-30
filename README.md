# scriptable-time-progress-lockscreen-widget
A simple, scriptable widget for the lock screen that shows the exact progress in time between two dates.

<img src="https://github.com/quhxl/scriptable-time-progress-lockscreen-widget/assets/69106310/aa18efdb-da6d-4ab9-8d09-a7624c60b5eb" width="240">

## Configuration
The number of decimal places, the heading and of course the start and end date can be adjusted in the script.

```js

const DECIMAL_PLACES = 6;
const HEADLINE = "Title";
const START_DATE = new Date(2023, 0, 1, 12, 0, 0, 0);   // Date(year, month, day, hours, minutes, seconds, milliseconds);
const END_DATE = new Date(2023, 3, 14, 16, 25, 34);     // 2023-04-14T16:25:34


```
