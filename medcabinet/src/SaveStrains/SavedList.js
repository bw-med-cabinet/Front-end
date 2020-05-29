// import React, { Component } from './node_modules/react';
// import { NavLink, Link } from './node_modules/react-router-dom';
// export default class SavedList extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="saved-list">
//         <h3>Saved Strains:</h3>
//         {this.props.list.map(strain => {
//           return (
//             <NavLink
//               to={`/strains/${strain.id}`}
//               key={strain.id}
//               activeClassName="saved-active"
//             >
//               <span className="saved-strain">{strain.strain_name}</span>
//             </NavLink>
//           );
//         })}
//         <div className="home-button">
//           <Link to="/">Home</Link>
//         </div>
//         </div>
//     );
//       }
//     }