class AssetsPage {

    getManagement() {

        return cy.contains('Management');
    }

    getAssets() {

        return cy.get('a[href="/management/asset/"]');
    }

    getSearch() {

        return cy.get("input[type='text']");
    }

    getVerifySearchResult(){
        return cy.get("td[role='cell']")
    }

    getAddAssetCategory(){

        return cy.contains('Add Asset Category')
    }

    getAssetCategoryName(){
        return cy.get("input[type='text']")
    }

    getAssetCategoryDescription(){
        return cy.get(".material-input__component textarea")
    }

    getAddAssetCategoryActivate(){
        return cy.get('#customSwitchsizemd')
    }

    getAssetCategorySubmit(){
        return cy.get(".row  button[type='button']")
    }

    getAssetRegistration(){

        return cy.contains('Asset Registration')
    }

    getSearchAssetRegistrations(){

        return cy.get("input[type='text']")
    }

    getVerifySearchAssetRegistrationResult(){

        return cy.get('td[aria-colindex="1"]')
    }

    getRegisterNewAsset(){

        return cy.contains('Register New Asset')
    }

    getAssetRegistrationType(){

        return cy.get(':nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot')
    }

    getAssetRegistrationTypeName(){

        return cy.get("div[role='listbox'] .v-list-item__title")
    }

    getSelectAssetCategory(){

        return cy.get(':nth-child(1) > :nth-child(2) > .v-input ')
    }

    getSelectAssetCategoryName(){

        return cy.get('div[tabindex="0"] .v-list-item__content  .v-list-item__title')
    }

    getSelectVendorType(){

        return cy.get(':nth-child(1) > .col-sm-12 > .v-input > .v-input__control > .v-input__slot')
    }

    getSelectVendorTypeName(){

        return cy.get('div[role="listbox"] .v-list-item__content  .v-list-item__title')
    }

    getAssetName(){

        return cy.get('form > :nth-child(2) > :nth-child(1) input')
    }

    getAssesCode(){

        return cy.get(':nth-child(2) > :nth-child(2) > .v-input input')
    }

    getPurchasePrice(){

        return cy.get(':nth-child(2) > .col-sm-12 > .v-input input')
    }

    getPurchaseDate(){

        return cy.get(':nth-child(3) > :nth-child(1) > .material-input__component > input')
    }

    getInstallationDate(){

        return cy.get(':nth-child(3) > :nth-child(2) > .material-input__component > .material-input')
    }

    getManufactureDate(){

        return cy.get(':nth-child(3) > .col-sm-12 > .material-input__component > .material-input')
    }

    getManufacturerName(){

        return cy.get('form > :nth-child(4) > :nth-child(1) input')
    }

    getModelNumber(){

        return cy.get('form > :nth-child(4) > :nth-child(2) input')
    }

    getSerialNumber(){

        return cy.get(':nth-child(4) > .col-sm-12 input')
    }

    getStatus(){

        return cy.get('form > :nth-child(5) > :nth-child(1) input')
    }

    getStatusName(){

        return cy.get('div[tabindex="0"] .v-list-item__content  .v-list-item__title')
    }

    getWarrantyFrom(){

        return cy.get(':nth-child(5) > :nth-child(2) > .material-input__component > .material-input')
    }

    getWarrantyTo(){

        return cy.get(':nth-child(5) > .col-sm-12 > .material-input__component > .material-input')
    }

    getDescription(){

        return cy.get('.col > .material-input__component > .material-input')
    }

    getSubmit(){

        return cy.get('.text-center > .btn')
    }

    getProblemReporting(){

        return cy.get("a[title='Problem Reporting']")
    }

    getProblemCode(){
        return cy.get('[style="margin: 10px;"] > form > :nth-child(1) > :nth-child(1)')
    }

    getProblemRecordDate(){

        return cy.get('[style="margin: 10px;"] > form > :nth-child(1) > :nth-child(2) input')
    }

    getObservedBy(){

        return cy.get('form > :nth-child(2) > .col input')
    }

    getCheckBox(){

      return  cy.get(':nth-child(2) > .row > :nth-child(2) > .mb-3 input')
    }

    getProblemDetails(){

        return cy.get(':nth-child(1) > .material-input__component > .material-input')

    }

    getAdditionalRemarks(){

        return cy.get(':nth-child(2) > .material-input__component > .material-input')
    }

    getReportButton(){

        return cy.get('.text-center > .btn ')

    }

    getServicingDetails(){

        return cy.get(':nth-child(1) > [aria-colindex="10"] > .list-inline > :nth-child(3) > .px-2 > .uil')
    }

    getServicingNumber(){

        return cy.get('[style="margin: 10px;"] > form > :nth-child(1) > :nth-child(1) input')

    }

    getServicingAgainsttDropdown(){

        return cy.contains('Servicing Against')
        
    }

    getDropDownSelect(){

        return cy.get('.v-list-item__title')
    }

    getSelectReferenceCode(){

        return cy.contains('Select Reference Code')
    }
}

export default AssetsPage;