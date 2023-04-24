import React, {useState}from "react"

export default function Addrepair(){

    return(
        <div className="container">
             
            <button class="btn btn-success btn-sm text-right" type="+Add button">  
                    +Add button 
                </button>  
            
            <form>

                
            <div class="form-row">
            <div class="form-group col-md-6">
                 <label for="inputEmail4">Name*</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Repair Name">
            </input>
            </div>

            <div class="form-group col-md-6">
                <label for="inputPassword4">Category</label>
                <input type="text" class="form-control" id="inputPassword4" placeholder="Enter Category">
             </input>
             </div>
            </div>



        <div class="form-row">
         <div class="form-group col-md-6">
            <label for="inputEmail4">Type*</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Repair Type">
            </input>
            </div>

        <div class="form-group col-md-6">
            <label for="inputPassword4">Client</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Enter Client Name">
            </input>
             </div>
            </div>


         <div class="form-row">
         <div class="form-group col-md-6">
            <label for="inputEmail4">Techniton*</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Tecnition">
        </input>
        </div>


            <div class="form-group col-md-6">
      <label for="inputPassword4">Serial Number</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Enter Serial Number">
        </input>
    </div>
  </div>

                    <div class="col-md-6">
                    
                    <label for="Repair model"> Model*:</label>
                    <input type="text" class="form-control" id=" Repair model" placeholder="Enter Repair Model"/>    
                
                </div>

                <div class="col-md-6">
                    
                    <label for="Repair problem"> Problem*: </label>
                    <input type="text" class="form-control" id=" Problem" placeholder="Type here Problem"/>    
                
                </div>

                <div class="form-group col-md-6">
                    
                    <label for="date"> Expected fixed date*: </label>
                    <input type="text" class="form-control" id="date " placeholder="DD/MM/YYY"/>    
                
                </div>

                <div class=" col-md-6">
                    
                    <label for="Repair picture"> Picture*: </label>
                    <input type="text" class="form-control" id=" Repair picture" placeholder="uplopad picture"/>    
                
                </div>

                <div class=" col-md-6">
                    
                    <label for="send SMS"> Send SMS Automatically On status change*: </label>
                    <input type="text" class="form-control" id=" srnd SMS" placeholder="--Choose option--"/>    
                
                </div>
                <div class=" col-md-6">
                    
                    <label for="Send Email"> Send email Automatically On status change*: </label>
                    <input type="text" class="form-control" id=" Send emial" placeholder="--Choose option--"/>    
                
                </div>
                <div class=" col-md-6">
                    
                    <label for="Repair status"> status*: </label>
                    <input type="text" class="form-control" id=" Repair status" placeholder="--Select Status--"/>    
                
                </div>





               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}