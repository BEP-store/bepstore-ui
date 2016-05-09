var minimatch = require('minimatch');

module.exports = function(deployTarget) {
  var AWS_REGION = 'eu-central-1';
  var AWS_BUCKET = 'bepstore.feedbackfruits.com';
  if (deployTarget !== 'production') {
    AWS_BUCKET = deployTarget + '-' + AWS_BUCKET;
  }

  var filePattern = '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,mp4,eot,ttf,woff,woff2,json}';

  return {
    pipeline: {
      activateOnDeploy: true,
    },
    'revision-data': {
      type: 'version-commit'
    },
    build: {
      environment: deployTarget
    },
    gzip: {
      filePattern: filePattern,
    },
    manifest: {
      filePattern: filePattern,
    },
    s3: {
      filePattern: filePattern,
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: process.env.AWS_BUCKET || AWS_BUCKET,
      region: process.env.AWS_REGION || AWS_REGION
    },
    's3-index': {
      allowOverwrite: true,
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: process.env.AWS_BUCKET || AWS_BUCKET,
      region: process.env.AWS_REGION || AWS_REGION
    }
  };
}
