Template.questionItem.helpers({
  ownQuestion: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
});

Template.questionItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});