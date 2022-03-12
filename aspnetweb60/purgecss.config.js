/* global module */
/* eslint no-undef: "error" */
module.exports = {
    content: [`Views/**/*.cshtml`],
    css: ['wwwroot/app/index.css'],
    // Add css classes used from javascript to ignore purgecss :
    safelist: [
      'carousel-item-start', 
      'carousel-item-end', 
      'carousel-item-next', 
      'carousel-item-prev', 
      'collapsing',
      'show',
      'fade',
      'collapse',
      'collapsed',
      'collapse-horizontal',
      'dropdown-menu',
      'modal-open',
      'fade',
      'show',
      'modal-static',
    ],
    output: 'wwwroot/app/index.css',
    keyframes: true,
    rejected: true,
    variables: true
  }