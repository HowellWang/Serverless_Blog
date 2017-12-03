'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const deleteBlog = require('./model.js').deleteBlog;
const DynamoDAO = require('../util/dynamo-dao.js');
const BlogController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
    const blog = deleteBlog(event, callback);
    const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
    const controller = new BlogController(dynamoDAO);
    controller.deleteBlog(blog, callback);
};