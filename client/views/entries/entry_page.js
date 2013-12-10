Template.entryPage.helpers({
  currententry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  },
  /*todo: combine questions and values from entry*/
  questions: function() {
    return Questions.find();
  },
  answer: function(questionTitle) {
    return Entries.findOne(Session.get('currentEntryId'))[questionTitle]
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  },
});