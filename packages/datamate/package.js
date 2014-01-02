Package.describe({
	summary: "A package to allow users to design questions for data entry and collect data."
});

Package.on_use(function (api) {
	api.use(['templating'], 'client');

	api.add_files("lib/test.js", "client");
});