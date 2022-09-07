import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setSelectedTeam }) => {

    
    const GroupTeamMembers = () => {
        let teams = [];
        
        let teamAMembers = employees.filter(emp => (emp.teamName === 'TeamA'));
        let teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam == 'TeamA' ? false : true };
        teams.push(teamA);

        let teamBMembers = employees.filter(emp => (emp.teamName === 'TeamB'));
        let teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam == 'TeamB' ? false : true };
        teams.push(teamB);

        let teamCMembers = employees.filter(emp => (emp.teamName === 'TeamC'));
        let teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam == 'TeamC' ? false : true };
        teams.push(teamC);

        let teamDMembers = employees.filter(emp => (emp.teamName === 'TeamD'));
        let teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam == 'TeamD' ? false : true };
        teams.push(teamD);

        return teams
    }
    
    const handleTeamClick = (e) => {
        let clickedteam = e.currentTarget.id;
        let transformedgroupData = groupedEmployees.map((team) => 
            (team.team == clickedteam) ? {...team, collapsed: !team.collapsed} : team
        );

        setGroupedEmployees(transformedgroupData);
        setSelectedTeam(clickedteam);
    }

    const [groupedEmployees, setGroupedEmployees] = useState(GroupTeamMembers());

    return (
        <main className="container">

            {
                groupedEmployees.map(item => {
                    return (
                        <div key={item.team} className="card mt-3" style={{ cursor: "pointer" }}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>Team Name: {item.team}</h4>
                            <div id={`collapse_${item.team}`} className={`${item.collapsed == true ? 'collapse' : ''}`}>
                            {item.members.map(mem => (
                                    <div key={mem.fullName} className="mt-2">
                                        <h5 className="card-title mt-2">
                                            Full Name: {mem.fullName}
                                        </h5>

                                        <p>Designation: {mem.designation}</p>
                                    </div>
                                )
                            )}
                            </div>
                        </div>
                    
                    );
                })
            }
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">

                </div>
            </div>
        </main>
    );
}

export default GroupedTeamMembers;