const customer = require('./nori_images');
const customer = require('./nori_members');
const customer = require('./nori_notices');

//api 파일 생성할 때 마다 index에도 함께 추가
let routers = {
    nori_images: nori_images,
    nori_members: nori_members,
    nori_notices: nori_notices
}

module.exports = routers;