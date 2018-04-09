var Router = require("vertx-web-js/router");
var router = Router.router(vertx);

router.route().handler(function (routingContext) {
  routingContext.response().putHeader("content-type", "text/html").end("hello world");
});

vertx.createHttpServer().requestHandler(router.accept).listen(8080);