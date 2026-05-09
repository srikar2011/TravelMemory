import React, { useState } from "react";
import { baseUrl } from "../../url";
import axios from "axios";

export default function AddExperience() {
  const [loading, setLoading] = useState(false)
    const [formdata, setFormdata] = useState({
            tripName: "",
            startDateOfJourney: "",
            endDateOfJourney: "",
            nameOfHotels: "",
            placesVisited: "",
            totalCost: 0,
            experience: "",
            image: "",
            tripType: "",
            featured: false,
            shortDescription: ""
    })
    const submitForm = async () => {
  try {
    setLoading(true);

    console.log("Submitting form:", formdata);

    const response = await axios.post(
      `${baseUrl}/api/trip`,
      formdata
    );

    console.log("Success:", response.data);

    alert("Trip added successfully!");

    setFormdata({
      tripName: "",
      startDateOfJourney: "",
      endDateOfJourney: "",
      nameOfHotels: "",
      placesVisited: "",
      totalCost: 0,
      experience: "",
      image: "",
      tripType: "",
      featured: false,
      shortDescription: ""
    });

  } catch (err) {

    console.error("POST Error:", err);

    alert(
      err.response?.data?.message ||
      "Failed to add trip"
    );

  } finally {

    setLoading(false);
  }
};

    if(loading==true){
      return(
        <div>Loading...</div>
      )
    }else{
      return (
        <div style={{ margin: "2%" }}>
          <div className="mb-3">
            <label for="tripName" className="form-label">
              Trip Name
            </label>
            <input
              type="text"
              className="form-control"
              id="tripName"
              placeholder="Add your Trip Name"
              value={formdata.tripName}
              onChange={(e) => setFormdata({...formdata, tripName: e.target.value})}
            ></input>
          </div>
          <div className="mb-3">
            <label for="tripDate" className="form-label">
              Trip Date
            </label>
            <div className="row">
              <div className="col-6">
                <input type="date" className="form-control" id="startDate"
                value={formdata.startDateOfJourney}
                onChange={(e)=> setFormdata({...formdata, startDateOfJourney: e.target.value})}
                ></input>
              </div>
              <div className="col-6">
                <input type="date" className="form-control" id="endDate"
                value={formdata.endDateOfJourney}
                onChange={(e)=> setFormdata({...formdata, endDateOfJourney: e.target.value})}
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="nameOfHotels" className="form-label">
              Name of Hotels
            </label>
            <input
              type="text"
              className="form-control"
              id="nameOfHotels"
              placeholder="Add your Hotel Name"
              value={formdata.nameOfHotels}
            onChange={(e)=> setFormdata({...formdata, nameOfHotels: e.target.value})}
            ></input>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-6">
                <label for="nameOfHotels" className="form-label">
                  Trip Type
                </label>
                <select className="form-select" id="tripType" aria-label="tripType"
                value={formdata.tripType}
                onChange={(e)=> setFormdata({...formdata, tripType: e.target.value})}
                >
                  <option selected value="select">
                    Select One
                  </option>
                  <option value="backpacking">Backpacking</option>
                  <option value="leisure">Leisure</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div className="col-6">
                <label for="totalCost" className="form-label">
                  Total Cost
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalCost"
                  placeholder="99999"
                  value={formdata.totalCost}
                onChange={(e)=> setFormdata({...formdata, totalCost: e.target.value})}
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="placesVisited" className="form-label">
              Places Visited
            </label>
            <input
              type="text"
              className="form-control"
              id="placesVisited"
              placeholder="Delhi, Paris, London, etc."
              value={formdata.placesVisited}
                onChange={(e)=> setFormdata({...formdata, placesVisited: e.target.value})}
            ></input>
          </div>
          <div className="mb-3">
            <label for="featured" className="form-label">
              Featured Trip?
            </label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="true"
                value={true}
                onChange={(e)=> setFormdata({...formdata, featured: JSON.parse(e.target.value)})}
                checked={formdata.featured === true}
              ></input>
              <label>True</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="false"
                value={false}
                onChange={(e)=> setFormdata({...formdata, featured: JSON.parse(e.target.value)})}
                checked={formdata.featured === false}
              ></input>
              <label>False</label>
            </div>
          </div>
          <div className="mb-3">
            <label for="image" className="form-label">
              Image Link
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="http://xyz.com/image.png"
              value={formdata.image}
            onChange={(e)=> setFormdata({...formdata, image: e.target.value})}
            ></input>
          </div>
          <div className="mb-3">
            <label for="shortDescription" className="form-label">
              Short Description
            </label>
            <textarea
              className="form-control"
              id="shortDescription"
              rows="2"
              placeholder="Write Short Description"
              value={formdata.shortDescription}
                onChange={(e)=> setFormdata({...formdata, shortDescription: e.target.value})}
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="experience" className="form-label">
              Experience
            </label>
            <textarea
              className="form-control"
              id="experience"
              rows="5"
              placeholder="Write Complete Details about your experience in the trip."
              value={formdata.experience}
                onChange={(e)=> setFormdata({...formdata, experience: e.target.value})}
            ></textarea>
          </div>
          <div className="mb-3" style={{ textAlign: "center"}}>
            <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>
          </div>
        </div>
      );
    }

  
}
