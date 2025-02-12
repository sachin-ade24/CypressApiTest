describe("template spec", () => {
  it("should fetch the list of users: GET API Request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2"
    }).then((response) => {
      // Assertions
      expect(response.status).to.eq(200);
      // Check if status code is 200
      expect(response.body).to.have.property("page", 2);
      // Check if the response contains 'page' key with value 2
      expect(response.body.data).to.be.an("array");
      // Ensure data is an array
      expect(response.body.data.length).to.be.greaterThan(0);
      // Check if data is not empty
    });
  });

  //This block inserts the data which is mentioned in the body of the request
  it("POST request", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "Bingo",
        job: "Team lead"
      }
    }).then((response) => {
      //Asserting the status code to be 201 for successful execution
      expect(response.status).to.eq(201);
      //Asserting the name which we have inserted into
      expect(response.body.name).to.eq("Bingo");
      //Asserting the status text to confirm whether it is created
      expect(response.statusText).to.eq("Created");
    });
  });

  //This block will execute PUT request
  it("PUT request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Angel",
        job: "zion resident"
      }
    }).then((response) => {
      //Asserting the status code to be 200 for successful execution
      expect(response.status).to.eq(200);
      //Asserting the name which we have inserted into
      expect(response.body.name).to.eq("Angel");
    });
  });

  //This block will execute the PATCH request and update the record
  it("PATCH request", () => {
    cy.request({
      method: "PATCH",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Angel",
        job: "zion resident"
      }
    }).then((response) => {
      //Asserting the status code to be 200 for successful execution
      expect(response.status).to.eq(200);
      //Asserting the name which we have inserted into
      expect(response.body.name).to.eq("Angel");
    });
  });

  //This block will delete the user which exist
  it("DELETE request", () => {
    cy.request({ method: "DELETE", url: "https://reqres.in/api/users/2" }).then(
      (response) => {
        //Asserting the status code to be 204 for successful execution
        expect(response.status).to.eq(204);
      }
    );
  });
});
