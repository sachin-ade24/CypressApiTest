describe("template spec", () => {
  //This block will get the user which exist
  it("should fetch the list of users: GET API Request", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2"
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("page", 2);
      expect(response.body.data).to.be.an("array");
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
});
