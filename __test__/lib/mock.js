'use strict';

const User = require('../../model/user');
const Gallery = require('../../model/gallery');
const Photo = require('../../model/photo');
const faker = require('faker');
const mocks = module.exports = {};

mocks.user = {};
mocks.gallery = {};
mocks.photo = {};

mocks.photo.createOne = function () {
  return mocks.user.createOne()
    .then(userData => this.result = userData)
    .then(userData => {
      new Gallery({
        name: faker.internet.domainWord(),
        desc: faker.random.words(12),
        userId: userData.user._id,
      }).save()
        .then(data => {
          new Photo({
            image: `/Users/Gavin/codefellows/401/labs/18-aws-s3/lab-gavin/__test__/lib/testPhoto.JPG`,
            name: 'TestPhoto',
            desc: 'TestPhotoDescription',
            galleryId: data._id,

          });
        });
    })
    .then(gallery => {
      this.result.gallery = gallery;
      return this.result;
    });
};

mocks.user.createOne = function() {
  this.result = {};
  this.result.password = faker.internet.password();

  let user = new User({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  });
  return user.generatePasswordHash(this.result.password)
    .then(user => {
      this.result.user = user;
      return user.save();
    })
    .then(user => user.generateToken())
    .then(token => {
      this.result.token = token;
      return this.result;
    });
};

mocks.gallery.createOne = function() {
  return mocks.user.createOne()
    .then(userData => this.result = userData)
    .then(userData => {
      return new Gallery({
        name: faker.internet.domainWord(),
        desc: faker.random.words(12),
        userId: userData.user._id,
      }).save();
    })
    .then(gallery => {
      this.result.gallery = gallery;
      return this.result;
    });
};

mocks.photo.removeAll = function() {
  return Promise.all([
    Gallery.remove(),
  ]);
};

mocks.gallery.removeAll = function() {
  return Promise.all([
    Gallery.remove(),
  ]);
};

mocks.user.removeAll = function() {
  return Promise.all([
    User.remove(),
  ]);
};
