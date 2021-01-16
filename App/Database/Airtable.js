export async function airTableData(table) {
  // if (!localStorage.getItem("token")) {
  //   return "unauthorized";
  // }

  let airTableData = await fetch(
    `https://azm2tgtcgw.herokuapp.com/api/v1/user-data/get-data`,
    {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table: table }),
    }
  );
  airTableData = await airTableData.json();
  if (table === "Users") {
    return airTableData.length > 0 ? airTableData : "unauthorized";
  }

  return airTableData;
}

export async function newData(table, data) {
  if (!localStorage.getItem("token")) {
    return "unauthorized";
  }
  let airTableData = await fetch(
    `https://azm2tgtcgw.herokuapp.com/api/v1/sending-data/add-data`,
    {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ table, data }),
    }
  );
  airTableData = await airTableData.json();
  return airTableData;
}
