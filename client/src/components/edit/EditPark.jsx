import { useEffect, useState } from 'react';
import './EditPark.css'
import { useParams } from 'react-router';
import { wakeparkService } from '../../services/wakeparksService';
import { useNavigate } from 'react-router';

export default function EditPark() {
    const navigate = useNavigate();
    const {parkId} = useParams();
    const [park, setPark] = useState({});

    useEffect(() => {
        wakeparkService.getOne(parkId)
            .then(setPark)
    }, [parkId]);

    const formAction = async (formData) => {
        const parkData = Object.fromEntries(formData);
        await wakeparkService.edit(parkId, parkData); 
        navigate(`/wakeparks/${parkId}/details`);
    }

    return (
        <div className="outer-container">
        <div className="edit-container">
            <h2>Edit Park Information</h2>
            <form className="form edit-form" action={formAction}>
                <label htmlFor="name">Name of Park:</label>
                <input type="text" id="name" name="name" defaultValue={park.name} placeholder="Name of Park" required />

                <label htmlFor="continent">Choose a continent:</label>
                <select id="continent" name="continent" value={park.continent} required>
                    <option value="--Choose a continent--">--Choose a continent--</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia/Oceania">Australia/Oceania</option>
                </select>

                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" defaultValue={park.country} placeholder="Country" required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" defaultValue={park.address} placeholder="Address" required />

                <label htmlFor="mainImageUrl">Image:</label>
                <input type="url" id="mainImageUrl" name="mainImageUrl" defaultValue={park.mainImageUrl} placeholder="Main Image" required />

                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl1" defaultValue={park.imageUrl1} placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl2" defaultValue={park.imageUrl2} placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl3" defaultValue={park.imageUrl} placeholder="Add Another Image" />

                <label htmlFor="website">Website:</label>
                <input type="url" id="website" name="website" defaultValue={park.website} placeholder="Website" />

                <label htmlFor="info">Information about the park:</label>
                <textarea id="info" name="info" rows="10" cols="25" defaultValue={park.info} placeholder="Tell us something about this park"></textarea>
                
                <input type="submit" className="btn submit" defaultValue="Edit" />
            </form>
        </div>
        </div>
    );
};