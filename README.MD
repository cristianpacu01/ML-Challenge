# Welcome to my ML Challenge!

Hi! In this project I created a back-end with MongoDB, NodeJS, Express and GraphQL to have extra flexibility on the data retrieved from each endpoint.

For the front-end I implemented a NextJS application to improve the site's SEO and accesibility with it's built in server side rendering but still implementing ReactJS.

**Disclaimer:**
I am not consumig data from the `api.mercadolibre.com` API, I created an entirely new backend with it's own database hosted in MongoDB.

## Setup

**Requirements:**
Node >= 8

**Steps:**
 1. Clone the repository into your desired destination:
	 `git clone https://github.com/cristianpacu01/ML-Challenge.git`

 2. Go inside the ML-Challenge folder:
	 `cd ML-Challenge`

3. Install back-end dependencies:
	`npm install`

4. Install front-end dependencies:
	`(cd ./ui-src && npm install)`

5. Run the application:
	`npm run dev`
	This command should start both the back-end (in port 4000) and front-end (in port 3000) concurrently.

6. Wait until the message `[Connected to MongoDB]` pops in your terminal, and then go to `http://localhost:3000/` to run the application.


## Folder Structure

 - **/ML-Challenge:** Root directory, contains all the back-end code.
	 - **app.js:** Starts the Express server, applies middleware, connects to MongoDB with Mongoose. It also contains two REST endpoints to upload and fetch images to/from MongoDB.
	 - **nodemon.json:** Implements environment constants to be used by our Express server.
	 - **package.json:** Contains the dependencies and scripts needed to run the back-end.
	 - **/models:** Contains the schemas that will be used to communicate with MongoDB, exported into a single file: **`index.js`.**
	 - **/middleware:** Contains the middleware implemented in our Express server.
	 - **/graphql:** Logic related with our GraphQL services.
		 - **/resolvers:** GraphQL resolvers to handle mutations and queries.
		 - **/schema:** contains our GraphQL schema which tells us what could we spect to retrieve from each query and what information is expected on each mutation.
	- **/ui-src:** Contains the NextJS app.
		- **next.conf.js:** Allows us to implement custom/advanced configuration to our NextJS app.
		- **package.json:** Contains the dependencies and scripts needed to run the front-end.
		- **/assets:** Contains the static media and files that will be used in the application.
		- **/components:** Components used (and potentially reused) throughout the application.
		- **/instances:** Axios instances to get and post information from/to an endpoint.
		- **/pages:** NextJS used this folder to render the components inside of it as pages. For example:
		`posts.js` would be rendered at `/posts`, and `/posts/[id]/index.js` would be rendered at `/posts/:id`.
		- **/public:** Contains what will be served and exposed in the browser.
		- **/styles:** Contains both the application's CSS-modules for each component and the global styles.
		- **/utility:** Contains functions and classed reused throughout the application.

## Stack used:

 ### Back-end:
 - NodeJS
 - Express
 - MongoDB
 - GraphQL
 - Multer
 - Nodemon

### Front-end:

 - ReactJS
 - NextJS
 - Axios
 - Bootstrap
 - SASS
 - CSS modules
