# belly-button-challenge #

## link to static page ##
https://ashley-ngyn.github.io/belly-button-challenge/

## instructions ##
1. Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use sample_values as the values for the bar chart.
    * Use otu_ids as the labels for the bar chart.
    * Use otu_labels as the hovertext for the chart.
3. Create a bubble chart that displays each sample.
    * Use otu_ids for the x values.
    * Use sample_values for the y values.
    * Use sample_values for the marker size.
    * Use otu_ids for the marker colors.
    * Use otu_labels for the text values.
4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.
6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

## sources ##
* 01: https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
    * forEach to loop through an array
        * names.forEach(function(n)

* 02: 04-Stu_Plotly-Chart
    * to make a bar graoh
        * let bar = {x: , y: , text: , type: , orientation: }

* 03: https://plotly.com/python/builtin-colorscales/
    * colorscale colors
        * colorscale: "Armyrose"

* 04: https://stackoverflow.com/questions/47533929/javascript-plotly-how-to-customise-axis-labels-on-bar-plot
    * label x axis
        * xaxis: {title: "OTU ID"}

## data source ##
Belly Button Biodiversity dataset: https://robdunnlab.com/projects/belly-button-biodiversity/
