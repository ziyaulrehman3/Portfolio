import styled from 'styled-components';
import { FaLaptopCode } from "react-icons/fa";




const About=()=>{
  return (
<SuperContainer id="About">
    <Container>

         <Left>
           <img src="images/lap.jpg" alt="img"/>
           <div>
              <img src="images/trustLogo.png"/>
           </div>

           <CodingLogo>
              <FaLaptopCode size={'50px'}/>
           </CodingLogo>

         </Left>
         <Right>
             <h5>ABOUT ME</h5>
             <h3>A dedicated Full-Stack MERN Developer based in New Delhi, India</h3>
             <p>Junior Full-Stack Web Developer with expertise in HTML, CSS, JavaScript,
              ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, and C++. Passionate about
              learning and delivering high-quality solutions to exceed expectations.
              Excited to bring skills to a dynamic team.</p>

         </Right>

    </Container>
    </SuperContainer>


  )
}

export default About;

const Container=styled.div`
display:flex;
max-width:800px;
margin:0 auto;
gap:20px;

`;

const Left=styled.div`
width:40%;
display: flex;
justify-content:center;
align-items:center;

position:relative;
  img{
    width:300px;
    height:265px;
    border-radius:20px 0px 0px 20px;
  }

  div{
    position:absolute;
    width:130px;
    height:130px;
    background-color:white;
    border-radius:50%;
    border:1px solid white;
    top:180px;
    left:190px;
    animation-name:imgrotate;
    animation-duration :5s;
    animation-iteration-count:infinite;
    animation-timing-function: linear;

     @keyframes imgrotate{
       0% {transform: rotate(0deg);}
       5% {transform: rotate(18deg);}
       15% {transform: rotate(54deg);}
       20% {transform: rotate(72deg);}
       25% {transform: rotate(90deg);}
       30% {transform: rotate(108deg);}
       35% {transform: rotate(126deg);}
       40% {transform: rotate(144deg);}
       45% {transform: rotate(162deg);}
       50% {transform: rotate(180deg);}
       55% {transform: rotate(198deg);}
       60% {transform: rotate(216deg);}
       65% {transform: rotate(234deg);}
       70% {transform: rotate(252deg);}
       75% {transform: rotate(270deg);}
       80% {transform: rotate(288deg);}
       85% {transform: rotate(306deg);}
       90% {transform: rotate(324deg);}
       95% {transform: rotate(342deg);}
       100% {transform: rotate(360deg);}

     }

    img{
      width:130px;
      height:130px;
      border-radius:50%;

    }


  }

`;

const Right=styled.div`
width:60%;

h5{
  color: #8B93FF;
}

`;

const SuperContainer=styled.div`
height:calc(100vh - 50px);
display:flex;
align-items:center;

`;

const CodingLogo=styled.span`
position:absolute;
background-color:white;
top:220px;
left:233px;
`;
