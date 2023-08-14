import React from 'react'
import './Responsive2.css';
function Responsive2() {
  return (
    
        <div className="container-fluid">
               
      <div className="card-1">
        <div className="row justify-content-center">
            <div className="col-md-10">
        <div className="card-body mt-5">
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Depositer name- " style={{height:'3rem'}}
            />
          </div><br></br>
          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Client name Automatically come- " style={{height:'3rem'}}
            />
          </div><br></br>

          <div className="form-group">
            
            <input 
              type="text"
            className="form-control  "
            placeholder="Amount-" style={{height:'3rem'}}
            />
          </div><br></br>
          <div className="form-group ">
           
            <input type="Date" 
              className="form-control  "
              placeholder="First select date" style={{height:'3rem'}}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
            <input type="text" 
              className="form-control     "
              placeholder="Advance Payment-
               "
             
               style={{height:'3rem',}}
               
            />
            
           
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Remaining payment-"
               style={{height:'3rem' }}
            />
          </div>
          <br></br>
          <div className="form-group  ">
         
            <input type="text" 
              className="form-control  " 
            
              placeholder="Event name-"
               style={{height:'3rem' }}
            />
          </div>
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="Payment details-
              "
            
              style={{height:'6rem',}}
              
           />
           
          
         </div>
          
          <br></br>
          <div className="form-group ">
           
           <input type="text " 
             className="form-control     "
             placeholder="COMPLETE CHART-
              "
            
              style={{height:'6rem',}}
              
           />
           
          
         </div>
          
          <br></br>
          <button id="btn1" className="btn btn-primary" >
            Add
          </button>
        
          

        </div>
</div>
    </div>
      </div>
    </div>
    
  )
}

export default Responsive2;