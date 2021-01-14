import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const textField = "ContactName";
const keyField = "CustomerID";
const defaultItem = { [textField]: "Select customer...", [keyField]: null };
const emptyItem = { [textField]: "loading ..." };
const pageSize = 10;

const loadingData = [];
while (loadingData.length < pageSize) {
  loadingData.push({ ...emptyItem });
}

class AppComponent extends React.Component {
  baseUrl = `https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/`;
  init = { method: "GET", accept: "application/json", headers: [] };
  dataCaching = [];
  pendingRequest;
  requestStarted = false;
  state = {
    data: [],
    value: null,
    skip: 0,
    total: 0,
    filter: "",
  };

  componentDidMount() {
    this.requestData(0, this.state.filter);
  }

  requestData(skip, filter) {
    if (this.requestStarted) {
      clearTimeout(this.pendingRequest);
      this.pendingRequest = setTimeout(() => {
        this.requestData(skip, filter);
      }, 50);
      return;
    }

    const url =
      this.baseUrl +
      `Customers?$filter=contains(ContactName,'${filter}')&$skip=${skip}&$top=${pageSize}&$count=true`;

    this.requestStarted = true;
    fetch(url, this.init)
      .then((response) => response.json())
      .then((json) => {
        const total = json["@odata.count"];
        const items = [];
        json.value.forEach((element, index) => {
          const { CustomerID, ContactName } = element;
          const item = { [keyField]: CustomerID, [textField]: ContactName };
          items.push(item);
          this.dataCaching[index + skip] = item;
        });

        if (skip === this.state.skip) {
          this.setState({
            data: items,
            total: total,
          });
        }
        this.requestStarted = false;
      });
  }

  onFilterChange = (event) => {
    const filter = event.filter.value;

    this.resetCach();
    this.requestData(0, filter);

    this.setState({
      data: loadingData,
      skip: 0,
      filter: filter,
    });
  };

  pageChange = (event) => {
    const skip = event.page.skip;
    const filter = this.state.filter;

    if (this.shouldRequestData(skip)) {
      this.requestData(skip, filter);
    }

    const data = this.getCachedData(skip);

    this.setState({
      data: data,
      skip: skip,
    });
  };

  onChange = (event) => {
    const value = event.target.value;
    if (value && value[textField] === emptyItem[textField]) {
      return;
    }
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <DropDownList
        data={this.state.data}
        value={this.state.value}
        onChange={this.onChange}
        dataItemKey={keyField}
        textField={textField}
        defaultItem={defaultItem}
        filterable={true}
        onFilterChange={this.onFilterChange}
        virtual={{
          pageSize: pageSize,
          skip: this.state.skip,
          total: this.state.total,
        }}
        onPageChange={this.pageChange}
        style={{ width: "200px" }}
      />
    );
  }

  componentWillUnmount() {
    this.resetCach();
  }

  shouldRequestData(skip) {
    for (let i = 0; i < pageSize; i++) {
      if (!this.dataCaching[skip + i]) {
        return true;
      }
    }
    return false;
  }

  getCachedData(skip) {
    const data = [];
    for (let i = 0; i < pageSize; i++) {
      data.push(this.dataCaching[i + skip] || { ...emptyItem });
    }
    return data;
  }

  resetCach() {
    this.dataCaching.length = 0;
  }
}

ReactDOM.render(<AppComponent />, document.querySelector("my-app"));
