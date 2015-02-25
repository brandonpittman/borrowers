import {formatDate} from 'borrowers/utils/date-helpers';
import { module, test } from 'qunit';

module('Utils: formatDate');

test('formats a date object', function() {
  var date = new Date("November 3, 2014");
  var result = formatDate(date, 'll');

  equal(result, 'Nov 3, 2014', 'returns a readable string');
});
