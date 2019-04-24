import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {

	render() {
		return (
			<React.Fragment>
			<h1>Class Based Index file</h1>
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/about">About</Link></li>
				<li><Link href="/portfolios">Portfolios</Link></li>
				<li><Link href="/blogs">Blogs</Link></li>
				<li><Link href="/cv">cv</Link></li>
			</ul>
			</React.Fragment>
		)
	}
}

export default Index;