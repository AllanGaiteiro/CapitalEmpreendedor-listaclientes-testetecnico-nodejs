const express = require('express');

StrToBol = (val) => {
    let valorfinal = (val == "true" || val == "Sim" || val == "sim" || val == 'on' || val == 'On' || val == 1) ? true : false;
    return valorfinal
}

module.exports = StrToBol;