const {upperName} = require('../models/{modelName}.js')

/**
 * {controllerName}.js
 *
 * @description :: Server-side logic for managing {name}.
 */
module.exports = {

  /**
   * {controllerName}.list()
   */
  list: (req, res) => {
    {upperName}.find(req.query.where, req.query.fields, req.query.sort, (err, {name}) => {
      if (err) {
        return res.status(500).json({
          message: 'Erro ao obter {name}.',
          error: err
        })
      }
      return res.json({name})
    })
  },

  /**
   * {controllerName}.show()
   */
  show: (req, res) => {
    let id = req.params.id
    {upperName}.findOne({_id: id}, (err, {name}) => {
      if (err) {
        return res.status(500).json({
          message: 'Erro ao obter {name} específico.',
          error: err
        })
      }
      if (!{name}) {
        return res.status(404).json({
          message: '{name} não encontrado'
        })
      }
      return res.json({name})
    })
  },

  /**
   * {controllerName}.create()
   */
  create: (req, res) => {
    let {name} = new {upperName}(req.body)

    {name}.save((err, {name}) => {
      if (err) {
        return res.status(500).json({
          message: 'Erro ao criar {name}',
          error: err
        })
      }
      return res.status(201).json({name})
    })
  },

  /**
   * {controllerName}.update()
   */
  update: (req, res) => {
    let id = req.params.id
    {upperName}.findOne({_id: id}, (err, {name}) => {
      if (err) {
        return res.status(500).json({
          message: 'Erro ao obter {name}',
          error: err
        })
      }
      if (!{name}) {
        return res.status(404).json({
          message: '{name} não encontrado'
        })
      }

      for (let attr in {name}) {
        {name}[attr] = req.body[attr] || {name}[attr]
      }
      
      {name}.save((err, {name}) => {
        if (err) {
          return res.status(500).json({
            message: 'Erro ao atualizar {name}.',
            error: err
          })
        }

        return res.json({name})
      })
    })
  },

  /**
   * {controllerName}.remove()
   */
  remove: (req, res) => {
    let id = req.params.id
    {upperName}.findByIdAndRemove(id, (err, {name}) => {
      if (err) {
        return res.status(500).json({
          message: 'Erro ao deletar {name}.',
          error: err
        })
      }
      return res.status(204).json()
    })
  }
}
