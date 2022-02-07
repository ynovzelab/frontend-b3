import Header from "../components/Header";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <footer>
                <p>This is a footer</p>
            </footer>
        </>
    );
}

export default MainLayout;
