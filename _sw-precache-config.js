const prefix = '_site';

module.exports = {
  staticFileGlobs: [
    '!_site/assets/**/**.*',
    prefix + '/**/**.html',
    prefix + '/js/*.js',
    prefix + '/css/*.css',
    prefix + '/images/**/**.*',
    prefix + '/favicon.ico',
    prefix + '/**/*.json',
    '!_site/service-worker.js',
  ],
  stripPrefix: prefix
}