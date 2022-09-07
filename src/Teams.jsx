const Teams = ({ selectedTeam, handleSelectedTeamChange }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-6  mb-3 mt-3 ">
                <select className="form-select form-lg" value={selectedTeam} onChange={handleSelectedTeamChange}>            
                    <option value="TeamA">TeamA</option>
                    <option value="TeamB">TeamB</option>
                    <option value="TeamC">TeamC</option>
                    <option value="TeamD">TeamD</option>
                </select>
            </div>
        </div>
    );
}

export default Teams;