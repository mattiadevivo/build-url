import assert from 'assert';
import { buildUrl } from '../src/index';

describe('Test correct url build', function () {
  it('should return localhost:8080/api/ciao?a=1&b=2', function () {
    const fullUrl = 'localhost:8080/api/ciao?a=1&b=2';

    const result = buildUrl(fullUrl.split('/')[0], {
      path: 'api/ciao',
      queryParams: {
        a: 1,
        b: 2,
      },
    });
    assert.equal(result, fullUrl);
  });
});
