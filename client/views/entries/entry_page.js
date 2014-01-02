Template.entryPage.helpers({
  currentEntry: function() {
    return Entries.findOne(this._id);
  },
  /*todo: combine questions and values from entry*/
  questions: function() {
    return Questions.find();
  },
  answer: function(questionTitle) {
    return Entries.findOne(this._id)[questionTitle]
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  }
});