var lock= new PatternLock('#patternHolder',{matrix:[4,4]});
var lock=new PatternLock('#patternHolder',{
    mapper: function(idx){
        return (idx%9) + 1;
    }
});