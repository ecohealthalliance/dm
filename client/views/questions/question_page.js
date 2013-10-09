Template.questionPage.helpers({
  currentQuestion: function() {
    return Questions.findOne(Session.get('currentQuestionId'));
  },
  comments: function() {
    return Comments.find({questionId: this._id});
  }
});