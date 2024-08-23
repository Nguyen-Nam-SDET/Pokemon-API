pm.test("TC_002-Check Status 404 for DELETE method", function () {
    pm.response.to.have.status(404);
});

pm.test("TC_002-Check Status Code name has string Not Found", function () {
    pm.response.to.have.status("Not Found");
});

pm.test("Verify body has Cannot DELETE", function () {
    pm.expect(pm.response.text()).to.include("Cannot DELETE");
});