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
  it("should delete a post", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
