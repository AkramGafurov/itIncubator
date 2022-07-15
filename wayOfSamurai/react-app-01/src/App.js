import logo from './logo.svg';
import './App.css';

 const App =  () => {
  return (
    <div>
      <div><Header/></div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, soluta!</div>
      <p>Lorem ipsum dolor.</p>
    </div>

  );
}
const Header = () => {
   return(
     <div>
       <a>Home</a>
       <a>New feed</a>
       <a>Messages</a>
     </div>
    )
}

// export default Header;
export default App;
