describe("Bookie-Bashing", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get('input.username-box').type('Martin')
      cy.get('input.password-box').type('')
      cy.contains('Login').click()
      
    })
  
    it('should be able to selecy all leaderboards', () => {
      cy.get('select.leader-drop').select('winners')
      cy.get('select.leader-drop').select('losers')
      cy.get('select.leader-drop').select('form')
      cy.get('select.leader-drop').select('streak')
      cy.get('select.leader-drop').select('Select Table')
      cy.contains('Log out').click();
     
  })

    it('should be able to update scores', () => {
      cy.get('input.wins').type(10)
      cy.get('input.losses').type(8)
      cy.get('input.winStreak').type(6)
      cy.get('input.bestStreak').type(4)
      cy.contains('Update Scores').click();
      
        
  })

      it('should be able to add bets 1', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Rangers')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })

      it('should be able to add bets 2', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Aberdeen')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })

      it('should be able to add bets 3', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Everton')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })

      it('should be able to add bets 4', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Hearts')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })

      it('should be able to add bets 5', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Chelsea')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })

      it('should be able to add bets 6', () => {
        cy.get('select.add-bet-drop').select('Martin')
        cy.get('input.selection').type('Kelty')
        cy.get('input.week').type(6)
        cy.contains('Add Bet').click();
      })


    

    
  })