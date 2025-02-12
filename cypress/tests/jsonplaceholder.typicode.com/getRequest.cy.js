describe("API Testing with Cypress", () => {
  it("should GET user data", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("name");
      }
    );
  });
});
