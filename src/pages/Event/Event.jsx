import React from 'react'
import './Event.css'
import Logo from "../../imgs/logo1.png";
import Sidebar from '../../components/Sidebar';

function Event() {
  return (

    <div className='event'>
            <h1>Event Details</h1>

              <div className="container-xl px-4 mt-4">
        {/* Account page navigation*/}

        <div className="row">
          <div className="col-xl-4">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Logo</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img className="img-account-profile  mb-2" src={Logo} alt="" />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                {/* Profile picture upload button*/}
                <input className="form-control" id="inputPhone" type="file" placeholder="Enter Event Affiche" defaultValue="" />
              </div>
              
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Event Details</div>
              <div className="card-body">
                <form>
                  {/* Form Group (Email)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmail">Email</label>
                    <input className="form-control" id="inputEmail" type="email" placeholder="Enter Email Address" defaultValue="tdd@gmail.com" />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (Date)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputDate">Date</label>
                      <input className="form-control" id="inputDate" type="date" placeholder="Enter Event Date" defaultValue="15/06/2023" />
                    </div>
                    {/* Form Group (Time)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputTime">Time</label>
                      <input className="form-control" id="inputTime" type="time" placeholder="Enter Event Time" defaultValue="09:00" />
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Location</label>
                      <input className="form-control" id="inputLocation" type="text" placeholder="Enter Event location" defaultValue="San Francisco, CA" />
                    </div>
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Description</label>
                      <input className="form-control" id="inputPhone" type="text" placeholder="Enter Event Description" defaultValue="Start Bootstrap" />
                    </div>
                    
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputSlogon">Slogon</label>
                    <input className="form-control" id="inputSlogon" type="email" placeholder="Enter Event Slogon" defaultValue="slogon" />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (Affiche)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Affiche</label>
                      <input className="form-control" id="inputPhone" type="file" placeholder="Enter Event Affiche" defaultValue="" />
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputVideo">Video</label>
                      <input className="form-control" id="inputVideo" type="text" name="Video" placeholder="Enter Event Video" defaultValue="" />
                    </div>
                  </div>
                  {/* Save changes button*/}
                  <button className="btn btn-primary" type="button">Save changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 )
}

export default Event