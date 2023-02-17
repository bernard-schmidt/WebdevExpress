// : means it is dynamic. dynamic routes should go to bottom
router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})

// is equal to 
router
  .route('/:id')
  .get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put('/:id', (req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete('/:id', (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })