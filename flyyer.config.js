// Created with create-flyyer-app@2.0.1

const {config} = require('@flyyer/types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLYYER_KEY,
  deck: 'default',

  // Optionals
  name: 'Default',
  description: 'Default template created with create-flyyer-app',
  homepage: 'https://www.flyyer.io',
  license: 'MIT',
  keywords: ['flyyer', 'free'],
  repository: 'https://github.com/useflyyer/flyyer-marketplace-default',
  private: false, // Set to false to deploy publicly to https://flyyer.io/community
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // Declare supported sizes
});
