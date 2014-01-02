Template.questionView.helpers({
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
    if (Entries.findOne(this._id)) {
    return Entries.findOne(this._id)[questionTitle]
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
  }
});