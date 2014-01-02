Template.questionSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var question = {
      questionNumber: $(event.target).find('[name=questionNumber]').val(),
      questionTitle: $(event.target).find('[name=questionTitle]').val(),
      question: $(event.target).find('[name=question]').val(),
      questionHelper: $(event.target).find('[name=questionHelper]').val(),
      questionType: $(event.target).find('[name=questionType]').val(),
      questionDrop: $(event.target).find('[name=questionDrop]').val()
    }
    Meteor.call('question', question, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        if (error.error === 302)
          Router.go('questionPage', {_id: error.details})
      } else {
        Router.go('questionPage', {_id: id});
      }
    });
  }
});

Template.questionSubmit.helpers({
  questions: function() {
    return Questions.find();
  }
});