import { h } from 'hyperapp';
import { Link } from "@hyperapp/router"

export default (props) => (
	<header>
		<ul class="menu">
			<div class="container">
				<div class="logo">Twitch dashboard</div>
				<li class={props.location.pathname === "/" ? "active" : ""}>
					<Link to="/">Home</Link>
				</li>
				<li class={props.location.pathname === "/profile" ? "active" : ""}>
					<Link to="/profile">My channel</Link>
				</li>
			</div>
		</ul>
	</header>
);
