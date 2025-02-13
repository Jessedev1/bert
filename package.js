Package.describe({
  name: "jessedev:bert",
  version: "3.0.0",
  summary: "A client side, multi-style alerts system for Meteor.",
  git: "http://github.com/Jessedev1/bert",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom("3.0");

  api.use(
    ["ecmascript@0.16.10", "templating@1.4.4", "session", "jquery@3.0.2", "fourseven:scss@4.17.0-rc.0"],
    "client"
  );

  api.addFiles(
    [
      "templates/bert-alert.html",
      "templates/bert-alert.js",
      "templates/body.html",
      "stylesheets/colors.scss",
      "stylesheets/flexbox.scss",
      "stylesheets/bert.scss",
      "bert.js",
    ],
    "client"
  );

  api.export("Bert");
});

Package.onTest(function (api) {
  api.use(["tinytest", "session", "jquery"]);
  api.use("jessedev:bert");
  api.addFiles("tests/client.js", "client");
});
