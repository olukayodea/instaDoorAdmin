export class ErrorCodes {
  constructor() {}
  "en" = {
    10001: "Unauthorized. NO users with the email and password combination was found",
    10002: "Unauthorized. This account has not been confirmed yet, please click on the confirmation link in the email sent",
    10003: "Not Acceptable. This account has been deactivated. PLease contact us at contactus@Instadoor.ca",
    10004: "Conflict. seems this account already exist, please login or reset your password to continue",
    10005: "Can not find traces of this account",
    10006: "An error occured validating this account; Invalid OTP",
    10007: "Internal Server Error",
    10008: "Not Found. An error occured retrieving this account",
    10009: "Unauthorized. invalid password",
    10010: "Service Unavailable",
    10011: "Your account is pending verification",
    10012: "Your account verification has been rejected, please verify again",
    10013: "Your account is yet to be verified",
    10018: "Unauthorized",
    10019: "Bad Request",
    10023: "We cannot change your password at this time, please confirm the OTP, if you believe this OTP is correct, please try again or contact the administrator",
    10024: "OTP has expired",
    10030: "Bad Request. Compulsory headers are missing",
    10040: "The uploaded file exceeds the mazimum upload file limit",
    10041: "The uploaded file was only partially uploaded, please re-upload file",
    10042: "Missing file, please check the uploaded file and try again",
    10043: "Missing a temporary folder, contact the website administrator",
    10044: "Failed to write file to disk, contact the administrator",
    10045: "a file upload error occured",
    10046: "the file exceed the maximum file size",
    11001: "You are logged in with an account not authorized to add any store, please contact the store administrator",
    11002: "You are logged in with an account not authorized to manage any store, please contact the store administrator",
    11003: "You are logged in with an account not authorized to add any store user, please contact the store administrator or store owner",
    11004: "Conflict. seems this account already exist and belongs to this store, Please create this account with another email address",
    11005: "NNot Implemented, An error occured while adding this user to the store",
    11006: "Not Implemented, An error occured while removing this store",
    11007: "No record found",
    11008: "Not authorizdd to list store users",
    11009: "You are logged in with an account not authorized to add any store category, please contact the store administrator",
    11010: "You are logged in with an account not authorized to retrieve store balance",
    13000: "An error occured while creating this order",
    13001: "An error occured while processing this order",
    13015: "An error occured while flagging this order",
    13002: "Can not find the order requested",
    13003: "You can not accept or reject this request again",
    13004: "You can only process or cancel this order",
    13005: "You can only cancel this order or mark it ready for pickup",
    13006: "This order has been cancelled",
    13007: "This order has been delivered",
    13008: "This order is already out for delivery",
    13009: "you can not process this order at this time",
    13010: "This order has been processed and awaiting pickup",
    13011: "Unrecorgnized order status",
    13012: "This order has been flagged",
    13013: "You can not perform this function on this order",
    13014: "Not authorizdd to perform actions on orders from this store",
    13016: "An error occured while creating this order, an item in your order is over the max weight limit",
    13017: "An error occured while creating this order, an item's pickup time in your order is farther the max distance limit",
    13018: "No payment autorization token present, please create one first",
    13019: "An error occured while adding payment authorization token",
    14000: "An error occured while adding this item to cart",
    14001: "An error occured while editting this item in cart",
    14002: "An error occured while clearing your cart",
    15003: "You can not retrieve the wallet entries at this time",
    15004: "You are not authorized to perform this action",
    14005: "You are not authorized to perform this action",
    19000: "Please login to continue",
    21000: "Your new password has been set, you can now login now",
    21001: "Store Added Successfully",
    21002: "User Added to Store Successfully",
    21003: "Inventory Item Added Successfully to Store",
    21004: "Cart Cleared Successfully",
    21005: "Your order has been placed Successfully",
    21006: "Your order has been cancelled Successfully",
    21007: "Order Cancelled Successfully",
    21008: "Order Modified Successfully",
    21009: "Order Item Removed Successfully"
  };
  "fr" = {};
}

export class RoleCOntrol {
  store: true | false;
  inventory: true | false;
  orders: true | false;
  wallet: true | false;
  users: true | false;
  payment: true | false;
}

export class Counts {
  current_page: number;
  max_rows_per_page: number;
  rows_on_current_page: number;
  total_page: number;
  total_rows: number;
}
  
export class Error {
  code: number;
  message: string;
}