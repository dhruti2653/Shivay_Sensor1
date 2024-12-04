import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation



const LoadCell = () => {


    const products = [
        {
            id: 1,
            image: "/images/single-point-n.jpeg",
            title: "Single Point Platform Load Cell",
            // link: '/loadcell',
        },
        {
            id: 2,
            image: "/images/loadcell-2.png",
            title: "Beam Type Load Cell",
            // link: '/loadindicator',
        },
        {
            id: 3,
            image: "/images/loadcell-3.png",
            title: "Button Type Load Cell",
            // link: '/loadamplifier',
        },
        {
            id: 4,
            image: "/images/compress-load-n.jpeg",
            title: "Compression Load Cell ",
            // link: '/loadaccessories',
        },
        {
            id: 5,
            image: "/images/pan-cakeload-n.jpeg",
            title: "Pan Cake Load Cell ",
            // link: '/loadassembly',
        },
        {
            id: 6,
            image: "/images/s-type-loadcell-n.jpeg",
            title: "S Type Load Cell",
            // link: '/loadstaingauge',
        },
        {
            id: 7,
            image: "/images/loadcell-7.png",
            title: "Double Ended Share Beam Load Cell",
            // link: '/loadstaingauge',
        },
        {
            id: 8,
            image: "/images/loadcell-8.png",
            title: "Single Ended Share Beam Load Cell",
            // link: '/loadstaingauge',
        },
        {
            id: 9,
            image: "/images/loadcell-9.jpg",
            title: "Web Tension Load Cell",
            // link: '/loadstaingauge',
        },
        {
            id: 10,
            image: "/images/load-pin-2-n.jpeg",
            title: "Load Pin And Customize Load Cell",
            // link: '/loadstaingauge',
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/images/single-point-n.jpeg",
        "/images/loadcell-2.png",
        "/images/loadcell-3.png",
        "/images/compress-load-n.jpeg",
        "/images/pan-cakeload-n.jpeg",
        "/images/s-type-loadcell-n.jpeg",
        "/images/loadcell-7.png",
        "/images/loadcell-8.png",
        "/images/loadcell-9.jpg",
        "/images/load-pin-2-n.jpeg",
    ];

    // Auto-scroll to the next image every 2 seconds
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change the timing here (2000ms = 2 seconds)

        return () => clearInterval(scrollInterval); // Clear interval when component unmounts
    }, [images.length]);

    return (

        <>
            <div className='lg:px-20 px-7 lg:mt-20 mt-14 mb-52 lg:mb-60'>

                <div>
                    <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
                        Load Cell
                    </h1>
                    <hr className="lg:w-[160px] w-[180px] border-[#3ebbe1] border-b-4" />
                </div>

                <div className='mt-14 '>
                    <div className='space-y-5'>    <h1 className='font-medium text-[33px]  '>High-Quality Load Cells that Precisely Converts <br /> Force into a Measurable Electrical Output</h1>
                        <p className='text-[18px] '>An electronic load cell is a transducer device that precisely converts force into a calculated electric output. If you tour around the market in search of a loadcell then you will find a lot of options that are enough to confuse your senses. Amid all the different types of load cells available in the market, strain gauge load cells are widely popular and fit all your requirements.</p>
                        <p className='text-[18px] '>Strain gauge load cells are the most commonly used load cells in the market. This type of cell variety is widely used in the weighing industry and electric scales, except for certain laboratories where highly accurate mechanical balances are required. This type of transducer is highly precise, and ensures accuracy from within 0.03% to 0.25% full scale, and is ideal for all industry applications across the globe.</p>
                        <p className='text-[18px] '>If you need accurate weighing information that’s hard to fetch by other technology, then the strain gauge load cells are the best option you can trust. The strain measurement by load cells helps in maintaining the integrity of the unit under pressure and protects people and equipment nearby. Apart from strain gauge load cells, there are pneumatic load cells that are sometimes used where intrinsic safety and hygiene are expected.</p>

                    </div>
                    <div className='space-y-5 mt-10'>
                        <h1 className=' text-[23px] font-medium text-black '>Here’s How a Load Cell Works?
                            <hr className='lg:w-[340px] w-[250px] border-black border-[1.5px]'></hr>
                        </h1>
                        <p className='text-[18px] '>As stated above, a load cell works by converting a mechanical force into a calculated electric output. Users can read those outputs and keep a record of them as well. However, the internal working/operation of a load cell may differ from one another (based on their functionality and uses). However, there are three most commonly and widely used load cells, and they are:</p>
                        <ul className='text-[16px] list-disc pl-10 ml-5'>
                            <li>Hydraulic Load Cells</li>
                            <li>Pneumatic Load Cells</li>
                            <li>Strain Gauge Load Cells</li>
                        </ul>
                        <p className='text-[18px] '>Among these three types of load cells, strain gauge load is the most commonly used load cell across the different industries. It contains strain gauges within them that send up voltage anomalies when under load. The degree of voltage change is covered by digital reading by weight.</p>


                    </div>

                    <div className='space-y-5 mt-10'>
                        <h1 className=' text-[23px] font-medium text-black '>Uses of a Load Cell?
                            <hr className='w-[230px] border-black border-[1.5px]'></hr>
                        </h1>
                        <p className='text-[18px] '>The primary use of a load cell is to measure mechanical force – mainly to weigh an object or a body. If you research in the market around you, you will find that all most all the electronic weighing scales are using or are based on load cells for measuring the weight of an object or a body accurately. Along with weighing an object, a load cell is also used in a wide variety of fields that require highly accurate and precise data. Based on its uses, there are different types of load cells available in the market, and they are:</p>
                        <ul className='text-[16px] list-disc pl-10 ml-5'>
                            <li>Class A </li>
                            <li>Class B </li>
                            <li>Class C </li>
                            <li>Class D </li>

                        </ul>
                        <p className='text-[18px] '>
                            These different types of load cells are used differently in different industries to get accurate weight data. Additionally, the use of load cells is not restricted to weighing an object or to electronic scales, but it is also used in industrial scales, load-testing machines, flow-meters, etc.</p>


                    </div>

                    <div className='space-y-5 mt-10'>
                        <h1 className=' text-[23px] font-medium text-black '>How does a load Cell Function?
                            <hr className='lg:w-[340px] w-[250px] border-black border-[1.5px]'></hr>
                        </h1>
                        <p className='text-[18px] '>Different types of load cells function on different mechanical and electronic principles. Strain gauge load cells, pneumatic load cells, and hydraulic load cells are usually attached to support beam or structural bearing of an application that endures pressures and stresses often with appropriate adhesive or superglue.</p>



                    </div>
                    <div className='space-y-5 mt-10'>
                        <h1 className=' text-[23px] font-medium text-black '>How Many Different Types of Load Cells are There?
                            <hr className='lg:w-[540px] w-[250px] border-black border-[1.5px]'></hr>
                        </h1>
                        <p className='text-[18px] '>Here is the small list of different types of load cells :</p>



                    </div>

                    <div className='mt-6'>
                        <h1 className='font-bold text-[20px] text-black'>Load Cell Types Based on Output Signal :</h1>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Pneumatic Load Cells: </span> This type of load cell also works on the force-balance principle. Pneumatic Load Cells utilize more than one dampener chamber to offer enhanced accuracy compared to a hydraulic device. There are some designs of pneumatic load cells in which the first chamber is used as a tare weight chamber. This type of load cells is most commonly used for calculating/measuring small weights where safety and hygiene is the utmost point of concern. The main advantage of using this pneumatic load cell is that they are explosive proof and insensitive to temperature variations. One more reason to use this type of load cell is that they don’t have any liquid in them; thus, there are no chances of contaminating the process if the diaphragm ruptures. However, as a disadvantage, pneumatic load cells are quite slow in response and require extra cleanliness and an aired environment.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Hydraulic Load Cells: </span>This type of load cell is a force-balance device that is used to measure the weight of an object or a body. In a rolling diaphragm type hydraulic force sensor, a load or force acting on a loading head is transferred to a piston that in turn compresses a filling fluid confined within an elastomeric diaphragm chamber. A normal hydraulic load cell application has parts such as bin, tank, and hopper weighing. To receive highly accurate results, the weight of the tank should be obtained by locating one force sensor at each point of support and summing their outputs.

                            </p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Strain Gauge Load Cells: </span>In this type of load cell, a strain gauge assembly is set inside the load cell housing to transform the load acting on them into electrical signals. The weight on the load cell is measured by the voltage fluctuation caused in the strain gauge when it undergoes deformation. Stain Gauge load cell in the widely used load cell across different industries.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Piezoresistive Load Cell: </span> This type of load cell is quite similar in operations to strain gauges. Piezoresistive load cells force sensors to create a high level of output signal – making them perfect for simple weighing systems. Also, these load cells can be easily connected to a readout meter.
                            </p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Inductive and Reluctance Load Cells:  </span>  Both this type of load cells responds to the weight-proportional displacement of a ferromagnetic core. One load cell alters the inductance of a solenoid coil due to the movement of its iron core; the other changes the reluctance of a very small air gap.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Magneto Strictive Load Cells: </span>  The functioning of this load cell is totally based on the change in permeability of ferromagnetic materials under applied stress. When a force is applied, the pressures lead to alterations in the flux pattern, generating an output signal proportional to the applied load. Magneto Strictive Load Cells are mostly used for weight and force measurement in strip mills and rolling mills.</p>
                        </div>
                    </div>
                    <div className='space-y-5 mt-10'>
                        <h1 className=' text-[23px] font-medium text-black '>Contact SIVAY SENSOR to Order Load Cells Online
                            <hr className='lg:w-[560px] w-[250px] border-black border-[1.5px]'></hr>
                        </h1>
                        <p className='text-[18px]'>
                            If you have any  questions/queries  related  to  any type of load cells, then feel free to contact the Load Cells experts at Rudrra Sensor, Ahmadabad. We are among the leading manufacturers of different types of load cells in India. You can send us your questions at
                            <a href="mailto:info@rudrra.com" className='text-blue-500 '>
                                info@sivay.com
                            </a>
                            or call us at
                            <a href="tel:+919824085399" className='text-blue-500'>
                                +91 98978 89504
                            </a>
                        </p>



                    </div>

                    <div className='w-full flex mt-7 lg:px-7 flex-col lg:flex-row lg:gap-10'>
                        <div className='lg:w-1/2 space-y-4'>
                            <h1 className='font-bold text-[#3ebbe1] text-[30px] sm:text-[40px] leading-tight'>
                                What is load cell?
                            </h1>
                            <p className='text-[17px]'>Load cell is a type of transducer which performs the functionality of converting force into an electric output which can be measured. You can find load cell at the heart of any weighing machine or electric scales. This type of transducer is highly accurate which provides user with required information that is difficult to obtain by other technology owing to certain commercial factors</p>
                            <p className='text-[17px]'>It is basically a device that measures strain and then converts force into electric energy which serves as measurement for scientists and workers. The strain measurement by load cells helps in maintaining integrity of the unit under pressure and protects people and equipment nearby.</p>

                        </div>
                        <div className='lg:w-1/2 h-[350px] overflow-hidden lg:pl-10'>
                            <div className='relative w-[400px] h-[300px]'>
                                {/* Render the current image */}
                                <img
                                    src={images[currentIndex]}
                                    alt={`Image ${currentIndex + 1}`}
                                    className=' object-cover rounded-lg transition-all duration-700'
                                />
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:mt-16 mt-9">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border rounded-tl-[40px] rounded-br-[40px] border-gray-300 shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105"
                                style={{ height: 'auto' }}
                            >
                                {/* Image Container */}
                                <div className="w-full h-[150px] p-3 flex justify-center items-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-cover w-full h-[150px] max-h-auto max-w-[150px] rounded-tl-lg"
                                    />
                                </div>

                                {/* Product Content */}
                                <Link to={product.link}>
                                    <div className="max-h-auto flex flex-col justify-center items-center shadow-xl bg-slate-200">
                                        {/* Product Title */}
                                        <h2 className="text-[18px] hover:text-[#3ebbe1] font-medium bg-slate-200 text-black text-center p-3 ">{product.title}</h2>
                                    </div>
                                </Link>


                            </div>
                        ))}
                    </div>




                    <div className='mt-16'>
                        <h1 className='font-bold text-[25px] text-[#3ebbe1]'>Types of Load Cells :</h1>
                        <p className='text-[17px] mt-3'>They are available in different sizes, shapes and capacities. There are different types of load cells available:</p>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Canister Type –  </span> This type of load cell is usually used for single as well as multi-weighing applications. It is used in weigh axle weighing scales, tank scales, weighbridges, vessel weighing applications, etc.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Single Point –  </span>Owing to its reliability and price, this type of load cell can be found in several types of counting scales, postal, parcel, medical and retail scales. It is used in industrial weighing systems, platform scales and provides accurate readings regardless of the position of the load on platform, which in turn reduces manufacturing costs as well.  </p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Single and Double Ended Shear Beam –  </span>It has number of benefits, when compared to other types of designs. It permits limited movement to allow thermal contraction and expansion and lifts off protection.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Tension Link – </span> It is suitable for applications like hanging scales, lifting systems, winching and crane weighing scales. A good thing about this load cell is that it provides great level of accuracy at high capacity weighing.
                            </p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Torsion Ring –  </span>  It offers excellent versatility and is now available for platform scales as well as for weighing applications.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>S Type – </span> This type of load cells provide you with digital output when used in compression or tension. Further, it provides superior side load rejection and is mainly used in wireless format and this technology is available at great price.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Weighing Modules – </span> It comprises of a load cell with mounting kit. Load cells which comprise of weighing modules are useful in silo weighing, axle weighing scales, vehicle scales, tank scales and weighbridges.</p>
                        </div>
                        <div className='mt-5 bg-[#f4f4f4]'>
                            <p className='p-4 text-[18px]'>  <span className='font-bold'>Wireless –  </span>  By making use of wireless technology, wireless type of load cells are now being made available in wireless format, even though this technology is available at greatly increased price.</p>
                        </div>
                    </div>


                </div>
            </div>



        </>
    );
};

export default LoadCell;
