import './App.css'

const member=["Abebe","Kebede","Biruk","Haile","John","Mercy","Habtamu","Abel","Rediet","Kelem"];
 function App(){
    
     return (
   
    <div className="Greeting" >
        
        {member.map((member)=>{
             return<h1>{member}</h1>})  }
        
    </div>);
}
 export default App
