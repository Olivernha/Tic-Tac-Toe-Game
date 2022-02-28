import React from 'react';

const OverlayForm = () => {
    return (
        <aside className="modal" >
            <h2>Choose your name</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="playername">Player name</label>
                    <input type="text" name="playername" id="playername"/>
                </div>
                <div>
                    <button type="button" className="btn btn-alt">Cancel</button>
                    <button type="submit" className="btn">Confirm</button>
                </div>
            </form>
        </aside>
    );
};


export default OverlayForm;