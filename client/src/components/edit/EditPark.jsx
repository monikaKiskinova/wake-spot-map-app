import { useParams, useNavigate } from 'react-router';

import './EditPark.css'

import { useEditPark, usePark } from '../../api/wakeparkApi';
import { useCountries } from '../../hooks/useCountries';
import { useEffect } from 'react';

export default function EditPark() {
    const navigate = useNavigate();
    const {parkId} = useParams(); 
    const {park} = usePark(parkId);
    const {editPark} = useEditPark(parkId);
    const { continent, setContinent } = useCountries();
    const { getCountries, countries, setCountries } = useCountries();

    const formAction = async (formData) => {
        const parkData = Object.fromEntries(formData);
        await editPark(parkId, parkData); 
        navigate(`/wakeparks/${parkId}/details`);
    }

    useEffect(() => {
        setContinent(park.continent); 
    },[park.continent])

    useEffect(() => {
        getCountries(continent);
    },[continent])

    return (
        <div className="outer-container">
        <div className="edit-container">
            <h2>Edit Park Information</h2>
            <form className="form edit-form" action={formAction}>
                <label htmlFor="name">Name of Park:</label>
                <input type="text" id="name" name="name" defaultValue={park.name} placeholder="Name of Park" required />

                <label htmlFor="continent">Choose a continent:</label>
                <select onChange={e => {setContinent(e.target.value); park.country = '';}} id="continent" name="continent" value={continent} required>
                    <option value="--Choose a continent--">--Choose a continent--</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia/Oceania">Australia/Oceania</option>
                </select>
                
                <label htmlFor="country">--Choose a country--</label>
                <select id="country" name="country" required>
                    <option value={park.country ? park.country : '--Choose a country--'}>{park.country ? park.country : '--Choose a country--'}</option>
                    {countries?.map(c => c !== park.country ? <option key={c} value={c}>{c}</option> : null)}
                </select>
                
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" defaultValue={park.address} placeholder="Address" required />

                <label htmlFor="mainImageUrl">Image:</label>
                <input type="url" id="mainImageUrl" name="mainImageUrl" defaultValue={park.mainImageUrl} placeholder="Main Image" required />

                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl1" defaultValue={park.imageUrls?.length > 0 ? park.imageUrls[0] : null} placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl2" defaultValue={park.imageUrls?.length > 1 ? park.imageUrls[1] : null} placeholder="Add Another Image" />
                
                <label htmlFor="imageUrl">Image:</label>
                <input type="url" id="" name="imageUrl3" defaultValue={park.imageUrls?.length > 2 ? park.imageUrls[2] : null} placeholder="Add Another Image" />

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