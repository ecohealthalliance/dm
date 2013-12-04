Questions = new Meteor.Collection('questions');

Questions.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Entries.deny({
  update: function(userId, question, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'questionNumber', 'questionTitle', 'question', 'questionHelper', 'questionType', 'questionDrop').length > 0);
  }
});

Meteor.methods({
  question: function(questionAttributes) {
    var user = Meteor.user(),
      questionWithSameQuestionNumber = Questions.findOne({questionNumber: questionAttributes.questionNumber});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add new entries");

    // ensure the question has a title
    if (!questionAttributes.questionNumber)
      throw new Meteor.Error(422, 'Please fill in a question number');

    // check that there are no previous entries with the same Number
    if (questionAttributes.questionNumber && questionWithSameQuestionNumber) {
      throw new Meteor.Error(302, 
        'This question number has already been entered', 
        questionWithSameQuestionNumber._id);
    }

    // pick out the whitelisted keys
    var question = _.extend(_.pick(questionAttributes, 'questionNumber', 'questionTitle', 'question', 'questionHelper', 'questionType', 'questionDrop'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      commentsCount: 0
    });

    var questionId = Questions.insert(question);

    return questionId;
  }
});