import Logo from  "../assets/download.svg";
import IndLogo from "../assets/india.png"


export const Navbar=()=>{
    return <div className="flex justify-around bg-yellow-500 h-20">
    

    <div className="flex justify-evenly gap-4 items-center">

        <img className="w-40 self-center" src={Logo} alt="" />  
        <ul className="flex  items-center justify-center gap-3 ">
            <li >Payments</li>
            <li>Payments</li>
            <li>Payments</li>
            <li>Payments</li>
            <li>Payments</li>
            <li>Payments</li>
        </ul>

        

    </div>
    <div className="gap-4 flex justify-stretch items-center">
       <div className="flex gap-1"> 
       <img  className="w-10 h-10" src={IndLogo} alt="" />
         <p className="self-center">India</p>
       </div>

       <button  className=" w-20 text-blue-500 border-solid border-black border-2 p-2 rounded-lg">Login</button>

       <button   className=" w-36   text-black bg-green-600 border-solid border-black border-2 p-2 rounded-lg ">Signup --- </button>
    </div>
    

    </div>
}