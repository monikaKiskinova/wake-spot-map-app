import { useNavigate } from 'react-router';

import './CreatePark.css'
import { useCreatePark } from '../../api/wakeparkApi';

export default function CreatePark() {
    const navigate = useNavigate(); 
    const {createPark} = useCreatePark();

    const submitAction = async (formData) => {
        const parkData = Object.fromEntries(formData);
        await createPark(parkData);
        navigate('/wakeparks');
    }

    return (
        <div className="outer-container">
        <div className="create-container">
            <h2>Add a Park</h2>
            <form className="form create-form" action={submitAction}>
                <label htmlFor="name">Name of Park:</label>
                <input type="text" id="name" name="name" placeholder="Name of Park" required />

                <label htmlFor="continent">Choose a continent:</label>
                <select id="continent" name="continent" required>
                    <option value="--Choose a continent--">--Choose a continent--</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia/Oceania">Australia/Oceania</option>
                </select>

                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" placeholder="Country" required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Address" required />

                <label htmlFor="imageUrl">Image:</label>
                <input type="url" name="mainImageUrl" placeholder="Main Image" required />

                <label htmlFor="imageUrl">Image:</label>
                <input type="url" name="imageUrl" placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" name="imageUrl" placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" name="imageUrl" placeholder="Add Another Image" />

                <label htmlFor="website">Website:</label>
                <input type="url" id="website" name="website" placeholder="Website" />

                <label htmlFor="info">Information about the park:</label>
                <textarea id="info" name="info" rows="10" cols="25" placeholder="Tell us something about this park"></textarea>
                
                <input type="submit" className="btn submit" value="Add" />
            </form>
        </div>
        </div>
    );
};