import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date'),
  state: DS.attr('string', {
    defaultValue: 'borrowed'
  }),
  friend: DS.belongsTo('friend')
});
