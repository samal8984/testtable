import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
const [res, setRes]= useState(false)



   const clickbtn =()=>{
   

    document.querySelector('.colordiv').style.display= 'block'
   }
   const clickfirst=()=>{
    document.querySelector('.mainimage2').style.display= 'block'
    document.querySelector('.mainimage1').style.display= 'none'

    document.querySelector('.mainimage3').style.display= 'none'

    document.querySelector('.mainimage4').style.display= 'none'

   }
   const clicksecond=()=>{
    document.querySelector('.mainimage2').style.display= 'none'
    document.querySelector('.mainimage1').style.display= 'block'

    document.querySelector('.mainimage3').style.display= 'none'

    document.querySelector('.mainimage4').style.display= 'none'

    
   }
  
   const clickthird=()=>{
    document.querySelector('.mainimage2').style.display= 'none'
    document.querySelector('.mainimage1').style.display= 'none'

    document.querySelector('.mainimage3').style.display= 'block'

    document.querySelector('.mainimage4').style.display= 'none'
    
   }
   const clickfourth=()=>{
    document.querySelector('.mainimage2').style.display= 'none'
    document.querySelector('.mainimage1').style.display= 'none'

    document.querySelector('.mainimage3').style.display= 'none'

    document.querySelector('.mainimage4').style.display= 'block'
    
   }

   const closeclick=()=>{
    document.querySelector('.colordiv').style.display = 'none'
   }
  
  
  

  return (


    <div className="App"  >
   <div className='home' >
     

  


   <div className='btndiv'>
    
      <div className='btn'>
      <div className="circle"  onClick={clickbtn}></div>
       
      </div>
      <div className='colordiv'>

        <span style={{color:'red', cursor:'pointer'}} onClick={closeclick}>X</span>
      <div className='shades'>
        <div>
          <img style={{cursor:'pointer', width:'100px', height:'50px'}}  onClick={clickfirst} src='/images/pic1.PNG' />
        </div>
        <div>
        <img  style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic5.PNG' onClick={clicksecond} />
        </div>

        <div>
        <img  style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic3.PNG' onClick={clickthird}/>
        </div>

        <div>
        <img style={{cursor:'pointer', width:'100px', height:'50px'}} src='/images/pic4.PNG' onClick={clickfourth}/>
        </div>


      </div>

      </div>

    </div>

    <div  className='imagediv'>
  
 

  <img src='/images/Desk B.png' className='mainimage1' id='mainimage1'
   style={{height:'500px', width:'600px'}}  />

<img src='/images/Desk A.png' className='mainimage2' id='mainimage2'
   style={{height:'500px', width:'600px'}}  />
    <img src='/images/Desk C.png' className='mainimage3'  id='mainimage3'
   style={{height:'500px', width:'600px'}}  />
    <img src='/images/Desk D.png' className='mainimage4' id='mainimage4'
   style={{height:'500px', width:'600px'}}  />

</div>


   </div>

 
 

  
 


    </div>
  );
}

export default App;
