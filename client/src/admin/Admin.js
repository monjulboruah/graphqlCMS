import React, { useContext } from "react";
import { AuthContext } from "../context";
import AllPost from "./AllPost";
import { Redirect } from "react-router-dom";

export default function Admin(props) {
  const { user } = useContext(AuthContext);

  const AdminPage = user ? (
    <div style={{ marginTop: "150px" }}>
      <AllPost {...props} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
  return AdminPage;
}
