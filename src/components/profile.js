import React, {Component} from "react";
import "./style.css";

class Profile extends Component{
    render(){ 
        return(
            <div className="profile">
                <img src={this.props.url} alt="yolo" className="image"/> 
                <h2 className="name">{this.props.firstName} {this.props.lastName}</h2> 
                <h3 className="position">{this.props.position}</h3>
            </div>
        );
    }
}

export default Profile;