import Message from "./Message";
import { FoodTable } from "./components/FoodTable"


function App(){
  return <div>
            <div>
            <Message/>
            </div>
            <div>
            <FoodTable/>
            </div>
          </div>;
}

export default App;