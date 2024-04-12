import styled from 'styled-components';

const Header=(props)=>{

  return (
     <Head>

       <HeadSub1>
          <h3>Ziya.dev</h3>
       </HeadSub1>

       <HeadSub2>
         <ul>
            <li value={1} onClick={props.pageSetter}><a href="#Home">Home</a></li>
            <li value={2} onClick={props.pageSetter}><a href="#About">About</a></li>
            <li value={3} onClick={props.pageSetter}><a href="#Projects">Projects</a></li>
            <li value={4} onClick={props.pageSetter}><a href="#Contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1v85pYDIwEBR9WZHLN50U7eCqKPec6te7/view?usp=drive_link">Resume</a></li>
         </ul>
       </HeadSub2>

     </Head>


  )
}

const Head=styled.div`
background-color:white;
width:1200px;
height:50px;
padding:0;
margin:0 auto;
display:flex;
justify-content:space-between;
align-content:center;
`;

const HeadSub1=styled.div`
display:flex;
align-items:center;

`;

const HeadSub2=styled.div`
align-items:center;
padding:0;

ul{
  display:flex;
  gap:10px;
  align-items:center;
  font-weight:600;
}

li{
  list-style:none;
  align-items:center;
}

a{
  text-decoration:none;
  color:black;
  cursor: pointer;
}

`;

export default Header;
