import './CreatePark.css'

export default function CreatePark() {

    return (
        <div className="outer-container">
        <div className="create-container">
            <h2>Add a Park</h2>
            <form className="form create-form" action="">
                <label for="name">Name of Park</label>
                <input type="text" id="name" name="name" placeholder="Name of Park" required />

                <label for="continent">Choose a continent:</label>
                <select id="continent" name="continent" required>
                    <option value="--Choose a continent--">--Choose a continent--</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia/Oceania">Australia/Oceania</option>
                </select>

                <label for="country">Country</label>
                <input type="text" id="country" name="country" placeholder="Country" required />

                <label for="imageUrl">Image</label>
                <input type="url" id="imageUrl" name="imageUrl" placeholder="Image" required />

                <label for="website">Website</label>
                <input type="url" id="website" name="website" placeholder="Website" />

                <label for="info">Information about the park:</label>
                <textarea id="info" name="info" rows="10" cols="25" placeholder="Tell us something about this park"></textarea>
                
                <input type="submit" className="btn submit" value="Add" />
            </form>
        </div>
        </div>
    );
};