Template.questionEdit.helpers({
  question: function() {
    return Questions.findOne(Session.get('currentQuestionId'));
  }
});

Template.questionEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentQuestionId = Session.get('currentQuestionId');

    var questionProperties = {
      questionNumber: parseInt($(event.target).find('[name=questionNumber]').val(),10),
      questionTitle: $(event.target).find('[name=questionTitle]').val(),
      question: $(event.target).find('[name=question]').val(),
      questionHelper: $(event.target).find('[name=questionHelper]').val(),
      questionType: $(event.target).find('[name=questionType]').val(),
      questionDrop: $(event.target).find('[name=questionDrop]').val()
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

  'click .delete': function(event) {
    event.preventDefault();

    if (confirm("Delete this entry?")) {
      var currentQuestionId = Session.get('currentQuestionId');
      Questions.remove(currentQuestionId);
      Meteor.Router.to('questionsList');
    }
  }
});

Template.questionSubmit.helpers({
  questions: function() {
    return Questions.find();
  }
});