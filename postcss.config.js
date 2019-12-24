/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const production = process.env.NODE_ENV === 'production';

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.vue',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...production ? [purgecss] : [],
    ],
};
