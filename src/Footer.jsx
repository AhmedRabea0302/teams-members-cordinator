const Footer = () => {

    let today = new Date();

    return (
        <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h6>Team Member allocation app - {today.getFullYear}</h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer