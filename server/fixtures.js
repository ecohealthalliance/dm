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
    qid: 123,
    district: 'solola',
    village: 'jucanya',
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
    qid: 456,
    district: 'solola',
    village: 'jucanya',
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
    qid: 789,
    district: 'solola',
    village: 'jucanya',
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
    qid: 999,
    district: 'solola',
    village: 'jucanya',
    date: '2013',
    nameint: 'bob',
    namesup: 'billy bob',
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
    questionNumber: 1,
    questionTitle: 'qid',
    question: 'Questionnaire IDentification (QID) number',
    questionHelper: 'Unique number for questionnaire',
    questionType: 'number',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

    var questionOneId = Questions.insert({
    questionNumber: 2,
    questionTitle: 'district',
    question: 'District name',
    questionHelper: 'Name of district',
    questionType: 'dropdown',
    questionDrop: '{"solola":"Solola", "peten":"Peten"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionOneId = Questions.insert({
    questionNumber: 3,
    questionTitle: 'village',
    question: 'Village name',
    questionHelper: 'Name of village',
    questionType: 'dropdown',
    questionDrop: '{"jucanya":"Jucanya", "quetzaltenango":"Quetzaltenango"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

/* convert this to datetime */
  var questionOneId = Questions.insert({
    questionNumber: 4,
    questionTitle: 'date',
    question: 'Date of survey',
    questionHelper: 'ISO date (yymmdd)',
    questionType: 'text',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionOneId = Questions.insert({
    questionNumber: 5,
    questionTitle: 'interviewer',
    question: 'What was interviewer name',
    questionHelper: 'Name of interviewer',
    questionType: 'dropdown',
    questionDrop: '{"bill":"Bill", "jane":"Jane"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionOneId = Questions.insert({
    questionNumber: 6,
    questionTitle: 'supervisor',
    question: 'What was supervisor name',
    questionHelper: 'Supervisor name',
    questionType: 'dropdown',
    questionDrop: '{"bob":"Bob", "sue":"Sue"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionOneId = Questions.insert({
    questionNumber: 8,
    questionTitle: 'sampleType',
    question: 'Sample type',
    questionHelper: 'Name of sample',
    questionType: 'textarea',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 9 * 3600 * 1000,
    commentsCount: 0
  });

  var questionTwoId = Questions.insert({
    questionNumber: 9,
    questionTitle: 'householdNumber',
    question: 'Household number',
    questionHelper: 'Number for household',
    questionType: 'text',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

  var questionTwoId = Questions.insert({
    questionNumber: 10,
    questionTitle: 'peopleInHousehold',
    question: 'Do people from study group live in household?',
    questionType: 'dropdown',
    questionDrop: '{"yes":"Yes", "no":"No"}',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

    var questionTwoId = Questions.insert({
    questionNumber: 11,
    questionTitle: 'numberInHousehold',
    question: 'How many people from study group live in household?',
    questionHelper: 'Number of people in household',
    questionType: 'text',
    userId: lizzie._id,
    author: lizzie.profile.name,
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0
  });

}