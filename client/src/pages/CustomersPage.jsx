import { useEffect } from "react";
import { useCustomers } from "../context/CustomerContext";
import CustomerCard from "../components/CustomerCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function CustomersPage() {
  const { getCustomers, customers } = useCustomers();

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <>
      <h1 className="search-page-title">
        <svg
          style={{ marginRight: "1rem" }}
          width="67px"
          height="67px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        Buscar Cliente
      </h1>

      <BarraBusqueda placeholder="Buscar por NIT" route="new" />

      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Clientes</h2>

        <hr
          style={{
            marginBottom: ".6rem",
            height: "1px",
            border: "none",
            backgroundColor: "rgba(18, 55, 105, 0.10)",
          }}
        />

        {customers.map((customer) => (
          <CustomerCard customer={customer} key={customer._id} />
        ))}
      </div>
    </>
  );
}
