import Header from './component/Header'
import Tasks from './component/Tasks'
function App() {
  return (
    <div className="container">
     <Header title='React Task-Tracker'/>
     <Tasks/>
    </div>
  );
}

export default App;
 