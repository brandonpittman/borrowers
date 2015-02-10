import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasNotes:       Ember.computed.notEmpty('model.notes'),
  isValid:        Ember.computed.and(
    'hasDescription',
    'hasNotes'
),
    actions: {
      save: function() {
        if (this.get('isValid')) {
          // var _this = this; this.get('model').save().then(function(friend) {
          //   _this.transitionToRoute('friends.show', friend);
          // });
          return true;
        } else {
          this.set('errorMessage', 'You have to fill all the fields');
        } },
        cancel: function() { return true;
        } }
});
