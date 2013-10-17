Template.newQuestions.helpers({
  options: function() {
    return {
      sort: {submitted: -1},
      handle: newQuestionsHandle
    }
  }
});

Template.questionsList.helpers({
  questions: function() {
    return Questions.find({}, {limit: this.handle.limit()});
  },

  questionsReady: function() {
    return this.handle.ready();
  },

  allQuestionsLoaded: function() {
    return this.handle.ready() &&  
      Questions.find().count() < this.handle.loaded();
  }

});

Template.questionsList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    this.handle.loadNextPage();
  }
});