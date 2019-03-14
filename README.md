# ABOUT

## Before you start

This is a project writing with **React** for the purpose of practice.  

The project imitates **ZhiHu** homepage([original site](https://www.zhihu.com/)). Some sections, images and SVG icons are copying from ZhiHu, but no ZhiHu users' info is reveled. I put myself on the page instead.  

The project is built based on *create-react-app*.  

For practice purpose, I wrote a simple server using *express* named "express_server.js".  

I didn't work on the compatibility problem because I haven't learnt yet. But as I tested, the project works fine in Chrome and Firefox. In Edge, the corner button wont move up.

This is my first ''real'' project and I'm far from experienced, so the code can be ugly and so does the file structure, which I reformed many times.

## How to start

First of all, **node.js** is needed of course :)

One way to run:
```
git clone https://github.com/Planisplan/zhihu_homepage.git
cd zhihu_homepage
npm install
npm start    //visit localhost:3000
```
This way doesn't use the express server, data comes from local file name "souces.js"

Another way to run:
```
git clone https://github.com/Planisplan/zhihu_homepage.git
cd zhihu_homepage
npm instal
npm run build
node express_server.js  //visit localhost:4000
```
This way runs with express server and data is required with *fetch api*