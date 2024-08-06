const {readFileSync} = require("node:fs");
module.exports = {
  async up(db, client) {
    const template1Body = readFileSync('./migrations/assets/template1.html', 'utf8');
    const template2Body = readFileSync('./migrations/assets/template2.html', 'utf8');

    return db.collection('templates').insertMany([
      {
        body: template1Body,
        title: 'template 1'
      },
      {
        body: template2Body,
        title: 'template 2'
      }
    ]);
  },

  async down(db, client) {
    return db.collection('templates').deleteMany({})
  }
};
