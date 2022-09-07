import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {
    
    const [groupedEmployees, setGroupedEmployees] = useState();

    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">

                </div>
            </div>
        </header>
    );
}

export default GroupedTeamMembers;