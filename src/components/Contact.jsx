import styled from 'styled-components';
import { BsFillSendFill } from "react-icons/bs";


const Contact=(e)=>{

  function mailSend(e){

    e.preventDefault();

    window.open("https://mail.google.com/mail/u/0/"+
    "?to=ziyaul75@yahoo.com"+
    `&su=${e.target.subject.value}`+
    `&body=${e.target.message.value} +%0D%0D%0DBest Regards: + ${e.target.name.value}`+
    "&tf=cm","_blank")

  }


  return (
<SuperContainer id="Contact">
         <ContactDiv>
         <h5>CONTACT</h5>
          <h3>Connect with me, today's inquiry is tomorrow's solution.</h3>

             <form onSubmit={mailSend}>

                  <Left>

                      <Name>
                          <label>Name</label>
                          <input type="text" name="name"/>
                      </Name>

                      <Subject>
                           <label>Subject</label>
                           <input type="text" name="subject"/>
                      </Subject>

                      <SubmitButton>
                         <button type='submit'>Send <BsFillSendFill size={"14px"} /></button>
                      </SubmitButton>

                  </Left>

                  <Right>

                      <Message>
                           <label>Message</label>
                           <textarea name='message' rows="10" cols="80"/>
                      </Message>



                  </Right>

             </form>

         </ContactDiv>
         </SuperContainer>


  )
}

export default Contact;

const ContactDiv=styled.div`
width:800px;
margin:0 auto;
form{
  display:flex;
}

font-size:16px;

h5{
  color: #8B93FF;
}

`;
const Left=styled.div`
width:40%;
display:flex;
flex-direction:column;
gap:48px;
`;
const Name=styled.div`
position:relative;

  label{
    position:absolute;
    top:-12px;
    left:10px;
    background:white;
    padding:0 5px;
  }

  input{
    width:90%;
    height:30px;
    padding-top:5px;
    border-radius:5px;
    border-color:black;
    border:2px solid black;
    padding-left:12px;


  }
`;
const Subject=styled.div`
position:relative;

label{
  position:absolute;
  top:-12px;
  left:10px;
  background:white;
  padding:0 5px;

}

input{
  width:90%;
  height:30px;
  padding-top:5px;
  border-radius:5px;
  border:2px solid black;
  padding-left:12px;


}
`;
const Right=styled.div`


`;
const Message=styled.div`
position:relative;

label{
  position:absolute;
  top:-12px;
  left:10px;
  background:white;
  padding:0 5px;
}

textarea{
  border:2px solid black;
  padding-top:10px;
  border-radius:5px;
  padding-left:12px;


}
`;
const SubmitButton=styled.div`
button{
  width:97%;
  margin:0px;
  padding:0;
  border:none;
  border:2px solid black;
  border-radius:5px;
  height:40px;
  font-size:16px;
background-color:white;
box-sizing:border-box;
cursor: pointer;

}
`;

const SuperContainer=styled.div`
height:calc(100vh - 50px);
display:flex;
align-items:center;

`;
