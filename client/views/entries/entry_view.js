Template.entryView.helpers({
  /* These helpers determine type for input */
  isText: function() {
    return this.questionType == 'text';
  },
  isTextArea: function() {
    return this.questionType == 'textarea';
  },
  isDrop: function() {
    return this.questionType == 'dropdown';
  },
  answer: function(questionTitle) {
    if (Entries.findOne(Session.get('currentEntryId'))) {
    return Entries.findOne(Session.get('currentEntryId'))[questionTitle]
    }
    else {return ""}
  },
  isSelected: function(questionTitle, value) {
    if (Entries.findOne(Session.get('currentEntryId'))) {
      if (Entries.findOne(Session.get('currentEntryId'))[questionTitle] === value) {
        return "selected";
      }
    }
    return "";
  }
});