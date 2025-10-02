import DriverManager from "./DriverMananger";

let driverManager = new DriverManager();
let driver = driverManager.getDriver("android");
driver.lunch();
driver.closeConnection();