import React from 'react';
import { connect } from 'react-redux';
import { fetchAds } from '../actions';
class AdList extends React.Component {
    componentDidMount() {
        this.props.fetchAds();
      }
      renderList() {
        return this.props.ads.map(ad => {
          return (
            <div className="item" key={ad.id}> 
              <div className="content">
                
                <div className="description">
                    {ad.description}
                </div>
                <div className="location">
                    location : 
                    {ad.location}
                </div>
                
              </div>
            </div>
          );
        });
      }
    render (){
        console.log(this.props.ads);
        return(
            <div>
        <h1>Ads</h1>
        <div className="ui celled list">{this.renderList()}</div>
        </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return { ads: Object.values(state.ads) };
}
export default connect(mapStateToProps, {fetchAds})(AdList);