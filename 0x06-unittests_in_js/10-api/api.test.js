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
  });

  describe('GET /available_payments', () => {
    it('responds with status 200', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with the correct JSON structure', (done) => {
      request(app)
        .get('/available_payments')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('responds with status 200 and correct message', (done) => {
      const userName = 'JohnDoe';
      request(app)
        .post('/login')
        .send({ userName })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal(`Welcome ${userName}`);
          done();
        });
    });
  });

  describe('GET /cart/:id', () => {
    it('responds with status 200 when :id is a number', (done) => {
      request(app)
        .get('/cart/123')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with "Payment methods for cart :id" when :id is a number', (done) => {
      request(app)
        .get('/cart/123')
        .expect('Payment methods for cart 123')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with status 404 when :id is NOT a number', (done) => {
      request(app)
        .get('/cart/abc')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('responds with "404 Not Found" when :id is NOT a number', (done) => {
      request(app)
        .get('/cart/abc')
        .expect('404 Not Found')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
