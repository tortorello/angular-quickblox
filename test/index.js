'use strict';

const expect = require('chai').expect,
    quickblox = require('../quickblox');

describe('#quickblox', function () {
    it('version', function () {
        expect(new quickblox.QuickBlox().version).to.equal('2.8.0');
    });
});