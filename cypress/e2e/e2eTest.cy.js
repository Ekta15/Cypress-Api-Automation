describe('API automation in cypress ' ,()=>{
    it('using custom commands', ()=>{

        cy.getAPI('https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=furry rabbits', ).then((response) =>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.be.equal(200)

            const pageWithSesameStreet = response.body.pages.find((page) => page.title === 'Sesame Street');
            expect(pageWithSesameStreet).to.exist;
        })
    }) ;


    it('Scenario 2: Verify Sesame Street Page Timestamp', () => {
    cy.getAPI('https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=furry%20rabbits/Sesame%20Street')
  .then((response) => {
    cy.log(JSON.stringify(response));
    expect(response.status).to.equal(200);
  })

} )
});