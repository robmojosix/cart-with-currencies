import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	reducers,
	window.__INITIAL_STATE__,
	composeWithDevTools(applyMiddleware(thunk)) // add middlewares to this guy
);

const hotReRender = () => {
	// Dynamically require module inline for hot-reloading
	const RootComponent = require("./RootComponent").default;

	const App = () => (
		<Provider store={store}>
			<RootComponent />
		</Provider>
	);

	ReactDOM.render(
		<App />,
		document.getElementById("App")
	);
};

// Start the app by rendering it for the first time
hotReRender();

// Support hot-reloading of components by rerendering using webpack's included HMR (Hot-Module-Replacement)
if (module.hot) {
	// After accepting the new module from webpack, we rerender on the next tick
	module.hot.accept("./RootComponent", () => setTimeout(hotReRender));
}
