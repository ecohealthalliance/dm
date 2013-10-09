Template.entryItem.helpers({
  ownEntry: function() {
    return this.userId == Meteor.userId();
  }
});

Template.entryItem.events({
  'click .upvoteable': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});