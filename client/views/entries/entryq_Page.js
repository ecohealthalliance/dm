Template.entryqPage.helpers({
  currentEntry: function() {
    return Entries.findOne(this._id);
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  }
});