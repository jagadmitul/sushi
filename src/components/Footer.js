import React from 'react'
import CopyRight from '../layouts/CopyRight'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <div className='orido_tm_section'>
                <div className='orido_tm_service'>
                    <div className='container'>
                        <div className='orido_tm_main_title'>
                            <h3>
                                <span>Contact Us</span>
                            </h3>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11361.645557045453!2d-79.4181085!3d44.6090631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a3511e865e0bf15!2sSushi%20Wadasi!5e0!3m2!1sen!2sin!4v1661080698376!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='orido_tm_informations'>
                        <div className='container'>
                            <div className='informations_inner'>
                                <div className='left'>
                                    <h4>Address</h4>
                                    <div className='orido_tm_boxed_button'>
                                        <Link href='/'>
                                            <a>Get Directions</a>
                                        </Link>
                                    </div>
                                    <div className='text'>
                                        66 Mississaga St E <br /> Orillia, ON L3V 1V5 <br /> Canada
                                    </div>
                                </div>
                                <div className='right'>
                                    <h4>Business Hours</h4>
                                    <div className='text'>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className='day'>Sunday: </td>
                                                    <td className='time'>12:00 PM - 07:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Monday: </td>
                                                    <td className='time'>Closed</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Tuesday: </td>
                                                    <td className='time'>11:30 AM - 07:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Wednesday: </td>
                                                    <td className='time'>11:30 AM - 07:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Thursday: </td>
                                                    <td className='time'>11:30 AM - 07:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Friday: </td>
                                                    <td className='time'>11:30 AM - 07:00 PM</td>
                                                </tr>
                                                <tr>
                                                    <td className='day'>Saturday: </td>
                                                    <td className='time'>11:30 AM - 07:00 PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight />
        </div>
    )
}

export default Footer
