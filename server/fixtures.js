// Fixture data 
if (Entries.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var nicoId = Meteor.users.insert({
    profile: { name: 'nicopresto' }
  });
  var nico = Meteor.users.findOne(nicoId);

  var carlaId = Meteor.users.insert({
    profile: { name: 'ctilchin' }
  });
  var carla = Meteor.users.findOne(carlaId);

  var alexaId = Meteor.users.insert({
    profile: { name: 'afrank' }
  });
  var alexa = Meteor.users.findOne(alexaId);

  var alexId = Meteor.users.insert({
    profile: { name: 'ademarsh' }
  });
  var alex = Meteor.users.findOne(alexId);

  var elizabethId = Meteor.users.insert({
    profile: { name: 'eeckel' }
  });
  var elizabeth = Meteor.users.findOne(elizabethId);

  var surveyOneId = Entries.insert({
    qid: '123',
    district: 'Rio',
    village: 'Solola',
    date: '2013',
    nameint: 'bob',
    namesup: 'billy bob',
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });


  Comments.insert({
    entryId: surveyOneId,
    userId: nico._id,
    author: nico.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Carla: are we sure this is the right survey'
  });

  Comments.insert({
    entryId: surveyOneId,
    userId: carla._id,
    author: carla.profile.name,
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
    userId: alexa._id,
    author: alexa.profile.name,
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
    userId: alex._id,
    author: alex.profile.name,
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
    userId: elizabeth._id,
    author: elizabeth.profile.name,
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
}

if (Questions.find().count() === 0) {
  var carlaId = Meteor.users.insert({
    profile: { name: 'ctilchin' }
  });
  
  var carla = Meteor.users.findOne(carlaId);

  var questionOneId = Questions.insert({
    questionNumber: '123',
    question: 'Who did you survey',
    questionType: 'text',
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  var questionTwoId = Questions.insert({
    questionNumber: '456',
    question: 'Where did they live',
    questionType: 'text',
    userId: carla._id,
    author: carla.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

}