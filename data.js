var d3 = require("d3"),
    fs = require("fs");

fs.readFile("majorIncidents.json", "utf8", function(error, data) {
  data = JSON.parse(data)
    .features;
  fire = data.filter(function(feature) { return feature.properties.title.includes("North Black Range"); })[0];
  fire.properties = {
    name: "North Black Range fire",
    updated: fire.properties.description.slice(-17)
  };
  console.log(fire.properties);
  fire = {
    type: "FeatureCollection",
    features: [fire]
  };

  fs.writeFile("fire.geojson", JSON.stringify(fire), function(error) {
    console.log("fire.geojson written");
  });
});
