// HomePage.js
import {Link} from 'react-router-dom';

function HomePage() {
    return (
      <div>
        <h1>Welcome to the Staff App</h1>
        <p>This is the homepage of the app.</p>
        <Link to="/waiters">View Waiters</Link>
        <Link to="/cooks">View Cooks</Link>
      </div>
    );
  }

export default HomePage;