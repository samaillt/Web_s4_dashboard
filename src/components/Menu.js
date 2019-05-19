import { h } from 'hyperapp';
import { Link } from "@hyperapp/router"

export default () => (
	<header>
		<ul class="menu">
			<div class="container">
				<div class="logo">Twitch dashboard</div>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/profile">My channel</Link>
				</li>
			</div>
		</ul>
	</header>
);
