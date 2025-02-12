describe("DELETE API Test", () => {
  it("should delete a post", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
