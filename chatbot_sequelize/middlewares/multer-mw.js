const path = require('path');
const multer = require('multer');
const fs = require('fs');

// 폴더 만들기
fs.readdir('uploads', (err) => {
  if (err) {
    fs.mkdirSync('uploads');
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // 파일 업로드 경로
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase(); //.jpg
    cb(null, file.fieldname + '-' + Date.now() + ext); //파일 이름 설정
  },
});

module.exports = multer({ storage });
