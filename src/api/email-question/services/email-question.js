'use strict';

/**
 * email-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-question.email-question');
