const app = require('./app_hbs');

const port = 3000;

//Enabling the node.http server on port 3000 (http://localhost:3000/)
app.listen(port, (xerr) => {
    if (xerr)
        return (console.log('Something went wrong'));
    ServerRunning();        
});                         


function ServerRunning() {
    console.log('Server Node Express is running..');
};
