'use strict';

const Blog = require('./model.js');

module.exports = class BlogController {
    constructor(dbDAO) {
        this.dbDAO = dbDAO;
    }

    createBlog(blog, callback) {
        this.dbDAO.create(blog, (error, result) => {
            if (error) {
                callback(error);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(blog)
                };
                callback(null, response);
            }
        });
    }

    readBlog(blog, callback) {
        this.dbDAO.read(blog, (error, result) => {
            if (error) {
                callback(error);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(result.body)
                };
                callback(null, response);
            }
        });
    }

    readAllBlogs(callback) {
        this.dbDAO.readAll((error, result) => {
            if (error) {
                callback(error);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(result.body)
                };
                callback(null, response);
            }
        });
    }

    updateBlog(blog, callback) {
        this.dbDAO.update(blog, (error, result) => {
            if (error) {
                callback(error);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(result)
                };
                callback(null, response);
            }
        });
    }

    deleteBlog(blog, callback) {
        this.dbDAO.delete(blog, (error, result) => {
            if (error) {
                callback(error);
            } else {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
                    },
                    body: JSON.stringify(result)
                };
                callback(null, response);
            }
        });
    }
}
