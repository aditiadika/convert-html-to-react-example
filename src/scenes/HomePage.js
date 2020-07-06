import React from 'react';
import Fade from 'react-reveal/Fade';
import Header from 'parts/Header';
import Section from 'elements/Section';
import Clients from 'parts/Clients';
import Feature from 'parts/Feature';

import Hero from 'assets/images/hero-image.png';
import Feature1 from 'assets/images/feature-tile-icon-01.svg';
import Feature2 from 'assets/images/feature-tile-icon-02.svg';
import Feature3 from 'assets/images/feature-tile-icon-03.svg';

function HomePage() {
	const features = [
		{
			imgSrc: Feature1,
			imgAlt: 'Feature tile icon 01',
			title: 'Join the system',
			description:
				'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.'
		},
		{
			imgSrc: Feature2,
			imgAlt: 'Feature tile icon 02',
			title: 'Join the system 02',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
		},
		{
			imgSrc: Feature3,
			imgAlt: 'Feature tile icon 03',
			title: 'Join the system 03',
			description: 'Odit cumque error ex commodi eligendi sapiente. Alias recusandae porro'
		}
	];
	return (
		<div classNameName="body-wrap">
			<Header />
			<main classNameName="site-content">
				<Section classNameName="hero illustration-section-01" isCenterContent>
					<div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<Fade bottom delay={500}>
									<h1 className="mt-0 mb-16">Landing template for startups</h1>
								</Fade>
								<div className="container-xs">
									<Fade bottom delay={1000}>
										<p className="mt-0 mb-32">
											Our landing page template works on all devices, so you only have to set it
											up once, and get beautiful results forever.
										</p>{' '}
									</Fade>
								</div>
							</div>
							<div className="hero-figure illustration-element-01" data-reveal-value="20px">
								<Fade bottom delay={1500}>
									<img className="has-shadow" src={Hero} alt="Hero " width="896" height="504" />
								</Fade>
							</div>
						</div>
					</div>
				</Section>
				<Clients />
				<Section className="feature-tiles">
					<div className="container">
						<div className="features-tiles-inner section-inner">
							<div className="tiles-wrap">
								{features.map((feature, index) => (
									<Feature key={index} delayInMs={(index = 500)} data={feature} />
								))}
							</div>
						</div>
					</div>
				</Section>
			</main>
		</div>
	);
}

export default HomePage;
