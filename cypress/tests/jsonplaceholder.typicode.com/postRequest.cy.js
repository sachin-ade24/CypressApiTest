describe("POST API Test", () => {
  it("should create a new user", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("title", "foo");
    });
  });
});
