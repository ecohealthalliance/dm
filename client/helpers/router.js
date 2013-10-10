Meteor.Router.add({
  '/': {to: 'newEntries', as: 'home'},
  '/new': 'newEntries',
  
  '/entries/:_id': {
    to: 'entryPage', 
    and: function(id) { Session.set('currentEntryId', id); }
  },
  
  '/entries/:_id/edit': {
    to: 'entryEdit', 
    and: function(id) { Session.set('currentEntryId', id); }    
  },
  
  '/questions': {to: 'newQuestions', as: 'home'},
  '/newq': 'newQuestions', 

  '/questions/:_id': {
    to: 'questionPage', 
    and: function(id) { Session.set('currentQuestionId', id); }
  }, 

  '/questions/:_id/edit': {
    to: 'questionEdit', 
    and: function(id) { Session.set('currentQuestionId', id); }    
  },

  '/submit': 'entrySubmit',

  '/submitq': 'questionSubmit',

  '/about': 'aboutPage'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'clearErrors': function(page) {
    Errors.clearSeen();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'entrySubmit'});
Meteor.Router.filter('clearErrors');
