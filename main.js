const margins = {left: 50, right: 50, top:50, bottom: 50};
const DATA = [55000, 48000, 27000, 66000, 90000];

// scaling functions
const MAX_X = d3.max(data, (d) => {return d;});
const X_SCALE = d3.scaleLinear().domain([0, (MAX_X + 10000)]).range(0, 1000);

// add axis

// create a frame
const frame = d3.select("plot").append("svg").attr("height", 500).attr("width", 500).attr("class", "frame");

// add data to the frame
frame.selectAll("points").data(DATA).enter().append("cirle").attr("cx", 50).attr("cy", (d) => {return (X_SCALE(d) + margins.left)}).attr("r", 20)
.attr("r", 5).attr("class", "point");

