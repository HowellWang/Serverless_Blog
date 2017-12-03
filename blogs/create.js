'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const createBlog = require('./model.js').createBlog;
const DynamoDAO = require('../util/dynamo-dao.js');
const BlogController = require('./controller.js');

module.exports.handler = (event, context, callback) => {
    const blog = createBlog(event, callback);
    const dynamoDAO = new DynamoDAO(dynamo, 'BlogTable');
    const controller = new BlogController(dynamoDAO);
    controller.createBlog(blog, callback);
};
