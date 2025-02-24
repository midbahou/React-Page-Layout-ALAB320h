

function Header() {

    return (
        <div className="Header">
            <header className="header-app" style={styles}>Employee Directory</header>
        </div>
    )
}

const styles = {
    display: "flex",
    justifyContent: "center",
    border: "3px solid rgb(82, 105, 203)"
}

export default Header;