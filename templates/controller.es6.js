import {upperName} from '../models/{name}.js';

/**
 * {controllerName}.js
 *
 * @description :: Server-side logic for managing {name}.
 */
class {controllerName} {
  /**
   * {controllerName}.list
   * Fetches a list of {name}
   */
  list = async (req, res) => {
    try {
      let results = await {upperName}.find(req.query.where, req.query.fields, req.query.sort);
      return res.status(200).json({
        success: true,
        results,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Failed to fetch {name}',
        error,
      })
    }
  };

  /**
   * {controllerName}.show()
   * Fetches one {name}
   */
  show = async (req, res) => {
    let id = req.params.id;
    try {
      let results = await {upperName}.findOne({ _id: id });
      return res.status(200).json({
        success: true,
        results,
      }); 
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Failed to fetch {name}',
        error,
      });
    }
  };

  /**
   * {controllerName}.create()
   * Creates a {name}
   */
  create = async (req, res) => {
    let {name} = new {upperName}(req.body);

    try {
      let results = await {name}.save;
      if (!results) {
        return res.status(404).json({
          success: false,
          message: '{name} not found',
        })
      }
      return res.status(201).json({
        success: true,
        results,
      }); 
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Failed to fetch {name}',
        error,
      });
    }
  };

  /**
   * {controllerName}.update()
   * Updates a {name}
   */
  update = async (req, res) => {
    let id = req.params.id;

    try {
      let {name} = await {upperName}.findOne({ _id: id });
      if (!{name}) {
        return res.status(401).json({
          success: false,
          message: '{name} not found',
        })
      }

      for (let attr in {name}) {
        {name}[attr] = req.body[attr] || {name}[attr]
      }

      let results = await {name}.save;
      return res.status(200).json({
        success: true,
        results,
      }); 

    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Failed to fetch {name}',
        error,
      });
    }
  };

  /**
   * {controllerName}.remove()
   */
  remove = async (req, res) => {
    let id = req.params.id

    try {
      let results = {upperName}.findByIdAndRemove(id);
      return res.status(204).json({
        success: true,
        results,
      }); 
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Failed to delete {name}',
        error,
      });
    }
  }
}

export default {controllerName};
