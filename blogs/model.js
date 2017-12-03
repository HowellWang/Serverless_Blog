const uuid = require('uuid');

class Blog {
    constructor(id, text) {
        this.blog_id = id;
        this.text = text;
    }
}

const createBlog = (event, callback) => {
    validateAttributes(event, callback);
    const body = JSON.parse(event.body);
    const id = uuid.v1();
    const text = body.text;
    return new Blog(id, text);
}

const readBlog = (event, callback) => {
    validateGetId(event, callback);
    const params = event.pathParameters;
    const id = params.id;
    return new Blog(id);
}

const updateBlog = (event, callback) => {
    validateId(event, callback);
    validateAttributes(event, callback);
    const body = JSON.parse(event.body);
    const id = body.blog_id;
    const text = body.text;
    return new Blog(id, text);
}

const deleteBlog = (event, callback) => {
    validateId(event, callback);
    const body = JSON.parse(event.body);
    const id = body.blog_id;
    return new Blog(id);
}

// Private validation functions
const validateAttributes = (event, callback) => {
    const body = JSON.parse(event.body);
    if (typeof body.text !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Body did not contain a text property of type string.'));
        process.exit(1);
    }
};
const validateId = (event, callback) => {
    const body = JSON.parse(event.body);
    if (typeof body.blog_id !== 'string') {
        console.error('Validation Failed');
        callback(new Error('Body did not contain an Blog_id property of type string.'));
        process.exit(1);
    }
};
const validateGetId = (event, callback) => {
    const params = event.pathParameters;
    if (typeof params.id !== 'string') {
        console.error('Validation Failed');
        callback(new Error('No id path parameter of type string. Please use GET Blogs/{id}.'));
        process.exit(1);
    }
};

module.exports = {
    Blog: Blog,
    createBlog: createBlog,
    readBlog: readBlog,
    updateBlog: updateBlog,
    deleteBlog: deleteBlog
}