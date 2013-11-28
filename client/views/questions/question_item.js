Template.questionItem.helpers({
  ownQuestion: function() {
    return this.userId == Meteor.userId();
  }
});

Template.questionItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});