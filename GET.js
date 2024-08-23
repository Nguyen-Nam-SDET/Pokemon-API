// -- Main Function --
pm.test("TC_001-Check Status 200", function () {
    pm.response.to.have.status(200);
});

pm.test("TC_001-Check Status Code name has string OK", function () {
    pm.response.to.have.status("OK");
});

pm.test("TC_003-Check Response Time", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
// -- Response Reference --
pm.test("TC_004-005 verify id", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(35).and.to.be.a('number');
});

pm.test("TC_006-007 verify name", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("clefairy").and.to.be.a('string');
});

pm.test("TC_008 verify base_experience", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.base_experience).to.eql(113).and.to.be.a('number');
});

pm.test("TC_009 verify height", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.height).to.eql(6).and.to.be.a('number');
});

pm.test("TC_010 verify is_default", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.is_default).to.be.true.and.to.be.a('boolean');
});

pm.test("TC_011 verify order", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.order).to.eql(56).and.to.be.a('number');
});

pm.test("TC_012 verify weight", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.weight).to.eql(75).and.to.be.a('number');
});

pm.test("TC_013 verify location_area_encounters", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.location_area_encounters).to.eql("/api/v2/pokemon/35/encounters").and.to.be.a('string');
});


pm.test("TC_014-Verify abilities is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.abilities.length).to.be.above(0);
});
// TC_015: Kiểm tra xem ability thứ 3 trong danh sách có tên là "friend-guard"
// Vì Document có thể hiện friend-guard slot 3 ==> ta có array [2]
pm.test("TC_015- Verify third ability name", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.abilities[2].ability.name).to.eql("friend-guard");
});

// TC_016: Kiểm tra xem ability thứ 3 trong danh sách có is_hidden là true
pm.test("TC_016- Verify third ability is hidden", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.abilities[2].is_hidden).to.be.true;
});

// TC_017: Kiểm tra xem Pokémon có forms hay không
pm.test("TC_017- Verify forms is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.forms.length).to.be.above(0);
});

// TC_018: Kiểm tra xem Pokémon có game indices hay không
pm.test("TC_018- Verify game indices is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.game_indices.length).to.be.above(0);
});

// TC_019: Kiểm tra xem Pokémon có held items hay không
pm.test("TC_019- Verify held items is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.held_items.length).to.be.above(0);
});

// TC_020: Kiểm tra xem Pokémon có sprites hay không
pm.test("TC_020- Verify sprites is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(Object.keys(jsonData.sprites).length).to.be.above(0);
});


pm.test("TC_021- Verify past types is not empty", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.past_types.length).to.be.above(0);
});

pm.test("TC_023-024 - Verify base_stat and effort data type", function () {
    const jsonData = pm.response.json();
    const statsArray = jsonData.stats;

    _.each(statsArray, (statItem) => {
        pm.expect(statItem.effort).to.be.a("number");
        pm.expect(statItem.base_stat).to.be.a("number");
    });
});
