export function Home() {
    return ( <h1>HOME {localStorage.getItem("name")}</h1> );
}

export default Home;