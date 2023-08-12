const express = require('express');
const {
  get,
  getById,
  Post,
  Put,
  Delete,
} = require('../controllers/ourclient-controller');
const AuthernticateRoute = require('./AuthernicationMiddleWare');

const router = express.Router();

router.get('/',AuthernticateRoute(["Admin","AdmissionOfficr","AmissonDirector","user"]), get);
router.get('/:id',AuthernticateRoute(["Admin","CustomerCare"]), getById);
router.post('/',AuthernticateRoute(["Admin","AdmissionDirector","AdmissionOfficer"]), Post);
router.put('/:id',AuthernticateRoute(["Admin","AdmissionDirector"]), Put);
router.delete('/:id',Delete)

module.exports = router;
