import './App.css';
import Create from './component/Create';
import  Read  from './component/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Update } from './component/Update';

function App() {
  return (
     
    <div className="App">
      <h1>React <small class="text-muted">CRUD Operation</small></h1>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">Home Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="http://localhost:3000/Read">Report</a>
        </li>
        <li class="nav-item">
        
          <a class="nav-link" href="http://localhost:3000/Update">Update</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Create/>}/>
       <Route path="/Read" element={<Read/>}/>
       <Route path="/Update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
