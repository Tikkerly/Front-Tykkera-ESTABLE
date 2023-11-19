"use client";
import { finalClients, serviceAgents, technicians } from "@/redux/slices";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const TicketsLayout = ({ children }) => {
  const dispatch = useDispatch();

  const servAgents = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/serviceagent");
    dispatch(serviceAgents(data));
  };
  const techs = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/technician");
    dispatch(technicians(data));
  };
  const finalCli = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/finalclient");
    dispatch(finalClients(data));
  };

  useEffect(() => {
    servAgents();
    techs();
    finalCli();
  }, []);

  return <div className="flex-1 p-4">{children}</div>;
};

export default TicketsLayout;
