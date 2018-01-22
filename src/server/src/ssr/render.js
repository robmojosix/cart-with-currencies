/* eslint-disable no-console */
import React from "react";
import path from "path";
import { renderToString } from "react-dom/server";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../../client/redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { fetchProducts } from "../../../client/redux/actions";

const assetsFile = path.resolve("build", "manifest.json");

const createDynamicStore = (initialData) => (
	createStore(
		reducers,
		initialData,
		composeWithDevTools(applyMiddleware(thunk)) // add middlewares to this guy
	)
);

const getStore = () => {
	return fetchProducts().then((products) => {
		return createDynamicStore({ products: products });
	}).catch((error) => {
		console.log("Failed to fetch product data!", error);
	});
};

const renderTemplateHtml = () => {
	return getStore().then((store) => {
		const Template = require("./template.js").default;
		const manifest = require(assetsFile);
		const Content = require("../../../client/RootComponent.js").default;
		const state = store.getState();
		const rehydrateState = `window.__INITIAL_STATE__ =${JSON.stringify(state)}`;

		return renderToString(
			<Template title='BJSS cart' assets={manifest} rehydrateState={rehydrateState} >
				<Provider store={store}>
					<Content />
				</Provider>
			</Template>
		);
	});
};

export const renderTemplate = (req, res) => {
	renderTemplateHtml().then((html) => {
		res.send("<!DOCTYPE html>"+html);
	})
};
