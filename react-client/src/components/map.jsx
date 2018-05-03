
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from 'google-map-react'
import Home from './Home.jsx' 
export class MapContainer extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            lat: 0,
            lng:0
          }
        }
       addMarker(props){
        var marker = new google.map.Marker({
          position:{lat: props.lat, lng:props.lng},
          map:map,
        });
      }
      onClick(obj){
        this.props.click(obj)
      }

//       componentDidMount() {
//          navigator.geolocation.getCurrentPosition(
//       position => {
//         console.log("here",position.coords.latitude)
//         this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
//       },
//       error => console.log(error)
//     );
//   // window.setTimeout(() => {
//   //   const map = this.refs.map.map_;
//   //   map.__customClickListener = this.refs.map.map_.addListener('click', this.handleClick.bind(this));
//   // }, 200);
// }
     
       // _onClick(obj){ console.log(obj,obj.x, obj.y, obj.lat, obj.lng, obj.event);}
            // google.maps.event.addListener(map, 'click', function(event){
            //   // Add marker
            //   addMarker({coords:event.latLng});
            // }); addMarker({coords:event.latLng})
  render() {

    return (

      <GoogleMap onClick={this.onClick.bind(this)} google={this.props.google} style={{width:'20%' , height: '20%'}} zoom={12} center={{
            lat: 31.934885,
            lng: 35.881807
          }} />
 
        
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDWDPQOGfp6omxkvZllmc4pWTS0ye5-bwg'
})(MapContainer)