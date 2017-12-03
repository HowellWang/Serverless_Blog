'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const readBlog = require('./model.js').readBlog;
const DynamoDAO = require('../util/dynamo-dao.js');
const BlogController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
    const blog = readBlog(event, callback);
    const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
    const controller = new BlogController(dynamoDAO);
    controller.readBlog(blog, callback);
};