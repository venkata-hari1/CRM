import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Components/Redux/store/Store"
export const withRouter = (Child: React.ComponentType<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams<{ [key: string]: string }>();
    const dispatch = useDispatch();
    const selector=useSelector((state:RootState)=>state)
    return (
      <Child
        {...props}
        selector={selector}
        navigate={navigate}
        location={location}
        useParams={params}
        dispatch={dispatch}
      />
    );
  };
};
