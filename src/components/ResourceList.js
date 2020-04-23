import React, {useState, useEffect } from 'react';
 import axios from 'axios';
import useResources from "./useResources";
//----------Class Based Component--------------------
// class ResourceList extends React.Component{
//     state = { resource: []};

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//         this.setState({ resource: response.data})
//     }

//     async componentDidUpdate(prevProps) {
//         if(prevProps.resource !== this.props.resource ){
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//             this.setState({ resource: response.data})           
//         }
//     }

//     render(){
//     return <div>{this.state.resource.length}</div>;
//     }
// }

//-------------Function based component -------------------

// const ResourceList = ({ resource }) => {
//     const [resources , setResource] = useState([]);
//     const fetchResource = async (resource) => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
//         setResource(response.data);
//     }

//     useEffect(() => {
//         fetchResource(resource)
//     },[resource]);

//     return (
//         <ul>{resources.map(record => (
//             <li key= {record.id}>{record.title}</li>
//             ))}
//         </ul>
//      );
// };
//-------------------------Hooks reuse (functional component)---------------------------------

const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ul>{resources.map(record => (
            <li key= {record.id}>{record.title}</li>
            ))}
        </ul>
     );
};


export default ResourceList;