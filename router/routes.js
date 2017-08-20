const express = require('express'),
  router = express.Router(),
  guitarCollection = require('../collection');

  router.get('/', (a, b) => {
  guitarCollection.find().then(c =>
    b.render('collection', {
    guitars: c
  }))
}),

  router.get('/form', (a, b) => {
  a.query.id ? guitarCollection.findById(a.query.id)
  .then(c => b.render('form', {
    collection: c
  })) : b.render('form')
}),

  router.post('/save', (a, b) => {
  a.body.id ? guitarCollection.findByIdAndUpdate(a.body.id, a.body, {
    upsert: !0
  })
  .then(() =>
  b.redirect('/')) : new guitarCollection(a.body).save().
  then(() =>
   b.redirect('/')).catch(c => {
    b.render('form', {
      collection: a.body
    })
  })
}),

  router.get('/remove', (a, b) => {
  guitarCollection.findById(a.query.id).remove()
  .then(() =>
  b.redirect('/'))
}),

module.exports = router;
