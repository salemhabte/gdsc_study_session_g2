import './new.css'

const member=["Abebe","Kebede","Biruk","Haile","John","Mercy","Habtamu","Abel","Rediet","Kelem"];
function Greeting(){
    
    return (
   
    <div className="Greeting" class="new" >
        
        {member.map((member)=>{
            return<h1>{member}</h1>})  }
        
    </div>);
}
export default Greeting
