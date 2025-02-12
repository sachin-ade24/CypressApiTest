describe("template spec", () => {
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
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Angel");
    });
  });
});
