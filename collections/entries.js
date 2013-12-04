Entries = new Meteor.Collection('entries');

Entries.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Entries.deny({
  update: function(userId, entry, fieldNames) {
    // may only edit the following three fields:
    var questionNames = Questions.find({},{questionTitle:1})
    return (_.without(fieldNames, _.values(questionNames)).length > 0);
  }
});

Meteor.methods({
  entry: function(entryAttributes) {
    var user = Meteor.user(),
      entryWithSameQID = Entries.findOne({qid: entryAttributes.qid});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to add new entries");

    // ensure the entry has a number
    if (!entryAttributes.qid)
      throw new Meteor.Error(422, 'Please fill in an event number');

    // check that there are no previous entries with the same last name
    if (entryAttributes.qid && entryWithSameQID) {
      throw new Meteor.Error(302, 
        'This event name has already been entered', 
        entryWithSameQID._id);
    }

    // pick out the whitelisted keys
    var entry = _.extend(entryAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime(),
      commentsCount: 0,
      upvoters: [],
      votes: 0
    });

    var entryId = Entries.insert(entry);

    return entryId;
  },

  upvote: function(entryId) {
    var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    
    Entries.update({
      _id: entryId, 
      upvoters: {$ne: user._id}
    }, {
      $addToSet: {upvoters: user._id},
      $inc: {votes: 1}
    });
  }
});