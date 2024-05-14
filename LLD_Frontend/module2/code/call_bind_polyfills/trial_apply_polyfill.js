let myApply = function(requiredObject, paramArray){
    let functionToBeApplied = this;

    requiredObject.tempApplyFunction = functionToBeApplied;

    requiredObject.tempApplyFunction(...paramArray);

    delete requiredObject.tempApplyFunction;
}