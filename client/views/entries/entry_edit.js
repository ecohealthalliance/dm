Template.entryEdit.helpers({
  entry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  },
  /*todo: combine questions and values from entry*/
  questions: function() {
    return Questions.find();
  },
  answer: function(questionTitle) {
    return Entries.findOne(Session.get('currentEntryId'))[questionTitle]
  }
});

Template.entryEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentEntryId = Session.get('currentEntryId');

    var entryProperties = {
      qid: parseInt($(event.target).find('[name=qid]').val(),10),
      district: $(event.target).find('[name=district]').val(),
      village: $(event.target).find('[name=village]').val()
    }

    Entries.update(currentEntryId, {$set: entryProperties}, function(error) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
      } else {
        Meteor.Router.to('entryPage', currentEntryId);
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentEntryId = Session.get('currentEntryId');
      Entries.remove(currentEntryId);
      Meteor.Router.to('entriesList');
    }
  }
});