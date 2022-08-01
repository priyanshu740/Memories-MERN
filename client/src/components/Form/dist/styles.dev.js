"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    },
    paper: {
      padding: theme.spacing(2)
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    fileInput: {
      width: '97%',
      margin: '10px 0'
    },
    buttonSubmit: {
      marginBottom: 10
    }
  };
});

exports["default"] = _default;