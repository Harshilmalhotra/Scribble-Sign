export default function Navbar() {
    return (
        <>
       <Navbar >
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
       </Navbar>
        </>
    );
    }