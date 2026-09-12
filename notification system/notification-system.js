"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class Notification {
//   abstract send(message: string): void
// }
class EmailNotification {
    send(message) {
        console.log(`Sending Email... ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending SMS... ${message}`);
    }
}
class PushNotification {
    send(message) {
        console.log(`Sending Push notification... ${message}`);
    }
}
const notifications = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];
for (const notification of notifications) {
    notification.send("Your order has been shipped");
}
//# sourceMappingURL=notification-system.js.map