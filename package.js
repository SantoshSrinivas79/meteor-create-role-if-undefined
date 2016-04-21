Package.describe({
  summary: "Create a role, checking first if the role name is already defined.",
  version: "0.1.1",
  name: "apinf:create-role-if-undefined",
  git: "https://github.com/apinf/meteor-create-role-if-undefined.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  // Dependencies
  api.use("alanning:roles@1.2.15", ['client','server']);
  // Files
  api.addFiles("server/methods/roles.js", ["server"]);
});
