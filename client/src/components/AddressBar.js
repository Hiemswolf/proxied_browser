import { useState } from 'react';

export default function AdressBar(props) {
	const { onSubmit } = props;
	const [ address, setAddress ] = useState();
	return (
		<form onSubmit={event => {
			event.preventDefault()
			onSubmit(address);
		}}>
			<input type="text" placeholder="example.com" value={address} onChange={e => setAddress(e.target.value)} />
			<input type="submit" />
		</form>
	);
};
