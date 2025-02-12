describe("PUT API Test", () => {
  it("should update a post", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", "updated title");
    });
  });
});
