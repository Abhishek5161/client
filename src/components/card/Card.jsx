
import {useState,useEffect} from "react";
import './card.css'
import axios from 'axios'
import pic from './user.png'

function Card() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  const getPost = async () => {
    try {
      const url = "http://localhost:5000/mypost";
      const head = "12 " + localStorage.getItem("token");
      const  post  = await axios.get(url, {
        headers: {
          tokn: head,
        },
      });

    //  console.log(post);
      console.log(post.data.mypost);
      setData(post.data.mypost)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getPost();
    
  }, []);
  return (
    <div className='Card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src={pic} alt="" style={{boredr:'0'}} height="100px" width="100px"/>

            </div>
        </div>
        <div className='lower-container'>
            <h5>{localStorage.getItem('user') &&`${user.firstname} ${user.lastname}`}</h5>
            <h6>Trainee</h6>
        </div>

        <div className="social-container">
            
				<div className="followers">
					<h5 className="bold-text">{data.length}</h5>
					<h5 className="smaller-text">My Total Post</h5>
				</div>
				<div className="likes">
					<h5 className="bold-text">10</h5>
					<h5 className="smaller-text">Friends</h5>
				</div>
				
			</div>

        
    </div>
  )
}

export default Card