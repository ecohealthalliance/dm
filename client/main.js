
Meteor.autorun(function() {
  Meteor.subscribe('singleEntry', Session.get('currentEntryId'));
  Meteor.subscribe('comments', Session.get('currentEntryId'));
})

Meteor.subscribe('notifications');
Meteor.subscribe('questions');
Meteor.subscribe('entries');

numQuestionsHandle = Meteor.subscribeWithPagination('questions', {questionNumber: 1}, 3);
newQuestionsHandle = Meteor.subscribeWithPagination('questions', {submitted: -1}, 3);

numEntriesHandle = Meteor.subscribeWithPagination('entries', {qid: -1}, 3);
newEntriesHandle = Meteor.subscribeWithPagination('newEntries', {submitted: -1}, 3);