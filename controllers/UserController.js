const express = require('express');

const prisma = require('../prisma/client');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const findUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true
            },
            orderBy: {
                id: 'desc'
            }
        });
        res.status(200).send({
            success: true,
            message: "Get all user successfully",
            data: users
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: `Internal server error : ${error}`
        });
    }
}

const createUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Validation error",
            errors: errors.array()
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        });
        res.status(201).send({
            success: true,
            message: "Create user successfully",
            data: user
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: `Internal server error: ${error}`
        });
    }
};

module.exports = { findUsers, createUser }