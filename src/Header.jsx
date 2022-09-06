const Header = ({selectedTeam, teamMemebersCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <>
                    <h1>Team Memmbers Allocation</h1>
                    <h3>{selectedTeam} contains: {teamMemebersCount}</h3>
                    </>
                </div>
            </div>
        </header>
    );
}

export default Header