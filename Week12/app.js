var data = [280, 100, 200, 150];
var colors = ["lightblue","blue","lightgreen","green"];
d3.select("#chart")
	.selectAll("dic")
	.data(data)
	.enter().append("div")
	.style("background", function(d, i) { return colors[i%4]; })

	.text(function(d) {return d; });


d3.select("#chart")
	.selectAll("div")
	.data(data)
	.transition()
	.duration(2000)
	.style('width',function(d) {return d + 'px'; });
