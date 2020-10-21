import React, { useState } from "react";
import MissionNavbar from "./missions/MissionNavbar";
import MissionList from "./missions/MissionList";
import MissionCreate from "./missions/MissionCreate";
import MissionUpdate from "./missions/MissionUpdate";
import MissionNothing from "./missions/MissionNothing";
import { Container } from "react-bootstrap";

// function Profile() {
//   return (
//     <Router>
//       <h2>My name is.. </h2>
//       <MissionNavbar />
//       <Container>
//         <Switch>
//           <Route path="/profile/missions" exact component={MissionList} />
//           <Route path="/profile/missionCreate" component={MissionCreate} />
//           <Route path="/profile/missions/update" component={MissionUpdate} />
//         </Switch>
//       </Container>
//     </Router>
//   );
// }

export default function Profile() {
  const [toggle, setToggle] = useState(0);

  return (
    <Container>
      <MissionNavbar toggle={toggle} setToggle={setToggle} />

      {toggle === 0 && <MissionList />}
      {toggle === 1 && <MissionCreate setToggle={setToggle} />}
      {toggle === 2 && <MissionUpdate />}
      {toggle === 3 && <MissionNothing />}
    </Container>
  );
}
