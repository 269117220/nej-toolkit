var should = require('should'),
    Processor = require('../../../lib/deploy.js');

describe('deploy',function(){

    it('should be ok for deploy project with html',function(done){
        this.timeout(20000);
        new Processor({
            file:__dirname+'/release.html.conf',
            done:function(){
                done();
            }
        });
    });

});