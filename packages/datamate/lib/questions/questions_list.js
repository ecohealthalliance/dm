Template.questionsList.helpers({
  questionsWithRank: function() {
    this.questions.rewind();
    return this.questions.map(function(question, index, cursor) {
      question._rank = index;
      return question;
    });
  },
  hasMoreQuestions: function(){
    this.questions.rewind();
    return Router.current().limit() == this.questions.fetch().length;
  }

});