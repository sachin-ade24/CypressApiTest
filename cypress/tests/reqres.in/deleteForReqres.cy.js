describe("template spec", () => {
  //This block will delete the user which exist
  it("DELETE request", () => {
    cy.request({ method: "DELETE", url: "https://reqres.in/api/users/2" }).then(
      (response) => {
        expect(response.status).to.eq(204);
      }
    );
  });
});
