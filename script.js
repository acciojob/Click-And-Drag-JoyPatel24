// Your code here.
// test.spec.js
describe('Click and Drag Test', () => {
  it('should slide to subsequent cubes on click and drag', () => {
    cy.visit('/main.html');

    // Simulate the click and drag behavior
    cy.get('.items')
      .trigger('mousedown', { which: 1, pageX: 493, pageY: 391, force: true })
      .trigger('mousemove', { which: 1, pageX: 271, pageY: 391, force: true })
      .trigger('mouseup', { force: true });

    // Check if the container has scrolled to the right
    cy.get('.items').should('have.prop', 'scrollLeft').and('be.greaterThan', 0);
  });
});
