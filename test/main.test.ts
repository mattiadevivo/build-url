import assert from 'assert';
import { buildUrl } from '../src/index';

describe('Test correct url build', function () {
  it('should return localhost:8080/api/hello?a=1&b=2 (path param not starting with "/")', function () {
    const fullUrl = 'localhost:8080/api/hello?a=1&b=2';

    const result = buildUrl(fullUrl.split('/')[0], {
      path: 'api/hello',
      queryParams: {
        a: 1,
        b: 2,
      },
    });
    assert.equal(result, fullUrl);
  });
  it('should return localhost:8080/api/hello?a=1&b=2 (path param starting with "/")', function () {
    const fullUrl = 'localhost:8080/api/hello?a=1&b=2';

    const result = buildUrl(fullUrl.split('/')[0], {
      path: '/api/hello',
      queryParams: {
        a: 1,
        b: 2,
      },
    });
    assert.equal(result, fullUrl);
  });
  it('should remove double //', function () {
    const basePath = 'http://localhost:8080';
    const path = '/api/hello';

    const result = buildUrl(basePath, {
      path: path,
      queryParams: {
        a: 1,
        b: 2,
      },
    });
    assert.equal(result, `${basePath}${path}?a=1&b=2`);
  });
});
