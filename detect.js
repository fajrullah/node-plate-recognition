const openalpr = require("node-openalpr"),
      path = "motorin.jpeg";

openalpr.Start(null, null, null, true, 'eu');
openalpr.GetVersion();

openalpr.IdentifyLicense(path, function(error, output) {
  console.log("error", error);
  console.log("output", output);
});
