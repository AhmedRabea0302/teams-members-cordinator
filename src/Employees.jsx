import Teams from './Teams'
import maleProfile from './images/maleProfile.jpg'
import femaleProfile from './images/femaleProfile.jpg'

const Employeees = ({selectedTeam, employees, handleSelectedTeamChange, handleCardClick}) => {

    return (
        <main className="container">
            {/* Teams Drop down */}
            <Teams 
                selectedTeam={selectedTeam} 
                handleSelectedTeamChange={handleSelectedTeamChange} 
            />

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