Template.entryqItem.helpers({
  /* These helpers determine type for input */
  isText: function() {
    return this.questionType == 'text';
  },
  isTextArea: function() {
    return this.questionType == 'textarea';
  },
  isDrop: function() {
    return this.questionType == 'dropdown';
  }
});

