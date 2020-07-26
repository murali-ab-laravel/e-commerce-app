const Organizations = require('../../models/organization/organization');

const OrganizationsRepository = require('../../repository/organizations/OrganizationRepository');


class OrganistionsController {

    constructor() {}

    createOrganization(req, res, next) {
        try {

            const organization = new Organizations(req.body);

            const repo = new OrganizationsRepository();

            repo.create(organization);

            res.status(200).send({
                'status': 'succes',
                'message': 'Organization created successfuly.'
            });

        } catch (err) {
            res.status(500).send(err);
        }

    }

    getOrganizationById(req, res, next) {
        try {

            console.log(`working`);

            const organization = new Organizations();

            const repo = new OrganizationsRepository();

            let data = repo.findById(organization, req.params.id);

            res.status(200).send({
                'status': 'succes',
                'message': 'finded data.',
                'data': data
            });


        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = OrganistionsController;