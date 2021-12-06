import React, { Suspense } from "react";
import "../style/main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SpinnerRoundFilled } from "spinners-react";
const Header = React.lazy(() => import("./Header"));


function App() {
	AOS.init()
  return (
    <div className="wrap">
      <Suspense
        fallback={
          <div className="center-spinner">
            <SpinnerRoundFilled
              size={50}
              thickness={100}
              speed={100}
              color="#bf85fe"
            />
          </div>
        }
      >
        <Header />
      </Suspense>
    </div>
  );
}
export default App;
