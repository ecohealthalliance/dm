Package.describe({
	summary: "A package to allow users to design questions for data entry and collect data."
});

Package.on_use(function (api) {
	api.use(['templating'], 'client');
	api.add_files(["lib/test.html","lib/test.js"], "client");

	// question files
	api.add_files([
		"lib/questions/question_dropdowns.html", 
		"lib/questions/question_edit.html",
		"lib/questions/question_edit.js",
		"lib/questions/question_fields.html",
		"lib/questions/question_item.html",
		"lib/questions/question_item.js",
		"lib/questions/question_page_old.html",
		"lib/questions/question_page_old.js",
		"lib/questions/question_page.html",
		"lib/questions/question_page.js",
		"lib/questions/question_submit.html",
		"lib/questions/question_submit.js",
		"lib/questions/question_view.html",
		"lib/questions/question_view.js",
		"lib/questions/questions_list.html",
		"lib/questions/questions_list.js"
	], "client");

	// comment files
	api.add_files([
		"lib/comments/comment.html",
		"lib/comments/comment.js",
		"lib/comments/comment_submit.html",
		"lib/comments/comment_submit.js"
	], "client");

	// entries files
	api.add_files([
		"lib/entries/entries_list.html",
		"lib/entries/entries_list.js",
		"lib/entries/entry_edit.html",
		"lib/entries/entry_edit.js",
		"lib/entries/entry_fields.html",
		"lib/entries/entry_item.html",
		"lib/entries/entry_item.js",
		"lib/entries/entry_page_old.html",
		"lib/entries/entry_page_old.js",
		"lib/entries/entry_page.html",
		"lib/entries/entry_page.js",
		"lib/entries/entry_submit.html",
		"lib/entries/entry_submit.js",
		"lib/entries/entry_view.html",
		"lib/entries/entry_view.js",
		"lib/entries/entryq_item.html",
		"lib/entries/entryq_item.js",
		"lib/entries/entryq_page.html",
		"lib/entries/entryq_page.js"
	], "client");

	// notifictions files
	api.add_files([
		"lib/notifications/notifications.html",
		"lib/notifications/notifications.js"
	], "client");

	// collections files
	/*
	api.add_files([
		"collections/comments.js",
		"collections/entries.js",
		"collections/notifications.js",
		"collections/questions.js"
	], "client");
	*/
});
