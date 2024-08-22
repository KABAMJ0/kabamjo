if (window.ApplePaySession) {
   var merchantIdentifier = 'example.com.store';
   var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
   promise.then(function (canMakePayments) {
      if (canMakePayments)
         // Display Apple Pay button here.
}); }
