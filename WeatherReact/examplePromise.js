function getTempCallback(location, callback){
  //generating call backs.
  callback(undefined, 99);
  callback('CityNotfound')
}

//manual callback.
getTempCallback('Toronto',  function(err, temp){
    if (err){
      console.log('error: ', err);
    }else {
      console.log('success', temp);
    }

});


function getTempPromise(location){
  return new Promise(function(resolve, reject){
    //if things go well, resolve
    //can only have one resolve and one reject, it seems.
    setTimeout(function(){
      resolve(90);
      console.log('between resolve and reject. ');
      reject('City not found');
     }, 10);

  });
};

//this thing returns promise.
getTempPromise('Toronto').then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err)
});


////challenge.

function addPromise(a, b){
  //resolve if both are number.
  return new Promise(function(resolve, reject){
    if (typeof a == "number" && typeof b == "number"){
      resolve(a+b);
    }
    reject("one or both are not numbers. ");
  });
};

addPromise(2, 3).then(function(result){
  console.log("correct! " + result);
}, function(err){
  console.log(err);
});
