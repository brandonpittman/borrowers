import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(model) {
      model.destroyRecord();
    }
  }
});
