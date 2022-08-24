import React , {useState} from "react";
import img1 from "../images/profile.png";
// import { setCountDemo } from "../Actions/Actions";
// import { useDispatch , useSelector} from "react-redux";

export default function About() {

    // const dispatch = useDispatch()

    const [color , setColor] = useState('black');
    const [count , setCount] = useState(0);

    const handleInput = (e) => {
        setColor(e.target.value)
    }

    // const handleButton = () => {
    //     dispatch(setCountDemo(count + 1))
    // }


    return (
        <div className="about">

            <img src={img1} className="about-profile"/>
            <h3 className="about-detail">I'm Irfan Gouri</h3>
            <h5 className="about-detail2">Full Stack Web Developer</h5>
            <p className="about-detail3">I am a quick learner and I recently started this course on Full Stack Web Development and I have learned a lot in this course like HTML , CSS , Bootstrap , React , Redux , Node , MongoDB , etc. I also made some basic static webpages using html, css, bootstrap and also made webpages in react also. </p>
            

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <p>Counter function :-</p>
            <p className="about-para">{count} Number</p>
            {/* <button class="btn btn-secondary button" onClick={handleButton}>Increment</button> */}
            <button class="btn btn-secondary button" onClick={() => {setCount(count+1)}}>Increment</button>
            <button class="btn btn-secondary button" onClick={() => {setCount(count-1)}}>Decrement</button>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <p>Color changing function :-</p>
            <input className="about-input" placeholder="Enter any color" type={"text"} onChange={handleInput} />
            <br/>
            <br/>
            <p style={{color: color}} className="about-para2">the color is {color}</p>

        </div>
    )
}