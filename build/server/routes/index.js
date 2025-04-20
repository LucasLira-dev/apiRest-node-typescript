"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Eai!');
});
router.post('/test', (req, res) => {
    console.log(req.body);
    res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
exports.default = router;
