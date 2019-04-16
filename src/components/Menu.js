import { h } from 'hyperapp';
import { Link } from "@hyperapp/router"

export default () => (
  <ul class="menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">My profile</Link>
    </li>
  </ul>
);
