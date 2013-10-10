// Fixture data 
if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  var lizzieId = Meteor.users.insert({
    profile: { name: 'lloh' }
  });
  var lizzie = Meteor.users.findOne(lizzieId);

  var carlosId = Meteor.users.insert({
    profile: { name: 'czambrana' }
  });
  var carlos = Meteor.users.findOne(carlosId);

  var sarahId = Meteor.users.insert({
    profile: { name: 'selwood' }
  });
  var sarah = Meteor.users.findOne(sarahId);

  var krisId = Meteor.users.insert({
    profile: { name: 'kmurray' }
  });
  var kris = Meteor.users.findOne(krisId);

  var surveyOneId = Entries.insert({
    qid: '123',
    district: 'Rio',
    village: 'Solola',
    date: '2013',
    nameint: 'bob',
    namesup: 'billy bob',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });


  Comments.insert({
    entryId: surveyOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Lizzie: are we sure this is the right survey'
  });

  Comments.insert({
    entryId: surveyOneId,
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Nico: yes I checked the paper copy'
  });

  Entries.insert({
    qid: '456',
    district: 'Solola',
    village: 'Rio',
    date: '2012',
    nameint: 'bob',
    namesup: 'billy bob',
    userId: carlos._id,
    author: carlos.profile.name,
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Entries.insert({
    qid: '123',
    district: 'Riola',
    village: 'Sio',
    date: '2013',
    nameint: 'bob',
    namesup: 'billy bob',
    userId: sarah._id,
    author: sarah.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Entries.insert({
    eventName: 'Ebola virus (Sudan, 1976)',
    refEventName: 'Jones et al. SI',
    disease: 'Haemorrhagic fever',
    refDisease: '8',
    zoonoticType: 'zoonotic-unkown',
    refZoonoticType: '738',
    userId: kris._id,
    author: kris.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
}

if (Questions.find().count() === 0) {
  var lizzieId = Meteor.users.insert({
    profile: { name: 'lloh' }
  });
  
  var lizzie = Meteor.users.findOne(lizzieId);

  var questionOneId = Questions.insert({
    questionNumber: '8',
    questionTitle: 'Sample type',
    question: 'Sample type',
    questionType: 'textarea',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionTwoId = Questions.insert({
    questionNumber: '9',
    questionTitle: 'Household number',
    question: 'Household number',
    questionType: 'text',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  var questionTwoId = Questions.insert({
    questionNumber: '10',
    questionTitle: 'Do people live in household',
    question: 'Do people from study group live in household?',
    questionType: 'dropdown',
    questionDrop: '{"yes":"Yes", "no":"No"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

    var questionTwoId = Questions.insert({
    questionNumber: '11',
    questionTitle: 'How many people in household',
    question: 'How many people from study group live in household?',
    questionType: 'text',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

}