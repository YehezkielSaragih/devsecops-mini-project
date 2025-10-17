require('dotenv').config();

const AWS_KEY = process.env.AWS_KEY || 'default';

module.exports = { AWS_KEY };