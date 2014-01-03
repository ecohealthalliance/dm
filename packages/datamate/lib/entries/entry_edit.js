Template.entryEdit.helpers({
  entry: function() {
    return Entries.findOne(this._id);
  },
  /*todo: combine questions and values from entry*/
  questions: function() {
    return Questions.find();
  },
  answer: function(questionTitle) {
    return Entries.findOne(this._id)[questionTitle]
  }
});

Template.entryEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentEntryId = this._id;

    var entryProperties = {
      qid: parseInt($(event.target).find('[name=qid]').val(),10),
      district: $(event.target).find('[name=district]').val(),
      village: $(event.target).find('[name=village]').val()
    }

    Entries.update(currentEntryId, {$set: entryProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('entryPage', {_id: currentEntryId});
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentEntryId = this._id;
      Entries.remove(currentEntryId);
      Router.go('entriesList');
    }
  }
});