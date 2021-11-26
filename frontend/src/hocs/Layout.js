import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layouts = (props) => {
    useEffect(()=> {
        props.checkAuthenticated();
        props.load_user()
    },[])
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null, {checkAuthenticated,load_user})(Layouts);