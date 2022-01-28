describe('Financial wellness test', () => {
  it('Submits the form without any data on the fields', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Continue').click();

    cy.contains('Annual Income')
      .parent()
      .should('have.class', 'error')
      .find('span')
      .should('have.text', 'This field is required.');

    cy.contains('Monthly Costs')
      .parent()
      .should('have.class', 'error')
      .find('span')
      .should('have.text', 'This field is required.');
  });

  it('Inserts ZERO on inputs and submits the form', () => {
    cy.get('#annual-income').clear();
    cy.get('#monthly-costs').clear();

    cy.get('#annual-income').type('0');
    cy.get('#monthly-costs').type('0');

    cy.contains('Continue').click();

    cy.contains('Annual Income')
      .parent()
      .should('have.class', 'error')
      .find('span')
      .should('have.text', 'This field needs to be higher than 0.');

    cy.contains('Monthly Costs')
      .parent()
      .should('have.class', 'error')
      .find('span')
      .should('have.text', 'This field needs to be higher than 0.');
  });

  it('Creates a financial wellness test with HEALTHY score', () => {
    cy.get('#annual-income').clear();
    cy.get('#monthly-costs').clear();

    cy.get('#annual-income').type('1000');
    cy.get('#monthly-costs').type('10');

    cy.contains('Continue').click();

    cy.contains('.card-body', 'Congratulations!');
    cy.get('.card-body').find('.scorebar').should('have.class', 'healthy');

    cy.contains('Return').click();
  });

  it('Creates a financial wellness test with MEDIUM score', () => {
    cy.get('#annual-income').type('1000');
    cy.get('#monthly-costs').type('30');

    cy.contains('Continue').click();

    cy.contains('.card-body', 'There is room for improvement.');
    cy.get('.card-body').find('.scorebar').should('have.class', 'medium');

    cy.contains('Return').click();
  });

  it('Creates a financial wellness test with LOW score', () => {
    cy.get('#annual-income').type('1000');
    cy.get('#monthly-costs').type('80');

    cy.contains('Continue').click();

    cy.contains('.card-body', 'Caution!');
    cy.get('.card-body').find('.scorebar').should('have.class', 'low');

    cy.contains('Return').click();
  });
});
