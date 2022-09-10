const Nav = () => {
  return (
    <>
      <div className="d-flex">
        <a href="/">
          <h4 className="m-1">Manage Players</h4>
        </a>
        <span className="m-1">
          <h4>|</h4>
        </span>
        <a href="/status/game/1">
          <h4 className="m-1">Manage Players Status</h4>
        </a>
      </div>
    </>
  );
};

export default Nav;
