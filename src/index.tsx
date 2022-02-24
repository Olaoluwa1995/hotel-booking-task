import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from "./components/scroll-to-top-button/scroll-to-top-button.component";

// PREVENT CONSOLE.LOGS FROM GETTING TO PRODUCTION
function noop() {}

if (process.env.NODE_ENV !== "development") {
	console.log = noop;
	console.warn = noop;
	console.error = noop;
}

ReactDOM.render(
		<Router>
			<ScrollToTop />
				<App />
		</Router>
  ,
	document.getElementById("root")
);

reportWebVitals();
