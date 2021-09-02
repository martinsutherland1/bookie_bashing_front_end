describe("Bookie-Bashing", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    })
  
    it('should be able to log on and off id 1', () => {
      cy.get('input.username-box').type('Martin')
      cy.get('input.password-box').type('1234')
      cy.contains('Login').click();
      cy.contains('Log out').click();
      
    
      
    })

    // it('should be able to log on and off id 2', () => {
    //     cy.get('input.username-box').type('Wullie')
    //     cy.get('input.password-box').type('1234')
    //     cy.contains('Login').click();
    //     cy.contains('Log out').click();
        
      
        
    //   })

    //   it('should be able to log on and off id 3', () => {
    //     cy.get('input.username-box').type('Jaz')
    //     cy.get('input.password-box').type('1234')
    //     cy.contains('Login').click();
    //     cy.contains('Log out').click();
        
      
        
    //   })

    //   it('should be able to log on and off id 4', () => {
    //     cy.get('input.username-box').type('Del')
    //     cy.get('input.password-box').type('1234')
    //     cy.contains('Login').click();
    //     cy.contains('Log out').click();
        
      
        
    //   })

    //   it('should be able to log on and off id 5', () => {
    //     cy.get('input.username-box').type('Stu')
    //     cy.get('input.password-box').type('1234')
    //     cy.contains('Login').click();
    //     cy.contains('Log out').click();
        
      
        
    //   })

    

    
  })