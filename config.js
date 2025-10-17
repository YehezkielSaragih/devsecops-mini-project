require('dotenv').config();

const AWS_KEY = process.env.ASW_KEY || 'default';

module.exports = { AWS_KEY };