import { Router } from 'express';
import {controllerName} from '../controllers/{controllerName}.js';

const router = new Router();
const controller = new {controllerName}();

/*
 * MIDDLEWARE
 */
router.use((req, res, next) => {
  let query = {};

  if (req.query.where) {
    query.where = JSON.parse(req.query.where);
  }
  if (req.query.fields) {
    query.fields = JSON.parse(req.query.fields);
  }
  if (req.query.sort) {
    query.sort = {sort: JSON.parse(req.query.sort)};
  } else {
    query.sort = {};
  }
  if (req.query.limit) {
    query.sort.limit = parseInt(req.query.limit, 10);
  }
  if (req.query.skip) {
    query.sort.skip = parseInt(req.query.skip, 10);
  }
  req.query = query;

  next();
});

/*
 * GET
 */
router.get('/', (req, res) => {
  controller.list(req, res);
});

/*
 * GET
 */
router.get('/:id', (req, res) => {
  controller.show(req, res);
});

/*
 * POST
 */
router.post('/', (req, res) => {
  controller.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', (req, res) => {
  controller.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', (req, res) => {
  controller.remove(req, res);
});

export default router;