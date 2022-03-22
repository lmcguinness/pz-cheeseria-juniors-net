/// <reference types="Cypress" />

context("Cart Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Add items to cart", () => {
    cy.get("[data-cy=add-to-cart-2]").click({ force: true });
    cy.get("[data-cy=add-to-cart-3]").click({ force: true });

    cy.get("[data-cy=view-cart-btn]").click({ force: true });
    cy.contains("2 Selected item");
  });

  it.only("Purchase items in cart", () => {
    cy.get("[data-cy=add-to-cart-2]").click({ force: true });
    cy.get("[data-cy=add-to-cart-3]").click({ force: true });

    cy.get("[data-cy=view-cart-btn]").click({ force: true });
    cy.get("[data-cy=purchase-item-btn]").click({ force: true });

    cy.request("POST", "https://localhost:5001/api/Cheeses/api/purchaseItem", [
      {
        id: 1,
        title: "ABBAYE DE BELLOC",
        price: 109.95,
        description:
          "Abbaye de Belloc is a flat wheel-shaped traditional, farmhouse, unpasteurised, semi-hard cheese made from sheep's milk. It has a natural, crusty, brownish rind with patches of red, orange and yellow. The rind is marked with tiny craters.",
        category: "creamy, dense and firm",
        image: "https://www.cheese.com/media/img/cheese/Abbaye-de-Belloc.jpg",
      },
    ]).then((response) => {
      expect(response.status).to.eq(200)
    });
  });
});
