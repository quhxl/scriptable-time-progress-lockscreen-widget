// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: percentage;

// #############################
const DECIMAL_PLACES = 6;
const HEADLINE = "Title";
const START_DATE = new Date(2024, 0, 1, 12, 0, 0, 0); // 2023-01-12T12:00:00
const END_DATE = new Date(2023, 3, 14, 16, 25, 34); // 2023-04-14T16:25:34
// #############################

if (END_DATE <= START_DATE) {
  console.error("Error: END_DATE must be after START_DATE");
  return;
}

let currentDate = new Date();
const timeElapsed = currentDate - START_DATE;
const totalTime = END_DATE - START_DATE;

const percentage = ((timeElapsed / totalTime) * 100).toFixed(DECIMAL_PLACES);

let widget = new ListWidget();
let widgetHeadline = widget.addText(HEADLINE);
widgetHeadline.font = Font.headline();
widget.addText(percentage.toString() + "%");
Script.setWidget(widget);
widget.presentSmall();
