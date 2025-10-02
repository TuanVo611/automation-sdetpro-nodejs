import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver {

    public lunch(): void {
        console.log("Launching iOS App");
    }
    public closeConnection(): void {
        console.log("Closing connection for iOS App");
    }

}