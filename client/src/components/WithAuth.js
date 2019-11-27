// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


// export default function withAuth(ComponentToProtect) {
//     return class extends Component {
//         constructor() {
//             super();
//             this.state = {
//                 loading: true,
//                 redirect: false,
//                 userInfo: {}
//             };
//         }
//         componentDidMount() {
//             fetch('/checkToken')
//                 .then(res => {
//                     if (res.status === 200) {
//                         this.setState({ loading: false });

//                         return res.json()
//                     } else {
//                         const error = new Error(res.error);
//                         throw error;
//                     }
//                 })
//                 .then(data => {
//                     this.setState({ userInfo: data });
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     this.setState({ loading: false, redirect: true });
//                 });
//         }
//         render() {
//             const { loading, redirect } = this.state;
//             if (loading) {
//                 return null;
//             }
//             if (redirect) {
//                 return <Redirect to="/logIn" />;
//             }
//             return (
//                 <React.Fragment>
//                     <ComponentToProtect {...this.props} />
//                 </React.Fragment>
//             );
//         }
//     }
// }