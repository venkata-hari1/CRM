import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Components/Redux/store/Store"
import { Theme, useMediaQuery } from "@mui/material";
export const withRouter = (Child: React.ComponentType<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isDektop=useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'))
    const params = useParams<{ [key: string]: string }>();
    const dispatch = useDispatch();
    const selector=useSelector((state:RootState)=>state)
    return (
      <Child
        {...props}
        isDektop={isDektop}
        selector={selector}
        navigate={navigate}
        location={location}
        useParams={params}
        dispatch={dispatch}
      />
    );
  };
};
