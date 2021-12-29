const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
aws.config.loadFromPath(__dirname + '/../config/s3.json');

const s3 = new aws.S3();
const upload = multer(
  {
    storage: multerS3({
      s3: s3,
      bucket: 'dabanbus-test-bucket',
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, String(Date.now()), +' - ' + file.originalname);
      },
    }),
  },
  'NONE'
);

module.exports = upload;
