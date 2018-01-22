import React from "react";
import { string, object } from "prop-types";
import { PROD } from "../../../../utilities";

class Template extends React.Component {
	render() {
		const { title, assets, children, rehydrateState } = this.props;
		return (
			<html>
				<head>
					<meta charSet="utf-8"/>
					<title>{title}</title>
					<If condition={ PROD }>
						<link rel="stylesheet" type="text/css" href={assets.main.css} />
					</If>
					<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
				</head>
				<body>
					<div id="App">
						{children}
					</div>
					<script dangerouslySetInnerHTML={{__html: rehydrateState}} />
					<script src={assets.vendor.js}></script>
					<script src={assets.main.js}></script>
				</body>
			</html>
		);
	}
}

Template.propTypes = {
	title: string.isRequired,
	assets: object.isRequired,
};

export default Template;
