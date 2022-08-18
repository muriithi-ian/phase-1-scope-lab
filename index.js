// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "unknown";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer(newLeastFavoriteCustomer) {
  leastFavoriteCustomer = newLeastFavoriteCustomer;
}
