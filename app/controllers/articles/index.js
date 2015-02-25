import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['showReturned'],
  possibleStates: ["borrowed", "returned"],
  showReturned: true,
  actions: {
    setShowReturned: function() {
      this.toggleProperty('showReturned');
      console.log("Toggled showReturned");
    }
  },
  filteredArticles: function() {
    var shouldShowReturned = this.get('showReturned');
    var articles = this.get('model');

    if (shouldShowReturned) {
      return articles;
    } else {
      return articles.filterBy('state', 'borrowed');
    }
  }.property('showReturned', 'model')
});
