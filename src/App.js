import './App.css';
import logo from './logo.png'
import bg from './bgFreight.jpg'
import test from './testimoni.png'

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className='chevron' src={chevronDown} alt="Chevron Down" />
      </>
    }
    className='item'
    buttonProps={{
      className: ({ isEnter }) =>
        `itemBtn ${isEnter && 'itemBtnExpanded'}`,
    }}
    contentProps={{ className: 'itemContent' }}
    panelProps={{ className: 'itemPanel' }}
  />
);

function App() {

    const listMenu = [
        {
            menu: 'Home',
            link: "#"
        },
        {
            menu: 'Service',
            link: "#Service"
        },
        {
            menu: 'About',
            link: "#About"
        },
        {
            menu: 'Solution',
            link: "#Solution"
        },
        {
            menu: 'Tracking',
            link: "#Tracking"
        }
    ]

    const listCardFirst = [
        {
            nomor: "01",
            title: "Real-Time Tracking",
            text: "Our real-time tracking platform gives you a live, unified view of your entire supply chain, powered by advanced technology to predict discruptions before they happen."
        },
        {
            nomor: "02",
            title: "Global Network",
            text: "Our robust global network gives you a direct, frictionless connection to markets worldwide, powered by an extensive web of trusted partners and strategically placed hubs."
        },
        {
            nomor: "03",
            title: "Dedicated Support",
            text: "Your business is unique, and so is our support. That's why every client is paired with a dedicated account manager who acts as a direct extension of your team."
        },
    ]

    const listCardSecond = [
        {
            img: bg,
            title: "Global Freight Forwarding",
            text: "Navigate the complexities of international trade with our expert freight forwarding service"
        },
        {
            img: bg,
            title: "Intelligent Warehousing",
            text: "Navigate the complexities of international trade with our expert freight forwarding service"
        },
        {
            img: bg,
            title: "Domestic Trucking & FTL/LTL",
            text: "Navigate the complexities of international trade with our expert freight forwarding service"
        },
    ]

    const listShip = [
        {
            title: '10+',
            text: 'years of experience'
        },
        {
            title: '98%',
            text: 'cargo safety rate'
        },
        {
            title: '1K+',
            text: 'client trusted'
        },
        {
            title: '100+',
            text: 'container per day'
        },
    ]

    const partner1 = [test, test]

    return (
        <div className="App">
            <header>
                <div className='logoDiv'>
                    <img src={logo} width={50} height={50}/>
                    <p>Freight</p>
                </div>

                <div className='menuTopbar'>
                    {listMenu.map((item, index) => 
                        <a key={index} href={item.link} className='colorSecondary'>
                            {item.menu}
                        </a>
                    )}
                </div>

                <div className='btnTopbar'>
                    <button className='btnOrange'>Contact Us</button>
                </div>
            </header>

            <section className='hero'>
                <div className='heroTop'>
                    <h1>Global Logistics Partner for Seamless Supply Chains</h1>
                </div>

                <div className='heroBottom'>
                    <div className='hbl'>
                        <p>Hardnessing advanced technology to provide end-to-end solution, from last-mile delivery to international freight forwading. Experience real-time visibility and unparalleled reliability.</p>
                        <div>
                            <button className='btnWhite'>Get a Free Quote</button>
                            <button className='btnWhiteBorder'>View Our Services</button>
                        </div>
                    </div>

                    <div className='hbr'>
                        <p className='k1'>1K+</p>
                        <p>clients trusted</p>
                        <div>
                            <img src={logo} width={24} height={24}/>
                            <img src={logo} width={24} height={24}/>
                            <img src={logo} width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='benefit'>
                <div className='secDesc'>
                    <span>BENEFIT</span>
                    <div>
                        <div>
                            <h2>We Believe we can be tour best logistics partner.</h2>
                        </div>
                        <div>
                            <p className='colorSecondary' style={{ fontWeight: '500' }}>In a world of complex supply chains, we believe that great logisctics is the backbone of great business. We go beyond simply moving goods-we provide the strategic tools and partnership you need to gain a competitive edge.</p>
                        </div>
                    </div>
                </div>

                <div className='listCard'>
                    {listCardFirst.map((item, index) => 
                        <div className='cardFirst' key={index}>
                            <span>{item.nomor}</span>
                            <p className='titleCard colorPrimary'>{item.title}</p>
                            <p className='colorSecondary'>{item.text}</p>
                        </div>
                    )}
                </div>
            </section>

            <section className='ourservice'>
                <div className='secDesc'>
                    <span>OUR SERVICE</span>
                    <div>
                        <div>
                            <h2>Our Comprehensive Logistics Solution</h2>
                        </div>
                        <div>
                            <p className='colorSecondary' style={{ fontWeight: '500' }}>We are a full-service logistics provider offering end-to-end solutions, including fulfillment, last-mile delivery, and returns management. We cater to industries such as e-commerce, retail, and electronics with our advanced software and global network.</p>
                        </div>
                    </div>
                </div>

                <div className='listCard'>
                    {listCardSecond.map((item, index) => 
                        <div className='cardSecond' style={{ backgroundImage: `url(${item.img})` }} key={index}>
                            {/* <img src={bg}/> */}
                            <div>
                                <p className='titleCard colorPrimary'>{item.title}</p>
                                <p className='colorSecondary'>{item.text}</p>
                            </div>
                        </div>
                    )} 
                </div>
            </section>

            <section className='aboutus'>
                <div className='secDesc' style={{ marginBottom: '24px' }}>
                    <span>ABOUT US</span>
                </div>
                <p className='big'>We Believe that great logistics is the backbone of great business. Our story began with a simple idea: 
                    <span className='colorOrange'> to simply the complexities</span> of global supply chains and empower businesses 
                    <span className='colorOrange'> with technology-driven, transparent</span> and 
                <span className='colorOrange'> reliable shipping</span> solutions.</p>

                <div className='ship'>
                    <div>
                        {listShip.map((item, index) => 
                            <div key={index}>
                                <p className='bbig'>{item.title}</p>
                                <p className='btext'>{item.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className='ourpartner'>
                <div>
                    <div className='secDesc' style={{ width: 'max-content' }}>
                        <span>OUR PARTNER</span>
                        <div style={{ width: 'max-content' }}>
                            <div style={{ width: 'auto' }}>
                                <h2 style={{ marginRight: '0' }}>Trusted by Industry Leaders</h2>
                            </div>
                        </div>
                    </div>

                    <div className='listPartner'>
                        <div>
                            {partner1.map((item, index) => <img src={item} key={index}/>)}
                        </div>
                        <div>
                            {partner1.map((item, index) => <img src={item} key={index}/>)}
                        </div>
                        
                    </div>
                </div>
                <div className='listPartner'>
                    <div>
                        {partner1.map((item, index) => <img src={item} key={index}/>)}
                    </div>
                    <div>
                        {partner1.map((item, index) => <img src={item} key={index}/>)}
                    </div>
                    <div>
                        {partner1.map((item, index) => <img src={item} key={index}/>)}
                    </div>
                        
                </div>

            </section>

            <section className='testimonial'>
                <div className='secDesc'>
                    <span>TESTIMONIAL</span>
                    <div>
                        <div>
                            <h2>What our client say about out services</h2>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>

                <div className='listCard'>
                    {listCardFirst.map((item, index) => 
                        <div className='cardFirst' key={index}>
                            <span>{item.nomor}</span>
                            <p className='titleCard colorPrimary'>{item.title}</p>
                            <p className='colorSecondary'>{item.text}</p>
                        </div>
                    )}
                </div>
            </section>

            <section className='faq'>
                <div>
                    <div className='secDesc' style={{ width: 'max-content' }}>
                        <span>FAQ</span>
                        <div style={{ width: 'max-content' }}>
                            <div style={{ width: 'auto' }}>
                                <h2 style={{ marginRight: '0' }}>Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%' }}>
                        <img src={bg} style={{ width: '100%', borderRadius: '24px' }}/>
                    </div>
                </div>

                <div>

                <Accordion transition transitionTimeout={250}>
                    <AccordionItem header="What types of shipping services do you offer?" initialEntered>
                        We provide domestic and international shipping, freight forwading, express courier, warehousing, and supply chain solutions. We also handle spacial cargo such as perishable good, fragile items, and high-value shipments.
                    </AccordionItem>

                    <AccordionItem header="How can I track my shipment?">
                        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                        erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
                    </AccordionItem>

                    <AccordionItem header="What is your average delivery time?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit amet
                        ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>

                    <AccordionItem header="Do you handle customs clearance for international shipments?">
                        Suspendisse massa risus, pretium id interdum in, dictum sit amet
                        ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>

                    <AccordionItem header="What items are prohibited from shipping">
                        Suspendisse massa risus, pretium id interdum in, dictum sit amet
                        ante. Fusce vulputate purus sed tempus feugiat.
                    </AccordionItem>
                    </Accordion>

                </div>
            </section>

            <footer>
                <div className='footerTop'>
                    <div className='ftl'>
                        <p className='ftitle'>Global Logistics Partner for Seamless Supply Chains</p>
                        <p className='ftext'>Got a Logistic Service?</p>
                        <button className='btnOrange'>Contact Us</button>
                    </div>
                    <div className='ftr'>
                        <div>
                            <p>Menu</p>
                            <p>Menu</p>
                            <p>Menu</p>
                        </div>
                        <div>
                            <p>Menu</p>
                            <p>Menu</p>
                            <p>Menu</p>
                        </div>
                        <div>
                            <p>Menu</p>
                            <p>Menu</p>
                            <p>Menu</p>
                        </div>
                    </div>
                </div>

                <div className='footerBottom'>
                    <div>   
                        <p>English</p>
                    </div>
                    <div>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <img src={logo}/>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default App;
