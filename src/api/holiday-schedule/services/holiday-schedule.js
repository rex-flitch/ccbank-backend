'use strict';

/**
 * holiday-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::holiday-schedule.holiday-schedule');
