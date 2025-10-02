import AndroidDriver from "./AndroidDriver";
import AppiumDriver from "./AppiumDriver";
import IOSDriver from "./IOSDiver";

export default class DriverManager {
    public getDriver(platform: string): AppiumDriver {
        switch (platform) {
            case "android":
                return new AndroidDriver();
            case "ios":
                return new IOSDriver();
            default:
                throw Error(`The platform ${platform} is not supported!!!`)
        }
    }
}