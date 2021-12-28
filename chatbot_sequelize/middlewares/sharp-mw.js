const sharp = require('sharp');
const path = require('path');
const { ensureDir } = require('fs-extra');
const { relPath } = require('../modules/util');
let buffer = null;

module.exports = (x, y) => {
  return async (req, res, next) => {
    try {
      let loc = path.join(req.files.file[0].destination, './thumb');
      req.files.thumb = await sharp(req.files.file[0].path)
        .resize(x, y)
        .jpeg({ mozjpeg: true })
        .rotate(Number(req.body.rotate))
        .composite([
          {
            input: './별.png',
            gravity: 'center', // southeast
          },
        ])
        .toFile(path.join(loc, req.files.file[0].filename));
      // res.json(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
};
