// export function AutoUnsubscribe(blackList = []) {
//
//   return function (constructor) {
//     const original = constructor.prototype.ngOnDestroy;
//
//     constructor.prototype.ngOnDestroy = function () {
//       for (let prop in this) {
//         const property = this[prop];
//         if (!blackList.includes(prop)) {
//           if (property && (typeof property.unsubscribe === "function")) {
//             property.unsubscribe();
//           }
//         }
//       }
//       original && typeof original === 'function' && original.apply(this, arguments);
//     };
//   }
//
// }

// https://netbasal.com/automagically-unsubscribe-in-angular-4487e9853a88.
// https://github.com/NetanelBasal/ngx-auto-unsubscribe

const isFunction = fn => typeof fn === "function";

const doUnsubscribe = subscription => {
  subscription &&
  isFunction(subscription.unsubscribe) &&
  subscription.unsubscribe();
};

const doUnsubscribeIfArray = subscriptionsArray => {
  Array.isArray(subscriptionsArray) &&
  subscriptionsArray.forEach(doUnsubscribe);
};

export function AutoUnsubscribe(
  {blackList = [], arrayName = "", event = "ngOnDestroy"} = {}) {

  return function (constructor: Function) {
    const original = constructor.prototype[event];
    constructor.prototype[event] = function () {
      isFunction(original) && original.apply(this, arguments);
      if (arrayName) {
        doUnsubscribeIfArray(this[arrayName]);
        return;
      }
      for (let propName in this) {
        if (blackList.includes(propName)) continue;
        const property = this[propName];
        doUnsubscribe(property);
      }
    };
  };
}
