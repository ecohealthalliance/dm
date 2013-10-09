newEntriesHandle = Meteor.subscribeWithPagination('newEntries', 3);
newQuestionsHandle = Meteor.subscribeWithPagination('newQuestions', 3);


/*entriesHandle = Meteor.subscribeWithPagination('newEntries', 3);*/
Meteor.autorun(function() {
  Meteor.subscribe('singleEntry', Session.get('currentEntryId'));
  Meteor.subscribe('comments', Session.get('currentEntryId'));
})

Meteor.subscribe('notifications');

Meteor.subscribe('questions');