import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PreNavbar from './component/PreNavbar.jsx';
import NavBar from './component/NavBar.jsx';
import Carsul from './component/Carsul.jsx';
import CourseList from './component/CourseList.jsx';
import JavaCourses from './component/JavaCourses.jsx';
import RecommendedTopics from './component/RecommendedTopics.jsx';
import DatabaseCourses from './component/DatabaseCourses.jsx';
import QueryData from './component/QueryData.jsx';
import Footer from './component/Footer.jsx';


function App() {
  return (
    <div className="App">
     <PreNavbar/>
     <NavBar/>
     <Carsul/>
     <br></br>
     <p className="h3 text-dark" style={{margin: "0 0 0 1.5rem"}}>Our Most Popular Courses</p>
     <br></br>
     <CourseList />
     <br></br>
     <p class="h3 text-dark" style={{margin: "0 0 0 1.5rem"}}>Featured courses in Java Programming</p>
     <br></br>
     <JavaCourses/>
     <br></br>
     <p class="h3 text-dark" style={{margin: "0 0 0 1.5rem"}}>Topics recommended for you</p>
     <br></br>
     <RecommendedTopics/>
     <br></br>
     <p class="h3 text-dark" style={{margin: "0 0 0 1.5rem"}}>Top courses in Database Design & Development</p>
     <br></br>
     <DatabaseCourses/>
     <br></br>
     <p class="h3 text-dark" style={{margin: "0 0 0 1.5rem"}}>For Any Query You Can Write TO Us</p>
     <br></br>
     <QueryData/>
     <br></br>
     <Footer/>    
    </div>
  );
}

export default App;

{/* <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br /> */}
