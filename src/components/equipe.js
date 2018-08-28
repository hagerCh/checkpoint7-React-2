import React, {Component} from 'react';
import Profile from "./profile";
import "./style.css";

class Equipe extends Component { 
    render() {
        return ( 
            <div> 
                <h1>
                    Notre équipe
                </h1>
                <div className="row equipe">
                    <Profile url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAZye2PSYjJZN5p4MpdV0F5Oazkeo728FY0RVzC5UCCAx8RKV" firstName="Samir" lastName="Ben Salah" position="Student" />
                    <Profile url="https://static.boredpanda.com/blog/wp-content/uploads/2017/08/Epic-Portraits-Shot-with-an-iPhone-and-a-Big-Mac-59a54f2641195__880.jpg" firstName="Kais" lastName="Chaabane" position="Professor" />
                    <Profile url="http://79hbm1979mg58bnh1fp50y1bry.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/Elliott-786x1024.jpg" firstName="Ahmed" lastName="Hedi" position="Student"/>
                    <Profile url="http://markseliger.com/wp-content/gallery/portraits/2011-063A_A2.jpg" firstName="Salah" lastName="Mohamed" position="Principal" />
                </div>
			</div>
         );
    }
}
export default Equipe;