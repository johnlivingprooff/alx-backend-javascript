// api.test.js
const { expect } = require('chai');
const request = require('supertest');
const app = require('./api');

describe('API tests', () => {
  describe('GET /', () => {
    it('responds with status 200', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with "Welcome to the payment system"', (done) => {
      request(app)
        .get('/')
        .expect('Welcome to the payment system')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should not return undefined', (done) => {
      request(app)
        .get('/')
        .expect('Welcome to the payment system')
        .end((err, res) => {
          expect(res.body).to.not.be.undefined;
          done();
        });
    });
  });
});
