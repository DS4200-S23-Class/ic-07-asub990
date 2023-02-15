const MARGINS = {left: 50, right: 50, top:50, bottom: 50};
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const DATA = [55000, 48000, 27000, 66000, 90000];

// scaling functions
const MAX_X = d3.max(data, (d) => {return d;});
const X_SCALE = d3.scaleLinear().domain([0, (MAX_X + 10000)]).range(0, 1000);

// add axis

// create a frame
const FRAME = d3.select("vis1")
              .append("svg")
              .attr("height", FRAME_HEIGHT)
              .attr("width", FRAME_WIDTH)
              .attr("class", "frame");

// add data to the frame
FRAME.selectAll("points").data(DATA).enter().append("cirle")
.attr("cx", 50)
.attr("cy", (d) => {return (X_SCALE(d) + MARGINS.left)})
.attr("r", 5)
.attr("class", "point");

