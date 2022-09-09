'use strict';

/**
 * yes-or-no-question service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yes-or-no-question.yes-or-no-question');
