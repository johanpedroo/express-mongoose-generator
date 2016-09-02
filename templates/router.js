const express = require('express');
const router = express.Router();
const {controllerName} = require('../controllers/{controllerName}.js');

/*
 * GET
 */
router.get('/', (req, res) => {
    {controllerName}.list(req, res);
});

/*
 * GET
 */
router.get('/:id', (req, res) => {
    {controllerName}.show(req, res);
});

/*
 * POST
 */
router.post('/', (req, res) => {
    {controllerName}.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', (req, res) => {
    {controllerName}.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', (req, res) => {
    {controllerName}.remove(req, res);
});

module.exports = router;
