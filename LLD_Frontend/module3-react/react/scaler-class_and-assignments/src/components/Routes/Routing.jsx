import { Link, Route, Routes } from 'react-router-dom';

function Routing() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Routing Example</h2>
            <nav>
                <li><Link to='home'>Home Page</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='listing'>Listing</Link></li>
            </nav>
            <Routes>
                <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about/*' element={<About></About>}></Route>
                <Route path='/listing' element={<Listing></Listing>}></Route>
            </Routes>
        </div>
    )
}

function Home() {
return <h3>I am Home</h3>
}

function About() {
    return (<> 
    <h3>I am About</h3>
    <nav>
    <li><Link to='company'>Company</Link></li>
    <li><Link to='founder'>Founder</Link></li>
    </nav>
    <Routes>
        <Route path="company" element={<Company></Company>}></Route>
        <Route path="founder" element={<Founder></Founder>}></Route>
    </Routes>
    </>
    )
}

function Company() {
    return <h3>We are a good firm</h3>
}

function Founder() {
    return <h3>We are nice people!. please fund us.</h3>
}

function Listing() {
    return <h3>I am Listing page</h3>
}

function PageNotFound() {
    return <h3>Page Not Found!</h3>

}

export default Routing