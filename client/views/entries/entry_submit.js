Template.entrySubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var entry = {
      /* change this into a loop on questions collection */
      qid: parseInt($(event.target).find('[name=qid]').val(),10),
      district: $(event.target).find('[name=district]').val(),
      village: $(event.target).find('[name=village]').val()
    }
    Meteor.call('entry', entry, function(error, id) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
        // if the error is that the entry already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('entryPage', error.details)
      } else {
        Meteor.Router.to('entryPage', id);
      }
    });
  }
});

Template.entrySubmit.helpers({
  questions: function() {
    return Questions.find();
  }
});