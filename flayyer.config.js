// Created with create-flayyer-app@1.15.2

const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: 'default',

  // Optionals
  name: 'Default deck',
  description:
    'This is the default deck created with create-flayyer-app to showcase how to start your own set of templates.'
});
