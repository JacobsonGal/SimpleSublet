import {
  FETCH_USER_DATA,
  FETCH_SUBLET_DATA,
  FETCH_OWNER_DATA,
  NEW_DATA,
} from "./types";
import { airTableData, airTableDoctors } from "../../Database/Airtable";

export const fetchUserData = () => (dispatch) => {
  airTableData("Users").then((userData) => {
    dispatch({
      type: FETCH_USER_DATA,
      data: userData,
    });
  });
};

export const fetchSubletsData = () => (dispatch) => {
  airTableData("Sublets").then((userData) => {
    // Data formatting
    // userData = formatingMap("Sublets")(userData);
    dispatch({
      type: FETCH_SUBLET_DATA,
      sublets: userData,
    });
  });
};

export const fetchOwnersData = () => (dispatch) => {
  airTableData("Owners").then((userData) => {
    // Data formatting
    // userData = formatingMap("Owners")(userData);
    dispatch({
      type: FETCH_APPOINTMENTS_DATA,
      appointments: userData,
    });
  });
};

export const createData = (table, body) => {
  // Data formatting
  const [bodyData] = formatingMap(table)([body]);
  return {
    type: NEW_DATA,
    newData: bodyData,
    table,
  };
};

function formatingMap(table) {
  const obj = {
    Sublets: formatingSublets,
    Owners: formatingOwners,
  };
  return obj[table];
}

function formatingSublets(userData) {
  userData = userData.map((x) => {
    if (x.fields["Reminder Date"]) {
      let fullFormatedDate = x.fields["Reminder Date"].replace(
        /T|:00.000Z/g,
        " "
      );
      let formatedDate = fullFormatedDate
        .match(/\d+-\d+-\d+/)[0]
        .split("-")
        .reverse()
        .join("-");
      x.fields["Reminder Date"] = fullFormatedDate.replace(
        /\d+-\d+-\d+/,
        formatedDate
      );
    }

    return x;
  });
  return userData;
}

function formatingOwners(userData) {
  userData = userData.map((x) => {
    x.fields["Appointment Date"] = x.fields["Appointment Date"]
      ? x.fields["Appointment Date"]
          .split("")
          .slice(0, 10)
          .join("")
          .split("-")
          .reverse()
          .join("-")
      : undefined;
    return x;
  });
  return userData;
}
