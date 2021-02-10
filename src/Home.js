import React, { useState, useEffect, Component } from 'react';
import { Button } from 'react-bootstrap';

class Carousel extends React.Component {
	constructor (props) {
		super(props);

		previousSlide () {
    		const lastIndex = imgUrls.length - 1;
    		const { currentImageIndex } = this.state;
    		const shouldResetIndex = currentImageIndex === 0;
    		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

		this.setState = ({
			currentImageIndex: 0
		});
	}

	render () {
		return (
      		<div className="carousel">
				<Arrow
					direction="left"
          			clickFunction={ this.previousSlide }
          			glyph="&#9664;" />

        		<ImageSlide url={imgUrl} />

				<Arrow
          			direction="right"
          			clickFunction={ this.nextSlide }
          			glyph="&#9654;" />
      		</div>
    	);
	}
}

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div className="image-slide" style={styles}></div>;
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div 
	  className={`slide-arrow ${direction}`} 
	  onClick={clickFunction}>
    {glyph}
  </div>
);

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
			<Carousel />,
			document.getElementById('container')
        </div>
    );
}

export default Home;
