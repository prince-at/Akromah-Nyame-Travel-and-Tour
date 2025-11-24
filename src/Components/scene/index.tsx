import Logo from "../../assets/Logo.png"
import Link from "./Link";

type Props = {
    selectedPage: string,
    setSelectedPage: (value: string) => void,
}

const index = ({
    selectedPage,
    setSelectedPage,
}: Props) => {
    const flexBetween = "flex items-center justify-between";
  return (
  <nav>
    <div className="mainContainer">
        <div className="firstInnerContainer" >
            <div className="secondInnerContainer">
                <img alt='logo' src={Logo} />
                <div className="lastInnerContainer" >
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link pages="Home" selectedPage= {selectedPage} 
                        setSelectedPage= {setSelectedPage}/>
                        <Link pages="About"
                        selectedPage= {selectedPage} 
                        setSelectedPage= {setSelectedPage}
                        />  
                        <Link pages="Services"
                        selectedPage= {selectedPage} 
                        setSelectedPage= {setSelectedPage}
                        />  
                        <Link pages="Blog"
                        selectedPage= {selectedPage} 
                        setSelectedPage= {setSelectedPage}
                        /> 
                        <Link pages="Contact Us"
                        selectedPage= {selectedPage} 
                        setSelectedPage= {setSelectedPage}
                        />  

                    </div>
                    <div> <a href="#">sign in</a></div>
                    <div  > Book Appointment</div>

                </div>

            </div>
        </div>

    </div>
   </nav>
  )
  
}

export default index