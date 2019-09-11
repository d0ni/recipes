import React from "react";

import { getData } from "../helpers/http";

export class HomePage extends React.Component {
  state = {
    data: ""
    // isFetching: false
  };

  async componentDidMount() {
    await getData("/article/all").then(result =>
      this.setState({ data: result })
    );

    await getData("/recipe/all").then(result =>
      this.setState({ data: [...this.state.data, ...result] })
    );
    await getData("/category/all").then(result => console.log(result));
  }

  render() {
    const { data } = this.state;
    if (!data) return <div className="loading">...loading</div>;

    return (
      <>
        {data.map(v => {
          const {
            _id,
            title,
            text,
            description,
            categoryId,
            isDeleted,
            createdAt,
            updatedAt
          } = v;
          return (
            <div
              key={_id}
              style={{ border: "1px solid black", padding: "0 40px" }}
            >
              <p>id: {_id}</p>
              <p>title: {title}</p>
              <p>text: {text}</p>
              <p>description: {description}</p>
              <p>categoryId: {categoryId}</p>
              <p>isDeleted: {isDeleted}</p>
              <p>createdAt: {createdAt}</p>
              <p>updatedAt: {updatedAt}</p>
            </div>
          );
        })}
      </>
    );
  }
}
