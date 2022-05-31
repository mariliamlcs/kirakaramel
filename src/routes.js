import {
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Shop from "./pages/Shop";
import Streamers from "./pages/Streamers";
import Sunny from "./pages/Streamers/Sunny";
  
export default function Routes(){
return(
<ReactRoutes>
  <Route path="/" element={<Home />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/streamers" element={<Streamers />} />
  <Route path="/Sunny" element={<Sunny />} />
</ReactRoutes>
)
}