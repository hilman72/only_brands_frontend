import React, { Component } from "react"
import './Coupon.style.scss'

import CouponModal from '../CouponModal/CouponModal.component'


class Coupon extends Component {
    render() {
        return (
            <div className="couponBorder" >
                <h1>This is a Coupon</h1>
                <CouponModal />
            </div>
        )
    }
}


export default Coupon;