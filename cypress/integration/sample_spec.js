describe('Operations', () => {
  it('Does an addition!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="8"]').click();
    cy.get('div.touch[data-value="+"]').click();
    cy.get('div.touch[data-value="5"]').click();
    cy.get('div.touch[data-value="="]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("13");
    });
  });

  it('Does a substraction!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="8"]').click();
    cy.get('div.touch[data-value="-"]').click();
    cy.get('div.touch[data-value="5"]').click();
    cy.get('div.touch[data-value="="]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("3");
    });
  });

  it('Does a division!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="1"]').click();
    cy.get('div.touch[data-value="2"]').click();
    cy.get('div.touch[data-value="/"]').click();
    cy.get('div.touch[data-value="4"]').click();
    cy.get('div.touch[data-value="="]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("3");
    });
  });

  it('Does a modulo!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="5"]').click();
    cy.get('div.touch[data-value="-"]').click();
    cy.get('div.touch[data-value="3"]').click();
    cy.get('div.touch[data-value="="]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("2");
    });
  });

  it('Does a square!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="2"]').click();
    cy.get('div.touch[data-value="5"]').click();
    cy.get('div.touch[data-value="√x"]').click();
    cy.get('div.touch[data-value="="]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("5");
    });
  });

  it('Clear result!', () => {
    cy.visit('http://localhost:3000/')

    cy.get('div.touch[data-value="9"]').click();
    cy.get('div.touch[data-value="9"]').click();
    cy.get('div.touch[data-value="C"]').click();

    cy.get('div.result').invoke('text').then(el => {
      expect(el).to.equal("");
    });
  });
})