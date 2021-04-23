// Created with create-flayyer-app@1.15.2

const {config} = require('@flayyer/flayyer-types');
const dedent = require('dedent');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: 'default',

  // Optionals
  name: 'Default deck',
  description: dedent`
  This is the default deck created with create-flayyer-app to showcase how to start your own set of templates.
  `,
  marketplace: true,
  homepage: 'https://flayyer.com',
  keywords: ['flayyer', 'free', 'fade', 'contrast'],
  license: 'MIT',
  private: false,
  repository: 'https://github.com/flayyer/flayyer-marketplace-default',
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY', 'FREE']
});
