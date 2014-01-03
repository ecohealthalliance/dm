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
  answer: function(questionTitle, entryId) {
    if (Entries.findOne(entryId)) {
    return Entries.findOne(entryId)[questionTitle]
    }
    else {return ""}
  },
  isSelected: function(questionTitle, value) {
    if (Entries.findOne(this._id)) {
      if (Entries.findOne(this._id)[questionTitle] === value) {
        return "selected";
      }
    }
    return "";
  },
  questions: function() {
    return Questions.find();
  },
});