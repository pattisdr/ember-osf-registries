import { moduleFor, test } from 'ember-qunit';

moduleFor('route:provider/page-not-found', 'Unit | Route | provider/page not found', {
  // Specify the other units that are required for this test.
    needs: [
        'service:metrics',
        'service:theme'
    ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
