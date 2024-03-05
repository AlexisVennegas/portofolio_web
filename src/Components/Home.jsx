    import React from 'react'
    import ME from '../Assets/Me.png'
    import Info from "../Json/Containers"
    export const Home = () => {

        const [Hover, setHover] = React.useState("info-1")
        
        const ChangeHover = (div) => {
            setHover(div)
        }
        const handleMouseLeave = () => {
            setHover(null);
        };

        const OnclickFunction = (div) => {
            const LateralDiv = document.querySelector('.lateral-div-2')

            if (div === 'info-4') {
                LateralDiv.style = "display: none"
            }
            if (div === 'info-5') {
                LateralDiv.style = "display: flex"
            }
        }

        const InfoData = Info.map((Infos) => (
            <div key={Infos.id} className={`${Infos.className} ${Hover && Hover !== Infos.className ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover(Infos.className)}  onMouseLeave={handleMouseLeave} onClick={() => OnclickFunction(Infos.className)}>
                <p>{Infos.title}</p>
            </div>
        ));
            


    return (
        <section className="section-home">  
            <div className="lateral-div">
           
                {InfoData }
                
            </div>
            <div className='center-div'>
                {/* <img src={ME} alt="Alexis Venegas" /> */}
            </div>
            <div className='lateral-div lateral-div-2'>
                <div className={`info-6 ${Hover && Hover !== 'info-6' ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover('info-6')}   onMouseLeave={handleMouseLeave}>About Me</div>
                <div className={`info-7 ${Hover && Hover !== 'info-7' ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover('info-7')}   onMouseLeave={handleMouseLeave}>Nasa</div>
                <div className={`info-8 ${Hover && Hover !== 'info-8' ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover('info-8')}   onMouseLeave={handleMouseLeave}>FrameWorks</div>
                <div className={`info-9 ${Hover && Hover !== 'info-9' ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover('info-9')}   onMouseLeave={handleMouseLeave}>42</div>
                <div className={`info-10 ${Hover && Hover !== 'info-10' ? 'Hovered' : 'ConcentrateDiv'}`} onMouseEnter={() => ChangeHover('info-10')}   onMouseLeave={handleMouseLeave}>extra</div>
            </div>
        </section>
    )
    }
