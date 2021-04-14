import { getUserSchema } from "../support/test_data/get_user_schema"
import { testData } from '../support/test_data/test.data'
import { validateSchema } from "../support/helpers/json_schema.validation.helper";

describe('Github API tests', () => {

    it('should get user by username', () => {
        const url = testData.get_user.endpoint + testData.get_user.username,
            token = testData.authorization.token,
            user_id = testData.get_user.user_id,
            node_id = testData.get_user.node_id
        cy.request({
            method: 'GET',
            url: url,
            headers: {'Authorization': 'Bearer ' + token}
        }).then(response => {
            expect(response.status).to.equal(200)
            validateSchema(getUserSchema, response.body)
            expect(response.body.id).to.equal(user_id)
            expect(response.body.node_id).to.equal(node_id)
        })
    })


})
