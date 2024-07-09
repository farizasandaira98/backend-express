const express = require('express');

const jwt = require('jsonwebtoken');

const verifToken = (req, res, next) => {
    //get token
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({ message: 'Unauthenticated' });
    //verif token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err) return res.status(401).json({message:'Invalid Token'});
        req.userId = decode.id;
        next();
    });
};

module.exports = verifToken;