# Microservice template for NodeJS

![Microservice](https://img.shields.io/badge/microservice-ready-brightgreen.svg?style=for-the-badge)
[![Build status](https://img.shields.io/travis/com/microservices/node/master.svg?style=for-the-badge)](https://travis-ci.com/microservices/node)

An OMG template for NodeJS.

Usage
-----

```coffee
# Storyscript
your_service remove url: 'url-image.png'
# Returns the image without its background
```

Test
----

```sh
> omg run remove -a url="image-url.png"
ℹ Building Docker image
…
✔ Built Docker image with name: omg/l2hvbwuvc2vil2fzew5jes9ydwj5
✔ Started Docker container: 1c8a91688261
✔ Health check passed
✔ Ran action: `remove` with output: ...
✔ Stopped Docker container: 1c8a91688261
```
