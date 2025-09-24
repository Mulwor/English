const NavbarV2 = () => {
  return (
      <div className="navbar">
          <h3>English</h3>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
            <div className="first-block">Speaking</div>
            <div className="second-block">Writing</div>
            <div className="third-block">Reading</div>
            <div className="fourth-block">Grammar</div>
            <div className="fifth-block">Listening</div>
          </div>
      </div>
    );
};

export default NavbarV2;
