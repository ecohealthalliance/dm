Template.questionPage.helpers({
  currentQuestion: function() {
    return Questions.findOne(this._id);
  }
});