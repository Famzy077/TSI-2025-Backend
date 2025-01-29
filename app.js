// Import necessary modules
const express = require('express');
const app = express();
const { configDotenv } = require('dotenv');
configDotenv();

// Middleware to parse JSON request bodies
app.use(express.json());

// Temporary in-memory "database"
let resources = [];

// 1. Create a Resource (POST /api/resource)
try {
    app.post('/api/resource', (req, res) => {
        const resource = {
            id: resources.length + 1,
            name: req.body.name, // Assume resource has a "name" field
        };
        resources.push(resource);
        res.status(201).send(resource); // 201 Created
    });
} catch (error) {
    console.log(error, 'could not create resource');
}

// 2. Read a Resource (GET /api/resource/:id)
try {
    app.get('/api/resource/:id', (req, res) => {
        const resource = resources.find(res => res.id === parseInt(req.params.id));
        if (!resource) return res.status(404).send('Resource not found');
        res.send(resource);
    });
} catch (error) {
    console.log(error, 'could not read resource');
}

// 3. Update a Resource (PUT /api/resource/:id)
try {
    app.put('/api/resource/:id', (req, res) => {
        const resource = resources.find(r => r.id === parseInt(req.params.id));
        if (!resource) return res.status(404).send('Resource not found');
      
        resource.name = req.body.name; // Update resource name
        res.send(resource);
    });
} catch (error) {
    console.log(error, 'could not update resource');
}

// 4. Delete a Resource (DELETE /api/resource/:id)
try {
    app.delete('/api/resource/:id', (req, res) => {
        const resource = resources.find(r => r.id === parseInt(req.params.id));
        if (!resource) return res.status(404).send('No resource found');
      
        const index = resources.indexOf(resource);
        resources.splice(index, 1); // Remove the resource
      
        res.send(resource);
    });
} catch (error) {
    console.log(error, 'could not delete resource');
}

// Access the app webpage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Task_One API</h1>');
  });

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
