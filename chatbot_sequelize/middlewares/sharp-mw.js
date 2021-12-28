const sharp = require('sharp');
const path = require('path');
const { ensureDir } = require('fs-extra');
const { relPath } = require('../modules/util');
let buffer = null;

module.exports = (x, y) => {
  return async (req, res, next) => {
    try {
      let arr = [];
      req.files.file1[0].rotate = req.body.rotate1;
      req.files.file2[0].rotate = req.body.rotate2;
      console.log(req.files);
      let { file1, file2 } = req.files;
      arr.push(file1[0], file2[0]);

      for (let i = 0; i < arr.length; i++) {
        let loc = path.join(arr[i].destination, './thumb');
        req.files.thumb = await sharp(arr[i].path)
          .resize(x, y)
          .jpeg({ mozjpeg: true })
          .rotate(Number(arr[i].rotate))
          .composite([
            {
              input: './별.png',
              gravity: 'center', // southeast
            },
          ])
          .toFile(path.join(loc, arr[i].filename));
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};
