'use strict';

/**
 * new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new.new');
