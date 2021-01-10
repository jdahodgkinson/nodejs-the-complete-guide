const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;


    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body><h1>Welcome to my NodeJS Server <3</h1></body>');
        res.write('<form action="/create-user" method="post">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html lang="en">');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul>');
        res.write('<li>Joe Devine</li>');
        res.write('<li>Seb Stafford-Bloor</li>');
        res.write('<li>Alex Stewart</li>');
        res.write('</ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        console.log("monster!");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

module.exports = requestHandler;
