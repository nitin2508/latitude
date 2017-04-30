# MEAN Stack Single Page Form application

In this application you can submit the form along with the uploaded photo.After submit the form you can see the preview and a unique id is generated.
There is also a admin section where admin can see all the details of all user who submitted there form.

## Installation
1. Install npm modules: `npm install`
2. Install bower dependencies `bower install`
3. Install Gulp `npm install -g gulp`
4. Start up the server: `gulp`
5. View in browser at http://localhost:8080

Use this starter kit to build any MEAN stack application you like.

## Environments

### dev
Just run `gulp`. It concatenates all files in `/css` and all `*.min.css` files in `bower_components/` to one CSS file in `public/css/css.css`. The same with JavaScript files. The final CSS and JS files will be loaded into the page. You don't have to do anything. Just keep your front-end files in `css/` and `js/`. Use the [Livereload Browser Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions) to automatically refresh the browser upon changes to the files in those two directories. The server will also automatically be restarted upon any change of a back-end file.

### dist
Run `gulp dist`. Like dev, plus JS and CSS are minified and anything you need will be put to a `dist/` directory. Go into that directory and start the application with `node server.js`.

## Technologies

- MEAN Stack
- Semantic UI
- Gulp
- Mongoose


