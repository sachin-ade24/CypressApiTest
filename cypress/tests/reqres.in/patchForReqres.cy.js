describe("template spec", () => {
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
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Angel");
    });
  });
});
