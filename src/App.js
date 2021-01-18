import logo from './logo.svg';
import './App.css';
import ContactCard from './contactcard.js'
function App() {
  return (
    <div className="App">
      <ContactCard 
      contact={{imgurl:"src/media/cat1.jpg",name:"Mr.cat1",phone:"phone number 1",email:"email1"}}
      />
      <ContactCard 
      contact={{imgurl:"src/media/cat2.jpg",name:"Mr.cat2",phone:"phone number 2",email:"email2"}}
      />
      <ContactCard 
      contact={{imgurl:"src/media/cat3.jpg",name:"Mr.cat3",phone:"phone number 3",email:"email3"}}
      />
      <ContactCard 
      contact={{imgurl:"src/media/cat14.jpg",name:"Mr.cat4",phone:"phone number 4",email:"email4"}}
      />
      </div>
  );
}

export default App;
