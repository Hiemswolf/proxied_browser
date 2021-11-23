import { useState } from 'react';
import axios from 'axios';

export default function Browser(props) {
	const { url } = props;

	return (
		<div className="Browser">
			<iframe title="Browser Window" src={`/api/getPage?url=${url}`} frameborder="0"></iframe>
		</div>
	);
};
