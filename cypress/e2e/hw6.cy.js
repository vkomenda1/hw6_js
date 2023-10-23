beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[class="mat-ripple sidebar-toggle mat-ripple-unbounded"]').click();
  cy.get('[title="Modal & Overlays"]').click();
  cy.get('span:contains("Toastr")').click();
  cy.get('[class="mat-ripple sidebar-toggle mat-ripple-unbounded"]').click();
});

const positions = [
  {
    td_position: 'top-right',
    td_title: 'test title',
    td_content: 'test content',
    td_time: '2000',
    td_type: 'success',
    
    td_selectOptionPosition: '#nb-option-24',
    td_selectColorOptionToastType: '#nb-option-33',

    er_icon: 'checkmark',
    er_title: 'test title',
    er_content: 'test content',
    er_color: 'rgb(96, 175, 32)',
    er_position: {'justify-content': 'flex-end', 'align-items': 'flex-start'},  
  },
  {
    td_position: 'top-left',
    td_title: 'test title',
    td_content: 'test content',
    td_time: '2000',
    td_type: 'warning',
    
    td_selectOptionPosition: '#nb-option-25',
    td_selectColorOptionToastType: '#nb-option-35',

    er_icon: 'alert-triangle',
    er_title: 'test title',
    er_content: 'test content',
    er_color: 'rgb(255, 159, 5)',
    er_position: {'justify-content': 'flex-start', 'align-items': 'flex-start'},  
  },
  {
    td_position: 'bottom-right',
    td_title: 'test title',
    td_content: 'test content',
    td_time: '2000',
    td_type: 'info',
    
    td_selectOptionPosition: '#nb-option-27',
    td_selectColorOptionToastType: '#nb-option-34',

    er_icon: 'question-mark',
    er_title: 'test title',
    er_content: 'test content',
    er_color: 'rgb(4, 149, 238)',
    er_position: {'justify-content': 'flex-end', 'align-items': 'flex-end'},  
  },
  {
    td_position: 'bottom-left',
    td_title: 'test title',
    td_content: 'test content',
    td_time: '2000',
    td_type: 'danger',
    
    td_selectOptionPosition: '#nb-option-26',
    td_selectColorOptionToastType: '#nb-option-36',

    er_icon: 'flash',
    er_title: 'test title',
    er_content: 'test content',
    er_color: 'rgb(176, 0, 32)',
    er_position: {'justify-content': 'flex-start', 'align-items': 'flex-end'}, 
  },
];

positions.forEach((positionData) => {
  describe(positionData.td_position, () => {
    it(`position: ${positionData.td_position}`, () => {
      cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
      cy.get(positionData.td_selectOptionPosition).click();
      cy.get('input[ng-reflect-model="HI there!"]').clear().type(positionData.td_title);
      cy.get('input[ng-reflect-model="I\'m cool toaster!"]').clear().type(positionData.td_content);
      cy.get('input[name="timeout"]').clear().type(positionData.td_time);
      cy.get('nb-select[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
      cy.get(positionData.td_selectColorOptionToastType).click();
      cy.get('button:contains("Show toast")').click();

      cy.get('div>nb-icon>svg>g>g[data-name="' + positionData.er_icon + '"]').then(toast =>{
         expect(toast).to.have.attr('data-name', positionData.er_icon);
      })

      cy.get('[class="title subtitle"]').then(toast =>{
         expect(toast).to.contain(positionData.er_title);
      })

      cy.get('div[class="message"]').then(toast =>{
         expect(toast).to.have.text(positionData.er_content);
      })

      cy.get('nb-toast[class="ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-' + positionData.td_type + ' destroy-by-click has-icon custom-icon ng-star-inserted ng-animating"]').then(toast =>{
         expect(toast).to.have.css('background-color', positionData.er_color);
      })

      cy.get('.toastr-overlay-container')
        .then((el) => {
      const actualJustifyContent = el[0].style.justifyContent;
      const actualAlignItems = el[0].style.alignItems;
      expect(actualJustifyContent).to.equal(positionData.er_position['justify-content']);
      expect(actualAlignItems).to.equal(positionData.er_position['align-items']);
  });
  });
  });
  });




