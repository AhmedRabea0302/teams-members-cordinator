import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Employeees from './Employees'
import NotFound from './NotFound'
import GroupedTeamMembers from './GroupedTeamMembers'

function App() {
  const [count, setCount] = useState(0)
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || [
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
          teamName: "TemployeeseamD"
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

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);
  
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

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
          console.log(employees)
  }


  return (
    <div>
      <Router>
        <Nav />
        <Header 
            selectedTeam={selectedTeam}
            teamMemebersCount={employees.filter(emp => emp.teamName == selectedTeam).length}
        />

        <Routes>
            <Route 
                path='/' 
                element={
                    <Employeees 
                        employees={employees}
                        selectedTeam={selectedTeam}
                        count={count}
                        handleCardClick={handleCardClick}
                        handleSelectedTeamChange={handleSelectedTeamChange}
                    />} 
            ></Route>

            <Route
                path='/grouped-team-members'
                element={
                    <GroupedTeamMembers 
                        employees={employees}
                        selectedTeam={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                    />
                }
            ></Route>

            <Route path='*' element={<NotFound />}></Route>
        </Routes>

        <Footer />

      </Router>
    </div>
  )
}

export default App
