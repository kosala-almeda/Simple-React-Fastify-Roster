// HomePage.js
import {Link} from 'react-router-dom';

function HomePage() {
    return (
      <div>
        <h1>Welcome to the Staff App</h1>
        <p>This is the homepage of the app.</p>
        <ul>
            <li><Link to="/waiters">View Waiters</Link></li>
            <li><Link to="/cooks">View Cooks</Link></li>
        </ul>
      </div>
    );
  }

export default HomePage;