var path = require("path");
var fs = require("fs");


// render(response, "home");
module.exports = function(response, templateName, context) {
    var templatePath = path.join(__dirname, "templates", templateName + ".html");
    var content = fs.readFileSync(templatePath, {encoding: "utf8"});

    var baseTemplatePath = path.join(__dirname, "templates", "base.html");
    var baseContent = fs.readFileSync(baseTemplatePath, {encoding:"utf8"});

    var headerTemplatePath = path.join(__dirname, "templates", "partials", "header.html");
    var headerContent = fs.readFileSync(headerTemplatePath, {encoding: "utf8"});

    var footerTemplatePath = path.join(__dirname, "templates", "partials", "footer.html");
    var footerContent = fs.readFileSync(footerTemplatePath, {encoding: "utf8"});
    
    content = baseContent.replace("{{ content }}", content).replace("{{ header }}", headerContent).replace("{{ footer }}", footerContent);

    // {{ deposit }} -> 5000
    for (var key in context) {
        content = content.replace("{{ " + key + " }}", context[key]);
    }

    response.write(content);
    response.end();
};
