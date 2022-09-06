import { useState } from "react";
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'

const Employeees = () => {
    const [selectedTeam, setSelectedTeam] = useState('TeamA');
    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
        },
        {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
        },
        {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
        },
        {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
        }
    ]);
    
    const handleSelectedTeamChange = (e) => {
        setSelectedTeam(e.target.value);
    }

    const handleCardClick = (e) => {
        console.log(e.currentTarget.id)
        const transformedEmployee = 
            employees.map(employee => 
                employee.id == parseInt(e.currentTarget.id) ? 
                    (employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee , teamName: selectedTeam}
                : employee);

            setEmployees(transformedEmployee);
    }

    return (
        <main className="container">
            {/* Teams Drop down */}
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

            {/* All Members */}
            <div className="row justify-content-center">
                <div className="col-8  mb-3 mt-3 ">
                    <div className="card-collection">
                        {
                            employees.map(employee => (
                                <div id={employee.id} 
                                    key={employee.id}
                                    className={`card m-2 ${employee.teamName == selectedTeam ? 'selected' : ''}`} 
                                    style={{ cursor: "pointer" }}
                                    onClick={handleCardClick}
                                >
                                    <img 
                                        src={employee.gender == 'male' ? maleProfile : femaleProfile} 
                                        className="card-img-top"    
                                    />
                                    <div className="card-body">
                                        <h5 className="cad-title">Full Name: {employee.fullName}</h5>
                                        <p className="card-text">
                                            <b>Designation: {employee.designation}</b>
                                        </p>
                                    </div>
                                </div>    
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </main>
    );
}

export default Employeees;