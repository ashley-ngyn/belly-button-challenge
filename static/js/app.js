// json url 
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// use d3 to get json data
d3.json(url).then(function(data){
    console.log(data)
});

// on change to the DOM, call init()
// d3.selectAll("#selDataset").on("change", init);

// note: reiterate json for each function
// create a horizonal bar chart
function init(){

    // select the dropdown menu
    let dropDownMenu = d3.select("#selDataset");

    // establish json
    d3.json(url).then(function(data){
        let names = data.names

        //source 01 to loop through array
        names.forEach(function(n){
            dropDownMenu.append("option").text(n).property("value", n);
        });

        // initalize the first sample
        let firstSample = names[0];

        // check console.log
        // console.log(firstSample);
        barChart(firstSample);
        bubbleChart(firstSample);
        metaData(firstSample);
    });
};

init();


// create bar chart
function barChart(sampleID){

    // establish json
    d3.json(url).then(function(data){
        let samples = data.samples;

        // filter data
        let sampleArr = samples.filter(sample => sample.id == sampleID);
        let sampleData = sampleArr[0];

        // assign variables to values
        let otu_ids = sampleData.otu_ids
        let sample_values = sampleData.sample_values
        let otu_labels = sampleData.otu_labels

        // plot data
        // source 02 to make a bar graph
        // had to add the bar values into a list
        let bar = [{
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(otu_id => "OTU " + otu_id).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker:{
                color: "Darksalmon"
            }

        }];

        // layout
        let layout = {
            title: "Top 10 Bacteria Cultures Found"
        }
        
        // use plotly to plot
        Plotly.newPlot("bar", bar, layout)
    });
};

function bubbleChart(sampleID){

    // estbalish json
    d3.json(url).then(function(data){
        let samples = data.samples;

        // filter data
        let sampleArr = samples.filter(sample => sample.id == sampleID);
        let sampleData = sampleArr[0];

        // assign variables to values
        let otu_ids = sampleData.otu_ids
        let sample_values = sampleData.sample_values
        let otu_labels = sampleData.otu_labels

        // plot data
        let bubble = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode:"markers",
            marker:{
                size: sample_values,
                color: otu_ids,
                // source 03 for colorscale
                colorscale: "Tealrose"
            }
        }];

        // layout
        let layout = {
            // source 04 to label x axis
            xaxis: {title: "OTU ID"}
        };

        // use plotly to plot
        Plotly.newPlot("bubble", bubble, layout)
    });
};

// create metadata chart
function metaData(sampleID){
    
    // establish json
    d3.json(url).then(function(data){
        let metadata = data.metadata;

        // filter data
        let sampleArr = metadata.filter(sample => sample.id == sampleID);
        let sampleData = sampleArr[0];

        // select demographic info
        let demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        
        //loop through keys
        for (key in sampleData){
            demoInfo.append('h5').text(key + ": " + sampleData[key] + "\n");
        };

    });
};

// update plots on change
function optionChanged(sampleID){
    barChart(sampleID);
    bubbleChart(sampleID);
    metaData(sampleID);
};