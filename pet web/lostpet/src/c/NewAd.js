import React from 'react';
import { connect } from 'react-redux';
import AdForm from './AdForm';


class NewAd extends React.Component {
    isSignedIn=this.props.isSignedIn;
    onSubmit = formValues =>{
        console.log(formValues);
    };
    render(){
        console.log(this.props) 
        const isSignedIn=this.props.isSignedIn; 
        if (isSignedIn) 
       {
        return(
            <div>
                <h1>Create Ad</h1>
                <AdForm onSubmit={this.onSubmit}/>
            </div>);
        }
        else if (isSignedIn === null)
        {
            return null;
          }
        else
          {
            return(
                <div>
                    you must be signed in to add ad
                </div>
            );
          }
        };
    };
const mapStateToProps = (state) => 
    {
    return{ isSignedIn:state.auth.isSignedIn};
    }
export default connect(mapStateToProps)(NewAd)