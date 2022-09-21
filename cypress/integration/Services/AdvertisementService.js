import AdvertisementPageImplementation from "../../support/pages/AdvertisementPageImplementation";

class AdvertisementService{

    Advertisement(){

        AdvertisementPageImplementation.management()
        AdvertisementPageImplementation.advertisement()
        AdvertisementPageImplementation.search()
        AdvertisementPageImplementation.verifySearchResults()
        AdvertisementPageImplementation.clearSearch()
        AdvertisementPageImplementation.setOrder()
        AdvertisementPageImplementation.AddNewAdvertisement()
    }


}

export default new AdvertisementService;