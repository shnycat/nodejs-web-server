const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route([
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
      },
    },
    {
      method: "GET",
      path: "/about",
      handler: (request, h) => {
        return "About Page";
      },
    },
    {
      method: "POST",
      path: "/login",
      handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
