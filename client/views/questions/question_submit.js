Template.questionSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var question = {
      questionName: $(event.target).find('[name=questionName]').val(),
      refQuestionName: $(event.target).find('[name=refQuestionName]').val(),
      disease: $(event.target).find('[name=disease]').val(),
      refDisease: $(event.target).find('[name=refDisease]').val(),
      zoonoticType: $(event.target).find('[name=zoonoticType]').val(),
      refZoonoticType: $(event.target).find('[name=refZoonoticType]').val()
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