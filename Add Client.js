import React, {useState}from "react"

export default function AddClient(){

    return(
        <div className="container">
             
            <button class="btn btn-success btn-sm text-right" type="+Add button">  
                    +Add button 
                </button>  
            
            <form>

                
            <div class="form-row">
            <div class="form-group col-md-6">
                 <label for="inputClient Name">Clients Name*:</label>
                <input type="name" class="form-control" id="inputClient Name" placeholder="Enter Client Name">
            </input>
            </div>

            <div class="form-group col-md-6">
                <label for="inputPhone">Phone*:</label>
                <input type="text" class="form-control" id="inputPhone" placeholder="Enter Phone number">
             </input>
             </div>
            </div>



        <div class="form-row">
         <div class="form-group col-md-6">
            <label for="inputEmail4">Email*:*</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Email">
            </input>
            </div>

        <div class="form-group col-md-6">
            <label for="inputAddres">Addres</label>
            <input type="text" class="form-control" id="inputAddres" placeholder="Enter Address">
            </input>
             </div>
            </div>


         <div class="form-row">
         <div class="form-group col-md-6">
            <label for="input Discription">Discription :</label>
            <input type="text" class="form-control" id="inputDiscription" placeholder="Enter Discription">
        </input>
        </div>


        </div>
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}