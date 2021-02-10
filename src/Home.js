import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Home(props) {
	const [error, setError] = useState(false);
	const [news, setNews] = useState('');

    // const handleSubmit = (event) => {
	// 	event.persist();
		
	// }

    useEffect(() => {
			const url =
				'https://api.covid19tracking.narrativa.com/api/country/usa?date_from=2020-03-20&date_to=2020-12-31';

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setNews(data);
				})
				.catch(() => {
					setError(true);
				});
		}, []);

		if (error) {
			return <h3>Sorry, there was a problem. Please refresh the page.</h3>;
		}

	return (
        <div>
           {/* <Button type='submit' onClick={handleSubmit}>
				Submit
			</Button>  */}
        </div>
    );
}

export default Home;
