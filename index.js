const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<div align='center'>");
    response.write("<h1>Hello Rogaland Fylkeskommune!</h1>");
    response.write("<h2>This website was deployed with ACE GitOps and is running on RFK's Azure cloud!</h2>");
    response.write("<img style='height 20%; width: 20%;' src='https://devoteamcloudify.no/wp-content/uploads/2021/10/ace-accelerated-cloud-enabler-logo-devoteam.jpg'>")
    response.write("<img style='height 15%; width: 15%;' src='https://scontent.fosl3-2.fna.fbcdn.net/v/t1.6435-9/73317990_2742211312477650_4286424575983484928_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Cm73KOL_bcEAX_33EiA&_nc_ht=scontent.fosl3-2.fna&oh=00_AT9zBPYt3sc1bOvHK-YK1dXEPbPSBMBhVZzbMotpGXEQHA&oe=62880A21'>")
    response.write("</div>");
    response.end()
});

const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);