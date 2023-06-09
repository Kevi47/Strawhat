import pic from "../../images/nav.png";
import pic2 from "../../images/nav2.png";
import axios from "axios";
import "./Homepage.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage1 from "./Homepage1";
import Fav from "../Fav/Fav";
import { useEffect, useState } from "react";
import { imgurl, baseUrl } from "../AxiosFolder/AxiosList";
import { useSelector, useDispatch } from "react-redux";
import { animePush } from "../CommonStates/CommonState";
function Homepage() {
  const dispatch = useDispatch();
  const { animeList } = useSelector((state) => state.animeData);
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setlist(response.data);
    });
    dispatch(animePush(list));
    console.log(animeList)
  }, []);

  return (
    <div id="home">
      <Router>
        <div className="divimg">
          <img id="navc" src={pic} alt="Loading" />
          <input id="in1"></input>
        </div>
        <div className="divimg1">
          <img id="navc1" src={pic2} alt="Loading" />
        </div>
        <div className="divlink">
          <Link className="l1" to="/">
            Home
          </Link>
          <Link className="l2" to="/fav">
            Fav
          </Link>
        </div>
        <div className="divroute">
          <Routes>
            <Route exact path="/" element={<Homepage1 />}></Route>
            <Route exact path="/fav" element={<Fav />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Homepage;
