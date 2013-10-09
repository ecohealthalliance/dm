Template.questionEdit.helpers({
  entry: function() {
    return Questions.findOne(Session.get('currentQuestionId'));
  }
});

Template.questionEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentQuestionId = Session.get('currentQuestionId');

    var questionProperties = {
      questionName: $(event.target).find('[name=questionName]').val(),
      refQuestionName: $(event.target).find('[name=refQuestionName]').val(),
      disease: $(event.target).find('[name=disease]').val(),
      refDisease: $(event.target).find('[name=refDisease]').val(),
      zoonoticType: $(event.target).find('[name=zoonoticType]').val(),
      refZoonoticType: $(event.target).find('[name=refZoonoticType]').val()
    }

    Questions.update(currentQuestionId, {$set: questionProperties}, function(error) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
      } else {
        Meteor.Router.to('questionPage', currentQuestionId);
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentQuestionId = Session.get('currentQuestionId');
      Questions.remove(currentQuestionId);
      Meteor.Router.to('questionsList');
    }
  }
});