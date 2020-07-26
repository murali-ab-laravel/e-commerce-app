const mongoose = require('mongoose');

class OrganizationRepository {

    constructor() {}

    create(organization) {
        organization.save();
        console.log("Record Created.");
    }

    findById(organization, id) {
        console.log(id);

        var result = organization.findById(id);
        console.log(result);
        return result;
    }

    update(organization, id) {
        organization.findByIdAndUpdate(id);
    }

}

module.exports = OrganizationRepository