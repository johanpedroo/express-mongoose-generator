const express = require('express')
const acl = require('../middlewares').acl
const router = express.Router()
const {controllerName} = require('../controllers/{controllerName}.js')

/*
 * MIDDLEWARE
 */
router.use((req, res, next) => {
  let query = {}

  if (req.query.where) {
    query.where = JSON.parse(req.query.where)
  }
  if (req.query.fields) {
    query.fields = JSON.parse(req.query.fields)
  }
  if (req.query.sort) {
    query.sort = {sort: JSON.parse(req.query.sort)}
  } else {
    query.sort = {}
  }
  if (req.query.limit) {
    query.sort.limit = parseInt(req.query.limit, 10)
  }
  if (req.query.skip) {
    query.sort.skip = parseInt(req.query.skip, 10)
  }
  req.query = query

  next()
})

/*
 * GET
 */
router.get('/', acl.checkPermissions('{permissionsName}:list'), (req, res) => {
  {controllerName}.list(req, res)
})

/*
 * GET
 */
router.get('/:id', acl.checkPermissions('{permissionsName}:item'), (req, res) => {
  {controllerName}.show(req, res)
})

/*
 * POST
 */
router.post('/', acl.checkPermissions('{permissionsName}:create'), (req, res) => {
  {controllerName}.create(req, res)
})

/*
 * PUT
 */
router.put('/:id', acl.checkPermissions('{permissionsName}:update'), (req, res) => {
  {controllerName}.update(req, res)
})

/*
 * DELETE
 */
router.delete('/:id', acl.checkPermissions('{permissionsName}:delete'), (req, res) => {
  {controllerName}.remove(req, res)
})

module.exports = router
