import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: 0,
			retweet: 0,
			like: 0,
			message: 0
		};
	}

	handleClick(evt) {
		this.setState(prevState => ({
			[evt]: prevState[evt] + 1
		}));
	}

	render() {
		const { comment, retweet, like, message } = this.state;

		return (
			<footer className="card-footer">
				<div className="footer-content">
					<i className="far fa-comment icon" onClick={() => this.handleClick('comment')}>
						{' '}
						{comment}
					</i>

					<i className="fas fa-sync icon" onClick={() => this.handleClick('retweet')}>
						{' '}
						{retweet}
					</i>
					<i className="far fa-heart icon" onClick={() => this.handleClick('like')}>
						{' '}
						{like}
					</i>
					<i className="far fa-envelope icon" onClick={() => this.handleClick('message')}>
						{' '}
						{message}
					</i>
				</div>
			</footer>
		);
	}
}
