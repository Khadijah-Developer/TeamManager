const Nav2 = () => {
    return ( 
        <>
              <div className="d-flex">
              <a href="/">
                <h5 className="m-1">List</h5>
              </a>
              <span className="m-1">
                <h5>|</h5>
              </span>
              <a href="/new">
                <h5 className="m-1">Add Player</h5>
              </a>
            </div>
        </>
     );
}
 
export default Nav2;