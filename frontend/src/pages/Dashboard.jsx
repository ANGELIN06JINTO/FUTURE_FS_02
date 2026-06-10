import { useEffect, useState } from "react";
import axios from "axios";

import "../pages/Dashboard.css";
import Navbar from "../components/Navbar";
import LeadTable from "../components/LeadTable";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/leads",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setLeads(res.data);

      console.log("Leads:", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/leads/${id}`,
        { status },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  const totalLeads = leads.length;

  const contacted = leads.filter(
    (lead) =>
      lead.status &&
      lead.status.toLowerCase() === "contacted"
  ).length;

  const converted = leads.filter(
    (lead) =>
      lead.status &&
      lead.status.toLowerCase() === "converted"
  ).length;

  const successRate =
    totalLeads > 0
      ? (
          (converted / totalLeads) *
          100
        ).toFixed(0)
      : 0;

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="main-content">

          <h1 className="dashboard-title">
            NexusCRM Dashboard
          </h1>

          <div className="stats">

            <div className="card">
              <h3>Total Leads</h3>
              <h2>{totalLeads}</h2>
            </div>

            <div className="card">
              <h3>Contacted</h3>
              <h2>{contacted}</h2>
            </div>

            <div className="card">
              <h3>Converted</h3>
              <h2>{converted}</h2>
            </div>

            <div className="card">
              <h3>Success Rate</h3>
              <h2>{successRate}%</h2>
            </div>

          </div>

          <div className="table-section">
            <LeadTable
              leads={leads}
              updateStatus={updateStatus}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;