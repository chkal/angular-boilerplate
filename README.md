# Angular boilerplate

Boilerplate project demonstrating how to integrate Angular with classic Maven 
based JavaEE projects.

## The build process

Beside building and packaging the Java webapp, the build also performs the 
following steps:

  * The [frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin)
    downloads and installs both NodeJS and the Yarn package manager locally in your
    project folder. Therefor you don't have to install NodeJS manually on your box
    to run the build.
  * The build runs `yarn install` to download all dependencies from the *npm*
    repository.
  * Then it executes [Webpack](https://webpack.github.io/) which will use the
    [TypeScript](http://www.typescriptlang.org/) compiler to build you source code
    and merge it to a minified JavaScript bundle.
  * The corresponding output bundle will then be packaged together with all other
    assets in your WAR file.

So if you run `mvn install`, both the Java server code and the Angular code will be compiled
and packaged into the WAR in a single step.

## Development mode

For development your can use the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
which provides a very efficient development experience.

The webpack-dev-server will act as a reverse proxy for your Java application server.
It will listen on port `9999` and forward all requests to your actual application server
which is typically available at `localhost:8080`. The only exception to this are requests
for the Webpack JavaScript bundles. Requests for these assets are not forwarded but
served by the webpack-dev-server which will recompile the bundles whenever source
files change.

This default Webpack configuration in this project assumes that the deployed
application is available via `http://localhost:8080/angular-boilerplate`.
If your setup is different, you will have to adjust the `devServer` section in
`webpack.config.js`.

To start the webpack-dev-server, execute the following script:

    ./dev-server.sh

Then you can open your application using this URL:

    http://localhost:9999/angular-boilerplate/

You can now modify the TypeScript source code and reload the page. You will see
that the webpack-dev-server will automatically recompile and serve the new code.
