Template.questionSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var question = {
      questionNumber: parseInt($(event.target).find('[name=questionNumber]').val(),10),
      questionTitle: $(event.target).find('[name=questionTitle]').val(),
      question: $(event.target).find('[name=question]').val(),
      questionType: $(event.target).find('[name=questionType]').val(),
      questionDrop: $(event.target).find('[name=questionDrop]').val()
    }
    Meteor.call('question', question, function(error, id) {
      if (error) {
        // display the error to the user
        Errors.throw(error.reason);
        // if the error is that the question already exists, take us there
        if (error.error === 302)
          Meteor.Router.to('questionPage', error.details)
      } else {
        Meteor.Router.to('questionPage', id);
      }
    });
  }
});