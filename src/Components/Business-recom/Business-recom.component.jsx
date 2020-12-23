import React, { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import "./Bisiness-recom.style.scss";
import FdReview from "../fd-review/fd-review.component";
import OtherReview from "../other-review/other-review.component";
import { displayuserownreviewonbiz } from '../../Redux/Actions/BisDisplayUserOwnReviewaction'

const BusinessRecom = (props) => {
  const dispatch = useDispatch();
  //this is to get the business name
  let location = useLocation();
  const pathname = location.pathname.split("/");
  const businessname = pathname[2];
  // const breakdownreviewstore = useSelector((state) => state.getUserOwnReviewToBizStore);
  // const { loading, success: success4, realuploadedObject } = breakdownreviewstore

  //this is to check who is logged in(the user)
  const importantid = localStorage.getItem("ob_id");

  useEffect(() => {
    // dispatch(displayuserownreviewonbiz(businessname, importantid));
    // console.log(realuploadedObject)
  }, [])


  return (
    <div>
      <FdReview />
      <OtherReview data={props.data} />
    </div>
  );
};


export default BusinessRecom;
